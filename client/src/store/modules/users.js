/* eslint-disable promise/param-names */
import {USERS_SEARCH_REQUEST, USERS_SEARCH_SUCCESS, USERS_SEARCH_ERROR} from '../actions/users'
import axios from 'axios'

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
      //console.log("config:" + config.bearer)
      //axios.get('http://localhost:3001/api/users', {headers: {Authorization: config}})
      axios.defaults.headers.common['bearer'] = localStorage.getItem('auth-user-token')
      axios.create({ baseURL: 'http://localhost:3001/api/'}).get('users')
      .then(resp => {
        // insert indexedDB 
        
        commit(USERS_SEARCH_SUCCESS, resp)
        resolve(resp)
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
    config = { "bearer": localStorage.getItem('auth-user-token') };
  },
  [USERS_SEARCH_SUCCESS]: (state, resp) => {
    state.rows = resp.data;
    state.status = 'success'

  },
  [USERS_SEARCH_ERROR]: (state, err) => {
    state.status = 'error'
    console.log("err:" + err)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
