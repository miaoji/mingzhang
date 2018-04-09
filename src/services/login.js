/*
 * 注册页面
 */

import request from '@/utils/request'
import { login as api } from '@/api'

export async function login(params) {
  return request({
    url: api.loginByEmail,
    method: 'post',
    params
  })
}
