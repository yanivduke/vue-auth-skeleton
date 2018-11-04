/* eslint-disable promise/param-names */
import {USERS_SEARCH_REQUEST, USERS_SEARCH_SUCCESS, USERS_SEARCH_ERROR} from '../actions/users'

import {idbKeyVal} from '../../idbPromise'

import router from '../../router'

var config = {tester: 'noneyet'};

const state = { 
  status: '',
  lastUpdate: '',
  numOfRows: 0,
  rows: []
}

const getters = {
  
}

const actions = {
  [USERS_SEARCH_REQUEST]: ({commit, dispatch}) => {
    return new Promise((resolve, reject) => {
      commit(USERS_SEARCH_REQUEST)

      idbKeyVal.get('osAuth', 'auth-user-token')
      .then((token) => {
        fetch('http://localhost:3001/api/users', {
        //fetch('/api/users', {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          //credentials: "same-origin", // include, same-origin, *omit
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "bearer": token,
          }
        })
        .then((resp) =>  {
          commit(USERS_SEARCH_SUCCESS, resp)
          resolve(resp)
        })
        .catch(err => {
          commit(USERS_SEARCH_ERROR, err)
          reject(err)
        })
      })
      .catch(err => {
        commit(USERS_SEARCH_ERROR, err)
        reject(err)
      })
    })
  },
}

const mutations = {
  [USERS_SEARCH_REQUEST]: (state) => {
    state.status = 'loading'
    config = { "bearer": '' };
  },
  [USERS_SEARCH_SUCCESS]: (state, resp) => {
    resp.json().then((responseData) => {
    state.rows = responseData;
    state.status = 'success'
    })
  },
  [USERS_SEARCH_ERROR]: (state, err) => {
    state.status = 'error'
    if(err.response.status=='401') {

      state.token = ''
      router.push('/logout')
    }
    console.log("err: " + err + " error.response.status: " + err.response.status)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
