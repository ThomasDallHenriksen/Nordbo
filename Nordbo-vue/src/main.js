import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App);
const pinia = createPinia();

app.use(createPinia())
app.use(router)

app.mount('#app')
app.use(pinia);
  
