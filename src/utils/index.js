import { getToken } from '@/services/token'
import md5 from 'js-md5'

export async function beforeCreate(){
    const timestamp = new Date().getTime()
    const nonceStr = md5(timestamp+'winner')
    const key = 'mingz-tech.com'
    const realStr = "nonceStr="+nonceStr+"&timestamp="+timestamp+"&key="+key
    const sign = md5(realStr)
    let data = await getToken({nonceStr, timestamp, sign})
      if(data.stringData!==""){
        if (window.sessionStorage.winnerKey) {
          return
        }else{
          window.sessionStorage.winnerKey=data.stringData
        }
        console.log('成功的', data)
      }else{
        window.sessionStorage.clear()
        console.log('查询失败了',data)
      }
  }