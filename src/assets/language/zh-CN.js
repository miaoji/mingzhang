import cashier from './cn/cashier'
import orderdetail from './cn/orderdetail'
import directmail from './cn/directmail'
import userindex from './cn/userindex'
import ordersend from './cn/ordersend'
import headers from './cn/headers'

export default {
  cashier,
  orderdetail,
  directmail,
  headers,
  ordersend,
  userindex,
  // 页面中显示的文字
  pages: {
    index: {
      quality: '服务优势',
      reasonable: '性价比高',
      highly: '专业性强',
      unrestrained: '自主灵活'
    }
  },
  // 组件中显示的文字
  components: {
    footer: {
      helper: {
        question: '疑难解答',
        object: '禁运物品'
      }
    }
  }
}
