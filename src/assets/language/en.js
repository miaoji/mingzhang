import cashier from './en/cashier'
import orderdetail from './en/orderdetail'
import directmail from './en/directmail'
import userindex from './en/userindex'
import ordersend from './en/ordersend'
import headers from './en/headers'

export default {
  cashier,
  orderdetail,
  directmail,
  headers,
  ordersend,
  userindex,
  pages: {
    index: {
      quality: 'q111',
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
