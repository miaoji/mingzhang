// 订单

let url
// 本地
url = 'http://192.168.0.231:8077'
// 线上正式版
// url = 'http://api.mingz-tech.com'
// 线上测试版
// url = 'http://api.didalive.net/'

export const order = {
  getOrderInfoByOrderNo: `${url}/api/orderInfo/getOrderInfoByOrderNo`,
  queryByCompany: `${url}/api/order/queryByCompany`,
}

export const user = {
	token: `${url}/login/getToken` 
}