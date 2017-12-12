import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/store'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.afterEach((to, from) => {
  // console.log(111)
  if (to.meta.intro) {
    window.document.title = to.meta.intro || ''
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
