/*
 * 获取市级信息
 */
 import request from '@/utils/request'
 import { city } from '@/api'

 export async function query (params) {
 	return request({
 		url: city.show,
 		methods: 'get',
 		params
 	})
 }