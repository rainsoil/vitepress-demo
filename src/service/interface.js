// 扩展的service
import axios from '../utils/request' // 引入 axios 实例
// import axios from 'axios'

export function postRequest(url, params) {
  // 发送示例请求
  axios.get(url, params).then((data) => {
    console.log('Fetched data:', data)
    alert(JSON.stringify(data))
  })
}
