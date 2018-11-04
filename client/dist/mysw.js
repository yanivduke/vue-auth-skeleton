importScripts("/precache-manifest.5a7b91587db23aa702acf1be5c741529.js", "https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

console.log("my service worker")

importScripts('/js/idb.js');

workbox.skipWaiting();
workbox.clientsClaim();

// temporary workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=823392
self.addEventListener('fetch', (e) => {
  if (e.request.cache === 'only-if-cached' && e.request.mode !== 'same-origin') {
    return;
  }
})

self.addEventListener('message', (event) => {
  if (!event.data){
    return;
  }
  console.log('message accepted on SW: ' + event.data);
  switch (event.data) {
    case 'sw-activate':
      //console.log('SW message: ' + event.data);
      event.ports[0].postMessage("SW Says 'I'm ready & activated!");
      break;
    default:
      // NOOP
      break;
  }
});

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  workbox.strategies.networkFirst({
    cacheName: 'images',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.cacheFirst({
    cacheName: 'static',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  new RegExp('/'),
  workbox.strategies.cacheFirst({
    cacheName: 'html',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20,
        maxAgeSeconds: 1 * 24 * 60 * 60, // 1 Day
      }),
    ],
  }),
);

workbox.routing.registerRoute(new RegExp('http://localhost:3001/api/.*'), 
  ({url, event, params}) => {
    idbKeyVal.get('osUsers', "{type:'json', entity:'users', index:0, size:0, total:0, searchParam:{}}")
    .then((localdata) => {
      if (typeof localdata === "undefined") {
        fetch(event.request)
        .then((resp) => resp.json()
        .then((responseData) => {
          console.log("SW fatch routing users: " + responseData)
          //{type:'json', entity:'users', index:0, size:0, total:0, searchParam:{}}
          idbKeyVal.set('osUsers', "{type:'json', entity:'users', index:0, size:0, total:0, searchParam:{}}", responseData)
            .then(()=>{
              console.log("idbKeyVal routing 'users set'")
              return new Promise((resolve, reject) => {
                resolve(localdata)
              })
            })
            .catch(err => {
              console.log("SW fetch err: " + err)
              return new Promise((resolve, reject) => {
                reject(err)
              })
            })
        }))
      } else {
        console.log("SW remember users from idb: " + localdata)
        return new Promise((resolve, reject) => {
          resolve(localdata)
        })
      }
    })
    .catch(err => {
      return new Promise((resolve, reject) => {
        reject(err)
      })
    })
  },
  'GET'
);

workbox.routing.registerRoute(/.*(?:googleapis)\.com.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'googleapis-cache'
  })
);

workbox.routing.registerRoute(/.*(?:gstatic)\.com.*$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'gstatic-cache'
  })
);

const idbKeyVal = {

  get(dbObjectStore, key) {
    return idb.open('uis-db22', 1).then(db => {
      return db.transaction(dbObjectStore)
        .objectStore(dbObjectStore).get(key);
    })
    .catch(err => {
      console.log('err on get: ' + err)
      throw err
    });
  },
  set(dbObjectStore, key, val) {
    return idb.open('uis-db22', 1).then(db => {
      const tx = db.transaction(dbObjectStore, 'readwrite');
      tx.objectStore(dbObjectStore).put(val, key);
      return tx.complete;
    }).catch(err => {
      console.log('err on set: ' + err)
      throw err
    });
  },
  delete(dbObjectStore, key) {
    return idb.open('uis-db22', 1).then(db => {
      const tx = db.transaction(dbObjectStore, 'readwrite');
      tx.objectStore(dbObjectStore).delete(key);
      return tx.complete;
    }).catch(err => {
      console.log('err on delete: ' + err)
      throw err
    });
  },
  clear(dbObjectStore) {
    return idb.open('uis-db22', 1).then(db => {
      const tx = db.transaction(dbObjectStore, 'readwrite');
      tx.objectStore(dbObjectStore).clear();
      return tx.complete;
    }).catch(err => {
      console.log('err on clear: ' + err)
      throw err
    });
  },
  keys(dbObjectStore) {
    return idb.open('uis-db22', 1).then(db => {
      const tx = db.transaction(dbObjectStore);
      const keys = [];
      const store = tx.objectStore(dbObjectStore);

      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });

      return tx.complete.then(() => keys);
    });
  }
}
