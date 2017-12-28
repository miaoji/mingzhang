<template>
  <div class="sendorder_box">
    <div
      class="mask"
      v-show='loading2'
      v-loading="loading2"
      element-loading-text="loading..."
      element-loading-background="rgba(100, 100, 100, 0.4)"
    ></div>
    <div class="sendorder">
      <el-form class="form" ref="form" :model="form" label-width="120px">

        <div id="item1" class="sendorder_item" v-if="true">
          <h1 class="page_tit">Sender's information</h1>
          <el-form-item label="name : " prop="senderName"
                        :rules="[
              { required: true, message: 'name cannot be null'}
            ]"
          >
            <el-input placeholder="please enter name" v-model="form.senderName"/>
          </el-form-item>
          <el-form-item label="Telephone : " prop="senderMobile"
                        :rules="[
              { required: true, message: 'Telephone cannot be null'},
              { type: 'number', message: 'The phone number must be a number'}
            ]"
          >
            <el-input placeholder="Please enter telephone" v-model.number="form.senderMobile"/>
          </el-form-item>
          <el-row>
            <el-col :span="10">
              <country label="Country : " :cancel="form.cancel" @coutryChange="coutrySendChange"/>
            </el-col>
            <el-col :span="12">
              <select-city label="City : " :cancel="form.cancel" @selectCityChange="selectCityChange"
                           v-show="showSendCitySelect"/>
            </el-col>
          </el-row>
          <el-form-item label="Address : " prop="senderAddress"
                        :rules="[
              { required: true, message: 'Address cannot be null'},
            ]"
          >
            <el-input placeholder="Please enter address" v-model="form.senderAddress"/>
          </el-form-item>
          <el-form-item label="Post Code : " prop="senderPostcode"
                        :rules="[
              { required: true, message: 'Post Code cannot be null'},
            ]"
          >
            <el-input placeholder="Please enter Post Code" v-model="form.senderPostcode"/>
          </el-form-item>
        </div>

        <div id="item2" class="sendorder_item" v-if="true">
          <h1 class="page_tit">Recipient information</h1>
          <el-form-item label="name : " prop="receiverName"
                        :rules="[
              { required: true, message: 'name cannot be null'},
            ]"
          >
            <el-input placeholder="Please enter recipient name" v-model="form.receiverName"/>
          </el-form-item>
          <el-form-item label="Telephone : " prop="receiverMobile"
                        :rules="[
              { required: true, message: 'Telephone cannot be null'}
            ]"
          >
            <el-input placeholder="Please enter telephone" v-model="form.receiverMobile"/>
          </el-form-item>
          <country v-model="form.aa" :cancel="form.cancel" label="Country : " type="en"
                   @coutryChange="coutryReceiveChange"/>
          <el-form-item label="Address : " prop="receiverAddress"
                        :rules="[
              { required: true, message: 'Address cannot be null'},
            ]"
          >
            <el-input placeholder="Please enter address" v-model="form.receiverAddress"/>
          </el-form-item>
          <el-form-item label="Post Code : " prop="receiverPostcode"
                        :rules="[
              { required: true, message: 'Post Code cannot be null'}
            ]"
          >
            <el-input placeholder="Please enter Post Code" v-model="form.receiverPostcode"/>
          </el-form-item>
        </div>

        <div id="item3" class="sendorder_item">
          <h1 class="page_tit">Package information</h1>
          <el-row :gutter="12">
            <el-col :span="5">
              <el-form-item label="weight(kg) : ">
                <el-input-number v-model="form.weight" controls-position="right" :step='1' @change="weightChange"
                                 :min="0" :max="20"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item label="length(cm) : ">
                <el-input-number v-model="form.length" controls-position="right" :step='10' @change="lengthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="5">

              <el-form-item label="width(cm) : ">
                <el-input-number v-model="form.width" controls-position="right" :step='10' @change="widthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item label="height(cm) : ">
                <el-input-number v-model="form.height" controls-position="right" :step='10' @change="heightChange"
                                 :min="0"/>
              </el-form-item>

            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="10">
              <select-package :showPackageList="showPackageList" label="product type : "
                              @selectPackageChange="selectPackageChange"/>
            </el-col>
            <el-col :span="10" :offset="1">
              <select-product :showProductList="showProductList" label="product spec : "
                              @selectProductChange="selectProductChange"/>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="11">
              <div class="img_ico"><img @click="dialogTableVisible = true" src="/static/image/question_ico.png"
                                        alt="Regression description"></div>
              <el-form-item label="insured : " prop="insured"
                            :rules="[
                  { required: true, message: 'select insured'},
                ]"
              >
                <el-radio-group @change='insuredChange' v-model="form.insured">
                  <el-radio label="1">yes</el-radio>
                  <el-radio label="0">no</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="premium : " v-show='showInsuredAmount'>
                <el-input-number placeholder="Please enter premium" @change='insuredAmountChange' controls-position="right"
                                 v-model="form.insuredAmount" :step='100' :min='200' :max='200000'/>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="img_ico"><img @click="returnGoodVisible = true" src="/static/image/question_ico.png" alt="return explain">
          </div>
          <el-form-item label="return : " prop="returnGood"
                        :rules="[
              { required: true, message: 'select return'},
            ]"
          >
            <el-radio-group v-model="form.returnGood">
              <el-radio label="1">yes</el-radio>
              <el-radio label="0">no</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="Note : ">
            <el-input type="textarea" style="width: 70%" placeholder="" v-model="form.remark"/>
          </el-form-item>
        </div>

        <div id="item4" class="sendorder_item">
          <h1 class="page_tit">Parcel declaration</h1>
          <table-package @tablePackage='tablePackage'></table-package>
          <p class="freight">Prepaid freight(￥): <span>{{freight}}</span></p>
          <div class="send_submit">
            <el-button type="success" @click="submitForm('form')">Comfirm the order</el-button>
            <el-button @click="onCancel('form')">Reset</el-button>
          </div>
        </div>

        <div class="explain_info">
          <p>Experience WeChat</p>
          <div class="img"><img src="/static/image/weChat.jpg" alt="国际快递服务中心公众号"></div>
          <div class="img">
            <p><a href="/en/send" target="_blank">Sending process</a></p>
            <p @click="dialogTableVisible = true">About insured</p>
            <p @click="returnGoodVisible = true">About return</p>
            <p @click="packageVisible = true">Parcel declaration</p>
          </div>
        </div>

      </el-form>
    </div>

    <el-dialog title="About insured" custom-class="dialog" :visible.sync="dialogTableVisible">
      <p>
        This service is voluntary. Sender choose this service, you should ensure that the insured amount and the actual value of each mail pieces of the same, the maximum amount of each mail insured amount of two hundred thousand yuan, insured fee at the declared premium of 0.5% charge, each The minimum charge of 1.00 yuan. Not in accordance with the provisions of the insurance fee to pay the shipment, does not belong to the insured express mail.</p>
    </el-dialog>
    <el-dialog title="About return" custom-class="dialog" :visible.sync="returnGoodVisible">
      <p>If the delivery of a properly cast problems, we will reverse the return to the sender, reverse logistics costs will be borne by the sender.</p>
    </el-dialog>
    <el-dialog title="Parcel declaration" custom-class="dialog" :visible.sync="packageVisible">
      <p>Parcels used for customs clearance, if not fill, customs clearance and other materials we will call you.</p>
    </el-dialog>

    <div class="float_left">
      <p class="anchor active" @click='goAnchor("#item1")'>1F</p>
      <p class="anchor" @click='goAnchor("#item2")'>2F</p>
      <p class="anchor" @click='goAnchor("#item3")'>3F</p>
      <p class="anchor" @click='goAnchor("#item4")'>4F</p>
      <p class="anchor top" @click='goAnchor("#item9")'></p>
    </div>
    <el-dialog title="Order notes" custom-class="notice" :visible.sync="dialogVisible">
      <p>1, you can now log in non-state orders, the payment is successful please <span style='color: red'> <b>retain your order number to check your order information</b></span></p>
      <p>2, it is recommended to pay attention to the public number landing orders, or use the micro-channel landing orders</p>
      <p>3, after the order is successful, you rely order number in the<span style='color: red'><b> home  </b></span>of <b>mailing query</b> query functions</p>
    </el-dialog>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import Country from '@/components/Country'
  import SelectCity from '@/components/SelectCity'
  import SelectPackage from '@/components/SelectPackage'
  import SelectProduct from '@/components/SelectProduct'
  import TablePackage from '@/components/TablePackage'
  import {getPrice} from '@/services/components/getPrice'
  import {createOrder} from '@/services/orderInfo'

  export default {
    name: 'OrderSendSpare',
    components: {
      Country,
      SelectCity,
      SelectPackage,
      SelectProduct,
      TablePackage
    },
    computed: {
      ...mapGetters({
        'isLogin': 'getLoginStatus',
        'userinfo': 'getUserInfo'
      })
    },
    data () {
      return {
        dialogTableVisible: false,
        returnGoodVisible: false,
        packageVisible: false,
        show: true,
        link: '/less',
        dialogVisible: true,
        form: {
          senderName: '',
          cancel: true,
          volumeWeight: 0.2,
          volume: 1000
        },
        showSendCitySelect: false,
        showPackageList: {},
        showProductList: {},
        freight: 'After filling out the express information, automatic acquisition',
        sendAddrInfo: [],
        sendAddrIndex: 0,
        showSendAddr: false,
        receAddrInfo: [],
        receAddrIndex: 0,
        showReceAddr: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        item: {
          cancel: false
        },
        type: 'add',
        loading1: false,
        loading2: false,
        showModalCitySelect: false,
        showInsuredAmount: false,
        tablePackagedata: [],
        freightId: '',
        sendAddr: {},
        receAddr: {}
      }
    },
    created () {
      if (this.isLogin) {
        this.$router.push({path: '/en/ordersend'})
        return
      }
      window.document.title = '上海明彰网络科技有限公司'
      this.menu()
    },
    mounted () {
      window.onscroll = function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const elItem = document.querySelectorAll('.anchor')
        for (let i = 0; i < elItem.length; i++) {
          elItem[i].classList.remove('active')
        }
        if (Number(scrollTop) <= 562) {
          elItem[0].className = 'active anchor'
        } else if (Number(scrollTop) <= 916) {
          elItem[1].className = 'active anchor'
        } else if (Number(scrollTop) <= 1505) {
          elItem[2].className = 'active anchor'
        } else if (Number(scrollTop) > 1505) {
          elItem[3].className = 'active anchor'
        }
      }
    },
    methods: {
      goAnchor (id) {
        if (id === '#item9') {
          window.scrollTo(0, 0)
          return
        }
        const anchor = this.$el.querySelector(id)
        window.scrollTo(0, anchor.offsetTop + 210)
      },
      tablePackage (data) {
        this.tablePackagedata = data
      },
      async submitForm (form) {
        try {
          this.loading2 = true
          this.$refs[form].validate((valid) => {
            if (valid) {
            } else {
              this.$message({
                type: 'warning',
                message: 'Your information is not complete enough, please fill in the whole'
              })
              throw new Error('您的信息还不够完整，请填写完整')
            }
          })
          if (this.form.insured !== '1' && this.form.insured !== '0') {
            this.$message({
              type: 'warning',
              message: 'Please choose whether to keep the price'
            })
            this.loading2 = false
            return
          }

          if (this.form.returnGood !== '1' && this.form.returnGood !== '0') {
            this.$message({
              type: 'warning',
              message: 'Please choose whether to return a piece'
            })
            this.loading2 = false
            return
          }

          if (!this.freightId) {
            this.$message({
              type: 'warning',
              message: this.freight
            })
            this.loading2 = false
            return
          }
          let insuredPrice = 0
          let insuredAmount = 0
          if (this.form.insured === 1) {
            insuredPrice = Number(this.form.insuredAmount) * 0.005
            insuredAmount = Number(this.form.insuredAmount)
          }

          const record = {
            weight: Number(this.form.weight),
            length: Number(this.form.length),
            width: Number(this.form.width),
            height: Number(this.form.height),
            volume: Number(this.form.volume),
            volumeWeight: Number(this.form.volumeWeight),
            returnGood: Number(this.form.returnGood),
            insured: Number(this.form.insured),
            insuredAmount,
            insuredPrice,
            priceId: Number(this.freightId),
            totalFee: Math.round(Number(this.freight) * 100),
            remark: this.form.remark,

            senderAddress: this.form.senderAddress,
            senderCity: this.form.city,
            senderCountry: '中国',
            senderCounty: this.form.county,
            senderMobile: this.form.senderMobile,
            senderName: this.form.senderName,
            senderPostcode: this.form.senderPostcode,
            senderProv: this.form.province,

            receiverAddress: this.form.receiverAddress,
            receiverCountry: JSON.parse(this.form.receiverCountry).country_cn,
            receiverMobile: this.form.receiverMobile,
            receiverName: this.form.receiverName,
            receiverPostcode: this.form.receiverPostcode,

            orderItems: JSON.stringify(this.tablePackagedata) || '[]',
            useSession: true,
            type: 0,
            orderType: 2
          }
          const data = await createOrder({...record})
          if (data.code === 200) {
            this.loading2 = false
            this.form.cancel = !this.form.cancel
            this.$refs[form].resetFields()
            this.form = {}
            this.freight = 'Please choose the receiving address'
            this.showPackageList = {show: false, data: []}
            this.showProductList = {show: false}
            this.$notify({
              title: 'success',
              message: 'The single success!!!',
              type: 'success'
            })
            this.$router.push('/cn/cashier?order=' + data.obj.orderNo)
            this.onCancel('form')
          } else {
            this.loading2 = false
            this.$notify({
              title: 'fail',
              message: 'A single failure, please try again later',
              type: 'warning'
            })
          }
        } catch (error) {
          console.warn('下单出错了', error.message)
          this.loading2 = false
        }
      },
      addAddrCountry (val) {
        this.item.countrydata = val
        if (JSON.parse(val).country_cn === '中国') {
          this.showModalCitySelect = true
        } else {
          this.showModalCitySelect = false
          this.item.cancelCity = !this.item.cancelCity || false
        }
      },
      modalSeleteCity (val) {
        this.item.citydata = val
      },
      onCancel (form) {
        this.form.cancel = !this.form.cancel
        this.$refs[form].resetFields()
        this.form = {}
        this.freight = 'Please choose the receiving address'
        this.showPackageList = {show: true, data: []}
        this.showProductList = {show: false}
      },
      menu () {
        window.scrollTo(0, 0)
      },
      insuredChange (data) {
        if (data === '1') {
          this.showInsuredAmount = true
        } else {
          this.showInsuredAmount = false
        }
        this.getPrice()
      },
      insuredAmountChange (data) {
        this.getPrice()
      },
      coutrySendChange (data) {
        // 获取寄件人国家信息
        this.form.senderCountry = data
        if (JSON.parse(data).country_cn === '中国') {
          this.showSendCitySelect = true
        } else {
          this.showSendCitySelect = false
        }
      },
      selectCityChange (data) {
        // 获取寄件人地区三联信息
        if (data && data.length === 3) {
          this.form.province = data[0].split('/')[1]
          this.form.city = data[1].split('/')[1]
          this.form.county = data[2].split('/')[1]
        }
      },
      coutryReceiveChange (data) {
        this.form.receiverCountry = data
        this.showPackageList = {show: true, data: data}
        this.showProductList = {show: false}
        this.getPrice()
      },
      selectPackageChange (data) {
        this.form.packageType = data
        this.showProductList = {show: true, data: data}
        this.getPrice()
      },
      selectProductChange (data) {
        this.form.productType = data
        this.getPrice()
      },
      weightChange (e) {
        this.form.weight = e
        this.getPrice()
      },
      lengthChange (e) {
        try {
          if (this.form.width && this.form.height) {
            this.form.volume = Number(this.form.width) * Number(this.form.height) * e
            this.form.volumeWeight = this.form.volume / 5000
            this.getPrice()
          }
        } catch (error) {
          console.info('计算体积出错了', error)
        }
      },
      widthChange (e) {
        try {
          if (this.form.length && this.form.height) {
            this.form.volume = Number(this.form.length) * Number(this.form.height) * e
            this.form.volumeWeight = Number(this.form.volume) / 5000
            this.getPrice()
          }
        } catch (error) {
          console.info('计算体积出错了', error)
        }
      },
      heightChange (e) {
        try {
          if (this.form.width && this.form.length) {
            this.form.volume = Number(this.form.width) * Number(this.form.length) * e
            this.form.volumeWeight = this.form.volume / 5000
            this.getPrice()
          }
        } catch (error) {
          console.info('计算体积出错了', error)
        }
      },
      /**
       * [getPrice 获取预付费用]
       * @return {[type]} [description]
       */
      async getPrice () {
        try {
          if (!this.form.receiverCountry) {
            this.freight = 'Please choose your receiving address'
            return
          }
          if (!this.form.weight) {
            this.freight = 'Please fill in the weight of your package'
            return
          }
          if (!this.form.packageType) {
            this.freight = 'Please select your product type'
            return
          }
          if (!this.form.productType) {
            this.freight = 'Please choose your product specifications'
            return
          }
          if (this.form.insured === '1' && !this.form.insuredAmount) {
            this.freight = 'You have chosen the price but did not fill in the price.'
            return
          }
          if (this.form.volumeWeight > 20) {
            this.freight = 'The volume of your package is too big, we can\'t send it'
            return
          }
          let formWeight = 0
          if (this.form.weight >= this.form.volumeWeight) {
            formWeight = this.form.weight
          } else {
            formWeight = this.form.volumeWeight
          }
          const payload = {
            weight: formWeight,
            countryId: JSON.parse(this.form.receiverCountry).id,
            packageTypeId: JSON.parse(this.form.packageType).id,
            productTypeId: JSON.parse(this.form.productType).id
          }
          const price = await getPrice(payload)
          if (price.code === 200) {
            let data = price.obj
            this.freightId = data.priceId
            if (this.form.insured === '1') {
              this.freight = data.finalPrice + Math.round(Number(this.form.insuredAmount) * 0.5) * 0.01
            } else {
              this.freight = data.finalPrice
            }
          } else if (price.code === 500 && price.msg === '查询失败') {
            this.freight = 'I\'m sorry, you choose the product specifications temporarily not to support mailing, please choose other product specifications.'
          }
          return
        } catch (err) {
          console.error(err)
          this.freight = 'Please fill out the express information first'
        }
      }
    }
  }
