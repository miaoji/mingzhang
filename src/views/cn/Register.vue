<template>
  <div class="register">
    <div class="header">
      <img src="/static/image/logo.png"/><span class="logo">上海明彰网络科技有限公司</span>
    </div>
    <div class="register-container">
        <div class="register-container-left">
            <div class="group">
              <label>
                <!-- <div class="text">用户名</div> -->
                <div class="input">
                  <input type="text" placeholder='请输入您的用户名' />
                </div>
                <div class="icon"></div>
              </label>
            </div>
            <div class="group">
              <label>
                <!-- <div class="text">邮箱</div> -->
                <div class="input"><input placeholder="请输入您的邮箱" type="text" /></div>
                <div class="icon">发送验证码</div>
              </label>
            </div>
            <div class="group">
              <label>
                <!-- <div class="text">邮箱验证码</div> -->
                <div class="input"><input placeholder="请输入您的邮箱验证码" type="text" /></div>
                <div class="icon"></div>
              </label>
            </div>
            <div class="group">
              <label>
                <!-- <div class="text">密码</div> -->
                <div class="input"><input placeholder="请输入您的密码" type="password" /></div>
                <div class="icon"></div>
              </label>
            </div>
            <div class="group">
                <!-- <div class="text">确认密码</div> -->
                <div class="input"><input placeholder="请确认您的密码" type="password" /></div>
                <div class="icon"></div>
            </div>
            <div class="group">
              <div class="submit">注册</div>
            </div>
        </div>
        <div class="register-container-right"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'register',
  data() {
    return {}
  },
  created() {
  },
  methods: {}
}
</script>
<style scoped lang="less">
.register {
  background-image: url("/static/image/cashier_bg.png");
  // background-color: #fff;
  // background-size: auto 1300px;
  background-position: center;
  // .header {

  // }
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
      float: left;
      margin-top: 20px;
      margin-bottom: 20px;
      box-shadow: 0px 0px 5px #888888;
      background-color: #fffc;
      width: 400px;
      padding: 50px;
      .group {
        border-bottom: 1px #ddd solid;
        height: 54px;
        line-height: 54px;
        margin: 30px auto 0px;
        background-color: #fff;
        &:first-child {
          margin-top: 0px;
        }
        .text {
          width: 23%;
          text-align: right;
          float: left;
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
          padding-right: 28px;
          float: right;
          font-size: 14px;
          color: #03a9f4;
        }
        .submit {
          height: 54px;
          background-color: #f00;
          text-align: center;
          line-height: 54px;
          color: #fff;
          font-size: 14px;
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
