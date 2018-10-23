webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_users__ = __webpack_require__(51);




__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const debug = "production" !== 'production';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    auth: __WEBPACK_IMPORTED_MODULE_2__modules_auth__["a" /* default */],
    users: __WEBPACK_IMPORTED_MODULE_3__modules_users__["a" /* default */]
  },
  strict: debug
}));

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AUTH_REQUEST = 'AUTH_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["c"] = AUTH_REQUEST;

const AUTH_SUCCESS = 'AUTH_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["d"] = AUTH_SUCCESS;

const AUTH_ERROR = 'AUTH_ERROR';
/* harmony export (immutable) */ __webpack_exports__["a"] = AUTH_ERROR;

const AUTH_LOGOUT = 'AUTH_LOGOUT';
/* harmony export (immutable) */ __webpack_exports__["b"] = AUTH_LOGOUT;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_AppNav__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_SideNav__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: "App",
  data: () => ({
    drawer: true

  }),
  components: {
    "v-app-nav": __WEBPACK_IMPORTED_MODULE_0__components_AppNav__["a" /* default */],
    "v-side-nav": __WEBPACK_IMPORTED_MODULE_1__components_SideNav__["a" /* default */]
  },
  computed: {
    isLoggedin() {
      return __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.isAuthenticated;
    },
    comp2() {}
  },
  methods: {
    OpenSideNav() {
      this.$refs.nav.Open();
    },
    CloseSideNav() {
      this.SideNav.Close();
    }
  },
  watch: {
    drawer: function () {
      this.OpenSideNav();
    }
  }
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({

  name: "v-appnav",

  data() {
    return {
      open: true,
      items: ['All', 'משתמשים', 'קבוצות', 'משימות'],
      msg: ""
    };
  },
  components: {},
  computed: {
    isLoggedin() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].getters.isAuthenticated;
    }
  },
  methods: {

    OpenSideNav() {
      this.open = true;
      this.$emit('clicked-open-side-nav');
    }
  }
});

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const USERS_SEARCH_REQUEST = 'USERS_SEARCH_REQUEST';
/* harmony export (immutable) */ __webpack_exports__["b"] = USERS_SEARCH_REQUEST;

const USERS_SEARCH_SUCCESS = 'USERS_SEARCH_SUCCESS';
/* harmony export (immutable) */ __webpack_exports__["c"] = USERS_SEARCH_SUCCESS;

const USERS_SEARCH_ERROR = 'USERS_SEARCH_ERROR';
/* harmony export (immutable) */ __webpack_exports__["a"] = USERS_SEARCH_ERROR;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: () => ({
    drawer: true,
    admins: [['Management', 'people_outline'], ['Settings', 'settings']],
    cruds: [['Create', 'add'], ['Read', 'insert_drive_file'], ['Update', 'update'], ['Delete', 'delete']]
  }),
  methods: {
    Open() {
      this.drawer = true;
    },
    Close() {
      this.drawer = false;
    }
  }

});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'component-name',
  props: {
    prop1: String,
    prop2: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      data1: '',
      data2: ''
    };
  },
  computed: {
    comp1() {},
    comp2() {}
  },
  methods: {
    func1() {},
    func2() {}
  },
  watch: {
    watch1(newVal, oldVal) {},
    Watch2(newVal, oldVal) {}
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {}

});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions_users__ = __webpack_require__(16);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'users',
  data() {
    return {
      dialog: false,
      headers: [{ text: 'user name', value: 'name' }, { text: 'approved', value: 'name' }, { text: 'created on', value: 'date' }, { text: 'last login', value: 'date' }]
    };
  },
  created() {
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_actions_users__["b" /* USERS_SEARCH_REQUEST */]).then(() => {
      console.log("rows fatched");
    }).catch(function (e) {
      console.log(e);
    });
  },
  computed: {
    rows() {
      return this.$store.state.users.rows;
    }
  },

  methods: {}
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions_auth__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login: function () {
      const { username, password } = this;
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_actions_auth__["c" /* AUTH_REQUEST */], { username, password }).then(() => {
        this.$router.push({ name: 'users' });
      }).catch(function (e) {
        console.log(e);
      });
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_actions_auth__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'logout',
  data() {
    return {};
  },
  methods: {
    logout: function () {
      //const { username, password } = this
      this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_0__store_actions_auth__["b" /* AUTH_LOGOUT */]).then(() => {
        this.$router.push('/login');
      });
    }
  },

  mounted() {
    console.log("mounted");
    this.logout();
  }

});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuetify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuetify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vuetify_dist_vuetify_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(3);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuetify___default.a, { rtl: true });







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
//Vue.config.ignoredElements = ['hamburger',]
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_4__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */] }
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e0d06f0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(55);
function injectStyle (ssrContext) {
  __webpack_require__(29)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2e0d06f0_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppNav_vue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b85ded5_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppNav_vue__ = __webpack_require__(52);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b85ded5_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* eslint-disable promise/param-names */


var config = {};

const state = { token: localStorage.getItem('auth-user-token') || '', status: '', hasLoadedOnce: false };

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
};

