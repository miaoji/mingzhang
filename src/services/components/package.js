/*
 * 包裹类型
 */

import request from '@/utils/request'
import { packages } from '@/api'

export async function query (data) {
  return request({
    url: packages.show,
    method: 'get',
    auth: true,
    data
  })
}