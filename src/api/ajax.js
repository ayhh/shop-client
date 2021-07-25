import axios from 'axios'
import Nprogress from 'nprogress';

const service = axios.create({
  baseURL: '/api',
  timeout: 2000
})

service.interceptors.request.use((config) => {
  Nprogress.start()

  return config
})

service.interceptors.response.use(
  (response) => {

    Nprogress.done()

    return response.data

  }, (err) => {
    alert("错误信息：" + err.message)
    Nprogress.done()
    return new Promise(() => {})
  })

  export default service