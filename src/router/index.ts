import { createRouter, createWebHistory } from 'vue-router'

import MainPage from '../views/mainpage/MainPage.vue'
import Home from '../views/home/Home.vue'
import StrategyCenter from '../views/strategycenter/StrategyCenter.vue'
import MatchCenter from '../views/matchcenter/MatchCenter.vue'
import NewGame from '../views/newgame/NewGame.vue'
import Article from '../views/article/Article.vue'
import Hero from '../views/hero/Hero.vue'

// 定义一些路由路径，每条路径都应该映射到一个组件
const routes = [
  {
    path: '/', component: MainPage, children: [
      { path: '', redirect: '/home' },
      { path: '/home', component: Home, alian: 'home' },
      { path: '/strategycenter', component: StrategyCenter, alias: 'StrategyCenter' },
      { path: '/matchcenter', component: MatchCenter, alias: 'MatchCenter' },
      { path: '/newgame', component: NewGame, alias: 'newgame' },
      { path: '/articles/:id', component: Article, alias: 'articles/:id', props: true },
    ]
  },
  { path: '/heroes/:id', component: Hero, alian: 'hero/:id' },
]

// 创建路由器实例并传递 routes 选项
const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router