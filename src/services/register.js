/*
 * 注册页面
 */

import request from '@/utils/request'
import { register } from '@/api'

export async function getEmailCode(params) {
  return request({
    url: register.emailCode,
    method: 'post',
    params
  })
}

export async function reg(params) {
  return request({
    url: register.reg,
    method: 'post',
    params
  })
}
