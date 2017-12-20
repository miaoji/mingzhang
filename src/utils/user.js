import {Base64} from 'js-base64'
import {show} from '@/services/user'
import {storage} from '@/utils'

/**
 * [login 根据传来的openid获取用户信息，将token和userinfo存储在localStorage中
 * 每次进入APP.vue时检测是否有记录，有的话将user信息存储到store中
 * 用户进行登录操作时也要存储userinfo到localStorage，vue store中]
 * @param  {[type]} openid [description]
 * @return {[type]}        [description]
 */
export const login = async function (openid) {
  try {
    const res = await show({openid})
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
