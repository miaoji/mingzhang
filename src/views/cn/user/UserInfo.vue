<template>
  <div class="userinfo">
    <div class="content">
      <div class="user_img"><img :src="user.headimgurl || '/static/image/img001.png'" alt=""></div>
      <div>用户名: {{user.nickName}}</div>
      <div>客户编码: {{user.customerNo || '暂无'}}</div>
      <div>邮箱: {{user.email}}<el-button v-if="!user.email" @click="handleCilck()" type="text">[关联已有邮箱]</el-button></div>
      <div>绑定微信号: <img src="/static/image/wechart.png" alt="明彰"><span v-if="user.unionid">已绑定</span><el-button v-if="!user.unionid" @click="handleCilck()" type="text">[关联账号]</el-button></div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api'
// import { storage } from '@/utils'
import { mapGetters } from 'vuex'
export default {
  name: 'userinfo',
  data() {
    return {
      wxLoginUrl: ''
    }
  },
  computed: {
    ...mapGetters({
      'isLogin': 'getLoginStatus',
      'user': 'getUserInfo'
    })
  },
  created() {
    if (this.isLogin === false) {
      this.$router.push('/')
    }
    console.log('userinfo', this.user)
    // console.log('this.wxLoginUrl', this.wxLoginUrl)
    // this.user = JSON.parse(storage({ type: 'get', key: 'userInfo' }))
    // console.log(storage({ type: 'get', key: 'userInfo' }))
  },
  methods: {
    handleCilck() {
      const url = encodeURIComponent(login.bindingEmail)
      const state = this.user.email
      this.wxLoginUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=wx9eca964047cb260f&redirect_uri=${url}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`

      const webSocketUrl = `ws://api.mingz-tech.com/webSocket/${state}`
      const websocket = new WebSocket(webSocketUrl)
      const _this = this
      websocket.onmessage = async function (event) {
        const res = JSON.parse(event.data)
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: '关联成功!'
          })
          websocket.close()
        } else {
          this.$confirm('此微信号关联邮箱需要选择是否合并用户！！！', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
          websocket.close()
        }
        // const eventData = JSON.parse(event.data)
        // const openid = eventData.openidWeb
        // const unionid = eventData.unionid
        // saveOpenid({ openid, unionid })
        try {
          // setTimeout(() => {
          //   window.location.reload()
          // }, 30)
          // storage({ type: 'set', key: 'loginType', val: 'wechat' })
        } catch (err) {
          console.error(err)
          _this.$message({
            showClose: true,
            message: '失败',
            type: 'error'
          })
        }
      }
      const iWidth = 600
      const iHeight = 600
      const iTop = (window.screen.availHeight - 30 - iHeight) / 2
      const iLeft = (window.screen.availWidth - 10 - iWidth) / 2
      window.open(this.wxLoginUrl, '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft)
    }
  }
}
</script>
<style scoped lang="less">
.userinfo {
  height: 800px;
  padding-top: 30px;
  .content {
    box-shadow: 0px 0px 10px #888888;
    padding: 40px;
    text-align: center;
    .user_img {
      height: 120px;
      width: 120px;
      margin: auto;
      border-radius: 50%;
      overflow: hidden;
      padding: 0px;
      img {
        padding: 0px;
        width: inherit;
        height: inherit;
      }
    }
    div {
      height: 60px;
      line-height: 60px;
      img {
        height: 30px;
        cursor: pointer;
        padding: 0px 10px;
      }
    }
  }
}
</style>
