import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'


import Main from "../pages/Main";
import UsersList from "../pages/UsersList";
import Login from "../pages/Login";
import Logout from "../pages/Logout";


Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  console.log("after ifNotAuthenticated")
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  console.log("ifAuthenticated")
  if (store.getters.isAuthenticated) {
    console.log("in ifAuthenticated")
    next()
    return
  }
  console.log("after ifAuthenticated")
  next('/login')
  //document.location = '/login'
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      beforeEnter: ifAuthenticated
      
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      beforeEnter: ifAuthenticated
    }
  ]
})
