<template>
  <v-app>
    <v-app-nav></v-app-nav>
    <v-side-nav></v-side-nav>
    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav";
import SideNav from "./components/SideNav";
import store from './store'

export default {
  name: "App",
  components: {
    "v-app-nav":AppNav,
    "v-side-nav":SideNav,
  },
  computed: {
    isLoggedin() {
      return store.getters.isAuthenticated
    },
    comp2() {}
  },
};
</script>

<style>

</style>
