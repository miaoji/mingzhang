/*
 * 获取国家信息
 */

import request from '@/utils/request'
import {country} from '@/api'

export async function query () {
  return request({
    url: country.show,
    methods: 'get',
    useSession: true
    // auth: true
  })
}

export async function cascade () {
  return request({
    url: country.cascade,
    methods: 'get',
    useSession: true
    // auth: true
  })
}
