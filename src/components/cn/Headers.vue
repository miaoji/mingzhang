<template>
  <div class="header_nav">
    <ul class="w clear">
      <li class="left">
        <router-link to="/"><img src="/static/image/logo.png"/><span class="logo">上海明彰网络科技有限公司</span></router-link>
      </li>
      <li class="right language">
        <a href="javascript:;">Language</a>
        <a href="javascript:;">|</a>
        <router-link :to="location">English</router-link>
        <div class="login">
          <el-button type="info" icon="login" @click="wxLogin">登录</el-button>
        </div>
      </li>
    </ul>
    <div class="header_nav_item" :class="{ toptoptop: addClass }">
      <ul class="w clear">
        <li class="left">
          <router-link to="/">首页</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/ordersend">我要寄件</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/prescription">参考时效</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/site">服务站点</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/introduce">关于我们</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/send">寄件流程</router-link>
        </li>
        <li class="left">
          <router-link to="/cn/user/directmail">个人中心</router-link>
        </li>
      </ul>
    </div>
    <el-dialog
      title=""
      :visible.sync="loginContainerVisible"
      width="25%"
      center>
      <div>
        <div id="login-container">

        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {storage} from '@/utils'

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header',
      addClass: false,
      loginContainerVisible: false,
      location: '/en/index'
    }
  },
  created () {
    this.menu()
    if (location.pathname !== '' && location.pathname !== '/' && location.pathname !== '/cn' && location.pathname !== '/cn/') {
      this.location = '/en/' + location.pathname.split('/cn/')[1]
    }
  },
  methods: {
    menu () {
      window.scrollTo(0, 0)
    },
    wxLogin () {
      const browserId = storage({
        type: 'get',
        key: 'browserId'
      })
      const redirectUri = encodeURIComponent('http://api.mingz-tech.com/OAuth')
      const state = `web${browserId}`
      const wxLoginUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=wx9eca964047cb260f&redirect_uri=${redirectUri}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`
      const webSocketUrl = `ws://api.mingz-tech.com/webSocket/${state}`
      const websocket = new WebSocket(webSocketUrl)
      websocket.onmessage = function (event) {
        alert(event.data)
      }
      window.open(wxLoginUrl, '', 'top=0,left=0,width=600,height=600')
      // this.loginContainerVisible = true
      // setTimeout(function () {
      //   /* eslint-disable no-new */
      //   new window.WxLogin({
      //     id: 'login-container',
      //     appid: 'wx9eca964047cb260f',
      //     scope: 'snsapi_login',
      //     redirect_uri: redirectUri,
      //     state: state,
      //     style: '',
      //     href: ''
      //   })
      // }, 500)
    }
  },
  mounted () {
    let _this = this
    window.onscroll = function () {
      if (document.documentElement.scrollTop > 115) {
        _this.addClass = true
      } else {
        _this.addClass = false
      }
    }
  },
  watch: {
    '$route' (to) {
      if (to.fullPath.split('/cn/').length > 1) {
        this.location = '/en/' + to.fullPath.split('/cn/')[1]
      } else {
        this.location = '/en/index'
      }
    }
  }
}
</script>

<style scoped>
  .login {
    float: right;
    height: inherit;
    line-height: 78px;
  }

  #login-container {
    text-align: center;
  }

  /*头部导航栏*/
  .header_nav {
    background-color: #fff;
    /*width: 100vw;*/
  }

  .header_nav > ul {
    height: 110px;
    overflow: hidden;
  }

  .header_nav > ul > li {
    height: inherit;
    list-style: none;
    margin-left: 85px;
  }

  .header_nav > ul > li:first-child {
    margin-left: 0px;
  }

  .header_nav > ul > li > span {
    display: inline-block;
    /*line-height: 80px;*/
    font-size: 18px;
  }

  .header_nav > ul > li > a {
    line-height: 80px;
    font-size: 18px;
    color: #3c3c3c;
    text-decoration: none;
  }

  .header_nav > ul > li > a:hover {
    color: #ff525e;
  }

  .header_nav > ul > li > a > img {
    height: 60px;
    margin: 25px 0px;
  }

  .header_nav > ul > li > a > span.logo {
    line-height: 80px;
    position: relative;
    top: -44px;
    left: 15px;
    font-size: 24px;
    color: #03061f;
    font-weight: 600;
  }

  /*横向导航栏*/

  .header_nav > .header_nav_item {
    height: 75px;
    background: -webkit-linear-gradient(#494949, #1d1d1d); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#494949, #1d1d1d); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#494949, #1d1d1d); /* Firefox 3.6 - 15 */
    background: linear-gradient(#494949, #1d1d1d); /* 标准的语法 */
  }
  .header_nav > .header_nav_item > ul {
    list-style: none;
    font-size: 14px;
  }

  .header_nav > .header_nav_item > ul > li {
    margin-right: 20px;
    /* padding: 0px 10px; */
  }

  .header_nav > .header_nav_item > ul > li > a {
    line-height: 75px;
    padding: 10px 20px;
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 5px;
    color: #fff;
  }

  .header_nav > .header_nav_item > ul > li > a:hover {
    color: #ff1919;
  }

  /* 回到首页按钮 */
  .header_nav > ul > li.language {
    margin-top: 18px;
  }

  .header_nav > ul > li.language > a {
    margin-right: 10px;
    color: #313131;
    font-size: 13px;
  }

  .header_nav > ul > li.language > a:hover {
    color: #313131;
  }

  .header_nav > ul > li.btn {
  }

  .header_nav > ul > li.btn > a {
    padding: 5px 10px;
    font-size: 16px;
    background-color: #333;
    color: #fff;
    position: relative;
    left: -22px;
  }
</style>
