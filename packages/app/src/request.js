import axios from 'axios'

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:8082/',
  timeout: 60 * 1000 * 10 // request timeout
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 200 && res.code !== undefined) {
      return Promise.reject({ message: '报错了' })
    }
    return res
  },
  error => {
    const { data } = error.response

    return Promise.reject({ message: data.msg || data.message })
  }
)

export default service
