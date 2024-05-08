import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/global.css'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

const pinia = createPinia()
const app = createApp(App)

app.use(VueLazyload)
app.use(pinia)
app.mount('#app')
