import Vue from 'vue'
import Router from 'vue-router'
import IndexMain from '@/components/IndexMain'              // 首页主体
import GetOrderInfo from '@/components/detail/GetOrderInfo' // 订单查询
import Send from '@/components/detail/Send'                 // 我要寄件
import Question from '@/components/detail/Question'         // 疑难问题
import Violate from '@/components/detail/Violate'           // 禁运物品
import Prescription from '@/components/detail/Prescription' // 参考时效
import Site from '@/components/detail/Site'                 // 服务站点
import Introduce from '@/components/detail/Introduce'       // 公司简介+联系我们
import Errors from '@/components/Error'       // 新闻动态
import OrderSend from '@/components/page/OrderSend/index'
import Demo from '@/components/page/Demo'

// 英文版-路由地址
import enIndex from '@/componentenglish/IndexMain'       // 英文版主页
import enSend from '@/componentenglish/detail/Send'                 // 我要寄件
import enPrescription from '@/componentenglish/detail/Prescription' // 参考时效
import enSite from '@/componentenglish/detail/Site'                 // 服务站点
import enGetOrderInfo from '@/componentenglish/detail/GetOrderInfo'                 // 服务站点
import enQuestion from '@/componentenglish/detail/Question'         // 疑难问题
import enViolate from '@/componentenglish/detail/Violate'
import enIntroduce from '@/componentenglish/detail/Introduce'   

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/enIntroduce',
      name: 'enIntroduce',
      component: enIntroduce
    },
    {
      path: '/enQuestion',
      name: 'enQuestion',
      component: enQuestion
    },
    {
      path: '/enViolate',
      name: 'enViolate',
      component: enViolate
    },
    {
      path: '/enGetOrderInfo',
      name: 'enGetOrderInfo',
      component: enGetOrderInfo
    },
    {
      path: '/enSite',
      name: 'enSite',
      component: enSite
    },
    {
      path: '/enSend',
      name: 'enSend',
      component: enSend
    },
    {
      path: '/enPrescription',
      name: 'enPrescription',
      component: enPrescription
    },
    {
      path: '/enIndex',
      name: 'enIndex',
      component: enIndex
    },
    {
      path: '/',
      name: 'IndexMain',
      component: IndexMain
    },
    {
      path: '/GetOrderInfo',
      name: 'GetOrderInfo',
      component: GetOrderInfo
    },
    {
      path: '/Send',
      name: 'Send',
      component: Send
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Violate',
      name: 'Violate',
      component: Violate
    },
    {
      path: '/Prescription',
      name: 'Prescription',
      component: Prescription
    },
    {
      path: '/Site',
      name: 'Site',
      component: Site
    },
    {
      path: '/Introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/Callme',
      name: 'Callme',
      component: Introduce
    },
    {
      path: '/OrderSend',
      name: 'OrderSend',
      component: OrderSend
    },
    {
      path: '/Demo',
      name: 'Demo',
      component: Demo
    },
    {
      path: '/*',
      name: 'Errors',
      component: Errors
    }
  ]
})
