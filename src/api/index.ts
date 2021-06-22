
import ajax from "./ajax";


// const BASE_URL = 'admin/api'
// 基础路径 http://localhost:3000不用写，注意，下面的admin前面的  /  必须写
const BASE_URL = '/web/api'
// const BASE_LOGIN_URL = '/admin/api'


/**获取新闻资讯内容 */
export const reqNewsData = () => ajax(BASE_URL + '/news/list')

