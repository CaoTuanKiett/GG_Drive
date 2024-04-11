import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import fab from '@fortawesome/fontawesome-free-brands'
import { far } from '@fortawesome/free-regular-svg-icons'

import Root from './Root.vue'
import router from './router'

import './assets/main.scss'

library.add(fas, far)

const app = createApp(Root)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

router.isReady().then(() => {
  app.mount('#root')
})
