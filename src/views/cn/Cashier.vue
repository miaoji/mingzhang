<template>
  <div class="cashier" v-loading="loading" :element-loading-text="$t('message.cashier.text1')">
    <div class="cashier_bg"></div>
    <div class="order_info order_info_no" v-show='orderIsNo'>
      <div class="title">
        <div class="ico_ok left"><img src="/static/image/ico_no.png" alt="NO"></div>
        <div class="title_text">{{$t("message.cashier.text2")}}</div>
        <span class="title_info">{{$t("message.cashier.text3")}}</span>
        <div class="go_index">
          <router-link to="/">{{$t("message.cashier.text4")}}</router-link>
        </div>
        <div style="height:470px;"></div>
      </div>
    </div>
    <div class="order_info" v-show="!orderIsNo">
      <el-card class="box-card">
        <div class="title">
          <div class="ico_ok left"><img src="/static/image/ico_ok.png" alt="OK"></div>
          <div class="title_text">{{$t("message.cashier.text5")}}</div>
          <span class="title_info">{{$t("message.cashier.text6")}}{{data.orderNo}}</span>
          <div class="right">{{$t("message.cashier.text7")}}<span class="totalFee">{{data.status===1?$t("message.cashier.text12"):$t("message.cashier.text13")}}</span></div>
          <div class="right">{{$t("message.cashier.text8")}}<span class="totalFee">{{data.totalFee/100}}</span> {{$t("message.cashier.text9")}}</div>
          <div class="rece_info clear">
            <span v-show="!orderInfoShow">{{$t("message.cashier.text10")}}{{data.receiverCountry}}, {{data.receiverAddress}}</span>
            <span class="right" @click="showOrderInfo">
              {{$t("message.cashier.text11")}}
              <i v-show="!orderInfoShow" class="el-icon-arrow-down"></i>
              <i v-show="orderInfoShow" class="el-icon-arrow-up"></i>
            </span>
          </div>
        </div>
      </el-card>
      <div class="content">
        <div class="item item1" :class="{show_box_card: orderInfoShow}">
          <el-card class="box-card order_info">
            <div class="item_title">{{$t("message.cashier.text14")}}</div>
            <div class="info"><span>{{$t("message.cashier.text15")}}</span> : <span>{{data.senderName}}</span></div>
            <div class="info"><span>{{$t("message.cashier.text16")}}</span> : <span>{{data.senderCountry}} {{data.senderProv}} {{data.senderCity}} {{data.senderCounty}} {{data.senderAddress}}</span>
            </div>
            <div class="info"><span>{{$t("message.cashier.text17")}}</span> : <span>{{data.senderMobile}}</span></div>
            <div class="info"><span>{{$t("message.cashier.text18")}}</span> : <span>{{data.senderPostcode}}</span></div>
            <div class="item_title">{{$t("message.cashier.text19")}}</div>
            <div class="info"><span>{{$t("message.cashier.text20")}}</span> : <span>{{data.receiverName}}</span></div>
            <div class="info"><span>{{$t("message.cashier.text21")}}</span> : <span>{{data.receiverCountry}} {{data.receiverAddress}}</span></div>
            <div class="info"><span>{{$t("message.cashier.text22")}}</span> : <span>{{data.receiverMobile}}</span></div>
            <div class="info"><span>{{$t("message.cashier.text23")}}</span> : <span>{{data.receiverPostcode}}</span></div>
            <div class="item_title">{{$t("message.cashier.text24")}}</div>
            <el-row :gutter="20">
              <el-col :span="6">
                <div><span>{{$t("message.cashier.text25")}}</span> : <span>{{data.weight?data.weight:0}}kg</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>{{$t("message.cashier.text26")}}</span> : <span>{{data.length?data.length:0}}cm</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>{{$t("message.cashier.text27")}}</span> : <span>{{data.width?data.width:0}}cm</span></div>
              </el-col>
              <el-col :span="6">
                <div><span>{{$t("message.cashier.text28")}}</span> : <span>{{data.height?data.height:0}}cm</span></div>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="6">
                <div><span>{{$t("message.cashier.text29")}}</span> : <span>{{data.insured===1?$t("message.cashier.text32"):$t("message.cashier.text33")}}</span></div>
              </el-col>
              <el-col :span="6" v-show='data.insured===1'>
                <div><span>{{$t("message.cashier.text30")}}</span> : <span>{{data.insuredAmount}}{{$t("message.cashier.text9}")}</span></div>
              </el-col>
              <el-col :span="6">
                <div>
                  <span>{{$t('message.cashier.text31')}}</span> : <span>{{data.returnGood===1?$t("message.cashier.text32"):$t("message.cashier.text33")}}</span>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
        <div class="item">
          <el-card class="box-card">
            <div class="item_title">{{$t("message.cashier.text34")}}</div>
            <div class="weixin_pay clear" @click="weixinPayOpen">
              <div class="img left"><img src="/static/image/pay_weixin.png" alt="微信支付"></div>
              <div class="left">{{$t("message.cashier.text35")}}</div>
            </div>
          </el-card>
        </div>
        <div class="item">
          <el-card class="box-card">
            <div class="item_title">{{$t("message.cashier.text36")}}</div>
            <div>{{$t("message.cashier.text37")}}</div>
          </el-card>
        </div>
      </div>
    </div>
    <div style="height: 50px"></div>

    <el-dialog
      :title="text.text38"
      width="250px"
      :visible.sync="payDialogVisible"
      :close-on-press-escape="true"
      :close-on-click-modal="false">
      <div slot="title">
        <img src="../../assets/images/icon32_appwx_logo.png" alt="wxlogo" style="vertical-align: middle;">
        <span>
          {{$t("message.cashier.text39")}} <span class="totalFeeInfo">￥{{data.totalFee/100}}</span>
        </span>
      </div>
      <div
        v-loading="qrLoading">
        <div v-html="payImg"></div>
        <div class="prompt_text clear">
          <div class="img left"><img src="/static/image/sao.png" alt=""></div>
          <p>{{$t("message.cashier.text40")}}</p>
          <p>{{$t("message.cashier.text41")}}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {getOrderInfoByOrderNo} from '@/services/orderInfo'
  import {getPayQr} from '@/services/wx'
  import {makeQr} from '@/utils/qr'

  export default {
    name: 'cashier',
    data () {
      return {
        text: '',
        data: {},
        orderInfoShow: false,
        loading: true,
        orderIsNo: false,
        payDialogVisible: false,
        payImg: '',
        qrLoading: false,
        wxPayInfo: {}
      }
    },
    computed: {
      ...mapGetters({
        'isLogin': 'getLoginStatus'
      })
    },
    created () {
      const order = location.search.split('?order=')[1]
      this.getOrderInfo(order)
      window.scrollTo(0, 110)
    },
    methods: {
      async weixinPayOpen () {
        try {
          this.payDialogVisible = true
          this.qrLoading = true
          const res = await getPayQr({
            money: this.data.totalFee,
            orderNo: this.data.orderNo,
            body: '国际快递包裹',
            payType: 0,
            closingPriceId: 0,
            trade_type: 'NATIVE'
          })
          this.wxPayInfo = res
          this.wxPay()
          const codeUrl = res.code_url
          this.payImg = makeQr(codeUrl, 6, 5)
        } catch (e) {
          console.error(e)
        } finally {
          this.qrLoading = false
        }
      },
      wxPay () {
        const state = this.wxPayInfo.out_trade_no
        const webSocketUrl = `ws://api.mingz-tech.com/webSocket/${state}`
        const websocket = new WebSocket(webSocketUrl)
        const _this = this
        websocket.onmessage = async function (event) {
          let payInfo = event.data
          websocket.close()
          try {
            if (payInfo === '1') {
              _this.$notify({
                title: _this.$t('message.cashier.text42'),
                message: _this.$t('message.cashier.text43'),
                type: 'success',
                duration: 0
              })
              _this.$router.push({path: '/cn/orderdetail?orderNo=' + _this.data.orderNo})
            } else {
              _this.$notify({
                title: _this.$t('message.cashier.text44'),
                message: _this.$t(('message.cashier.text45')),
                type: 'warning',
                duration: 0
              })
            }
            _this.payDialogVisible = false
          } catch (err) {
            console.error(err)
            _this.$notify({
              title: this.$t('message.cashier.text44'),
              message: this.$t('message.cashier.text46'),
              type: 'error',
              duration: 0
            })
            _this.payDialogVisible = false
          }
        }
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
          if (data.obj.status !== 1) {
            this.$router.push({path: '/cn/orderdetail?orderNo=' + data.obj.orderNo})
          }
        } else {
          this.$notify({
            title: this.$t('message.cashier.text47'),
            message: this.$t('message.cashier.text48'),
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
    .el-dialog__wrapper {
      overflow-y: scroll;
      .el-dialog {
        width: 500px!important;
        height: 500px!important;
        text-align: center;
        .el-dialog__header {
          padding-top: 40px!important;
          .totalFeeInfo {
            color: #f56c6c;
            font-size: 18px;
          }
        }
        .el-dialog__body {
          height: 341px!important;
          .prompt_text {
            text-align: left;
            background-color: #3a8ee6;
            width: 300px;
            margin: 10px auto 0px;
            color: #fff;
            padding: 10px 0px;
            .left {
              margin-top: 6px;
              margin-left: 50px;
              margin-right: 20px;
              width: 34px;
              height: 34px;
              img {
                width: inherit;
                height: inherit;
              }
            }
            p {
              padding: 0px;
              margin: 0px;
            }
          }
          svg {
            width: 258px;
            height: 258px;
          }
        }
      }  
    }
    .cashier_bg {
      position: absolute;
      top: 185px;
      // left: 50%;
      margin-left: -20px;
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
