<template>
  <v-app>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about" >About</router-link> |
      <router-link to="/register" v-if="!isLogin">Register</router-link> |
      <router-link to="/login"  v-if="!isLogin">Login</router-link>
       <router-link to="/view" v-if="isLogin">View User</router-link>
      <v-btn color="grey" v-if="isLogin" @click='logout'>Logout</v-btn>
    </nav>
      <router-view/>
  </v-app>
</template>
<script>
  export default {
    mounted(){
      const isLoggedIn = localStorage.getItem('isLogin');
      this.isLogin =isLoggedIn && isLoggedIn == '1';  
    },
    data() {
      return{
        isLogin:false
      }
    },
    methods: {
      logout() {
        this.isLogin= false;
        localStorage.setItem('isLogin',0);
        console.log(localStorage.getItem('isLogin'));
        this.$router.go();
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: black;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
