/*
 * 地址信息管理
 */

import request from '@/utils/request'
import { sender, receive } from '@/api'

export async function showSendAddr (data) {
	return request({
		url: sender.show,
		method: 'get',
		data
	})
}

export async function showReceAddr (data) {
	return request({
		url: receive.show,
		method: 'get',
		data
	})
}

export async function addReceAddrInfo (data) {
	return request({
		url: receive.add,
		method: 'post',
		params: data
	})
}