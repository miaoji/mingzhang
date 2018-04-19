<template>
  <div class="userinfo">
    <div class="content">
      <div class="user_img"><img :src="user.headimgurl || '/static/image/img001.png'" alt=""></div>
      <div>用户名: {{user.nickName}}</div>
      <div>客户编码: {{user.customerNo || '暂无'}}</div>
      <div>邮箱: {{user.email}}<el-button v-if="!user.email" @click="handleEmailCilck()" type="text">[关联邮箱]</el-button></div>
      <div>绑定微信号: <img src="/static/image/wechart.png" alt="明彰"><span v-if="user.unionid">已绑定</span><el-button v-if="!user.unionid" @click="handleCilck()" type="text">[关联账号]</el-button></div>
    </div>
    
    <transition name="el-fade-in">
      <bind-email v-if="regShow" :showReg="()=>{this.regShow = !this.regShow}" />
    </transition>
  </div>
</template>
<script>
import { userInfo as userInfoApi } from '@/api'
import { merge } from '@/services/userInfo'
import { storage } from '@/utils'
import { saveOpenid } from '@/utils/user'
import { mapGetters } from 'vuex'
import BindEmail from '@/components/BindEmail'

export default {
  name: 'userinfo',
  components: {
    BindEmail
  },
  data() {
    return {
      regShow: false,
      wxLoginUrl: '',
      obj: {}
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
  },
  methods: {
    handleEmailCilck() {
      this.regShow = true
    },
    async handleMerge({ wxUserId }) {
      this.$notify.info({
        title: '提示',
        message: '后台正在努力的帮您合并数据!!'
      })
      const res = await merge({ wxUserId, email: this.user.email })
      console.log('resssss', res)
      if (res && res.code === 200) {
        this.$notify({
          title: '合并成功',
          type: 'success'
        })
        const eventData = this.obj
        const openid = eventData.openidWeb
        const unionid = eventData.unionid
        saveOpenid({ openid, unionid })
        storage({ type: 'set', key: 'loginType', val: 'wechat' })
        window.location.reload()
      } else {
        this.$notify({
          title: res.msg || '当前网络暂时无法使用, 请刷新页面查看结果',
          type: 'error'
        })
      }
    },
    handleCilck() {
      const url = encodeURIComponent(userInfoApi.bindingEmail)
      const state = this.user.email
      this.wxLoginUrl = `https://open.weixin.qq.com/connect/qrconnect?appid=wx9eca964047cb260f&redirect_uri=${url}&response_type=code&scope=snsapi_login&state=${state}#wechat_redirect`

      const webSocketUrl = `ws://api.mingz-tech.com/webSocket/${state}`
      const websocket = new WebSocket(webSocketUrl)
      if (!websocket) {
        console.log(websocket)
      }
      window.onbeforeunload = () => {
        websocket.close()
      }
      window.onunload = () => {
        websocket.close()
      }
      const _this = this
      _this.$notify.info({
        title: '提示信息',
        message: '正在为您准备关联微信账号的页面，请稍待...'
      })
      websocket.onmessage = async function (event) {
        try {
          const res = JSON.parse(event.data)
          if (res.code === 200) {
            _this.$message({
              type: 'success',
              message: '关联成功!'
            })
            const eventData = res.obj
            const openid = eventData.openidWeb
            const unionid = eventData.unionid
            saveOpenid({ openid, unionid })
            storage({ type: 'set', key: 'loginType', val: 'wechat' })
            window.location.reload()
          } else if (res.code === 501) {
            _this.obj = res.obj
            _this.$confirm('您提供的微信号非新用户, 如果需要继续关联账号, 请选择合并用户, 取消本次操作请选择取消 ! \b 注: 合并用户是指将两个用户的订单信息,合并到同一用户上', '关联提示', {
              confirmButtonText: '合并用户',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              _this.handleMerge({ wxUserId: res.obj.id })
            }).catch(() => {
              _this.$message({
                type: 'info',
                message: '取消关联'
              })
            })
          } else {
            _this.$message({
              type: 'warning',
              message: '当前网络无法使用'
            })
          }
        } catch (err) {
          console.error(err)
          _this.$message({
            showClose: true,
            message: '失败',
            type: 'error'
          })
        }
        websocket.close()
      }
      websocket.onerror = () => {
        console.log('websocket连接断开了')
        _this.$notify.error({
          title: '抱歉了',
          message: '由于网络原因本次关联操作被取消,请稍后刷新重试!!'
        })
      }

      const iWidth = 600
      const iHeight = 600
      const iTop = (window.screen.availHeight - 30 - iHeight) / 2
      const iLeft = (window.screen.availWidth - 10 - iWidth) / 2
      window.open(_this.wxLoginUrl, '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft)

      websocket.onopen = function () {
        console.log('websocket连接成功...')
      }
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
