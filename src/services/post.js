import request from '@/utils/request'
import {posts} from '@/api'

export async function query (data) {
  return request({
    url: posts.query,
    method: 'get',
    auth: true,
    data
  })
}
