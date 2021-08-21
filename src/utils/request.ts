
import axios from 'axios'

// export interface AjaxResponse {
//   code: number;
//   message: string;
//   data: any
// }

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://localhost:4000';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// 创建 axios 实例
const instance = axios.create({
  timeout: 10 * 1000,
  responseType: 'json'
})


// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 处理 get 请求的参数，拼接成 https://coder.itclan.cn?name=张三&age=18的形式
    if (config && config.method === 'get' && config.params) {
      const obj = config.params
      // 定义变量接收query字符串
      let query = []
      for (const i in obj) {
        // 定义变量接收对象的value值
        let value = obj[i]
        // 若对象的value值为数组，则处理之后存进数组
        if (Array.isArray(value)) {
          for (let v of value) {
            query.push(i + '[]=' + v)
          }
          // value = value.join(",")
        } else {
          query.push(i + '=' + value)
        }
      }
      config.url = '?' + query.join('&')
    }
    // 在发送请求之前做些什么
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  consfig => {

    // 在发送请求之前做些什么
    return consfig
  },
  error => {
    const response = error.response;
    //根据返回的 http 状态码做不同的处理
    switch (response?.status) {
      case 401:
        // token 失效
        break;
      case 403:
        // 没有权限
        break;
      case 500:
        // 服务端错误
        break;
      case 503:
        // 服务端错误
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
)

export default instance