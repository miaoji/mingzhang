<template>
  <div class="cashier" v-loading="loading" element-loading-text="订单信息正在向您飞奔~~~">
    <div class="cashier_bg"></div>
    <div class="order_info order_info_no" v-show='orderIsNo'>
      <div class="title">
        <div class="ico_ok left"><img src="/static/image/ico_no.png" alt="NO"></div>
        <div class="title_text">订单付款请求提交失败</div>
        <span class="title_info">请前往我的订单,刷新页面,3-5分钟后重试</span>
        <div class="go_index">
          <router-link to="/">回到首页</router-link>
        </div>
        <div style="height:470px;"></div>
      </div>
    </div>
    <div class="order_info" v-show="!orderIsNo">
      <el-card class="box-card">
        <div class="title">
          <div class="ico_ok left"><img src="/static/image/ico_ok.png" alt="OK"></div>
          <div class="title_text">订单创建完成,我要付款去~</div>
          <span class="title_info">请在确认信息无误后付款！订单号：{{data.orderNo}}</span>
          <div class="right">实付金额 : <span class="totalFee">{{data.totalFee/100}}</span> 元</div>
          <div class="rece_info clear">
            <span v-show="!orderInfoShow">收件地址信息 : {{data.receiverCountry}}/{{data.receiverAddress}}</span>
            <span class="right" @click="showOrderInfo">
              订单详情
              <i v-show="!orderInfoShow" class="el-icon-arrow-down"></i>
              <i v-show="orderInfoShow" class="el-icon-arrow-up"></i>
            </span>
          </div>
        </div>
      </el-card>
      <div class="content">
        <div class="item item1" :class="{show_box_card: orderInfoShow}">
          <el-card class="box-card order_info">
            <div class="item_title">寄件地址信息</div>
            <div class="info"><span>寄件人</span> : <span>{{data.senderName}}</span></div>
            <div class="info"><span>寄件地址</span> : <span>{{data.senderCountry}}, {{data.senderProv}}, {{data.senderCity}}, {{data.senderCounty}}, {{data.senderAddress}}</span>
            </div>
            <div class="info"><span>联系方式</span> : <span>{{data.senderMobile}}</span></div>
            <div class="info"><span>邮编</span> : <span>{{data.senderPostcode}}</span></div>
            <div class="item_title">收件地址信息</div>
            <div class="info"><span>收件人</span> : <span>{{data.receiverName}}</span></div>
            <div class="info"><span>收件地址</span> : <span>{{data.receiverCountry}}, {{data.receiverAddress}}</span></div>
            <div class="info"><span>联系方式</span> : <span>{{data.receiverMobile}}</span></div>
            <div class="info"><span>邮编</span> : <span>{{data.receiverPostcode}}</span></div>
            <div class="item_title">包裹信息</div>
            <el-row :gutter="20">
              <el-col :span="6">
                <div><span>重量</span> : <span>{{data.weight?data.weight:0}}kg</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>长度</span> : <span>{{data.length?data.length:0}}cm</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>宽度</span> : <span>{{data.width?data.width:0}}cm</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>高度</span> : <span>{{data.height?data.height:0}}cm</span></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div><span>是否保价</span> : <span>{{data.insured===1?'是':'否'}}</span></div>
              </el-col>
              <el-col :span="6" v-show='data.insured===1'>
                <div><span>保价金额</span> : <span>{{data.insuredAmount}}元</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>是否退件</span> : <span>{{data.returnGood===1?'是':'否'}}</span></div>
              </el-col>
            </el-row>
          </el-card>
        </div>
        <div class="item">
          <el-card class="box-card">
            <div class="item_title">付款方式</div>
            <div class="weixin_pay clear" @click="weixinPay">
              <div class="img left"><img src="/static/image/pay_weixin.png" alt="微信支付"></div>
              <div class="left">前往微信支付</div>
            </div>
          </el-card>
        </div>
        <div class="item">
          <el-card class="box-card">
            <div class="item_title">注意</div>
            <div>请在付款前确认寄件信息,以免由于地址信息的错误,给您的投递带来不便</div>
          </el-card>
        </div>
      </div>
    </div>
    <div style="height: 50px"></div>
  </div>
