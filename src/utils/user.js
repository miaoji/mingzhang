import { Base64 } from 'js-base64'
import { show } from '@/services/user'
import { storage } from '@/utils'

/**
 * [login 根据传来的openid获取用户信息，将token和userinfo存储在localStorage中
 * 每次进入APP.vue时检测是否有记录，有的话将user信息存储到store中
 * 用户进行登录操作时也要存储userinfo到localStorage，vue store中]
 * @param  {[type]} openid [description]
 * @return {[type]}        [description]
 */
export const login = async function (openid) {
  try {
    const res = await show({ openid })
    if (res.status === 1 && res.statusCode === 200) {
      let user = res.user
      const token = res.token
      user = JSON.stringify(user)
      user = Base64.encode(user)
      storage({
        type: 'set',
        key: 'token',
        val: token
      })
      storage({
        type: 'set',
        key: 'userinfo',
        val: user
      })
    } else {
      throw new Error(res.statusCode, res.msg)
    }
  } catch (err) {
    console.error(err)
  }
}

// 获取过期时间json val单位 分钟
function getExpire(val = 30) {
  let time = new Date()
  return {
    'now': new Date().getTime(),
    'expire': time.setMinutes(time.getMinutes() + val, time.getSeconds(), 0)
  }
}

/**
 * [saveOpenid 根据传来的openid存入本地localStorage中
 * 使用expire记录过期值（一星期后过期）
 * 用户个人信息、uuid等只保存在vue store中]
 * @param  {[type]} openid [description]
 * @return {[type]}        [description]
 */
export const saveOpenid = async function (payload) {
  try {
    // 设置过期时间为1星期
    let token = getExpire(10080)
    token['openid'] = payload.openid
    token['unionid'] = payload.unionid
    token = JSON.stringify(token)
    token = Base64.encode(token)
    storage({
      type: 'set',
      key: 'token',
      val: token
    })
    return true
  } catch (err) {
    console.error(err)
    return false
  }
}

/**
 * [autoLogin 用户第一次登录时检测是否有token
 * token没过期的话，系统自动登录]
 * @return {[String]} openid        [description]
 */
export const autoLogin = function () {
  try {
    if (storage({ type: 'get', key: 'loginType' }) === 'email') {
      return { openid: true }
    }
    // 设置过期时间为1星期
    let token = storage({
      type: 'get',
      key: 'token'
    })
    token = Base64.decode(token)
    token = JSON.parse(token)
    const nowTimestamp = new Date().getTime()
    if (nowTimestamp >= token.expire) {
      return null
    } else {
      return { openid: token.openid, unionid: token.unionid, type: 1 }
    }
  } catch (err) {
    // console.info(err)
    return null
  }
}
