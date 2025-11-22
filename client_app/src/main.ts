import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createCacheHandler } from './cache/CacheHandler'
import { createCachePlugins } from './cache/plugins'
import { store } from './stores'


const app = createApp(App)

app.use(router)
app.use(store)
console.log('========')
const cache = await createCacheHandler()
console.log('======== 1')

app.use(createCachePlugins(cache))

app.mount('#app')
