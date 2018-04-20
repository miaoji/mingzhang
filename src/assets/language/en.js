import cashier from './en/cashier'
import orderdetail from './en/orderdetail'
import directmail from './en/directmail'
import userindex from './en/userindex'
import ordersend from './en/ordersend'
import headers from './en/headers'
import login from './en/login'

export default {
  cashier,
  orderdetail,
  directmail,
  headers,
  ordersend,
  userindex,
  login,
  pages: {
    index: {
      quality: 'q',
      reasonable: 'r',
      highly: 'h',
      unrestrained: 'u'
    }
  },
  components: {
    footer: {
      helper: {
        question: 'q',
        object: 'o'
      }
    }
  }
}
