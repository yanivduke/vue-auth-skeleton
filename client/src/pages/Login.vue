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


<style>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
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
