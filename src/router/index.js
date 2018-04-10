import Vue from 'vue'
import Router from 'vue-router'

import cnContainer from '@/views/cn/Container'
import enContainer from '@/views/en/Container'

Vue.use(Router)

// cn
const cnindex = r => require.ensure([], () => r(require('@/views/cn/Index')), 'cnindex')
const getorderinfo = r => require.ensure([], () => r(require('@/views/cn/GetOrderInfo')), 'getorderinfo')
const introduce = r => require.ensure([], () => r(require('@/views/cn/Introduce')), 'introduce')
const ordersend = r => require.ensure([], () => r(require('@/views/cn/OrderSend')), 'ordersend')
const ordersendspare = r => require.ensure([], () => r(require('@/views/cn/OrderSendSpare')), 'ordersendspare')
const prescription = r => require.ensure([], () => r(require('@/views/cn/Prescription')), 'prescription')
const question = r => require.ensure([], () => r(require('@/views/cn/Question')), 'question')
const send = r => require.ensure([], () => r(require('@/views/cn/Send')), 'send')
const site = r => require.ensure([], () => r(require('@/views/cn/Site')), 'site')
const violate = r => require.ensure([], () => r(require('@/views/cn/Violate')), 'violate')
const usercenter = r => require.ensure([], () => r(require('@/views/cn/user/Index')), 'usercenter')
const directmail = r => require.ensure([], () => r(require('@/views/cn/user/DirectMail')), 'directmail')
const customer = r => require.ensure([], () => r(require('@/views/cn/user/Customer')), 'customer')
const orderdetail = r => require.ensure([], () => r(require('@/views/cn/OrderDetail')), 'orderdetail')
const bbsindex = r => require.ensure([], () => r(require('@/views/cn/bbs/Index')), 'bbsindex')
const cashier = r => require.ensure([], () => r(require('@/views/cn/Cashier')), 'cashier')

// const error = r => require.ensure([], () => r(require('@/views/cn/Error')), 'error')

const redirect = r => require.ensure([], () => r(require('@/views/Redirect')), 'redirect')

// en
const enindex = r => require.ensure([], () => r(require('@/views/en/Index')), 'enindex')
const engetorderinfo = r => require.ensure([], () => r(require('@/views/en/GetOrderInfo')), 'engetorderinfo')
const enintroduce = r => require.ensure([], () => r(require('@/views/en/Introduce')), 'enintroduce')
// const ordersend = r => require.ensure([], () => r(require('@/views/en/OrderSend')), 'ordersend')
const enprescription = r => require.ensure([], () => r(require('@/views/en/Prescription')), 'enprescription')
const enquestion = r => require.ensure([], () => r(require('@/views/en/Question')), 'enquestion')
const ensend = r => require.ensure([], () => r(require('@/views/en/Send')), 'ensend')
const ensite = r => require.ensure([], () => r(require('@/views/en/Site')), 'ensite')
const enviolate = r => require.ensure([], () => r(require('@/views/en/Violate')), 'enviolate')
const enordersendspare = r => require.ensure([], () => r(require('@/views/en/OrderSendSpare')), 'enordersendspare')

const error404 = r => require.ensure([], () => r(require('@/views/cn/Error')), 'error404')

