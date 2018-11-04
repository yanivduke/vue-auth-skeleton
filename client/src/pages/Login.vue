<template>
    
  <v-form @submit.prevent="login">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-text-field v-model="username" prepend-icon="person" name="username" label="username" type="text"></v-text-field>
      <v-text-field v-model="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn type="submit" color="primary">Login</v-btn>
    </v-card-actions>
  </v-form>
          
</template>

<script>
  import {AUTH_REQUEST} from '../store/actions/auth'

  export default {
    name: 'login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login: function () {
        console.log("button pushed");
        const { username, password } = this
        this.$store.dispatch(AUTH_REQUEST, { username, password }
        ).then(() => {
          this.$router.push({ name: 'Main' })
        }).catch(function(e) {
          console.log(e);
        })
      }
    }
  }
</script>
