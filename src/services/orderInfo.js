/*
获取订单信息,获取快件轨迹信息
*/
import request from '@/utils/request'
import { order } from '@/api'

export async function getOrderInfoByOrderNo (data) {
  return request({
    url: order.getOrderInfoByOrderNo,
    method: 'get',
    auth: true,
    data
  })
}

export async function queryByCompany (data) {
  const newdata = {...data,source:'php'}
  return request({
    url: order.queryByCompany,
    method: 'get',
    auth: true,
    data: newdata
  })
}