export default new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  },
  routes: [{
    path: '/',
    component: cnContainer,
    children: [{
      path: '/',
      name: 'cnindex',
      component: cnindex,
      meta: {
        intro: '上海明彰网络科技有限公司-首页'
      }
    }, {
      path: 'bbs',
      name: 'bbsindex',
      component: bbsindex,
      meta: {
        intro: '交流社区'
      }
    }]
  }, {
    path: '/redirect',
    name: 'redirect',
    component: redirect,
    meta: {
      intro: '登录跳转'
    }
  }, {
    path: '/cn',
    component: cnContainer,
    children: [{
      path: '/',
      name: 'cnindex1',
      component: cnindex,
      meta: {
        intro: '上海明彰网络科技有限公司-首页'
      }
    }, {
      path: 'index',
      name: 'cnindex2',
      component: cnindex,
      meta: {
        intro: '上海明彰网络科技有限公司-首页'
      }
    }, {
      path: 'getorderinfo',
      name: 'getorderinfo',
      component: getorderinfo,
      meta: {
        intro: '订单查询'
      }
    }, {
      path: 'introduce',
      name: 'introduce',
      component: introduce,
      meta: {
        intro: '公司介绍'
      }
    }, {
      path: 'ordersend',
      name: 'ordersend',
      component: ordersend,
      meta: {
        intro: '寄件'
      }
    }, {
      path: 'orderspare',
      name: 'ordersendspare',
      component: ordersendspare,
      meta: {
        intro: '寄件'
      }
    }, {
      path: 'prescription',
      name: 'prescription',
      component: prescription,
      meta: {
        intro: '参考时效'
      }
    }, {
      path: 'question',
      name: 'question',
      component: question,
      meta: {
        intro: '疑难解答'
      }
    }, {
      path: 'send',
      name: 'send',
      component: send,
      meta: {
        intro: '寄件流程'
      }
    }, {
      path: 'site',
      name: 'site',
      component: site,
      meta: {
        intro: '服务站点'
      }
    }, {
      path: 'violate',
      name: 'violate',
      component: violate,
      meta: {
        intro: '禁运物品'
      }
    }, {
      path: 'user',
      component: usercenter,
      children: [{
        path: 'directmail',
        name: 'directmail',
        component: directmail,
        meta: {
          intro: '直邮列表',
          needLogin: true
        }
      }, {
        path: 'customer',
        name: 'customer',
        component: customer,
        meta: {
          intro: '客服中心'
        }
      }]
    }, {
      path: 'orderdetail',
      name: 'orderdetail',
      component: orderdetail,
      meta: {
        intro: '订单详情'
      }
    }, {
      path: 'cashier',
      name: 'cashier',
      component: cashier,
      meta: {
        intro: '收银台'
      }
    }]
  }, {
    path: '/en',
    component: enContainer,
    children: [{
      path: 'index',
      name: 'enindex1',
      component: enindex,
      meta: {
        intro: 'International Express Service Center-Home Page'
      }
    }, {
      path: '/',
      name: 'enindex2',
      component: enindex,
      meta: {
        intro: 'International Express Service Center-Home Page'
      }
    }, {
      path: 'getorderinfo',
      name: 'engetorderinfo',
      component: engetorderinfo,
      meta: {
        intro: '英文查件'
      }
    }, {
      path: 'ordersend',
      name: 'enordersend',
      component: ordersend,
      meta: {
        intro: '寄件'
      }
    }, {
      path: 'orderspare',
      name: 'enordersendspare',
      component: enordersendspare,
      meta: {
        intro: '寄件'
      }
    }, {
      path: 'introduce',
      name: 'enintroduce',
      component: enintroduce,
      meta: {
        intro: '公司介绍-英文'
      }
    }, {
      path: 'prescription',
      name: 'enprescription',
      component: enprescription,
      meta: {
        intro: '参考时效'
      }
    }, {
      path: 'question',
      name: 'enquestion',
      component: enquestion,
      meta: {
        intro: '疑难解答'
      }
    }, {
      path: 'send',
      name: 'ensend',
      component: ensend,
      meta: {
        intro: '寄件流程'
      }
    }, {
      path: 'site',
      name: 'ensite',
      component: ensite,
      meta: {
        intro: '服务站点'
      }
    }, {
      path: 'violate',
      name: 'enviolate',
      component: enviolate,
      meta: {
        intro: '禁运物品'
      }
    }, {
      path: 'cashier',
      name: 'encashier',
      component: cashier,
      meta: {
        intro: '收银台'
      }
    }, {
      path: 'orderdetail',
      name: 'enorderdetail',
      component: orderdetail,
      meta: {
        intro: '订单详情'
      }
    }, {
      path: 'user',
      component: usercenter,
      children: [{
        path: 'directmail',
        name: 'endirectmail',
        component: directmail,
        meta: {
          intro: '直邮列表',
          needLogin: true
        }
      }, {
        path: 'customer',
        name: 'encustomer',
        component: customer,
        meta: {
          intro: '客服中心'
        }
      }]
    }]
  }, {
    path: '*',
    name: 'error404',
    component: error404,
    meta: {
      intro: '404'
    }
  }]
})
