/*
 * 地址信息管理
 */

import request from '@/utils/request'
import { sender, receive } from '@/api'

export async function showSendAddr (data) {
	return request({
		url: sender.show,
		methods: 'get',
		data
	})
}

export async function showReceiveAddr (data) {
	return request({
		url: receive.show,
		methods: 'get',
		data
	})
}