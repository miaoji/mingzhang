import Vue from 'vue'
import VueI18n from 'vue-i18n'
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App'
import ElementUI from 'element-ui'
import * as filters from '@/filters'
import router from '@/router'
import store from '@/store'
import {autoLogin} from '@/utils/user'
import language from '@/assets/language'

Vue.use(ElementUI)
Vue.use(VueI18n)
Vue.config.productionTip = false
router.beforeEach(async (to, from, next) => {
  const isLogin = store.state.user.isLogin
  if (to.fullPath.split('/en/').length === 2 && window.sessionStorage.locale !== '/en/') {
    window.sessionStorage.setItem('locale', '/en/')
    setTimeout(() => {
      location.reload()
    }, 30)
  } else if (to.fullPath.split('/cn/').length === 2 && window.sessionStorage.locale !== '/cn/') {
    window.sessionStorage.setItem('locale', '/cn/')
    setTimeout(() => {
      location.reload()
    }, 30)
  }
  // 如果用户未登录，本地缓存中有token信息，则自动登录
  const data = autoLogin()
  if (!isLogin && data && data.openid) {
    console.log('data1231', data)
    await store.dispatch('setUserInfo', data)
  }
  // 如果页面需要登录权限，则检测用户是否登录，没有则跳转到登录页面
  if (to.meta.needLogin) {
    const isLoginN = store.state.user.isLogin
    if (!isLoginN) {
      return next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  if (to.meta.intro) {
    window.document.title = to.meta.intro || ''
  }
  return next()
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

const messages = {
  '/en/': {
    message: language.en
  },
  '/cn/': {
    message: language.zhCN
  }
}
const i18n = new VueI18n({
  locale: window.sessionStorage.locale || '/cn/',
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App }
})