const actions = {
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* AUTH_REQUEST */]]: ({ commit, dispatch }, user) => {
    return new Promise((resolve, reject) => {
      commit(__WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* AUTH_REQUEST */]);

      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.post('http://localhost:3001/api/authenticate', user, config)
      //axios.post('/api/authenticate', user, config)
      .then(resp => {
        localStorage.setItem('auth-user-token', resp.data.data.token);
        commit(__WEBPACK_IMPORTED_MODULE_0__actions_auth__["d" /* AUTH_SUCCESS */], resp.data.data);
        resolve(resp.data.data);
      }).catch(err => {
        commit(__WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AUTH_ERROR */], err);
        localStorage.removeItem('auth-user-token');
        reject(err);
      });
    });
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["b" /* AUTH_LOGOUT */]]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(__WEBPACK_IMPORTED_MODULE_0__actions_auth__["b" /* AUTH_LOGOUT */]);
      localStorage.removeItem('auth-user-token');
      resolve();
    });
  }
};

const mutations = {
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["c" /* AUTH_REQUEST */]]: state => {
    state.status = 'loading';
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["d" /* AUTH_SUCCESS */]]: (state, resp) => {
    state.status = 'success';
    state.token = resp.token;
    state.hasLoadedOnce = true;
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["a" /* AUTH_ERROR */]]: state => {
    state.status = 'error';
    state.hasLoadedOnce = true;
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_auth__["b" /* AUTH_LOGOUT */]]: state => {
    state.token = '';
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  getters,
  actions,
  mutations
});

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_users__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* eslint-disable promise/param-names */



var config = { tester: 'noneyet' };

const state = {
  status: '',
  lastUpdate: '',
  numOfRows: 0,
  rows: []
};

const getters = {};

const actions = {
  [__WEBPACK_IMPORTED_MODULE_0__actions_users__["b" /* USERS_SEARCH_REQUEST */]]: ({ commit, dispatch }) => {
    return new Promise((resolve, reject) => {
      commit(__WEBPACK_IMPORTED_MODULE_0__actions_users__["b" /* USERS_SEARCH_REQUEST */]);
      //console.log("config:" + config.bearer)
      //axios.get('http://localhost:3001/api/users', {headers: {Authorization: config}})
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.defaults.headers.common['bearer'] = localStorage.getItem('auth-user-token');
      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.create({ baseURL: 'http://localhost:3001/api/' }).get('users').then(resp => {
        // insert indexedDB 

        commit(__WEBPACK_IMPORTED_MODULE_0__actions_users__["c" /* USERS_SEARCH_SUCCESS */], resp);
        resolve(resp);
      }).catch(err => {
        commit(__WEBPACK_IMPORTED_MODULE_0__actions_users__["a" /* USERS_SEARCH_ERROR */], err);
        reject(err);
      });
    });
  }
};

