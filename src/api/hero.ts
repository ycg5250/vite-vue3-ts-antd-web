
import request from '../utils/request'

const BASE_URL = '/web/api'

/**获取英雄详情数据 */
export const reqHeroDetail = (data: object) => request({
  url: BASE_URL + '/heroes',
  params: data
})

