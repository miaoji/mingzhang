import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store'
import * as filters from '@/filters'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.afterEach((to, from) => {
  if (to.meta.intro) {
    window.document.title = to.meta.intro || ''
  }
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
