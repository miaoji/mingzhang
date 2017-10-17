// 订单

let url
// 线上正式版
url = 'http://api.mingz-tech.com/'
// 线上测试版
// url = 'http://api.didalive.net/'

export const order = {
  getOrderInfoByOrderNo: url + 'api/orderInfo/getOrderInfoByOrderNo',
  queryByCompany: url + 'api/order/queryByCompany',
}