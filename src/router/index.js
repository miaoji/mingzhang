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
import News from '@/components/news/News'       // 新闻动态
import new1 from '@/components/news/new1'       // 新闻动态
import new2 from '@/components/news/new2'       // 新闻动态
import new3 from '@/components/news/new3'       // 新闻动态
import new4 from '@/components/news/new4'       // 新闻动态
import new5 from '@/components/news/new5'       // 新闻动态

Vue.use(Router)

export default new Router({
  routes: [
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
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/News',
      name: 'News',
      component: News
    },
    {
      path: '/new1',
      name: 'new1',
      component: new1
    },
    {
      path: '/new2',
      name: 'new2',
      component: new2
    },
    {
      path: '/new3',
      name: 'new3',
      component: new3
    },
    {
      path: '/new4',
      name: 'new4',
      component: new4
    },
    {
      path: '/new5',
      name: 'new5',
      component: new5
    }
  ]
})
