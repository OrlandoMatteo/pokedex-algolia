import { createApp } from 'vue'
import App from './App.vue'
import InstantSearch from 'vue-instantsearch/vue3/es';

import './assets/main.css'
import { vfmPlugin } from 'vue-final-modal'



app= createApp(App)
app.use(InstantSearch)
app.use(vfmPlugin)
app.mount('#app')