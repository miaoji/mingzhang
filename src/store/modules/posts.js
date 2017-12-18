import * as post from '@/services/post'
import { storage } from '@/utils'
import * as types from '../mutation-types'

export const state = {
  list: {
    total: 0,
    data: []
  }
}

export const getters = {
  getPostList: state => state.list
}

export const actions = {
  /**
   * [获取帖子列表信息]
   * @param {[type]} options.dispatch [description]
   * @param {[type]} options.commit   [description]
   * @param {[type]} options.openid   [description]
   */
  async setPostsList ({ dispatch, commit }, { page = 1 }) {
    try {
      const res = await post.query({
        page,
        rows: 15
      })
      if (res.code === 200) {
        let list = {
          total: res.total,
          data: res.obj
        }
        commit(types.SET_POST, {list})
        return {
          text: '获取帖子成功',
          width: '18rem',
          type: 'success'
        }
      }
      return {
        text: res.msg || '获取帖子失败',
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
  [types.SET_POST] (state, { list }) {
    state.list = list
  }
}
