/*
 * 产品类型
 */

import request from '@/utils/request'
import {product} from '@/api'

export async function query (params) {
  console.log('params', params)
  return request({
    url: product.show,
    methods: 'get',
    useSession: true,
    data: params
  })
}
