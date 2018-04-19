import request from '@/utils/request'
import { userInfo } from '@/api'

export async function merge(params) {
  return request({
    url: userInfo.merge,
    method: 'post',
    params
  })
}

export async function bindEmail(params) {
  return request({
    url: userInfo.bindEmail,
    method: 'post',
    params
  })
}
