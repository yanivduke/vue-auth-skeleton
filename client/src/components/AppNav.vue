<template>
  <v-card
    color="grey lighten-4"
    flat
    height="200px"
  >
    <v-toolbar color="grey darken-1" dark>
      <v-hamburger
        :stroke='2'
        :gap='5'
        color='#192a35'
        :open.sync='open'>
      </v-hamburger>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-spacer></v-spacer>
      <v-menu :nudge-width="100">
        <v-toolbar-title slot="activator">
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar-title>
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item"
          >
            <v-list-tile-title v-text="item"></v-list-tile-title>
          </v-list-tile>
          <router-link to="/about"><v-list-tile-title>אודות</v-list-tile-title></router-link>
          <router-link to="/services">שירותים</router-link>
          <router-link to="/contact">צור קשר</router-link>
          <router-link to="/logout"><v-list-tile-title>יציאה</v-list-tile-title></router-link>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>

import store from '../store'
import 'vue-hamburger/index.css'
import hamburger from 'vue-hamburger'

export default {

  name: "v-appnav",
  
  data() {
    return {
      open: false,
      items: [
        'All', 'משתמשים', 'קבוצות', 'משימות'
      ],
      msg: ""
    };
  },
  components: {'v-hamburger': hamburger},
  computed: {
    isLoggedin() {
      return store.getters.isAuthenticated
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

