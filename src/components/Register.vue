<template>
  <div class="register">
    <div class="register-container">
        <div class="register-container-left">
          <div class="header">
            <span class="left">{{$t('message.login.userregister')}}</span>
            <span class="right"><i @click="()=>{showReg()}" class="el-icon-circle-close-outline"></i></span>
          </div>
            <div class="group">
              <div class="input">
                <input type="text" @input='usernameBlur' v-model='form.username' :placeholder="$t('message.login.fillusername')" />
              </div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="usernameMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!usernameMsg"></i>
              </div>
            </div>
            <div class="msg">{{usernameMsg}}</div>
            <div class="group">
              <div class="input"><input @input='emailBlur' v-model='form.email' :placeholder="$t('message.login.fillemail')" type="text" /></div>
              <div class="icon">
                <span @click='getVerificationCode'>{{getCodeInfo}}</span>
                <i class="el-icon-circle-close-outline" v-if="emailMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!emailMsg"></i>
              </div>
            </div>
            <div class="msg">{{emailMsg}}</div>
            <div class="group">
              <!-- <div class="text">邮箱验证码</div> -->
              <div class="input"><input @input='codeBlur' v-model='form.code' :placeholder="$t('message.login.fillemailcode')" type="text" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="codeMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!codeMsg"></i>
              </div>
            </div>
            <div class="msg">{{codeMsg}}</div>
            <div class="group">
              <!-- <div class="text">密码</div> -->
              <div class="input"><input @input='passwordBlur' v-model='form.password' :placeholder="$t('message.login.fillpassword')" type="password" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="passwordMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!passwordMsg"></i>
              </div>
            </div>
            <div class="msg">{{passwordMsg}}</div>
            <div class="group">
              <!-- <div class="text">确认密码</div> -->
              <div class="input"><input @change='repassBlur' v-model='form.repass' :placeholder="$t('message.login.confirmpassword')" type="password" /></div>
              <div class="icon">
                <i class="el-icon-circle-close-outline" v-if="repassMsg"></i>
                <i class="el-icon-circle-check-outline" v-if="!repassMsg"></i>
              </div>
            </div>
            <div class="msg">{{repassMsg}}</div>
            <div class="group">
              <div class="submit" @click='handleRegister'>{{$t('message.login.clickregister')}}</div>
            </div>
        <div class="footer">
          <span @click="handleReg">{{$t('message.login.gologin')}}</span>
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
    showLogin: {
      type: Function
    },
    showReg: {
      type: Function
    }
  },
  data() {
    return {
      getCodeInfo: this.$t('message.login.getemailcode'),
      form: {
        username: '',
        email: '',
        password: '',
        repass: '',
        code: ''
      },
      usernameMsg: '',
      emailMsg: '',
      codeMsg: '',
      passwordMsg: '',
      repassMsg: '',
      codeTime: 30
    }
  },
  methods: {
    handleReg() {
      this.showReg()
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
          title: this.$t('message.login.prompt'),
          message: this.$t('message.login.registersuccess'),
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
          title: this.$t('message.login.prompt'),
          message: data.msg || this.$t('message.login.networkerror'),
          type: 'error',
          duration: 5000
        })
      }
    },
    async getVerificationCode() { // 点击获取验证码
      if (this.getCodeInfo !== this.$t('message.login.getemailcode')) {
        this.$notify({
          title: this.$t('message.login.prompt'),
          message: this.$t('message.login.wait'),
          type: 'info',
          duration: 5000
        })
        return
      }
      this.$notify({
        title: this.$t('message.login.prompt'),
        message: this.$t('message.login.sendcode'),
        type: 'info',
        duration: 5000
      })
      const data = await getEmailCode({ email: this.form.email })
      if (data.code === 200) {
        this.$notify({
          title: this.$t('message.login.prompt'),
          message: this.$t('message.login.codesendsuccess'),
          type: 'success',
          duration: 5000
        })
        const time = window.setInterval(() => {
          this.getCodeInfo = this.$t('message.login.retry', { 'num': this.codeTime })
          this.codeTime--
          if (this.codeTime === 0) {
            window.clearInterval(time)
            this.getCodeInfo = this.$t('message.login.getemailcode')
            this.codeTime = 30
          }
        }, 1000)
      } else {
        this.$notify({
          title: this.$t('message.login.prompt'),
          message: this.$t('message.login.codesenderror'),
          type: 'error',
          duration: 5000
        })
      }
    },
    usernameBlur() {
      const { username } = this.form
      if (!username || username === '') {
        this.usernameMsg = this.$t('message.login.usernamevacant')
      } else {
        this.usernameMsg = ''
      }
    },
    emailBlur() {
      const { email } = this.form
      if (!email || email === '') {
        this.emailMsg = this.$t('message.login.emailvacant')
      } else {
        const aa = email.search(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)
        if (aa < 0) {
          this.emailMsg = this.$t('message.login.emailerror')
        } else {
          this.emailMsg = ''
        }
      }
    },
    codeBlur() {
      const { code } = this.form
      if (!code || code === '') {
        this.codeMsg = this.$t('message.login.codevacant')
      } else {
        this.codeMsg = ''
      }
    },
    passwordBlur() {
      const { password } = this.form
      if (!password || password === '') {
        this.passwordMsg = this.$t('message.login.passwordvacant')
        return
      }
      var aLvTxt = [this.$t('message.login.passwordlv1'), this.$t('message.login.passwordlv2'), '']
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
        this.repassMsg = this.$t('message.login.repasserror')
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
