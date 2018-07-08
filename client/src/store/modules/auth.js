/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import axios from 'axios'
var config = {};

const state = { token: localStorage.getItem('auth-user-token') || '', status: '', hasLoadedOnce: false }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}

const actions = {
  [AUTH_REQUEST]: ({commit, dispatch}, user) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_REQUEST)

      //axios.post('http://localhost:3001/api/authenticate', user, config)
      axios.post('/api/authenticate', user, config)
      .then(resp => {
        localStorage.setItem('auth-user-token', resp.data.data.token)
        axios.defaults.headers.common['bearer'] = localStorage.getItem('auth-user-token')
        commit(AUTH_SUCCESS, resp.data.data)
        resolve(resp.data.data)
      })
      .catch(err => {
        commit(AUTH_ERROR, err)
        localStorage.removeItem('auth-user-token')
        reject(err)
      })
    })
  },
  [AUTH_LOGOUT]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(AUTH_LOGOUT)
      localStorage.removeItem('auth-user-token')
      resolve()
    })
  }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  [AUTH_ERROR]: (state) => {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
