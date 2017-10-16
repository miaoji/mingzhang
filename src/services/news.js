/*
新闻信息
*/
import request from '@/utils/request'
import { order } from '@/api'

export default async function getNewsInfo (data) {
  return request({
    url: 'http://localhost:8080/news1.html',
    method: 'get',
    auth: true,
    data
  })
}