</script>
<style lang="less">
  .sendorder_box {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 0px;
    background-color: #f0f0f0;
    .mask {
      width: 100vw;
      height: 100%;
      top: 0px;
      left: 0px;
      position: fixed;
      z-index: 9;
      overflow: hidden;
    }
    .float_left {
      position: fixed;
      z-index: 9;
      top: 228px;
      left: 80px;
      padding: 20px;
      .anchor.active {
        color: #3a8ee6;
      }
      p {
        width: 20px;
        height: 20px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
        padding: 10px;
        border-radius: 50%;
        color: #fff;
        background-color: #363636;
        text-align: center;
      }
      p.top {
        background-image: url(/static/image/to_top.png);
        background-size: 20px 18px;
        background-repeat: no-repeat;
        background-position: 10px 10px;
      }
      p.top:hover {
        background-image: url(/static/image/to_top_hover.png);
      }
      p:hover {
        color: #fa5555;
        cursor: pointer;
      }
    }
    .el-dialog {
      width: 420px !important;
    }
    .el-dialog.notice {
      width: 780px!important;
    }
    .el-dialog__header {
      padding: 15px 15px 10px 25px !important;
    }
    .dialog {
      .el-dialog {
        width: 700px !important;
      }
    }
    .el-dialog__body {
      padding: 30px 50px 20px;
      border-top: 1px #ddd solid;
      border-bottom: 1px #ddd solid;
      .el-form-item__label {
        width: 140px !important;
      }
      .el-form-item__content {
        margin-left: 140px !important;
        margin-right: 40px !important;
      }
    }
    .sendorder {
      // background-color: #fff;
      width: 1000px;
      padding: 0px 40px 20px;
      // border: 1px #ddd solid;
      border-radius: 3px;
      margin: 0px auto 20px;
      .page_tit {
        background-image: url(/static/image/title_2.png);
        height: 48px;
        width: 267px;
        text-align: center;
        font-size: 20px;
        color: #ffffff;
        padding-left: 77px;
        line-height: 45px;
        margin-top: 30px;
        padding-right: 363px;
      }
      .el-form-item__content {
        width: 80%;
      }
      .form {
        width: 800px;
        margin: 0px auto;
        position: relative;
        .sendorder_item {
          background-color: #fff;
          border: 1px #e1e1e0 solid;
          padding: 30px;
          margin: 50px 0px;

          .img_ico {
            position: relative;
            img {
              top: 11px;
              left: 12px;
              width: 16px;
              height: 16px;
              position: absolute;
              cursor: pointer;
            }
          }
          .sendAddrInfo.active {
            border: 2px #666 solid;
          }
          .sendAddrInfo.active:hover {
            border: 2px #666 solid;
          }
          .sendAddrInfo:hover {
            border: 2px solid #66b1ff;
          }
          .sendAddrInfo {
            cursor: pointer;
            border: 2px solid #ddd;
            padding: 20px 10px 0px;
            margin: 10px 30px;
            p {
              padding: 0px;
              margin: 0px;
              display: inline-block;
              font-size: 14px;
              line-height: 20px;
            }
            p.item1 {
              width: 45%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item2 {
              width: 45%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item3 {
              width: 45%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item4 {
              width: 45%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item5 {
              width: 100%;
            }
          }
          .send_submit {
            text-align: center;
            // background-color: #fff;
            // border: 1px #ddd solid;
            padding: 20px 0px 50px;
            button {
              width: 25%;
              margin: 0px 40px;
              height: 50px;
            }
          }
          .freight {
            text-align: center;
            font-size: 20px;
            color: #333;
            span {
              color: #ff6600;
              font-size: 22px;
            }
          }
        }
        .explain_info {
          width: 200px;
          border: 1px solid #e1e1e0;
          background-color: #fff;
          position: absolute;
          top: 0px;
          right: -229px;
          box-sizing: border-box;
          padding: 10px;
          text-align: center;
          .img {
            width: 178px;
            height: 178px;
            overflow: hidden;
            img {
              width: inherit;
              height: inherit;
            }
            p:first-child {
              margin-top: 20px;
            }
            p {
              border-top: 1px solid #ddd;
              line-height: 32px;
              font-size: 16px;
              margin: 0px 20px;
              cursor: pointer;
            }
            p:last-child {
              border-bottom: 1px solid #ddd;
            }
            p:hover {
              color: #66b1ff;
            }
          }
        }
      }
    }

  }
</style>
