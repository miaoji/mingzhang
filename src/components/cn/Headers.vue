<template>
  <div class="header_nav">
    <ul class="w clear">
      <li class="left">
        <router-link :to="this.href+'index'"><img src="/static/image/logo.jpg" alt="网站logo"/><span class="logo">{{$t('message.headers.t1')}}</span></router-link>
      </li>
      <li class="right language">
        <div class='switch'>
          <el-dropdown>
            <span class="el-dropdown-link">
              {{$t('message.headers.t2')}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="location">
                <el-dropdown-item>
                  {{$t('message.headers.t3')}}
                </el-dropdown-item>
              </router-link>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </li>
      <li class="right language">
        <div class="login">
          <el-button class="login_btn" type="text" v-show="!isLogin" @click="wxLogin">{{$t('message.headers.wxLogin')}}</el-button>
          <el-button class="login_btn" type="text" v-show="!isLogin" @click="emailLogin">{{$t('message.headers.EmailLogin')}}</el-button>
          <el-button class="reg_btn" type="text" v-show="!isLogin" @click="handleRegister">{{$t('message.headers.register')}}</el-button>
          <div class="login-icon">
            <el-dropdown trigger="hover">
              <div class="el-dropdown-link">
                <img v-show="isLogin" :onerror="loginimg" :src="userinfo['headimgurl'] || '/static/image/img001.png'" alt="用户头像">
                <span style="margin-left:10px" v-show="isLogin">{{userinfo['nickName'] || ''}}</span>
              </div>
              <el-dropdown-menu slot="dropdown">
                <router-link :to="this.href+'user/directmail'">
                  <el-dropdown-item>
                    <i class="el-icon-location"></i> {{$t('message.headers.t5')}}
                  </el-dropdown-item>
                </router-link>
                <el-dropdown-item>
                  <div @click="handleLoginOut">
                    <i class="el-icon-caret-right"></i> {{$t('message.headers.t6')}}
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </li>
    </ul>
    <div class="header_nav_item" :class="{ toptoptop: addClass }">
      <ul class="w clear">
        <li class="left">
          <router-link :to="this.href+'index'">{{$t('message.headers.t7')}}</router-link>
        </li>
        <li class="left">
          <router-link :to="this.href+'ordersend'" v-show='isLogin'>{{$t('message.headers.t8')}}</router-link>
          <router-link :to="this.href+'orderspare'" v-show='!isLogin'>{{$t('message.headers.t8')}}</router-link>
        </li>
        <li class="left">
          <router-link :to="this.href+'prescription'">{{$t('message.headers.t9')}}</router-link>
        </li>
        <li class="left">
          <router-link :to="this.href+'site'">{{$t('message.headers.t10')}}</router-link>
        </li>
        <li class="left">
          <router-link :to="this.href+'introduce'">{{$t('message.headers.t11')}}</router-link>
        </li>
        <li class="left">
          <router-link :to="this.href+'send'">{{$t('message.headers.t12')}}</router-link>
        </li>
      </ul>
    </div>
    <el-dialog
      title=""
      :visible.sync="loginContainerVisible"
      width="25%"
      center>
      <div>
        <div id="login-container"></div>
      </div>
    </el-dialog>
    <transition name="el-fade-in">
      <login v-if="loginShow" :showLogin="()=>{this.loginShow = !this.loginShow}" :showReg="()=>{this.regShow = !this.regShow}" />
    </transition>
    <transition name="el-fade-in">
      <reg v-if="regShow" :showReg="()=>{this.regShow = !this.regShow}" :showLogin="()=>{this.loginShow = !this.loginShow}" />
    </transition>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { storage } from '@/utils'
import { saveOpenid } from '@/utils/user'
import Login from '@/components/login'
import Reg from '@/components/register'

export default {
  name: 'Header',
  components: {
    Login,
    Reg
  },
  data() {
    return {
      loginShow: false,
      regShow: false,
      loginimg: 'this.src="/static/image/img001.png"',
      msg: 'Header',
      addClass: false,
      loginContainerVisible: false,
      location: '/en/index',
      href: window.sessionStorage.locale || '/cn/'
    }
  },
  created() {
    this.menu()
    if (location.pathname !== '' && location.pathname !== '/') {
      this.location = (this.href === '/cn/' ? '/en/' : '/cn/') + location.href.split(this.href)[1]
    }
  },
  computed: {
    ...mapGetters({
      'isLogin': 'getLoginStatus',
      'userinfo': 'getUserInfo'
    })
  },
  mounted() {
    let _this = this

    window.onkeydown = function (e) {
      if (e.keyCode === 27) {
        _this.loginShow = false
        _this.regShow = false
      }
    }
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
    menu() {
      window.scrollTo(0, 0)
    },
    emailLogin() {
      this.loginShow = !this.loginShow
      this.loginShow = true
    },
    handleRegister() {
      this.regShow = !this.regShow
    },
    wxLogin() {
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
        saveOpenid({ openid, unionid })
        websocket.close()
        try {
          storage({ type: 'set', key: 'loginType', val: 'wechat' })
          window.location.reload()
        } catch (err) {
          console.error(err)
          _this.$message({
            showClose: true,
            message: this.$t('message.headers.t13'),
            type: 'error'
          })
        }
      }
      const iWidth = 600
      const iHeight = 600
      const iTop = (window.screen.availHeight - 30 - iHeight) / 2
      const iLeft = (window.screen.availWidth - 10 - iWidth) / 2
      window.open(wxLoginUrl, '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft)
    },
    handleLoginOut() {
      this.$confirm(this.$t('message.headers.infotitle'), this.$t('message.headers.prompt'), {
        confirmButtonText: this.$t('message.headers.confirm'),
        cancelButtonText: this.$t('message.headers.cancel'),
        type: 'warning'
      }).then(() => {
        this.loginOut()
        window.location.reload()
      })
    }
  },
  watch: {
    '$route'(to) {
      if (to.fullPath.split(this.href).length > 1) {
        this.location = (this.href === '/cn/' ? '/en/' : '/cn/') + to.fullPath.split(this.href)[1]
      } else {
        this.location = '/en/index'
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login_btn {
  color: #333;
  &:hover {
    color: #f00;
  }
  &:active {
    color: #ff2020;
  }
}
.reg_btn {
  color: #333;
  &:hover {
    color: #f00;
  }
  &:active {
    color: #ff2020;
  }
}
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
}

.header_nav > ul {
  height: 110px;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: 40px;
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

.header_nav > ul > li.btn > a {
  padding: 5px 10px;
  font-size: 16px;
  background-color: #333;
  color: #fff;
  position: relative;
  left: -22px;
}
</style>
