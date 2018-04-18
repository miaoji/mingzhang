import request from '@/utils/request'
import { userInfo } from '@/api'

export async function merge(data) {
  return request({
    url: userInfo.merge,
    method: 'post',
    params: data
  })
}
