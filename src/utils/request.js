import axios from 'axios'
import { gettoken as getToken } from '@/utils';

const fetch = (options) => {
  let {
    method = 'get',
    data,
    params,
    url,
    auth = true,
    token
  } = options

  switch (method.toLowerCase()) {
    case 'get':
      return axios({
        url,
        method: 'get',
        params: data || params,
        timeout: 5000,
        headers: auth ? {'token': token} : {}
      })
    case 'delete':
      return axios({
        url,
        method: 'delete',
        data,
        params,
        timeout: 5000,
        headers: auth ? {'token': token} : {}
      })
    case 'post':
      return axios({
        url,
        method: 'post',
        data,
        params,
        timeout: 5000,
        headers: auth ? {'token': token} : {}
      })
    case 'put':
      return axios.put(url, data)
    case 'patch':
      return axios.patch(url, data)
    default:
      return axios(options)
  }
}

export default function request (options) {
  options.token = window.sessionStorage.winnerKey
  return fetch(options).then((response) => {
    const { status } = response
    let data = response.data
    data = typeof data === 'object' ? data : {'stringData': data}
    return {
      success: true,
      statusCode: status,
      ...data
    }
  }).catch((error) => {
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
      // 判断token失效
      if (response.status === 401) {
        window.sessionStorage.clear()
        // alert('网络故障,请刷新页面后重试!!!')
        getToken()
        return { success: false, statusCode: 401, msg: '用户登陆状态已失效' }
      }
    } else {
      statusCode = 600
      msg = error.message || '网络错误'
    }
    return { success: false, statusCode, message: msg }
  })
}
