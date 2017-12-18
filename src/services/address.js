/*
 * 地址信息管理
 */

import request from '@/utils/request'
import { sender, receive } from '@/api'

// 获取寄件地址列表
export async function showSendAddr (params) {
	return request({
		url: sender.show,
		method: 'get',
		params
	})
}
// 新增寄件地址
export async function addSendAddrInfo (params) {
	return request({
		url: sender.add,
		method: 'post',
		params
	})
}
// 删除寄件地址
export async function delSendAddrInfo (params) {
	return request({
		url: sender.del,
		method: 'delete',
		params
	})
}
// 获取单条寄件地址的详细信息
export async function getOneSendAddr (params) {
	return request({
		url: sender.getMailingAddressById,
		method: 'get',
		params
	})
}
// 修改寄件地址
export async function updateOneSendAddr (params) {
	return request({
		url: sender.update,
		method: 'post',
		params
	})
}
// 获取收件地址列表
export async function showReceAddr (params) {
	return request({
		url: receive.show,
		method: 'get',
		params
	})
}
// 新增收件地址
export async function addReceAddrInfo (params) {
	return request({
		url: receive.add,
		method: 'post',
		params
	})
}
// 删除收件地址
export async function delReceAddrInfo (params) {
	return request({
		url: receive.del,
		method: 'delete',
		params
	})
}
// 获取单条收件地址
export async function getOneReceAddr (params) {
	return request({
		url: receive.getReceiveAddressById,
		method: 'get',
		params
	})
}
// 修改收件地址
export async function updateOneReceAddr (params) {
	return request({
		url: receive.update,
		method: 'post',
		params
	})
}