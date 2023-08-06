import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import { createPinia } from "pinia";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
createApp(App)
  .use(router)
   .use(createPinia())
  .use(vuetify)
  .mount('#app')
