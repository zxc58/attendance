import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { middlewares } from './stores'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const store = createPinia()

store.use(middlewares.createReset)

app.use(store)
app.use(router)

app.mount('#app')
