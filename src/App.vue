<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import NV_RESP from './components/Nav_Mobile.vue';

const authRoutes = ['login', 'signup']

</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <NavBar class="mb-4" v-if="!authRoutes.includes($route.name)" />
    <NV_RESP />
    <router-view />
    <Footer class=" mt-4" v-if="!authRoutes.includes($route.name)" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}


nav a.router-link-exact-active {
  color: #42b983;
}


.logo-text {
  color: #42b983;
}


nav a.router-link-exact-active {
  color: #AFFC41;
}
</style>
