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
        this.$store.dispatch(AUTH_REQUEST, { username, password }
        ).then(() => {
          this.$router.push({ name: 'users' })
        }).catch(function(e) {
          console.log(e);
        })
      }
    }
  }
</script>
