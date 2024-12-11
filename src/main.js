import { createApp } from 'vue'
import App from './App.vue'
//import $ from 'jquery'
//import 'bootstrap/dist/css/bootstrap.css';
// import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'

import router from './router/index'
import store from './store'
import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import VueTheMask from 'vue-the-mask'
// import PrimeVue from 'primevue/config'
// import Tooltip from 'primevue/tooltip'
import 'tippy.js/dist/tippy.css' // Optional, for basic styling
import tippy from 'tippy.js'
// Import PrimeVue styles
// import 'primevue/resources/themes/lara-light-indigo/theme.css'; // Use a valid theme
// import 'primevue/resources/primevue.min.css';                  // Core CSS
// import 'primeicons/primeicons.css';
import $ from 'jquery'
import 'owl.carousel/dist/assets/owl.carousel.css'

const app = createApp(App)

app.config.globalProperties.$ = $

app.use(store)
app.use(VueSweetalert2)
app.use(VueTheMask)
// app.use(PrimeVue)
// app.directive('tooltip', Tooltip)
// app.directive('tooltip', Tooltip, {
//   event: 'click' // Set globally to click
// })
app.use(router)
app.use(Vue3Toasity, {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 20,
  newestOnTop: true
})

app.directive('tippy', {
  mounted(el, binding) {
    tippy(el, {
      content: binding.value,
      trigger: 'click' // Change trigger to 'click'
    })
  },
  unmounted(el) {
    if (el._tippy) {
      el._tippy.destroy()
    }
  }
})
app.mount('#app')
// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')
