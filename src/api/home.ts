
import request from '../utils/request'

const BASE_URL = '/web/api'

/**获取英雄列表数据 */
export const reqHeroseData = () => request({
  url: BASE_URL + '/heroes/list'
})


/**获取新闻资讯内容 */
export const reqNewsData = () => request({
  url: BASE_URL + '/news/list'
})
