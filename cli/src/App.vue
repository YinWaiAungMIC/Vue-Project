<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
     <div class="container"> 
  <router-link class="navbar-brand" to="/"><img src="./assets/logo.png" width="30" height="30" alt="" loading="lazy"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/testing">Testing<span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/exercise">Exercise</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cart">Cart
          <span class="badge badge-danger" v-if="cartCount>0">{{cartCount}}</span></router-link>
      </li>

      <span v-if="isLoggedIn" style="display: inherit;">
            <li class="nav-item">
              <router-link :to="{name:'order-list'}" class="nav-link mr-2">Order List</router-link>
            </li>
            <li class="nav-item">
              <a @click="logout()" class="nav-link mr-2 text-danger" style="cursor: pointer;">Logout</a>
            </li>
          </span>
          <span v-else style="display: inherit;">
            <li class="nav-item">
              <router-link :to="{name:'register'}" class="nav-link mr-2">Register</router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{name:'login'}" class="nav-link mr-2">Login</router-link>
            </li>
</span>
    </ul>  
  </div>
  </div>
</nav>
<div class="container">
  <div class="row my-3">
    <div class="col-md-12">
      <router-view></router-view>
    </div>
    <!-- <div class="col-md-6"><Testing msg="This is inheritent data."></Testing></div>
    <div class="col-md-6"><Exercise></Exercise></div> -->
  </div>
</div>
</div>
</template>

<script>


export default {
  name: 'App',
  methods:{
      logout(){
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    },
  computed:{
    cartCount(){
      this.$store.dispatch('getData')
      return this.$store.state.cart.length

    },
      isLoggedIn() { 
        return this.$store.getters.isLoggedIn
      }
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
