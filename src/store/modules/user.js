import {storage} from '@/utils'
import {Base64} from 'js-base64'
import * as types from '../mutation-types'

export const state = {
  isLogin: false,
  user: {}
}

export const getters = {
  getUserInfo: state => state.user,
  getLoginStatus: state => state.isLogin
}

export const actions = {
  /**
   * [setUserInfo 将localStorage中userinfo赋值到user中]
   * @param {[type]} options.dispatch [description]
   * @param {[type]} options.commit   [description]
   */
  async setUserInfo ({dispatch, commit}) {
    try {
      let user = storage({
        type: 'get',
        key: 'userinfo'
      })
      user = Base64.decode(user)
      user = JSON.parse(user)
      commit(types.SET_USER, {user, isLogin: true})
    } catch (err) {
      console.error(er)
    }
  }
}

export const mutations = {
  [types.SET_USER] (state, {user, isLogin}) {
    state.user = user
    state.isLogin = isLogin
  }
}
