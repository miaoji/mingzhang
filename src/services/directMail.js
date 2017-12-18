import request from '@/utils/request'
import {directMail} from '@/api'

export async function query (data) {
  return request({
    url: directMail.query,
    data,
    method: 'get',
    auth: true
  })
}

export async function show (data) {
  return request({
    url: directMail.show,
    data,
    method: 'get',
    auth: true
  })
}

export async function remove (params) {
  return request({
    url: directMail.delete,
    params,
    method: 'delete',
    auth: true
  })
}
