let API
// 本地
// API = 'http://192.168.231.239:8077'
// 线上测试版
// API = 'http://api.didalive.net/mzkd'
// 正式线上
API = 'http://api.mingz-tech.com'

let BBS_API

BBS_API = 'http://localhost:8000'

// 线上正式版
if (process.env.NODE_ENV === 'production') {
  API = 'http://api.mingz-tech.com'
  BBS_API = 'http://localhost:8000'
}
// 订单信息
export const order = {
  getOrderInfoByOrderNo: `${API}/api/orderInfo/getOrderInfoByOrderNo`,
  queryByCompany: `${API}/api/order/queryByCompany`,
  add: `${API}/api/orderInfo/add`,
  addCargo: `${API}/api/orderInfo/addCargo`,
  getByOrderId: `${API}/api/route/getByOrderId`
}

// 用户信息
export const user = {
  token: `${API}/login/getToken`,
  // get query {openid: oPg2ZwiH1ASA_EiAj10XHcB2qgcM}
  show: `${API}/login/wxLogin`
}

// 国家信息
export const country = {
  show: `${API}/api/country/index`,
  cascade: `${API}/api/country/provCityCountyList`
}

// 省份信息
export const province = {
  show: `${API}/api/provinces/index`
}

// 市级信息
export const city = {
  show: `${API}/api/cities/index`
}

// 县区信息
export const county = {
  show: `${API}/api/districts/index`
}

// 包裹类型
export const packages = {
  // 根据国家Id包裹类型
  show: `${API}/api/packageType/getPackageTypeByCountry`
}

// 产品类型
export const product = {
  show: `${API}/api/productType/getProductByPackage`
}

// 用户收件地址地址信息
export const receive = {
  show: `${API}/api/receiveAddr/index`,
  add: `${API}/api/receiveAddr/add`,
  del: `${API}/api/receiveAddr/delReceiveAddressById`,
  update: `${API}/api/receiveAddr/modReceiveAddressById`,
  modDefault: `${API}/api/receiveAddr/modReceiveAddressById`,
  // 通过收件地址id查询地址信息
  getReceiveAddressById: `${API}/api/receiveAddr/getReceiveAddressById`
}

// 用户寄件地址地址信息
export const sender = {
  show: `${API}/api/mailingAddr/index`,
  add: `${API}/api/mailingAddr/add`,
  del: `${API}/api/mailingAddr/delMailingAddressById`,
  update: `${API}/api/mailingAddr/modMailingAddressById`,
  getMailingAddressById: `${API}/api/mailingAddr/getMailingAddressById`,
  modDefault: `${API}/api/mailingAddr/modMailingAddressById`
}

// 获取预付款信息
export const getIntlPrice = {
  show: `${API}/api/intlPrice/getIntlPrice`
}

// 直邮订单
export const directMail = {
  query: `${API}/api/orderInfo/index`,
  save: `${API}/api/orderInfo/add`,
  show: `${API}/api/orderInfo/getOrderInfoById`,
  update: `${API}/api/orderInfo/modOrderInfoById`,
  delete: `${API}/api/orderInfo/delOrderInfoById`
}

// 帖子
export const posts = {
  query: `${BBS_API}/bbs/articles/`,
  save: `${BBS_API}/api/orderInfo/add`,
  show: `${BBS_API}/api/orderInfo/getOrderInfoById`,
  update: `${BBS_API}/api/orderInfo/modOrderInfoById`,
  delete: `${BBS_API}/api/orderInfo/delOrderInfoById`
}

// wx
export const wx = {
  // trade_type  = NATIVE`
  getPayQr: `${API}/api/pay/pay`
}

export const register = {
  emailCode: `${API}/login/emailCode`,
  reg: `${API}/login/signUpByMailCode`
}

export const login = {
  code: `${API}/login/imageCode`,
  loginByEmail: `${API}/login/loginByEmail`
}
export const userInfo = {
  bindingEmail: `${API}/bindingEmail`,
  merge: `${API}/api/wxUser/mergeEmailAndWx`,
  bindEmail: `${API}/api/wxUser/updateBindingEmail`
}
