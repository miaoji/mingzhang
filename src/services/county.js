/*
 * 获取县区信息
 */
 import request from '@/utils/request'
 import { county } from '@/api'

 export async function query (params) {
 	return request({
 		url: county.show,
 		methods: 'get',
 		params
 	})
 }