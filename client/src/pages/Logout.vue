<template>
  <div>
    Logout
  </div>
</template>


<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
  }
</style>

<script>
  import {AUTH_LOGOUT} from '../store/actions/auth'

  export default {
    name: 'logout',
    data () {
      return {
        
      }
    },
    methods: {
      logout: function () {
        //const { username, password } = this
        this.$store.dispatch(AUTH_LOGOUT).then(() => {
          this.$router.push('/login')
        })
      }
    },

    
    mounted() {
      console.log("mounted");
      this.logout();
    },
  
  }
</script>
