<template>
  <div class="header_nav">
    <ul class="w clear">
      <li class="left">
        <router-link to="/en/"><img src="/static/image/logo.png"/><span
          class="logo">International Express Service Center</span></router-link>
      </li>
      <li class="right language">
        <div class='switch'>
          <el-dropdown>
            <span class="el-dropdown-link">
              语言<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="location">
                <el-dropdown-item>
                  中文
                </el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
      <li class='right language'>
        <div class="login">
          <el-button type="text" icon="login" v-show="!isLogin" @click="wxLogin">登录</el-button>
          <div class="login-icon">
            <el-dropdown trigger="hover">
              <div class="el-dropdown-link">
                <img v-show="isLogin" :src="userinfo['headimgurl'] || '/static/image/timg.jpg'" alt="用户头像">
              </div>
              <el-dropdown-menu slot="dropdown">
                <router-link to="/cn/user/directmail">
                  <el-dropdown-item>
                    <i class="el-icon-location"></i> 个人中心
                  </el-dropdown-item>
                </router-link>
                <el-dropdown-item>
                  <div @click="handleLoginOut">
                    <i class="el-icon-caret-right"></i> 登出
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </li>
    </ul>
    <div class="header_nav_item">
      <ul class="w clear">
        <li class="left">
          <router-link to="/en/index">HOME</router-link>
        </li>
        <li class="left">
          <router-link to="/en/send">SEND&nbsp;&nbsp;OUT</router-link>
        </li>
        <li class="left">
          <router-link to="/en/prescription">REFERENCE&nbsp;&nbsp;TIME</router-link>
        </li>
        <li class="left">
          <router-link to="/en/site">SERVICE&nbsp;&nbsp;SITE</router-link>
        </li>
        <li class="left">
          <router-link to="/en/introduce">ABOUT&nbsp;&nbsp;US</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import {storage} from '@/utils'
import {saveOpenid} from '@/utils/user'

export default {
  name: 'Header',
  data () {
    return {
      msg: 'Header',
      addClass: false,
      loginContainerVisible: false,
      location: '/cn/index'
    }
  },
  created () {
    this.menu()
    if (location.pathname !== '' && location.pathname !== '/' && location.pathname !== '/en' && location.pathname !== '/en/') {
      console.log(location)
      this.location = '/cn/' + location.href.split('/en/')[1]
    } else {
      this.location = '/cn/index/'
    }
    console.log('ss', this.location)
  },
  computed: {
    ...mapGetters({
      'isLogin': 'getLoginStatus',
      'userinfo': 'getUserInfo'
    })
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
  methods: {
    ...mapActions([
      'setUserInfo',
      'loginOut'
    ]),
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
      const _this = this
      websocket.onmessage = async function (event) {
        const eventData = JSON.parse(event.data)
        const openid = eventData.openidWeb
        const unionid = eventData.unionid
        saveOpenid({openid, unionid})
        websocket.close()
        try {
          const res = await _this.setUserInfo({openid, unionid, type: 1})
          _this.$message({
            showClose: true,
            ...res
          })
          setTimeout(() => {
            window.location.reload()
          }, 20)
        } catch (err) {
          console.error(err)
          _this.$message({
            showClose: true,
            message: '登录失败，请检测您的网络是否连接正常',
            type: 'error'
          })
        }
      }
      window.open(wxLoginUrl, '', 'top=0,left=0,width=600,height=600')
    },
    handleLoginOut () {
      const res = window.confirm('确定要登出吗?')
      if (res) {
        this.loginOut()
        window.location.reload()
      }
    }
  },
  watch: {
    isLogin (val) {
      if (this.$route.fullPath === '/cn/ordersend' && val === false) {
        this.$router.push({path: '/cn/orderspare'})
      }
      if (this.$route.fullPath === '/cn/orderspare' && val === true) {
        this.$router.push({path: '/cn/ordersend'})
      }
    },
    '$route' (to) {
      console.log('to', to)
      if (to.fullPath.split('/en/').length > 1) {
        this.location = '/cn/' + to.fullPath.split('/en/')[1]
      } else {
        this.location = '/cn/index'
      }
    }
  }
}
</script>

<style lang='less'>
  .login {
    padding-top: 18px;
    .login-icon {
      cursor: pointer;
      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
  }
  .switch {
    padding-top: 25px;
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
    margin-left: 20px;
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
