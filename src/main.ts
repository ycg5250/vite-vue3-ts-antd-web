import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

import Card from './components/Card.vue'
import ListCard from './components/ListCard.vue'

// 引入iconfont图标
import './assets/iconfont/iconfont.css'
// 引入全局公共样式
import './assets/scss/common.scss'


import swiper from './plugins/swiper'

const app = createApp(App)

const components = [Card, ListCard]
components.forEach(component => {
  app.component(`com-${component.name}`, component)
})

app.use(swiper)

app.use(router)

app.mount('#app')
