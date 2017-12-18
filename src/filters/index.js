export const formatedatestamp = function (timpstamp) {
  if (!timpstamp) {
    return ''
  }
  let date = new Date(Number(timpstamp))
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month >= 10 ? month : '0' + month
  let day = date.getDate()
  day = day >= 10 ? day : '0' + day
  let h = date.getHours()
  h = h >= 10 ? h : '0' + h
  let m = date.getMinutes()
  m = m >= 10 ? m : '0' + m
  let s = date.getSeconds()
  s = s >= 10 ? s : '0' + s
  return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s
}

export const orderstatus = function (val) {
  // 状态 0 刚创建 1待付款，2付款完成，3国内完成，4国外完成，5异常订单，6取消订单
  const ordersta = {
    0: '待付款',
    1: '待付款',
    2: '待收货',
    3: '待收货',
    4: '已完成',
    5: '异常',
    6: '已取消',
    7: '发往机场'
  }
  return ordersta[val]
}

export const statuscontent = function (val) {
  // 状态 0 刚创建 1待付款，2付款完成，3国内完成，4国外完成，5异常订单，6取消订单
  const ordersta = {
    0: '订单已经创建，等待买家付款',
    1: '订单已经创建，等待买家付款',
    2: '付款完毕，等待发货',
    3: '已发货，待收货',
    4: '已发货，待收货',
    5: '异常',
    6: '已取消',
    7: '发往机场'
  }
  return ordersta[val]
}
