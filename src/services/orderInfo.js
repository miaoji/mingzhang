/*
 * 获取订单信息,获取快件轨迹信息
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
  const newdata = {...data, source:'php'}
  return request({
    url: order.queryByCompany,
    method: 'get',
    auth: true,
    data: newdata
  })
}

export async function createOrder (params) {
  return request({
    url: order.add,
    method: 'post',
    params
  })
}

export async function createOrderSpare (data, params) {
  return request({
    url: order.addCargo,
    method: 'post',
    data: [data],
    params
  })
}