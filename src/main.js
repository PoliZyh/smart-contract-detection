import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'

import './styles/index.scss'
import 'animate.css'
import 'animate.css/animate.compat.css'

const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
