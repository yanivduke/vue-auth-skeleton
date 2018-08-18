<template>
  <v-app>
    <v-app-nav @clicked-open-side-nav=OpenSideNav></v-app-nav>
    <v-layout row>
      
      <v-side-nav ref="nav"></v-side-nav>
      <button @click="OpenSideNav">test</button>
      <div>
        <router-view></router-view>
      </div>
    </v-layout>
  </v-app>
</template>

<script>
import AppNav from "./components/AppNav";
import SideNav from "./components/SideNav";
import store from './store'

export default {
  name: "App",
  data: () => ({
    drawer: true,
      
  }),
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
  methods:
  {
    OpenSideNav() {
      this.$refs.nav.Open();
    },
    CloseSideNav() {
      this.SideNav.Close();
    }
  },
  watch: {
    drawer:function() {
      this.OpenSideNav();
    },
  },
};
</script>

<style>

</style>