const mutations = {
  [__WEBPACK_IMPORTED_MODULE_0__actions_users__["b" /* USERS_SEARCH_REQUEST */]]: state => {
    state.status = 'loading';
    config = { "bearer": localStorage.getItem('auth-user-token') };
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_users__["c" /* USERS_SEARCH_SUCCESS */]]: (state, resp) => {
    state.rows = resp.data;
    state.status = 'success';
  },
  [__WEBPACK_IMPORTED_MODULE_0__actions_users__["a" /* USERS_SEARCH_ERROR */]]: (state, err) => {
    state.status = 'error';
    console.log("err:" + err);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  state,
  getters,
  actions,
  mutations
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-card',{attrs:{"color":"grey lighten-4","flat":"","height":"200px"}},[_c('v-toolbar',{attrs:{"color":"grey darken-1","dark":""}},[_c('v-toolbar-side-icon',{on:{"click":_vm.OpenSideNav}}),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"icon":""}},[_c('v-icon',[_vm._v("search")])],1),_vm._v(" "),_c('v-btn',{attrs:{"icon":""}},[_c('v-icon',[_vm._v("favorite")])],1),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-menu',{attrs:{"nudge-width":100}},[_c('v-toolbar-title',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-btn',{attrs:{"icon":""}},[_c('v-icon',[_vm._v("more_vert")])],1)],1),_vm._v(" "),_c('v-list',[_vm._l((_vm.items),function(item){return _c('v-list-tile',{key:item},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(item)}})],1)}),_vm._v(" "),_c('router-link',{attrs:{"to":"/about"}},[_c('v-list-tile-title',[_vm._v("אודות")])],1),_vm._v(" "),_c('router-link',{attrs:{"to":"/services"}},[_vm._v("שירותים")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/contact"}},[_vm._v("צור קשר")]),_vm._v(" "),_c('router-link',{attrs:{"to":"/logout"}},[_c('v-list-tile-title',[_vm._v("יציאה")])],1)],2)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SideNav_vue__ = __webpack_require__(17);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed0f6242_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideNav_vue__ = __webpack_require__(54);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SideNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ed0f6242_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SideNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{attrs:{"right":"","app":""},model:{value:(_vm.drawer),callback:function ($$v) {_vm.drawer=$$v},expression:"drawer"}},[_c('v-list',[_c('v-list-tile',[_c('v-list-tile-action',{on:{"click":_vm.Close}},[_c('v-icon',[_vm._v("close")])],1),_vm._v(" "),_c('v-list-tile-title',[_vm._v("תפריט")])],1),_vm._v(" "),_c('v-list-group',{attrs:{"prepend-icon":"account_circle","value":"true"}},[_c('v-list-tile',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-list-tile-title',[_vm._v("Users")])],1),_vm._v(" "),_c('v-list-group',{attrs:{"no-action":"","sub-group":"","value":"true"}},[_c('v-list-tile',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-list-tile-title',[_vm._v("Admin")])],1),_vm._v(" "),_vm._l((_vm.admins),function(admin,i){return _c('v-list-tile',{key:i,on:{"click":function($event){}}},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(admin[0])}}),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"textContent":_vm._s(admin[1])}})],1)],1)})],2),_vm._v(" "),_c('v-list-group',{attrs:{"sub-group":"","no-action":""}},[_c('v-list-tile',{attrs:{"slot":"activator"},slot:"activator"},[_c('v-list-tile-title',[_vm._v("Actions")])],1),_vm._v(" "),_vm._l((_vm.cruds),function(crud,i){return _c('v-list-tile',{key:i,on:{"click":function($event){}}},[_c('v-list-tile-title',{domProps:{"textContent":_vm._s(crud[0])}}),_vm._v(" "),_c('v-list-tile-action',[_c('v-icon',{domProps:{"textContent":_vm._s(crud[1])}})],1)],1)})],2)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-app-nav',{on:{"clicked-open-side-nav":_vm.OpenSideNav}}),_vm._v(" "),_c('v-layout',{attrs:{"row":""}},[_c('v-side-nav',{ref:"nav"}),_vm._v(" "),_c('button',{on:{"click":_vm.OpenSideNav}},[_vm._v("test")]),_vm._v(" "),_c('div',[_c('router-view')],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Main__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_UsersList__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_Login__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_Logout__ = __webpack_require__(66);









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

const ifNotAuthenticated = (to, from, next) => {
  if (!__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */].getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
  //document.location = '/login'
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    name: 'Main',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_Main__["a" /* default */],
    beforeEnter: ifAuthenticated

  }, {
    path: '/users',
    name: 'users',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_UsersList__["a" /* default */],
    beforeEnter: ifAuthenticated
  }, {
    path: '/login',
    name: 'login',
    component: __WEBPACK_IMPORTED_MODULE_5__pages_Login__["a" /* default */],
    beforeEnter: ifNotAuthenticated
  }, {
    path: '/logout',
    name: 'logout',
    component: __WEBPACK_IMPORTED_MODULE_6__pages_Logout__["a" /* default */],
    beforeEnter: ifAuthenticated
  }]
}));

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__ = __webpack_require__(18);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee2fb6f2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__ = __webpack_require__(60);
function injectStyle (ssrContext) {
  __webpack_require__(59)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ee2fb6f2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Main_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ee2fb6f2_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    main route\n\t")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UsersList_vue__ = __webpack_require__(19);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51165d9e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UsersList_vue__ = __webpack_require__(63);
function injectStyle (ssrContext) {
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-51165d9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UsersList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_51165d9e_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UsersList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"fluid":""}},[_c('v-layout',{attrs:{"row":"","wrap":""}},[_c('v-flex',{attrs:{"d-flex":"","xs12":"","sm12":"","md12":""}},[_c('div',[_c('v-toolbar',{attrs:{"flat":"","color":"white"}},[_c('v-toolbar-title',[_vm._v("My CRUD")]),_vm._v(" "),_c('v-divider',{staticClass:"mx-2",attrs:{"inset":"","vertical":""}}),_vm._v(" "),_c('v-spacer')],1),_vm._v(" "),_c('v-data-table',{staticClass:"elevation-5",attrs:{"headers":_vm.headers,"items":_vm.rows,"hide-actions":""},scopedSlots:_vm._u([{key:"items",fn:function(props){return [_c('td',[_vm._v(_vm._s(props.item.user_id))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.is_approved))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.create_date))]),_vm._v(" "),_c('td',{staticClass:"text-xs-right"},[_vm._v(_vm._s(props.item.last_login))]),_vm._v(" "),_c('td',{staticClass:"justify-center layout px-0"},[_c('v-icon',{staticClass:"mr-2",attrs:{"small":""},on:{"click":function($event){}}},[_vm._v("\n                    edit\n                ")]),_vm._v(" "),_c('v-icon',{attrs:{"small":""},on:{"click":function($event){}}},[_vm._v("\n                    delete\n                ")])],1)]}}])},[_c('template',{slot:"no-data"},[_c('v-btn',{attrs:{"color":"primary"},on:{"click":function($event){}}},[_vm._v("Reset")])],1)],2)],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__(20);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b773f2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__(65);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_57b773f2_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-app',[_c('v-content',[_c('v-container',{attrs:{"fill-height":""}},[_c('v-layout',{attrs:{"align-center":"","justify-center":""}},[_c('v-flex',[_c('v-card',[_c('v-form',{on:{"submit":function($event){$event.preventDefault();return _vm.login($event)}}},[_c('v-toolbar',{attrs:{"dark":"","color":"primary"}},[_c('v-toolbar-title',[_vm._v("Login form")])],1),_vm._v(" "),_c('v-card-text',[_c('v-text-field',{attrs:{"prepend-icon":"person","name":"username","label":"username","type":"text"},model:{value:(_vm.username),callback:function ($$v) {_vm.username=$$v},expression:"username"}}),_vm._v(" "),_c('v-text-field',{attrs:{"prepend-icon":"lock","name":"password","label":"Password","type":"password"},model:{value:(_vm.password),callback:function ($$v) {_vm.password=$$v},expression:"password"}})],1),_vm._v(" "),_c('v-card-actions',[_c('v-spacer'),_vm._v(" "),_c('v-btn',{attrs:{"type":"submit","color":"primary"}},[_vm._v("Login")])],1)],1)],1)],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__ = __webpack_require__(21);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53c8867d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__ = __webpack_require__(68);
function injectStyle (ssrContext) {
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53c8867d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_53c8867d_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n  Logout\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
],[22]);
//# sourceMappingURL=app.2c054a7c3cdb11bdd287.js.map