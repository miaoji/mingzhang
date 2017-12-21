import request from '@/utils/request'
import {wx} from '@/api'

export async function getPayQr (params) {
  return request({
    url: wx.getPayQr,
    params,
    method: 'post',
    useSession: true,
    auth: true
  })
}
