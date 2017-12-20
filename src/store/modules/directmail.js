import * as directMail from '@/services/directMail'
// import { storage } from '@/utils'
import * as types from '../mutation-types'

export const state = {
  list: {
    total: 0,
    data: []
  }
}

export const getters = {
  getDirectmailList: state => state.list
}

export const actions = {
  /**
   * [获取直邮列表信息]
   * @param {[type]} options.dispatch [description]
   * @param {[type]} options.commit   [description]
   * @param {[type]} options.openid   [description]
   */
  async setDirectmailList ({dispatch, commit, rootGetters}, {page = 1}) {
    try {
      const {id} = rootGetters.getUserInfo
      if (!id) {
        throw new Error('请先登录')
      }
      const res = await directMail.query({
        wxUserId: id,
        page,
        rows: 10
      })
      if (res.code === 200) {
        let list = {
          total: res.total,
          data: res.obj
        }
        commit(types.SET_DIRECTMAILLIST, {list})
        return {
          text: '获取直邮列表成功',
          width: '18rem',
          type: 'success'
        }
      }
      return {
        text: res.msg || '获取直邮列表失败',
        width: '18rem',
        type: 'warn'
      }
    } catch (err) {
      console.error(err)
      return {
        text: err.message || '网络错误',
        width: '18rem',
        type: 'warn'
      }
    }
  }
}

export const mutations = {
  [types.SET_DIRECTMAILLIST] (state, {list}) {
    state.list = list
  }
}
