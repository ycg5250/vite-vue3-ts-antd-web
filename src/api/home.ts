
import request from '../utils/request'

export const reqHeroseData = () => request({
  url: '/web/api/heroes/list'
})


export const reqNewsData = () => request({
  url: '/web/api/news/list'
})
