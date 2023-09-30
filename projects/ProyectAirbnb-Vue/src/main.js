import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookies from 'vue-cookies'

createApp(App).use(router,axios,VueAxios,VueCookies).mount('#app')

