/*
 * 获取预付款信息
 */
import request from '@/utils/request'
import {getIntlPrice} from '@/api'

export async function getPrice (params) {
  return request({
    url: getIntlPrice.show,
    methods: 'get',
    useSession: true,
    data: params
  })
}
