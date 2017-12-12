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
const prescription = r => require.ensure([], () => r(require('@/views/cn/Prescription')), 'prescription')
const question = r => require.ensure([], () => r(require('@/views/cn/Question')), 'question')
const send = r => require.ensure([], () => r(require('@/views/cn/Send')), 'send')
const site = r => require.ensure([], () => r(require('@/views/cn/Site')), 'site')
const violate = r => require.ensure([], () => r(require('@/views/cn/Violate')), 'violate')

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


export default new Router({
  base: __dirname,
  routes: [{
    path: '/',
    component: cnContainer,
    children: [{
      path: '/',
      name: 'cnindex',
      component: cnindex,
      meta: {
        intro: '首页'
      }
    }]
  },{
    path: '/cn',
    component: cnContainer,
    children: [{
      path: '/',
      name: 'cnindex1',
      component: cnindex,
      meta: {
        intro: '首页'
      }
    },{
      path: 'index',
      name: 'cnindex2',
      component: cnindex,
      meta: {
        intro: '首页'
      }
    },{
      path: 'getorderinfo',
      name: 'getorderinfo',
      component: getorderinfo,
      meta: {
        intro: '订单查询'
      }
    },{
      path: 'introduce',
      name: 'introduce',
      component: introduce,
      meta: {
        intro: '公司介绍'
      }
    },{
      path: 'ordersend',
      name: 'ordersend',
      component: ordersend,
      meta: {
        intro: '线下寄件'
      }
    },{
      path: 'prescription',
      name: 'prescription',
      component: prescription,
      meta: {
        intro: '参考时效'
      }
    },{
      path: 'question',
      name: 'question',
      component: question,
      meta: {
        intro: '疑难解答'
      }
    },{
      path: 'send',
      name: 'send',
      component: send,
      meta: {
        intro: '寄件流程'
      }
    },{
      path: 'site',
      name: 'site',
      component: site,
      meta: {
        intro: '服务站点'
      }
    },{
      path: 'violate',
      name: 'violate',
      component: violate,
      meta: {
        intro: '禁运物品'
      }
    }]
  },{
    path: '/en',
    component: enContainer,
    children: [{
      path: 'index',
      name: 'enindex1',
      component: enindex,
      meta: {
        intro: '首页'
      }
    },{
      path: '/',
      name: 'enindex2',
      component: enindex,
      meta: {
        intro: '首页'
      }
    },{
      path: 'getorderinfo',
      name: 'engetorderinfo',
      component: engetorderinfo,
      meta: {
        intro: '英文寄件'
      }
    },{
      path: 'introduce',
      name: 'enintroduce',
      component: enintroduce,
      meta: {
        intro: '公司介绍-英文'
      }
    },{
      path: 'prescription',
      name: 'enprescription',
      component: enprescription,
      meta: {
        intro: '参考时效'
      }
    },{
      path: 'question',
      name: 'enquestion',
      component: enquestion,
      meta: {
        intro: '疑难解答'
      }
    },{
      path: 'send',
      name: 'ensend',
      component: ensend,
      meta: {
        intro: '寄件流程'
      }
    },{
      path: 'site',
      name: 'ensite',
      component: ensite,
      meta: {
        intro: '服务站点'
      }
    },{
      path: 'violate',
      name: 'enviolate',
      component: enviolate,
      meta: {
        intro: '禁运物品'
      }
    }]
  }]
})
