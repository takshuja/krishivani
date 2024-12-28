<script setup>
import { onMounted } from 'vue';
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
import NV_RESP from './components/Nav_Mobile.vue';
import { authStore } from './stores/authStore';

const authRoutes = ['login', 'signup']

const authenticationStore = authStore()



onMounted(() => {
  authenticationStore.getAuthStatus();
})

</script>

<template>
  <div class="min-h-screen flex flex-col justify-between">
    <NavBar class="mb-0" v-if="!authRoutes.includes($route.name)" />
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
  user-select: none;
  -moz-user-select: none;
}

nav {
  padding: 30px;
}


nav a.router-link-exact-active {
  color: #42b983;
}


nav a:hover {
  color: #AFFC41;
}

.logo-text {
  color: #42b983;
}


nav a.router-link-exact-active {
  color: #AFFC41;
}



loadercircle {
  width: 2rem;
  height: 2rem;
  border: 0.15rem solid black;
  border-radius: 50%;
  border-top-color: transparent;
  animation: loading-animation 1s linear infinite;
}



@keyframes loading-animation {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);

  }
}
</style>