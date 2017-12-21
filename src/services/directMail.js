import request from '@/utils/request'
import {directMail, order} from '@/api'

export async function query (data) {
  return request({
    url: directMail.query,
    data,
    method: 'get',
    auth: true
  })
}

export async function show (data) {
  return request({
    url: order.getOrderInfoByOrderNo,
    method: 'get',
    auth: true,
    useSession: true,
    data
  })
}

export async function remove (params) {
  return request({
    url: directMail.delete,
    params,
    useSession: true,
    method: 'delete',
    auth: true
  })
}
