
import request from '../utils/request'

const BASE_URL = '/web/api'

/**获取文章详情数据 */
export const reqArtDetail = (data: object) => request({
  url: BASE_URL + '/articles',
  params: data
})

