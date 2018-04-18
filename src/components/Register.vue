<template>
  <div class="register" v-if="regShow">
    <div class="register-container">
        <div class="register-container-left">
          <div class="header">
            <span class="left">用户注册</span>
            <span class="right"><i @click="()=>{this.regShow = false}" class="el-icon-circle-close-outline"></i></span>
          </div>
            <div class="group">
              <div class="input">
                <input type="text" @input='usernameBlur' v-model='form.username' placeholder='请输入您的用户名' />
              </div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="usernameMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!usernameMsg"></i>
              </div>
            </div>
            <div class="msg">{{usernameMsg}}</div>
            <div class="group">
              <div class="input"><input @input='emailBlur' v-model='form.email' placeholder="请输入您的邮箱" type="text" /></div>
              <div class="icon">
                <span @click='getVerificationCode'>{{getCodeInfo}}</span>
                <i class="el-icon-circle-close-outline" v-if="emailMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!emailMsg"></i>
              </div>
            </div>
            <div class="msg">{{emailMsg}}</div>
            <div class="group">
              <!-- <div class="text">邮箱验证码</div> -->
              <div class="input"><input @input='codeBlur' v-model='form.code' placeholder="请输入您的邮箱验证码" type="text" /></div>
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
              <!-- <div class="text">确认密码</div> -->
              <div class="input"><input @change='repassBlur' v-model='form.repass' placeholder="请确认您的密码" type="password" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="repassMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!repassMsg"></i>
              </div>
            </div>
            <div class="msg">{{repassMsg}}</div>
            <div class="group">
              <div class="submit" @click='handleRegister'>点击注册</div>
            </div>
        <div class="footer">
          <span @click="handleReg">已有账号,前往登陆</span>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import { getEmailCode, reg } from '@/services/register'
import { storage } from '@/utils'

export default {
  name: 'register',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    showLogin: {
      type: Function
    }
  },
  data() {
    return {
      getCodeInfo: '获取邮箱验证码',
      form: {
        username: '',
        email: '',
        password: '',
        repass: '',
        code: ''
      },
      regShow: true,
      usernameMsg: '',
      emailMsg: '',
      codeMsg: '',
      passwordMsg: '',
      repassMsg: '',
      codeTime: 30
    }
  },
  watch: {
    show(val) {
      this.regShow = true
      this.form = {
        username: '',
        email: '',
        password: '',
        repass: '',
        code: ''
      }
      this.usernameMsg = ''
      this.emailMsg = ''
      this.codeMsg = ''
      this.passwordMsg = ''
      this.repassMsg = ''
    }
  },
  created() {
  },
  mounted() {
    const _this = this
    window.onkeydown = null
    window.onkeydown = function (e) {
      if (e.keyCode === 27) {
        _this.regShow = false
      }
    }
  },
  methods: {
    handleReg() {
      this.regShow = false
      this.showLogin()
    },
    async handleRegister() {
      const { username, email, password, code } = this.form
      this.usernameBlur()
      this.emailBlur()
      this.passwordBlur()
      this.repassBlur()
      this.codeBlur()
      if (this.usernameMsg !== '' || this.emailMsg !== '' || this.codeMsg !== '' || this.passwordMsg !== '' || this.repassMsg !== '') {
        return
      }
      const data = await reg({ name: username, email, code, password })
      if (data.code === 200) {
        this.$notify({
          title: '提示',
          message: '注册成功,自动登录',
          type: 'success',
          duration: 5000
        })
        storage({
          type: 'set',
          key: 'userInfo',
          val: JSON.stringify({ ...data.obj, token: data.token })
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
      if (this.getCodeInfo !== '获取邮箱验证码') {
        this.$notify({
          title: '提示',
          message: '距离上次获取验证码时间太近',
          type: 'info',
          duration: 5000
        })
        return
      }
      this.$notify({
        title: '提示',
        message: '正在发送验证码',
        type: 'info',
        duration: 5000
      })
      const data = await getEmailCode({ email: this.form.email })
      if (data.code === 200) {
        this.$notify({
          title: '提示',
          message: '验证发送成功',
          type: 'success',
          duration: 5000
        })
        const time = window.setInterval(() => {
          this.getCodeInfo = `请在${this.codeTime}秒后重试`
          this.codeTime--
          if (this.codeTime === 0) {
            window.clearInterval(time)
            this.getCodeInfo = '获取邮箱验证码'
            this.codeTime = 30
          }
        }, 1000)
      } else {
        this.$notify({
          title: '提示',
          message: '验证码发送失败,请重试',
          type: 'error',
          duration: 5000
        })
      }
    },
    usernameBlur() {
      const { username } = this.form
      if (!username || username === '') {
        this.usernameMsg = '用户名不能为空'
      } else {
        this.usernameMsg = ''
      }
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
        return
      }
      var aLvTxt = ['密码长度过短', '密码需要同时含有数字和字母', '']
      var lv = 0
      if (password.match(/[a-z]/g)) { lv++ }
      if (password.match(/[0-9]/g)) { lv++ }
      if (password.length < 6) { lv = 0 }
      if (lv > 3) { lv = 3 }
      this.passwordMsg = aLvTxt[lv]
    },
    repassBlur() {
      const { repass, password } = this.form
      if (repass !== password) {
        this.repassMsg = '两次输入的密码不一致'
      } else {
        this.repassMsg = ''
      }
    }
  }
}
</script>
<style scoped lang="less">
.register {
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
