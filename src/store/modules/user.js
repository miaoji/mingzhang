import { show } from '@/services/user'
import { storage } from '@/utils'
import * as types from '../mutation-types'

export const state = {
  isLogin: false,
  token: '',
  user: {}
}

export const getters = {
  getUserInfo: state => state.user,
  getLoginStatus: state => state.isLogin
}

export const actions = {
  /**
   * [setUserInfo 根据openid获取userinfo]
   * @param {[type]} options.dispatch [description]
   * @param {[type]} options.commit   [description]
   */
  async setUserInfo({ dispatch, commit }, payload) {
    try {
      if (storage({ key: 'loginType' }) !== 'email') {
        const res = await show({ ...payload })
        const code = res.statusCode
        if (res.status === 1 && code === 200) {
          const token = res.token
          storage({
            type: 'set',
            key: 'authToken',
            val: token
          })
          const user = res.user
          commit(types.SET_USER, { isLogin: true, token, user })
          return {
            type: 'success',
            message: res.msg,
            code
          }
        } else {
          let err = new Error(res.msg)
          err.code = code
          throw err
        }
      } else {
        let user = storage({ type: 'get', key: 'userInfo' })
        user = JSON.parse(user)
        const token = user.token
        storage({
          type: 'set',
          key: 'authToken',
          val: token
        })
        commit(types.SET_USER, { isLogin: true, token, user })
      }
    } catch (err) {
      console.error(err)
      return {
        type: 'error',
        message: err.message,
        code: err.code
      }
    }
  },
  async loginOut({ dispatch, commit }) {
    storage({
      type: 'clear'
    })
    commit(types.SET_USER, { isLogin: false, token: '', user: {} })
  }
}

export const mutations = {
  [types.SET_USER](state, { isLogin, token, user }) {
    state.isLogin = isLogin
    state.token = token
    state.user = user
  }
}
