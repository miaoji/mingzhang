/*
 * 获取省份信息
 */
 import request from '@/utils/request'
 import { province } from '@/api'

 export async function query (params) {
 	return request({
 		url: province.show,
 		methods: 'get',
 		params
 	})
 }