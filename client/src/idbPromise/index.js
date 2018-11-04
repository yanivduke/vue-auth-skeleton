'use strict';
import idb from 'idb'

const init = function() {
  if (!('indexedDB' in window)) {
    console.log('This browser does not support IndexedDB');
    return;
  }

  console.log('idb create db structure - out')
    idb.open('uis-db22', 1, function(upgradeDb) {
    console.log('idb create db structure - in')
    console.log('making a new objects - start');
    if (!upgradeDb.objectStoreNames.contains('osUsers')) {
      upgradeDb.createObjectStore('osUsers');
    }
    if (!upgradeDb.objectStoreNames.contains('osAuth')) {
      upgradeDb.createObjectStore('osAuth', {autoIncrement: true});
    }
    if (!upgradeDb.objectStoreNames.contains('osQ')) {
      upgradeDb.createObjectStore('osQ', {autoIncrement: true});
    }
    console.log('making a new objects - end');
  });
}

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
export {init, idbKeyVal}
  