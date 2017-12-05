/*
 * 获取token
 */

 import request from '@/utils/request'
 import { user } from '@/api'

 export async function getToken (data) {
 	return request({
 		url: user.token,
 		method: 'get',
	    auth: true,
 		data
 	})
 }