'use strict';
import { register } from 'register-service-worker'

const sendMsg = async function(msg, handleChannelMessage) {
  navigator.serviceWorker.ready
  .then(async function(reg) {
    var channel = new MessageChannel();
    channel.port1.onmessage = function(e) {
      handleChannelMessage(e.data);
    }
    var mySW = reg.active;
    await mySW.postMessage(msg, [channel.port2])
  })
  .catch(function(err) {
    // err set up a message channel to communicate with the SW
    console.log(' sending msssage err: ' + err);
  })
}

const reg = function() {
  console.log('reg ervice worker starts.')
  
  register(`${process.env.BASE_URL}mysw.js`, {
    ready () {
      console.log('service worker ready.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
export {reg, sendMsg}