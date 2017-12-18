import * as directMail from '@/services/directMail'
import { storage } from '@/utils'
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
  async setDirectmailList ({ dispatch, commit }, { page = 1 }) {
    try {
      const res = await directMail.query({
        wxUserId: 212,
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
        text: '网络错误',
        width: '15rem',
        type: 'warn'
      }
    }
  }
}

export const mutations = {
  [types.SET_DIRECTMAILLIST] (state, { list }) {
    state.list = list
  }
}
