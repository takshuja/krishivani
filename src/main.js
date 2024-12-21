import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css';
import { firebaseApp } from './firebase';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia()
pinia.use(createPersistedState)
const app = createApp(App)
app.use(pinia)
app.use(firebaseApp).use(router).mount('#app')
