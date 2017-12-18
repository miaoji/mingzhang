// 订单

let API
// 本地
API = 'http://192.168.0.231:8077'
// 线上测试版
// API = 'http://api.didalive.net/mzkd'

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
}

// 用户信息
export const user = {
	token: `${API}/login/getToken` 
}

//国家信息
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
	modDefault: `${API}/api/receiveAddr/modReceiveAddressById`,
/*	prov=0&
	city=0&
	county=0&
	country=44&
	name=123&
	postcode=321&
	mobile=18255458650&
	address=123&
	isDefault=1&
	remark=3213123&
	wxUserId=212
*/
}

// 用户寄件地址地址信息
export const sender = {
	show: `${API}/api/mailingAddr/index`,
	add: `${API}/api/mailingAddr/add`,
	del: `${API}/api/mailingAddr/delMailingAddressById`,
/*	prov:0
	city:0
	county:0
	country:44
	name:123
	postcode:123
	mobile:13122302222
	address:123
	isDefault:1
	remark:1231
	wxUserId:212
*/
	modDefault: `${API}/api/mailingAddr/modMailingAddressById`,
	/*id=263&
	isDefault=1&
	wxUserId=212*/
}

// 获取预付款信息
// /api/intlPrice/getIntlPrice?weight=1&countryId=44&productTypeId=46&packageTypeId=86
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

// wx
export const wx = {
  // trade_type  = NATIVE`
	getPayQr: `${API}/api/pay/pay`
}

// 帖子
export const posts = {
	query: `${BBS_API}/bbs/articles/`,
	save: `${BBS_API}/api/orderInfo/add`,
	show: `${BBS_API}/api/orderInfo/getOrderInfoById`,
	update: `${BBS_API}/api/orderInfo/modOrderInfoById`,
	delete: `${BBS_API}/api/orderInfo/delOrderInfoById`
}
