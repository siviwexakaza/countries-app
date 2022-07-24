import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { pinia } from './stores'

loadFonts()

createApp(App)
  .use(pinia)
  .use(vuetify)
  .mount('#app')
