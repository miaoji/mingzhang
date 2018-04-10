<template>
  <div class="login">
    <div class="hader-content">
      <div class="header">
        <div class="left" @click="goIndex">
          <div class="left-item">
            <img src="/static/image/logo.png"/>
          </div>
          <div class="left-item">
            <span class="logo">上海明彰网络科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登录</span>
          </div>
        </div>
        <div class="right">
          <router-link to="/">回到首页</router-link>
          <router-link to="/cn/register">没有账号,前往注册</router-link>
        </div>
      </div>
    </div>
    <div class="login-container">
        <div class="login-container-left">
            <div class="group">
              <div class="input"><input @input='emailBlur' v-model='form.email' placeholder="请输入您的邮箱" type="text" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="emailMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!emailMsg"></i>
              </div>
            </div>
            <div class="msg">{{emailMsg}}</div>
            <div class="group">
              <div class="text">验证码:</div>
              <div class="img"><img :src="codeimg" alt="图片验证码"></div>
              <div class="icon">
                <span @click='getVerificationCode'>{{getCodeInfo}}</span>
              </div>
            </div>
            <div class="group">
              <!-- <div class="text">邮箱验证码</div> -->
              <div class="input"><input @input='codeBlur' v-model='form.code' placeholder="请输入图片验证码信息" type="text" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="codeMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!codeMsg"></i>
              </div>
            </div>
            <div class="msg">{{codeMsg}}</div>
            <div class="group">
              <!-- <div class="text">密码</div> -->
              <div class="input"><input @input='passwordBlur' v-model='form.password' placeholder="请输入您的密码" type="password" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="passwordMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!passwordMsg"></i>
              </div>
            </div>
            <div class="msg">{{passwordMsg}}</div>
            <div class="group">
              <div class="submit" @click='handleLogin'>登录</div>
            </div>
        </div>
        <div class="login-container-right"></div>
    </div>
    <footers />
  </div>
</template>
<script>
import { login as loginService } from '../../services/login'
import Footers from '../../components/cn/Footers'
import { login } from '../../api'
import uuid from 'uuid/v4'
import { storage } from '@/utils'

export default {
  name: 'login',
  components: {
    Footers
  },
  data() {
    return {
      getCodeInfo: '看不清,换一下',
      form: {
        email: '975080391@qq.com',
        password: '123456',
        code: ''
      },
      emailMsg: '',
      codeMsg: '',
      passwordMsg: '',
      codeTime: 30,
      codeimg: '',
      uuid: ''
    }
  },
  created() {
    this.uuid = uuid()
    this.codeimg = `${login.code}?uuid=${this.uuid}`
  },
  methods: {
    goIndex() {
      this.$router.push('/')
    },
    async handleLogin() {
      const { email, password, code } = this.form
      this.emailBlur()
      this.passwordBlur()
      this.codeBlur()
      if (this.emailMsg !== '' || this.codeMsg !== '' || this.passwordMsg !== '') {
        return
      }
      const data = await loginService({ email, code, password, uuid: this.uuid })
      if (data.status === 200) {
        this.$notify({
          title: '提示',
          message: '登录成功',
          type: 'success',
          duration: 5000
        })
        storage({
          type: 'set',
          key: 'userInfo',
          val: JSON.stringify({ ...data.user, token: data.token })
        })
        storage({
          type: 'set',
          key: 'loginType',
          val: 'email'
        })
        const local = window.sessionStorage.getItem('locale')
        this.$router.push(local)
      } else {
        this.$notify({
          title: '提示',
          message: data.msg || '当前网络无法使用',
          type: 'error',
          duration: 5000
        })
      }
    },
    async getVerificationCode() { // 点击获取验证码
      this.uuid = uuid()
      this.codeimg = `${login.code}?uuid=${this.uuid}`
    },
    emailBlur() {
      const { email } = this.form
      if (!email || email === '') {
        this.emailMsg = '邮箱地址不能为空'
      } else {
        const aa = email.search(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
        if (aa < 0) {
          this.emailMsg = '邮箱格式不正确'
        }
      }
    },
    codeBlur() {
      const { code } = this.form
      if (!code || code === '') {
        this.codeMsg = '验证码不能为空'
      } else {
        this.codeMsg = ''
      }
    },
    passwordBlur() {
      const { password } = this.form
      if (!password || password === '') {
        this.passwordMsg = '密码不能为空'
      } else {
        this.passwordMsg = ''
      }
    }
  }
}
</script>
<style scoped lang="less">
.login {
  background-image: url("/static/image/0.jpg");
  // background-color: #fff;
  background-repeat: no-repeat;
  background-size: 740px auto;
  background-position: 7% 39%;
  .hader-content {
    width: 100%;
    box-shadow: 0px 0px 5px #888888;
    .header {
      width: 1300px;
      margin: auto;
      zoom: 1;
      &:after {
        content: "";
        height: 0;
        line-height: 0;
        display: block;
        visibility: hidden;
        clear: both;
      }
      .right {
        float: right;
        a {
          color: #03a9f4;
          line-height: 80px;
          padding-left: 20px;
        }
      }
      .left {
        cursor: pointer;
        float: left;
        height: 80px;
        overflow: hidden;
        width: auto;
        .left-item {
          float: left;
          img {
            height: 60px;
            margin: 10px 0;
          }
          span {
            padding-left: 20px;
            line-height: 80px;
            font-size: 24px;
            color: #03061f;
            font-weight: 600;
          }
        }
      }
    }
  }

  &-container {
    margin: auto;
    width: 1300px;
    zoom: 1;
    &:after {
      content: "";
      height: 0;
      line-height: 0;
      display: block;
      visibility: hidden;
      clear: both;
    }
    &-left {
      float: right;
      margin-right: 50px;
      margin-top: 60px;
      margin-bottom: 60px;
      box-shadow: 0px 0px 5px #888888;
      background-color: #fffc;
      width: 400px;
      padding: 50px;
      .msg {
        height: 30px;
        width: 100%;
        font-size: 14px;
        color: red;
        padding-left: 30px;
        box-sizing: content-box;
      }
      .group {
        border-bottom: 1px #ddd solid;
        height: 54px;
        line-height: 54px;
        margin: auto;
        background-color: #fff;
        &:first-child {
          margin-top: 0px;
        }
        .text {
          color: #666;
          width: 23%;
          padding-left: 30px;
          float: left;
        }
        .img {
          float: left;
          height: 50px;
          img {
            height: inherit;
          }
        }
        .input {
          width: 58%;
          box-sizing: content-box;
          float: left;
          input {
            padding-left: 30px;
            width: 100%;
            border: none;
            outline: none;
          }
        }
        .icon {
          span {
            cursor: pointer;
          }
          .el-icon-circle-close-outline {
            color: red;
          }
          .el-icon-circle-check-outline {
            color: green;
          }
          padding-right: 28px;
          float: right;
          font-size: 14px;
          color: #03a9f4;
        }
        .submit {
          cursor: pointer;
          height: 54px;
          background-color: #f00;
          text-align: center;
          line-height: 54px;
          color: #fff;
          font-size: 14px;
          user-select: none;
          &:hover {
            background-color: #dd0000;
          }
          &:active {
            background-color: #aa0000;
          }
        }
      }
    }
    &-right {
      float: right;
      height: 100%;
      width: 50%;
    }
  }
}
</style>
