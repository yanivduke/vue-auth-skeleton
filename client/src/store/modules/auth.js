/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_KEEPALIVE } from '../actions/auth'

import {idbKeyVal} from '../../idbPromise'
import {sendMsg} from '../../plugins/registerServiceWorker'

const state = { token: '', status: '', hasLoadedOnce: false  }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      let data = JSON.stringify(user);
      let postConfig = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'include', // include, same-origin, *omit
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: data,
      }

      commit(AUTH_REQUEST)

      fetch('http://localhost:3001/api/authenticate/', postConfig)
      //fetch('/api/authenticate/', postConfig)
      .then((resp) => resp.json().then((respJson) => {
        sendMsg('sw-activate', (retMsg) => {
          console.log(retMsg);
          idbKeyVal.set('osAuth', 'auth-user-token', respJson.data.token)
          .then(() => {
            commit(AUTH_SUCCESS, respJson)
            resolve(respJson.data)
          })
        })
      }))
      .catch(err => {
        idbKeyVal.delete('osAuth', 'auth-user-token')
        .then(() => {
          commit(AUTH_ERROR, err)
          reject(err)
        })
        .catch(err => {
          idbKeyVal.clear('osAuth')
          .then(()=>{
            commit(AUTH_ERROR, err)
            reject(err)
          })
          .catch(err => {
            commit(AUTH_ERROR, err)
            reject(err)
          })
        })
      })
    })
  },
  [AUTH_LOGOUT]: ({commit}) => {
    return new Promise((resolve, reject) => {
      idbKeyVal.delete('osAuth', 'auth-user-token')
      .then(()=>{
        commit(AUTH_LOGOUT)
        resolve()
      })
    })
  },
  [AUTH_KEEPALIVE]: ({commit}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)
      console.log('inside AUTH_KEEPALIVE')
      idbKeyVal.get('osAuth', 'auth-user-token')
      .then((tt) => {
        console.log('inside idbKeyVal.get: ' + tt)
        commit(AUTH_KEEPALIVE, tt)
        resolve(tt)
      })
      .catch(err => {
        idbKeyVal.delete('osAuth', 'auth-user-token')
        .then(()=>{
          commit(AUTH_ERROR, err)
          reject(err)
        })
        .catch(err => {
          idbKeyVal.clear('osAuth')
          .then(()=>{
            commit(AUTH_ERROR, err)
            reject(err)
          })
          .catch(err => {
            commit(AUTH_ERROR, err)
            reject(err)
          })
        })
      })
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.data.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  },
  [AUTH_KEEPALIVE]: (state, token) => {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
