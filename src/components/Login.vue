<template>
  <div class="login" v-if="loginShow">
    <div class="login-container">
      <div class="login-container-left">
        <div class="header">
          <span class="left">用户登录</span>
          <span class="right"><i @click="()=>{this.loginShow = false}" class="el-icon-circle-close-outline"></i></span>
        </div>
          <div class="group">
            <div class="input"><input @input='emailBlur' v-model='form.email' placeholder="请输入您的邮箱" type="text" /></div>
            <div class="icon">
              <i class="el-icon-circle-close-outline" v-if="emailMsg"></i>
              <i class="el-icon-circle-check-outline" v-if="!emailMsg"></i>
            </div>
          </div>
          <div class="msg">{{emailMsg}}</div>
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
            <div class="text">验证码:</div>
            <div class="img"><img :src="codeimg" alt="图片验证码"></div>
            <div class="icon">
              <span @click='getVerificationCode'>{{getCodeInfo}}</span>
            </div>
          </div>
          <div class="msg"></div>
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
            <div class="submit" @click='handleLogin'>点击登录</div>
          </div>
        <div class="footer">
          <span @click="handleReg">没有账号,前往注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login as loginService } from '@/services/login'
import { login } from '@/api'
import uuid from 'uuid/v4'
import { storage } from '@/utils'

export default {
  name: 'login',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showReg: {
      type: Function
    }
  },
  data() {
    return {
      getCodeInfo: '看不清,换一下',
      form: {
        email: '',
        password: '',
        code: ''
      },
      loginShow: false,
      emailMsg: '',
      codeMsg: '',
      passwordMsg: '',
      codeimg: '',
      uuid: ''
    }
  },
  watch: {
    show(val) {
      this.loginShow = true
      this.form = {
        email: '',
        password: '',
        code: ''
      }
      this.emailMsg = ''
      this.codeMsg = ''
      this.passwordMsg = ''
    }
  },
  created() {
    this.uuid = uuid()
    this.codeimg = `${login.code}?uuid=${this.uuid}`
  },
  mounted() {
    const _this = this
    window.onkeydown = function (e) {
      if (e.keyCode === 27) {
        _this.loginShow = false
      }
    }
  },
  methods: {
    handleReg() {
      this.loginShow = false
      this.showReg()
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
        setTimeout(() => {
          window.location.reload()
        }, 30)
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
        } else {
          this.emailMsg = ''
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
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #0006;
  &-container {
    &-left {
      top: 50%;
      left: 50%;
      z-index: 3;
      position: absolute;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      box-shadow: 0px 0px 5px #99999999;
      background-color: #fff;
      width: 400px;
      padding: 0 50px;
      .msg {
        height: 30px;
        width: 100%;
        font-size: 14px;
        color: red;
        padding-left: 30px;
        box-sizing: content-box;
      }
      .header {
        height: 80px;
        line-height: 80px;
        margin-bottom: 20px;
        .left {
          float: left;
        }
        .right {
          float: right;
          font-size: 30px;
          color: #333;
          cursor: pointer;
        }
      }
      .footer {
        height: 70px;
        line-height: 70px;
        text-align: right;
        font-size: 14px;
        color: #03a9f4;
        span {
          cursor: pointer;
          user-select: none;
        }
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
  }
}
</style>
