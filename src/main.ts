import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/global.css'
import App from './App.vue'
import urql, { cacheExchange, fetchExchange } from '@urql/vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(urql, {
  url: 'https://vortex.korabli.su/api/graphql/glossary/',
  exchanges: [cacheExchange, fetchExchange],
})
app.mount('#app')
