/*
 * 产品类型
 */

import request from '@/utils/request'
import { product } from '@/api'

export async function query (params) {
	return {
		url: 'product.show',
		methods: 'get',
		data: params
	}
}