// 订单

let API
// 本地
// API = 'http://192.168.0.231:8077'
// 线上正式版
// API = 'http://api.mingz-tech.com'
// 线上测试版
API = 'http://api.didalive.net/mzkd/'

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
	show: `${API}/api/productType/index`
}