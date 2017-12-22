import {localPrefix} from './config'
import {getToken} from '@/services/token'
import md5 from 'js-md5'

export async function gettoken () {
  const timestamp = new Date().getTime()
  const nonceStr = md5(timestamp + 'winner')
  const key = 'mingz-tech.com'
  const realStr = 'nonceStr=' + nonceStr + '&timestamp=' + timestamp + '&key=' + key
  const sign = md5(realStr)
  let data = await getToken({nonceStr, timestamp, sign})
  if (data.stringData !== '') {
    if (window.sessionStorage.winnerKey) {
      return
    } else {
      window.sessionStorage.winnerKey = data.stringData
    }
    console.info('成功的', data)
  } else {
    window.sessionStorage.clear()
    console.info('查询失败了', data)
  }
}

/**
 * [对localStorage操作进行封装]
 * @param  {String}  key    [存储的字段名字]
 * @param  {String}  val    [存储的字段值]
 * @param  {Boolean} prefix [是否加前缀，默认为true]
 * @param  {String}  type   [localStorage的操作方式 get、set、remove、clear]
 * @return {String} res     [localStorage.getItem(key)时返回的值]
 */
export const storage = function ({key = '', val = '', prefix = true, type = 'get'}) {
  // type为remove时候，允许key为数组
  if (prefix && !Array.isArray(key)) {
    key = localPrefix + key
  }
  const localStorage = window.localStorage
  let res = ''
  switch (type) {
    case 'get':
      res = localStorage.getItem(key)
      break
    case 'set':
      localStorage.setItem(key, val)
      break
    case 'remove':
      if (Array.isArray(key)) {
        for (let i = 0, len = key.length; i < len; i++) {
          let removeKey = localPrefix + key[i]
          localStorage.removeItem(removeKey)
        }
      } else {
        localStorage.removeItem(key)
      }
      break
    case 'removeexcept':
      if (Array.isArray(key)) {
        Object.keys(localStorage).forEach(lkey => {
          if (!key.some(item => (localPrefix + item) === lkey)) {
            localStorage.removeItem(lkey)
          }
        })
      }
      break
    case 'clear':
      localStorage.clear()
      break
    default:
      break
  }
  if (type === 'get') {
    return res
  }
}
