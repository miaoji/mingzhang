<template>
  <div class="orderdetail" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="orderdetail-item normal" v-show="hiddenStatus === 1">
      <div class="tit">
        {{$t('message.orderdetail.t10')}}
      </div>
      <div class="detail">
        <detail-item :title='$t("message.orderdetail.t11")' :value="detailData['orderNo']"></detail-item>
        <detail-item :title='$t("message.orderdetail.t12")' :value="totalFee"></detail-item>
        <detail-item :title='$t("message.orderdetail.t13")' :value="statusList['short']"></detail-item>
        <detail-item :title='$t("message.orderdetail.t14")' :value="createdTime"></detail-item>
        <detail-item :title='$t("message.orderdetail.t15")' :value="senderAddress"></detail-item>
        <detail-item :title='$t("message.orderdetail.t16")' :value="receiverAddress"></detail-item>
      </div>
      <div class="status">
        <div class="status-content">
          <i class="el-icon-info status-icon"></i>{{$t('message.orderdetail.t13')}} {{statusList['content']}}
        </div>
        <div class="status-tools">
          <el-button type="success" size="small" v-show="detailData['status'] === 1 && isLogin" @click='payClick'>{{$t('message.orderdetail.t17')}}</el-button>
          <el-button type="warning" size="small" @click="handleDelete" v-show="detailData['status'] === 1 && isLogin">{{$t('message.orderdetail.t18')}}</el-button>
          <el-button type="success" size="small" @click="handleRoute">{{$t('message.orderdetail.t19')}}</el-button>
        </div>
      </div>
    </div>
    <div class="error" v-show="hiddenStatus === 0 || show">
      <el-card class="box-card">
        <div class="ico_ok left"><img src="/static/image/ico_no.png" alt="NO"></div>
        <div class="title_text">{{$t('message.orderdetail.t1')}}</div>
        <span class="title_info">{{$t('message.orderdetail.t2')}}</span>
        <div class="go_index">
          <router-link to="/">{{$t('message.orderdetail.t3')}}</router-link>
        </div>
      </el-card>
      <div style="height:170px;"></div>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import compact from 'lodash/compact'
  import DetailItem from '@/components/DetailItem.vue'
  import {show, remove} from '@/services/directMail'
  import {format} from '@/utils/time'
  import {orderstatus, statuscontent} from '@/filters'

  export default {
    name: 'orderdetail',
    components: {
      DetailItem
    },
    data () {
      return {
        orderNo: 0,
        detailData: {},
        fullscreenLoading: false,
        show: false
      }
    },
    created () {
      const {orderNo} = this.$route.query
      this.orderNo = orderNo
      this.initDetail()
    },
    computed: {
      ...mapGetters({
        'isLogin': 'getLoginStatus'
      }),
      hiddenStatus () {
        const hiddenStatus = this.detailData['hiddenStatus']
        return hiddenStatus
      },
      totalFee () {
        let money = this.detailData['totalFee']
        money = (Number(money) / 100).toFixed(2)
        return `￥${money}`
      },
      createdTime () {
        let time = this.detailData['createTime']
        time = new Date(time)
        return format('yyyy-MM-dd hh:mm:ss', time)
      },
      senderAddress () {
        const detail = this.detailData
        let sendList = [
          // detail['senderName'],
          // detail['senderMobile'],
          detail['senderCountry'],
          detail['senderProv'],
          detail['senderCity'],
          detail['senderCounty'],
          detail['senderAddress'],
          detail['senderPostcode']
        ]
        sendList = compact(sendList)
        return sendList.join(',')
      },
      receiverAddress () {
        const detail = this.detailData
        let receiverList = [
          // detail['receiverName'],
          // detail['receiverMobile'],
          detail['receiverCountry'],
          detail['receiverProv'],
          detail['receiverCity'],
          detail['receiverCounty'],
          detail['receiverAddress'],
          detail['receiverPostcode']
        ]
        receiverList = compact(receiverList)
        return receiverList.join(',')
      },
      statusList () {
        const status = this.detailData.status
        return {
          short: orderstatus(status),
          content: statuscontent(status)
        }
      },
      canCheckRoute () {
        const status = this.detailData.status
        return (status !== 0 && status !== 1 && status !== 2)
      }
    },
    methods: {
      payClick () {
        const href = window.sessionStorage.locale || '/cn/'
        this.$router.push(href + 'cashier?order=' + this.detailData['orderNo'])
      },
      async initDetail () {
        try {
          this.fullscreenLoading = true
          const res = await show({
            orderNo: this.orderNo
          })
          if (res.code === 200) {
            this.detailData = res.obj
          } else {
            this.show = true
            // this.$message.error(res.msg)
          }
          return
        } catch (e) {
          console.error(e)
          this.show = true
          this.$message.error(e.message)
        } finally {
          this.fullscreenLoading = false
        }
      },
      async handleDelete () {
        this.$confirm(this.$t('message.orderdetail.t4'), this.$t('message.orderdetail.t5'), {
          confirmButtonText: this.$t('message.orderdetail.t6'),
          cancelButtonText: this.$t('message.orderdetail.t7'),
          type: 'warning'
        }).then(async () => {
          try {
            this.fullscreenLoading = true
            const ids = this.orderNo
            const res = await remove({ids})
            if (res.code === 200) {
              return this.$message({
                message: this.$t('message.orderdetail.t8'),
                type: 'success'
              })
            }
            const errorMsg = res.msg || this.$t('message.orderdetail.t9')
            return this.$message.error(errorMsg)
          } catch (e) {
            console.error(e)
            this.$message.error(e.message)
          } finally {
            this.initDetail()
          }
        }).catch(() => {
        })
      },
      handleRoute () {
        window.sessionStorage.setItem('order', this.orderNo)
        if (this.$route.path.split('/en/') && this.$route.path.split('/en/').length === 2) {
          this.$router.push({path: '/en/getorderinfo'})
        } else {
          this.$router.push({path: '/cn/getorderinfo'})
        }
      }
    }
  }
</script>
<style scoped lang="less">
  @import '../../assets/styles/colors.less';
  @import '../../assets/styles/helpers.less';

  .orderdetail {
    max-width: 1200px;
    .normal-container;
    .error {
      .box-card {
        font-size: 18px;
        color: #333;
        line-height: 2.2em;
        margin: 0px auto;
        padding: 20px;
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
        .go_index {
          margin-left: 100px;
          a {
            color: #3a8ee6;
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
    }
    &-item {
      border: 1px solid #ddd;
      background-color: #fff;
      // background: @grey-bg;
      padding: 30px;
      margin-bottom: 20px;
      .tit {
        color: red;
        font-size: 20px;
        line-height: 2em;
        border-bottom: 1px solid #ddd;
      }
      .title {
        color: #333;
        font-size: 18px;
        line-height: 2.2em;
        padding-bottom: 1rem;
        border-bottom: 1px solid #ccc;
      }
      .detail {
        padding: 20px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
      }
      .status {
        padding: 10px 0;
        &-content {
          padding-bottom: 20px;
          padding-left: 20px;
          font-size: 16px;
          font-weight: 600;
          .status-icon {
            padding-right: 5px;
          }
        }
      }
    }
  }
</style>
