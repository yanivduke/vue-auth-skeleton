<template>
  <v-app>
    <v-content>
      <v-container fill-height>
        <v-layout align-center justify-center>
          <v-flex>
            <v-card>
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
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>
<!--
<template>
  <div>
    Login
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
      <label>User name</label>
      <input v-model="username" type="text"/>
      <label>Password</label>
      <input v-model="password" type="password"/>
      <hr/>
      <button type="submit">Login</button>
    </form>
  </div>
</template>
-->


<style>

</style>

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
        const { username, password } = this
        console.log("usser" + username)
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
