import cashier from './en/cashier'
import orderdetail from './en/orderdetail'
import directmail from './en/directmail'
import userindex from './en/userindex'
import ordersend from './en/ordersend'

export default {
  cashier,
  orderdetail,
  directmail,
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
