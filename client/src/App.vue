<template>
  <div id="app">
    <v-flex-container direction="column">
      <v-header></v-header>
      <v-app-nav v-if="isLoggedin"></v-app-nav>
      <div>
        <router-view></router-view>
      </div>
      <v-footer></v-footer>
    </v-flex-container>
  </div>
</template>

<script>
import FlexContainer from "./components/FlexContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppNav from "./components/AppNav";

import store from './store'

export default {
  name: "App",
  components: {
    "v-flex-container": FlexContainer,
    "v-footer": Footer,
    "v-app-nav":AppNav,
    "v-header": Header,

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
#app {
  display: flex;
}
</style>
