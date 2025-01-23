// src/utils/request.js
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://apifoxmock.com/m1/5796015-5480545-default', // 替换为你的 API 地址
  timeout: 5000 // 请求超时时间
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 可以在这里添加 token 或其他自定义 header
    config.headers['Authorization'] = 'Bearer your-token'
    config.headers['apifoxToken '] = '718pwoQpQ0phW_N_0tz_m'
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
instance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default instance
