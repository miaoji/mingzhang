<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import { getToken } from '@/services/token'
// import md5 from 'js-md5'
import { gettoken as getToken } from '@/utils'

export default {
  name: 'app',
  data(){
    return {
      wid:'width:1024px'
    }
  },
  methods: {
  },
  beforeCreate(){
    getToken()
  },
  created() {
    if (process.env.NODE_ENV === 'development') {
      window.localStorage.setItem('mj_headimgurl', '//wx.qlogo.cn/mmopen/x9caeaMpHoWcicDmIZs0Ovicuibe1H0icp57ndKcmv4Rz0xB6khyCeSbN3miagPMuyHpia1JHraN9btZDAZibEBlaKJKkYiaGnDjic0Gic/0')
      window.localStorage.setItem('mj_nickname', 'winner')
      window.localStorage.setItem('mj_customerNo', 'MZA10235400')
      // window.localStorage.setItem('mj_openid', 'oPg2ZwiH1ASA_EiAj10XHcB2qgcM')
      window.localStorage.setItem('mj_openid', 'oPg2ZwgwuALccM_V8UIW4qmhkOwo')
      // window.localStorage.setItem('mj_mobile', '17602180495')
      window.localStorage.setItem('mj_mobile', '12345678900')
      window.localStorage.setItem('mj_userId', '212')
      window.localStorage.setItem('mj_token', 'eyJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoiMTUxMzU3MzYyMzE3OSIsIm5vbmNlU3RyIjoiYjUxZjJkZjExZTUzZjVkNjA5ZmMzZDVlNDE4OTVmZWIiLCJ0aW1lc3RhbXAiOiIxNTEzNTczNjM3ODk5In0.X9UfmESFLircstxDM8zCwdF70sFWVeFw2Q7tzZfHLAg')
      return
    }
    if (document.body.offsetWidth<1300) {
      document.body.style.width='1300px'
    }else{
      this.wid='width:'+document.body.offsetWidth+'px'
    }
  },
}
</script>

<style>
@import './assets/styles/colors.less';
@import './assets/styles/helpers.less';
@import './assets/styles/vars.less';

body {
  padding: 0px;
  margin: 0px;
  background-color: #fff;
  font-family: "微软雅黑";
}

a{
  text-decoration: none;
  color: inherit;
}
</style>