</template>
<script>
  import {getOrderInfoByOrderNo} from '@/services/orderInfo'

  export default {
    name: 'cashier',
    data () {
      return {
        data: {},
        orderInfoShow: false,
        loading: true,
        orderIsNo: false
      }
    },
    created () {
      const order = location.search.split('?order=')[1]
      this.getOrderInfo(order)
      window.scrollTo(0, 110)
    },
    methods: {
      weixinPay () {
        this.$message({
          type: 'success',
          message: '开始进行微信支付'
        })
      },
      showOrderInfo () {
        this.orderInfoShow = !this.orderInfoShow
      },
      async getOrderInfo (orderNo) {
        this.loading = true
        const data = await getOrderInfoByOrderNo({orderNo})
        if (data.code === 200 && data.obj) {
          this.data = data.obj
          this.loading = false
        } else {
          this.$notify({
            title: '订单信息获取失败',
            message: '订单支付操作失败,请稍后刷新重试',
            type: 'warning'
          })
          this.loading = false
          this.orderIsNo = true
        }
      }
    }
  }
</script>
<style lang="less">
  .cashier {
    font-family: '微软雅黑';
    margin: 30px auto 30px;
    overflow: hidden;
    .cashier_bg {
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -650px;
      background-image: url(/static/image/cashier_bg.png);
      background-repeat: no-repeat;
      background-size: 1300px;
      z-index: -9;
      width: 1300px;
      height: 800px;
    }
    .order_info_no {
      padding-top: 30px;
      .title {
        .go_index {
          margin-left: 100px;
          a {
            color: #3a8ee6;
          }
        }
      }
    }
    .order_info {
      width: 1100px;
      margin: 0px auto;
      position: relative;
      .title {
        font-size: 18px;
        color: #333;
        line-height: 2.2em;
        padding-left: 6px;
        margin: 0px auto;
        .title_text {
          margin-left: 100px;
          font-size: 24px;
          color: #333;
          line-height: 1.8em;
        }
        .title_info {
          font-size: 12px;
          margin-left: 20px;
        }
        .rece_info {
          span.right {
            cursor: pointer;
            color: #3a8ee6;
            &:hover {
              color: #67c23a;
            }
          }
          font-size: 12px;
          margin-left: 100px;
        }
        .right {
          padding-right: 20px;
          font-size: 14px;
          color: #444;
          .totalFee {
            font-size: 18px;
            color: #f52f3e;
          }
        }
        .ico_ok {
          width: 80px;
          height: 80px;
          overflow: hidden;
          img {
            width: inherit;
            height: inherit;
          }
        }
      }
      .content {
        margin: 0px auto;
        .item {
          padding-top: 20px;
          .box-card.order_info {
            .item_title {
              color: #fa5555;
              padding-top: 10px;
              &:first-child {
                padding-top: 0px;
              }
            }
          }
          .box-card {
            padding: 20px;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 1.8em;
            .item_title {
              line-height: 2em;
              font-size: 18px;
            }
            .info {
            }
            .weixin_pay {
              cursor: pointer;
              margin-top: 20px;
              font-size: 16px;
              line-height: 40px;
              width: 160px;
              border-radius: 3px;
              padding: 6px;
              border: 1px solid #ddd;
              -moz-user-select: none; /*火狐*/
              -webkit-user-select: none; /*webkit浏览器*/
              -ms-user-select: none; /*IE10*/
              -khtml-user-select: none; /*早期浏览器*/
              user-select: none;
              &:hover {
                border: 1px solid #fa5555;
              }
              &:active {
                border: 1px solid #67c23a;
              }
              &:link {
                color: blue
              }
              /* 未访问的链接 */
              &:visited {
                color: #00FF00
              }
              /* 已访问的链接 */
              .img {
                height: 40px;
                img {
                  width: inherit;
                  height: inherit;
                }
                margin-right: 10px;
              }
            }
          }
        }
        .item.item1 {
          padding-top: 0px;
          height: 0px;
          overflow: hidden;
          -webkit-transition: all 1s ease;
          -moz-transition: all 1s ease;
          -ms-transition: all 1s ease;
          -o-transition: all 1s ease;
          transition: all 1s ease;
        }
        .item.item1.show_box_card {
          padding-top: 20px;
          height: 460px;
        }
      }
    }
  }
</style>
