import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css';
import { fireabaseApp } from './firebase';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

const pinia = createPinia()
pinia.use(createPersistedState)
const app = createApp(App)
app.use(pinia)
app.use(fireabaseApp).use(router).mount('#app')
