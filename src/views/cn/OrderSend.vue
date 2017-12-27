<template>
  <div class="sendorder_box">
    <div
      class="mask"
      v-show='loading2'
      v-loading="loading2"
      :element-loading-text="$t('message.ordersend.t1')"
      element-loading-background="rgba(100, 100, 100, 0.4)"
    ></div>
    <div class="sendorder">
      <el-form class="form" ref="form" :model="form" label-width="120px">
        <div id="item1" class="sendorder_item" v-if="true">
          <h1 class="page_tit">{{$t('message.ordersend.t2')}}</h1>
          <div @click='sendAddressClick(key,item)' v-show="showSendAddr||key===sendAddrIndex?true:false"
               :class="{ active: key===sendAddrIndex?true:false}" v-for="(item,key) in sendAddrInfo"
               class="sendAddrInfo">
            <p class="item1">{{$t('message.ordersend.t3')}} : {{item.name}}</p>
            <p class="item2">{{$t('message.ordersend.t4')}} : {{item.mobile}}</p>
            <p class="item5">
              <el-button type="text" @click.stop="updateAddr(item,'send')" style="color:#bd7e00">{{$t('message.ordersend.t5')}}</el-button>
            </p>
            <p class="item3">{{$t('message.ordersend.t6')}} : {{item.address}}</p>
            <p class="item4">{{$t('message.ordersend.t7')}} : {{item.remark}}</p>
            <p class='item6'>
              <el-button type="text" @click.stop="delAddr(item,'send')" style="color:#fa5555">{{$t('message.ordersend.t8')}}</el-button>
            </p>
          </div>
          <div style="marginLeft: 28px">
            <el-button type="text" size="mini" @click="addAddr('send')">{{$t('message.ordersend.t9')}}</el-button>
            <el-button type="text" size="mini" @click="showSendAddr=!showSendAddr" v-show="showSendAddr===false && sendAddrInfo.length > 1">
              {{$t('message.ordersend.t98')}}
            </el-button>
            <el-button type="text" size="mini" @click="showSendAddr=!showSendAddr" v-show="showSendAddr===true">{{$t('message.ordersend.t10')}}</el-button>
          </div>
        </div>
        <div id="item2" class="sendorder_item" v-if="true">
          <h1 class="page_tit">{{$t('message.ordersend.t11')}}</h1>
          <div @click='receAddressClick(key,item)' v-show="showReceAddr||key===receAddrIndex?true:false"
               :class="{ active: key===receAddrIndex?true:false}" v-for="(item,key) in receAddrInfo"
               class="sendAddrInfo">
            <p class="item1">{{$t('message.ordersend.t3')}} : {{item.name}}</p>
            <p class="item2">{{$t('message.ordersend.t4')}} : {{item.mobile}}</p>
            <p class="item5">
              <el-button type="text" @click.stop="updateAddr(item,'rece')" style="color:#bd7e00">{{$t('message.ordersend.t5')}}</el-button>
            </p>
            <p class="item3">{{$t('message.ordersend.t6')}} : {{item.address}}</p>
            <p class="item4">{{$t('message.ordersend.t7')}} : {{item.remark}}</p>
            <p class='item6'>
              <el-button type="text" @click.stop="delAddr(item,'rece')" style="color:#fa5555">{{$t('message.ordersend.t8')}}</el-button>
            </p>
          </div>
          <div style="marginLeft: 28px">
            <el-button type="text" size="mini" @click="addAddr('rece')">{{$t('message.ordersend.t9')}}</el-button>
            <el-button type="text" size="mini" @click="showReceAddr=!showReceAddr" v-show="showReceAddr===false && receAddrInfo.length > 1">
              {{$t('message.ordersend.t98')}}
            </el-button>
            <el-button type="text" size="mini" @click="showReceAddr=!showReceAddr" v-show="showReceAddr===true">
              {{$t('message.ordersend.t10')}}
            </el-button>
          </div>
        </div>

        <div id="item3" class="sendorder_item">
          <h1 class="page_tit">{{$t('message.ordersend.t12')}}</h1>
          <el-row :gutter="12">
            <el-col :span="5">
              <el-form-item :label="$t('message.ordersend.t13')">
                <el-input-number v-model="form.weight" controls-position="right" :step='1' @change="weightChange"
                                 :min="0" :max="20"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item :label="$t('message.ordersend.t14')">
                <el-input-number v-model="form.length" controls-position="right" :step='10' @change="lengthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="5">

              <el-form-item :label="$t('message.ordersend.t15')">
                <el-input-number v-model="form.width" controls-position="right" :step='10' @change="widthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item :label="$t('message.ordersend.t16')">
                <el-input-number v-model="form.height" controls-position="right" :step='10' @change="heightChange"
                                 :min="0"/>
              </el-form-item>

            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="10">
              <select-package :showPackageList="showPackageList" :label="$t('message.ordersend.t17')"
                              @selectPackageChange="selectPackageChange"/>
            </el-col>
            <el-col :span="10" :offset="1">
              <select-product :showProductList="showProductList" :label="$t('message.ordersend.t18')"
                              @selectProductChange="selectProductChange"/>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="11">
              <div class="img_ico"><img @click="dialogTableVisible = true" src="/static/image/question_ico.png"
                                        :alt="$t('message.ordersend.t19')"></div>
              <el-form-item :label="$t('message.ordersend.t20')" prop="insured"
                            :rules="[
									{ required: true, message: this.$t('message.ordersend.t21')},
								]"
              >
                <el-radio-group @change='insuredChange' v-model="form.insured">
                  <el-radio label="1">{{$t('message.ordersend.t22')}}</el-radio>
                  <el-radio label="0">{{$t('message.ordersend.t23')}}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item :label="$t('message.ordersend.t24')" v-show='showInsuredAmount'>
                <el-input-number :placeholder="$t('message.ordersend.t25')" @change='insuredAmountChange' controls-position="right"
                                 v-model="form.insuredAmount" :step='100' :min='200' :max='200000'/>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="img_ico"><img @click="returnGoodVisible = true" src="/static/image/question_ico.png" alt="退件说明">
          </div>
          <el-form-item :label="$t('message.ordersend.t26')" prop="returnGood"
                        :rules="[
							{ required: true, message: this.$t('message.ordersend.t27')},
						]"
          >
            <el-radio-group v-model="form.returnGood">
              <el-radio label="1">{{$t('message.ordersend.t22')}}</el-radio>
              <el-radio label="0">{{$t('message.ordersend.t23')}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('message.ordersend.t28')">
            <el-input type="textarea" style="width: 80%" :placeholder="$t('message.ordersend.t29')" v-model="form.remark"/>
          </el-form-item>
        </div>

        <div id="item4" class="sendorder_item">
          <h1 class="page_tit">{{$t('message.ordersend.t30')}}</h1>
          <table-package @tablePackage='tablePackage'></table-package>
          <p class="freight">{{$t('message.ordersend.t31')}}<span>{{freight}}</span></p>
          <div class="send_submit">
            <el-button type="success" @click="submitForm('form')">{{$t('message.ordersend.t32')}}</el-button>
            <el-button @click="onCancel('form')">{{$t('message.ordersend.t33')}}</el-button>
          </div>
        </div>

        <div class="explain_info">
          <p>{{$t('message.ordersend.t34')}}</p>
          <div class="img"><img src="/static/image/weChat.jpg" alt="国际快递服务中心公众号"></div>
          <div class="img">
            <p><a href="/cn/send" target="_blank">{{$t('message.ordersend.t35')}}</a></p>
            <p @click="dialogTableVisible = true">{{$t('message.ordersend.t36')}}</p>
            <p @click="returnGoodVisible = true">{{$t('message.ordersend.t37')}}</p>
            <p @click="packageVisible = true">{{$t('message.ordersend.t38')}}</p>
          </div>
        </div>

      </el-form>
    </div>

    <el-dialog :title="$t('message.ordersend.t36')" custom-class="dialog" :visible.sync="dialogTableVisible">
      <p>{{$t('message.ordersend.t39')}}</p>
    </el-dialog>
    <el-dialog :title="$t('message.ordersend.t37')" custom-class="dialog" :visible.sync="returnGoodVisible">
      <p>$t('message.ordersend.t40')</p>
    </el-dialog>
    <el-dialog :title="$t('message.ordersend.t38')" custom-class="dialog" :visible.sync="packageVisible">
      <p>{{$t('message.ordersend.t41')}}</p>
    </el-dialog>

    <el-dialog class="dialog" :title="modalTitle" width="600px" :visible.sync="dialogFormVisible">
      <el-form v-loading="loading1"
               :element-loading-text="$t('message.ordersend.t42')"
               element-loading-background="rgba(255, 255,255, 0.6)"
               :model="item"
               label-width="90px"
      >
        <el-form-item :label="$t('message.ordersend.t43')" :label-width="formLabelWidth">
          <el-input v-model="item.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.ordersend.t4')" :label-width="formLabelWidth">
          <el-input v-model="item.mobile" auto-complete="off"></el-input>
        </el-form-item>
        <country v-model="item.countrydata" :values="item.countrydata" :label="$t('message.ordersend.t44')"
                 :type="modalTitle===this.$t('message.ordersend.t45')||modalTitle===this.$t('message.ordersend.t46')?'cn':'en'" @coutryChange="addAddrCountry"/>
        <transition name="el-zoom-in-top">
          <select-city :label="$t('message.ordersend.t49')" :cancel="item.cancelCity" @selectCityChange="modalSeleteCity"
                       v-show="showModalCitySelect"/>
        </transition>
        <el-form-item :label="$t('message.ordersend.t50')" :label-width="formLabelWidth">
          <el-input v-model="item.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.ordersend.t51')" :label-width="formLabelWidth">
          <el-input v-model="item.postcode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label="$t('message.ordersend.t52')" :label-width="formLabelWidth">
          <el-input v-model="item.remark" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item :label="$t('message.ordersend.t53')">
          <el-radio-group v-model="item.isDefault">
            <el-radio label="1">{{$t('message.ordersend.t22')}}</el-radio>
            <el-radio label="0">{{$t('message.ordersend.t23')}}</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">{{$t('message.ordersend.t54')}}</el-button>
        <el-button @click="dialogFormVisible = false">{{$t('message.ordersend.t55')}}</el-button>
      </div>
    </el-dialog>

    <div class="float_left">
      <p class="anchor active" @click='goAnchor("#item1")'>{{$t('message.ordersend.t56')}}</p>
      <p class="anchor" @click='goAnchor("#item2")'>{{$t('message.ordersend.t57')}}</p>
      <p class="anchor" @click='goAnchor("#item3")'>{{$t('message.ordersend.t58')}}</p>
      <p class="anchor" @click='goAnchor("#item4")'>{{$t('message.ordersend.t59')}}</p>
      <p class="anchor top" @click='goAnchor("#item9")'></p>
    </div>
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
  // import {storage} from '@/utils'
  import {
    showReceAddr,
    addReceAddrInfo,
    delReceAddrInfo,
    getOneReceAddr,
    updateOneReceAddr,
    showSendAddr,
    addSendAddrInfo,
    delSendAddrInfo,
    getOneSendAddr,
    updateOneSendAddr
  } from '@/services/address'

  export default {
    name: 'orderSend',
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
        dialogVisible: false,
        form: {
          senderName: '',
          cancel: true,
          volumeWeight: 0.2,
          volume: 1000
        },
        showSendCitySelect: false,
        showPackageList: {},
        showProductList: {},
        freight: this.$t('message.ordersend.t99'),
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
        modalTitle: 'send',
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
      if (!this.isLogin) {
        const href = window.sessionStorage.locale || 'cn'
        this.$router.push({path: '/' + href + '/orderspare'})
        return
      }
      this.menu()
      this.getSendAddr()
      this.getReceiveAddr()
    },
    mounted () {
      window.onscroll = function () {
        if (location.pathname !== '/cn/ordersend' && location.pathname !== '/cn/ordersendSpare' && location.pathname !== '/en/ordersend' && location.pathname !== '/en/ordersendSpare') {
          return
        }
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const elItem = document.querySelectorAll('.anchor')
        for (let i = 0; i < elItem.length; i++) {
          elItem[i].classList.remove('active')
        }
        if (Number(scrollTop) <= 440) {
          elItem[0].className = 'active anchor'
        } else if (Number(scrollTop) <= 672) {
          elItem[1].className = 'active anchor'
        } else if (Number(scrollTop) <= 1260) {
          elItem[2].className = 'active anchor'
        } else if (Number(scrollTop) > 1260) {
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
          this.sendAddr = {}
          this.receAddr = {}
          if (!this.sendAddrInfo[this.sendAddrIndex].id) {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t60')
            })
            this.loading2 = false
            return
          }
          await this.getOneSendAddr({id: this.sendAddrInfo[this.sendAddrIndex].id})
          await this.getOneReceAddr({id: this.receAddrInfo[this.receAddrIndex].id})
          if (this.sendAddr === {} || this.receAddr === {}) {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t61')
            })
            this.loading2 = false
            return
          }
          if (this.form.insured !== '1' && this.form.insured !== '0') {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t62')
            })
            this.loading2 = false
            return
          }
          if (this.form.returnGood !== '1' && this.form.returnGood !== '0') {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t63')
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
            weight: this.form.weight,
            width: this.form.width,
            length: this.form.length,
            height: this.form.height,
            volume: this.form.volume,
            volumeWeight: this.form.volumeWeight,
            wxUserId: this.userinfo.id,
            mailingAddrId: this.sendAddrInfo[this.sendAddrIndex].id,
            receiveAddrId: this.receAddrInfo[this.receAddrIndex].id,
            returnGood: this.form.returnGood,
            insured: this.form.insured,
            insuredAmount,
            insuredPrice,
            priceId: this.freightId,
            totalFee: Math.round(Number(this.freight) * 100),
            remark: this.form.remark,
            // 寄件地址信息
            senderCountry: this.sendAddr.COUNTRY_CN,
            senderProv: this.sendAddr.PROVINCE,
            senderCity: this.sendAddr.cityName,
            senderCounty: this.sendAddr.DISTRICT,
            // 收件地址信息
            receiverCountry: this.receAddr.COUNTRY_CN,
            orderItems: JSON.stringify(this.tablePackagedata) || '[]',
            type: 0,
            orderType: 3
          }
          this.$refs[form].validate((valid) => {
            if (valid) {
            } else {
              return false
            }
          })
          const data = await createOrder({...record})
          if (data.code === 200) {
            this.loading2 = false
            this.$notify({
              title: this.$t('message.ordersend.t64'),
              message: this.$t('message.ordersend.t65'),
              type: 'success'
            })
            this.$router.push('/cn/cashier?order=' + data.obj.orderNo)
            this.onCancel('form')
          } else {
            this.loading2 = false
            this.$notify({
              title: this.$t('message.ordersend.t66'),
              message: this.$t('message.ordersend.t67'),
              type: 'warning'
            })
          }
        } catch (error) {
          console.warn('下单出错了', error)
          this.loading2 = false
          this.$notify({
            title: this.$t('message.ordersend.t66'),
            message: this.$t('message.ordersend.t67'),
            type: 'warning'
          })
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
      // 模态框确认操作
      confirm () {
        if (!this.item.name) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t68')
          })
          return
        }
        if (!this.item.mobile) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t69')
          })
          return
        }
        if (!this.item.countrydata) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t70')
          })
          return
        }
        if (!this.item.address) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t71')
          })
          return
        }
        if (!this.item.postcode) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t72')
          })
        }
        if (this.type === 'add' && this.modalTitle === this.$t('message.ordersend.t45')) {
          this.addSendAddr(this.item)
        }

        if (this.type === 'add' && this.modalTitle === this.$t('message.ordersend.t47')) {
          this.addReceAddr(this.item)
        }

        if (this.type === 'update' && this.modalTitle === this.$t('message.ordersend.t46')) {
          this.updateSendAddr(this.item)
        }

        if (this.type === 'update' && this.modalTitle === this.$t('message.ordersend.t48')) {
          this.updateReceAddr(this.item)
        }
      },
      addAddr (type) {
        this.modalTitle = type === 'send' ? this.$t('message.ordersend.t45') : this.$t('message.ordersend.t47')
        this.dialogFormVisible = true
        this.type = 'add'
        this.item = {isDefault: '1'}
        this.item.cancel = !this.item.cancel
      },
      updateAddr (item, type) {
        this.loading1 = true
        this.modalTitle = type === 'send' ? this.$t('message.ordersend.t46') : this.$t('message.ordersend.t48')
        this.type = 'update'
        this.item = {}
        this.item.cancel = !this.item.cancel
        this.dialogFormVisible = true
        if (type === 'send') {
          this.getOneSendAddr(item)
        } else if (type === 'rece') {
          this.getOneReceAddr(item)
        }
      },
      delAddr (item, type) {
        this.$confirm(this.$t('message.ordersend.t73'), this.$t('message.ordersend.t74'), {
          confirmButtonText: this.$t('message.ordersend.t54'),
          cancelButtonText: this.$t('message.ordersend.t55'),
          type: 'warning'
        }).then(() => {
          if (type === 'send') {
            this.delSendAddr(item.id)
          } else if (type === 'rece') {
            this.delReceAddr(item.id)
          }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('message.ordersend.t75')
          })
        })
      },
      sendAddressClick (e) {
        this.sendAddrIndex = e
        this.showSendAddr = false
      },
      receAddressClick (e) {
        this.receAddrIndex = e
        this.showReceAddr = false
        this.form.receiverCountry = this.receAddrInfo[e].country
        this.showPackageList = {show: true, data: this.receAddrInfo[e].country}
        this.showProductList = {show: false}
        this.getPrice()
      },
      onCancel (form) {
        this.form.cancel = !this.form.cancel
        this.$refs[form].resetFields()
        this.form = {}
        this.freight = this.$t('message.ordersend.t76')
        this.showPackageList = {show: true, data: ''}
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
        }
      },
      // 获取寄件地址信息
      async getSendAddr () {
        let data = await showSendAddr({
          wxUserId: this.userinfo.id
        })
        if (data.code === 200 && data.obj) {
          this.sendAddrInfo = data.obj
        } else if (data.msg === '暂未查询到信息') {
          this.sendAddrInfo = []
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t77')
          })
        } else {
          this.$message({
            message: this.$t('message.ordersend.t78'),
            type: 'warning'
          })
        }
      },
      // 获取单条寄件地址信息
      async getOneSendAddr (item) {
        const data = await getOneSendAddr({id: item.id, wxUserId: this.userinfo.id})
        if (data.code === 200) {
          this.sendAddr = data.obj
          this.item = {
            countrydata: data.obj.COUNTRY_CN,
            name: data.obj.NAME,
            postcode: data.obj.POSTCODE,
            mobile: data.obj.MOBILE,
            address: data.obj.ADDRESS,
            isDefault: String(data.obj.IS_DEFAULT),
            remark: data.obj.REMARK,
            data: data.obj
          }
          this.loading1 = false
        } else {
          this.$message({
            type: 'error',
            message: this.$t('message.ordersend.t79')
          })
          this.loading1 = false
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        }
      },
      // 修改寄件地址信息
      async updateSendAddr (payload) {
        const newpayload = {
          id: payload.data.ID,
          name: payload.name,
          address: payload.address,
          isDefault: payload.isDefault,
          mobile: payload.mobile,
          postcode: payload.postcode,
          remark: payload.remark
        }
        if (payload.countrydata === payload.data.COUNTRY_CN) {
          newpayload.country = undefined
        } else {
          newpayload.country = JSON.parse(payload.countrydata).id
          const name = JSON.parse(payload.countrydata).country_cn
          if (name === '中国' && payload.citydata && payload.citydata.length === 3) {
            newpayload.prov = payload.citydata[0].split('/')[0]
            newpayload.city = payload.citydata[1].split('/')[0]
            newpayload.county = payload.citydata[2].split('/')[0]
          } else if (name === '中国' && !payload.citydata) {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t80')
            })
            return
          } else if (name === '中国' && payload.citydata && payload.citydata.length < 3) {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t81')
            })
            return
          }
        }
        newpayload.wxUserId = this.userinfo.id
        const data = await updateOneSendAddr({...newpayload})
        if (data.code === 200) {
          this.getSendAddr()
          this.$message({
            type: 'success',
            message: this.$t('message.ordersend.t82')
          })
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        } else {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t83')
          })
        }
      },
      // 删除寄件地址信息
      async delSendAddr (id) {
        const data = await delSendAddrInfo({ids: id, wxUserId: this.userinfo.id})
        if (data.code === 200) {
          this.getSendAddr()
          this.$message({
            type: 'success',
            message: this.$t('message.ordersend.t84')
          })
        } else {
          this.getSendAddr()
          this.$message({
            type: 'error',
            message: this.$t('message.ordersend.t85')
          })
        }
      },
      // 创建寄件地址信息
      async addSendAddr (payload) {
        payload.wxUserId = this.userinfo.id
        payload.country = JSON.parse(payload.countrydata).id
        const name = JSON.parse(payload.countrydata).country_cn
        if (name === '中国' && payload.citydata && payload.citydata.length === 3) {
          payload.prov = payload.citydata[0].split('/')[0]
          payload.city = payload.citydata[1].split('/')[0]
          payload.county = payload.citydata[2].split('/')[0]
        } else if (name === '中国' && !payload.citydata) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t80')
          })
          return
        } else if (name === '中国' && payload.citydata && payload.citydata.length < 3) {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t81')
          })
          return
        }
        delete payload.cancel
        delete payload.countrydata
        try {
          const data = await addSendAddrInfo({...payload})
          if (data.code === 200) {
            this.getSendAddr()
            this.$message({
              type: 'success',
              message: this.$t('message.ordersend.t86')
            })
            this.dialogFormVisible = false
            this.showModalCitySelect = false
          } else {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t87')
            })
          }
        } catch (e) {
        }
      },
      // 获取收件地址信息
      async getReceiveAddr () {
        const data = await showReceAddr({
          wxUserId: this.userinfo.id
        })
        if (data.code === 200 && data.obj) {
          this.receAddrInfo = data.obj
          this.showPackageList = {show: true, data: data.obj[0].country}
        } else if (data.msg === '暂未查询到信息') {
          this.receAddrInfo = []
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t88')
          })
        } else {
          this.$message({
            message: this.$t('message.ordersend.t89'),
            type: 'warning'
          })
        }
      },
      // 获取单条收件地址信息
      async getOneReceAddr (item) {
        const data = await getOneReceAddr({id: item.id, wxUserId: this.userinfo.id})
        if (data.code === 200) {
          this.receAddr = data.obj
          this.item = {
            countrydata: data.obj.COUNTRY_CN,
            name: data.obj.NAME,
            postcode: data.obj.POSTCODE,
            mobile: data.obj.MOBILE,
            address: data.obj.ADDRESS,
            isDefault: String(data.obj.IS_DEFAULT),
            remark: data.obj.REMARK,
            data: data.obj
          }
          this.loading1 = false
        } else {
          this.$message({
            type: 'error',
            message: this.$t('message.ordersend.t79')
          })
          this.loading1 = false
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        }
      },
      // 修改收件地址信息
      async updateReceAddr (payload) {
        const newpayload = {
          id: payload.data.ID,
          name: payload.name,
          address: payload.address,
          isDefault: payload.isDefault,
          mobile: payload.mobile,
          postcode: payload.postcode,
          remark: payload.remark
        }
        if (payload.countrydata === payload.data.COUNTRY_CN) {
          newpayload.country = undefined
        } else {
          newpayload.country = JSON.parse(payload.countrydata).id
        }
        newpayload.wxUserId = this.userinfo.id
        const data = await updateOneReceAddr({...newpayload})
        if (data.code === 200) {
          this.getReceiveAddr()
          this.$message({
            type: 'success',
            message: this.$t('message.ordersend.t82')
          })
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        } else {
          this.$message({
            type: 'warning',
            message: this.$t('message.ordersend.t83')
          })
        }
      },
      // 删除收件地址信息
      async delReceAddr (id) {
        const data = await delReceAddrInfo({ids: id, wxUserId: this.userinfo.id})
        if (data.code === 200) {
          this.getReceiveAddr()
          this.$message({
            type: 'success',
            message: this.$t('message.ordersend.t84')
          })
        } else {
          this.getReceiveAddr()
          this.$message({
            type: 'error',
            message: this.$t('message.ordersend.t85')
          })
        }
      },
      // 创建收件地址信息
      async addReceAddr (payload) {
        payload.wxUserId = this.userinfo.id
        payload.country = JSON.parse(payload.countrydata).id
        delete payload.cancel
        delete payload.countrydata
        try {
          const data = await addReceAddrInfo({...payload})
          if (data.code === 200) {
            this.getReceiveAddr()
            this.$message({
              type: 'success',
              message: this.$t('message.ordersend.t86')
            })
            this.dialogFormVisible = false
            this.showModalCitySelect = false
          } else {
            this.$message({
              type: 'warning',
              message: this.$t('message.ordersend.t87')
            })
          }
        } catch (e) {
        }
      },
      /**
       * [getPrice 获取预付费用]
       * @return {[type]} [description]
       */
      async getPrice () {
        try {
          if (!this.receAddrInfo[this.receAddrIndex].country) {
            this.freight = this.$t('message.ordersend.t90')
            return
          }
          if (!this.form.weight) {
            this.freight = this.$t('message.ordersend.t91')
            return
          }
          if (!this.form.packageType) {
            this.freight = this.$t('message.ordersend.t92')
            return
          }
          if (!this.form.productType) {
            this.freight = this.$t('message.ordersend.t93')
            return
          }
          if (this.form.insured === '1' && !this.form.insuredAmount) {
            this.freight = this.$t('message.ordersend.t94')
            return
          }
          if (this.form.volumeWeight > 20) {
            this.freight = this.$t('message.ordersend.t95')
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
            countryId: this.receAddrInfo[this.receAddrIndex].country,
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
            this.freight = this.$t('message.ordersend.t96')
          }
          return
        } catch (err) {
          console.error(err)
          this.freight = this.$t('message.ordersend.t97')
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
              width: 40%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item2 {
              width: 40%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item3 {
              width: 40%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item4 {
              width: 40%;
              padding-right: 10px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p.item5 {
              width: 5%;
            }
            p.item6 {
              width: 5%;
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
