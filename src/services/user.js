import request from '@/utils/request'
import { user } from '@/api'

export async function show (data) {
  return request({
    url: user.show,
    method: 'get',
    data
  })
}
