<template>
  <div class="sendorder_box">
    <div
      class="mask"
      v-show='loading2'
      v-loading="loading2"
      element-loading-text="订单正在提交..."
      element-loading-background="rgba(100, 100, 100, 0.4)"
    ></div>
    <div class="sendorder">
      <el-form class="form" ref="form" :model="form" label-width="120px">

        <div id="item1" class="sendorder_item" v-if="true">
          <h1 class="page_tit">寄件人信息</h1>
          <el-form-item label="寄件人姓名 : " prop="senderName"
                        :rules="[
              { required: true, message: '寄件人姓名不能为空'}
            ]"
          >
            <el-input placeholder="请输入寄件人姓名" v-model="form.senderName"/>
          </el-form-item>
          <el-form-item label="电话 : " prop="senderMobile"
                        :rules="[
              { required: true, message: '电话号码不能为空'},
              { type: 'number', message: '电话号码必须是数字值'}
            ]"
          >
            <el-input placeholder="请输入电话号码" v-model.number="form.senderMobile"/>
          </el-form-item>
          <el-row>
            <el-col :span="10">
              <country label="国家/地区 : " :cancel="form.cancel" @coutryChange="coutrySendChange"/>
            </el-col>
            <el-col :span="12">
              <select-city label="地区选择 : " :cancel="form.cancel" @selectCityChange="selectCityChange"
                           v-show="showSendCitySelect"/>
            </el-col>
          </el-row>
          <el-form-item label="街道地址 : " prop="senderAddress"
                        :rules="[
              { required: true, message: '街道地址不能为空'},
            ]"
          >
            <el-input placeholder="请输入详细的街道地址" v-model="form.senderAddress"/>
          </el-form-item>
          <el-form-item label="邮编 : " prop="senderPostcode"
                        :rules="[
              { required: true, message: '邮编不能为空'},
            ]"
          >
            <el-input placeholder="请输入邮编" v-model="form.senderPostcode"/>
          </el-form-item>
        </div>

        <div id="item2" class="sendorder_item" v-if="true">
          <h1 class="page_tit">收件人信息</h1>
          <el-form-item label="收件人姓名 : " prop="receiverName"
                        :rules="[
              { required: true, message: '收件人姓名不能为空'},
            ]"
          >
            <el-input placeholder="请输入收件人姓名" v-model="form.receiverName"/>
          </el-form-item>
          <el-form-item label="电话 : " prop="receiverMobile"
                        :rules="[
              { required: true, message: '电话号码不能为空'},
            ]"
          >
            <el-input placeholder="请输入电话号码" v-model="form.receiverMobile"/>
          </el-form-item>
          <country v-model="form.aa" :cancel="form.cancel" label="国家/地区 : " type="en"
                   @coutryChange="coutryReceiveChange"/>
          <el-form-item label="街道地址 : " prop="receiverAddress"
                        :rules="[
              { required: true, message: '街道地址不能为空'},
            ]"
          >
            <el-input placeholder="请输入详细的街道地址" v-model="form.receiverAddress"/>
          </el-form-item>
          <el-form-item label="邮编 : " prop="receiverPostcode"
                        :rules="[
              { required: true, message: '邮编不能为空'}
            ]"
          >
            <el-input placeholder="请输入邮编" v-model="form.receiverPostcode"/>
          </el-form-item>
        </div>

        <div id="item3" class="sendorder_item">
          <h1 class="page_tit">包裹信息</h1>
          <el-row :gutter="12">
            <el-col :span="5">
              <el-form-item label="包裹重量(kg) : ">
                <el-input-number v-model="form.weight" controls-position="right" :step='1' @change="weightChange"
                                 :min="0" :max="20"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item label="包裹长度(cm) : ">
                <el-input-number v-model="form.length" controls-position="right" :step='10' @change="lengthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="5">

              <el-form-item label="包裹宽度(cm) : ">
                <el-input-number v-model="form.width" controls-position="right" :step='10' @change="widthChange"
                                 :min="0"/>
              </el-form-item>
            </el-col>
            <el-col :span="5" :offset="6">
              <el-form-item label="包裹高度(cm) : ">
                <el-input-number v-model="form.height" controls-position="right" :step='10' @change="heightChange"
                                 :min="0"/>
              </el-form-item>

            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="10">
              <select-package :showPackageList="showPackageList" label="产品类型 : "
                              @selectPackageChange="selectPackageChange"/>
            </el-col>
            <el-col :span="10" :offset="1">
              <select-product :showProductList="showProductList" label="产品规格 : "
                              @selectProductChange="selectProductChange"/>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="11">
              <div class="img_ico"><img @click="dialogTableVisible = true" src="/static/image/question_ico.png"
                                        alt="退件说明"></div>
              <el-form-item label="是否保价 : " prop="insured"
                            :rules="[
                  { required: true, message: '请选择是否保价'},
                ]"
              >
                <el-radio-group @change='insuredChange' v-model="form.insured">
                  <el-radio label="1">是</el-radio>
                  <el-radio label="0">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="保价金额 : " v-show='showInsuredAmount'>
                <el-input-number placeholder="请填写您的保价金额" @change='insuredAmountChange' controls-position="right"
                                 v-model="form.insuredAmount" :step='100' :min='200' :max='200000'/>
              </el-form-item>
            </el-col>
          </el-row>
          <div class="img_ico"><img @click="returnGoodVisible = true" src="/static/image/question_ico.png" alt="退件说明">
          </div>
          <el-form-item label="是否退件 : " prop="returnGood"
                        :rules="[
              { required: true, message: '请选择是否退件'},
            ]"
          >
            <el-radio-group v-model="form.returnGood">
              <el-radio label="1">是</el-radio>
              <el-radio label="0">否</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="备注信息 : ">
            <el-input type="textarea" style="width: 70%" placeholder="我想跟快递小哥说点什么" v-model="form.remark"/>
          </el-form-item>
        </div>

        <div id="item4" class="sendorder_item">
          <h1 class="page_tit">包裹报关</h1>
          <table-package @tablePackage='tablePackage'></table-package>
          <p class="freight">预付运费(￥): <span>{{freight}}</span></p>
          <div class="send_submit">
            <el-button type="success" @click="submitForm('form')">确认下单</el-button>
            <el-button @click="onCancel('form')">重置</el-button>
          </div>
        </div>

        <div class="explain_info">
          <p>体验微信下单</p>
          <div class="img"><img src="/static/image/weChat.jpg" alt="国际快递服务中心公众号"></div>
          <div class="img">
            <p><a href="/#/Send" target="_blank">寄件流程</a></p>
            <p @click="dialogTableVisible = true">关于保价</p>
            <p @click="returnGoodVisible = true">关于退件</p>
            <p @click="packageVisible = true">包裹报关</p>
          </div>
        </div>

      </el-form>
    </div>

    <el-dialog title="关于保价" custom-class="dialog" :visible.sync="dialogTableVisible">
      <p>
        此项服务以自愿为原则。寄件人选择此项服务时，应确定保价金额与每个邮件内件实际价值一致，每个邮件保价金额最高限额为二十万元人民币，保价费按申报的保价金额的0.5%收取，每件最低收取1.00元人民币。未按规定交纳保价费的快件，不属于保价快件。</p>
    </el-dialog>
    <el-dialog title="关于退件" custom-class="dialog" :visible.sync="returnGoodVisible">
      <p>若快递妥投出现问题，我们会逆向返还给寄件人，逆向物流费用将由寄件人承担。</p>
    </el-dialog>
    <el-dialog title="包裹报关" custom-class="dialog" :visible.sync="packageVisible">
      <p>包裹用于清关使用，若不填，清关另需其他材料我们会电话联系您。</p>
    </el-dialog>

    <el-dialog class="dialog" :title="modalTitle" width="600px" :visible.sync="dialogFormVisible">
      <el-form v-loading="loading1"
               element-loading-text="获取用户地址信息..."
               element-loading-background="rgba(255, 255,255, 0.6)"
               :model="item"
               label-width="90px"
      >
        <el-form-item label="联系人姓名" :label-width="formLabelWidth">
          <el-input v-model="item.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="item.mobile" auto-complete="off"></el-input>
        </el-form-item>
        <country v-model="item.countrydata" :values="item.countrydata" label="国家/地区 : " type="cn"
                 @coutryChange="addAddrCountry"/>
        <transition name="el-zoom-in-top">
          <select-city label="地区选择 : " :cancel="item.cancelCity" @selectCityChange="modalSeleteCity"
                       v-show="showModalCitySelect"/>
        </transition>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="item.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮编" :label-width="formLabelWidth">
          <el-input v-model="item.postcode" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="item.remark" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="设为默认地址">
          <el-radio-group v-model="item.isDefault">
            <el-radio label="1">是</el-radio>
            <el-radio label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确 定</el-button>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
      </div>
    </el-dialog>

    <div class="float_left">
      <!-- <p class="anchor active" @click='goAnchor("#item1")'>寄件人信息<span class="el-icon-d-arrow-right"></span></p>
      <p class="anchor" @click='goAnchor("#item2")'>收件人信息<span class="el-icon-d-arrow-right"></span></p>
      <p class="anchor" @click='goAnchor("#item3")'>包裹信息<span class="el-icon-d-arrow-right"></span></p>
      <p class="anchor" @click='goAnchor("#item4")'>包裹报关<span class="el-icon-d-arrow-right"></span></p> -->

      <p class="anchor active" @click='goAnchor("#item1")'>寄</p>
      <p class="anchor" @click='goAnchor("#item2")'>收</p>
      <p class="anchor" @click='goAnchor("#item3")'>包</p>
      <p class="anchor" @click='goAnchor("#item4")'>报</p>
      <p class="anchor top" @click='goAnchor("#item9")'></p>

      <!-- <p class="anchor"><a href='/#/cn/ordersend/#item1'>寄件人信息<span class="el-icon-d-arrow-right"></span></a></p>
      <p class="anchor"><a href='/#/cn/ordersend/#item2'>收件人信息<span class="el-icon-d-arrow-right"></span></a></p>
      <p class="anchor"><a href='/#/cn/ordersend/#item3'>包裹信息<span class="el-icon-d-arrow-right"></span></a></p>
      <p class="anchor"><a href='/#/cn/ordersend/#item4'>包裹报关<span class="el-icon-d-arrow-right"></span></a></p> -->
    </div>
    <el-dialog title="下单须知" custom-class="notice" :visible.sync="dialogVisible">
      <p>1, 您现在为非登陆状态下单，付款成功后请 <span style='color: red'> <b>自行保留订单号，以便查询订单信息</b></span></p>
      <p>2, 建议关注公众号后登陆下单，或者使用微信登陆后下单</p>
      <p>3, 下单成功后，您可凭订单号在<span style='color: red'><b> 首页 </b></span>的 <b>寄件查询</b> 功能中查询</p>
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
        freight: '填写快件信息后,自动获取',
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
      if (this.isLogin) {
        this.$router.push({path: '/cn/ordersend'})
        return
      }
      window.document.title = '上海明彰网络科技有限公司'
      this.menu()
      // this.getSendAddr()
      // this.getReceiveAddr()
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
        console.log('tablePackage', data)
      },
      async submitForm (form) {
        try {
          this.loading2 = true
          this.$refs[form].validate((valid) => {
            if (valid) {
            } else {
              this.$message({
                type: 'warning',
                message: '您的信息还不够完整，请填写完整'
              })
              throw new Error('您的信息还不够完整，请填写完整')
            }
          })
          if (this.form.insured !== '1' && this.form.insured !== '0') {
            this.$message({
              type: 'warning',
              message: '请选择是否保价'
            })
            this.loading2 = false
            return
          }

          if (this.form.returnGood !== '1' && this.form.returnGood !== '0') {
            this.$message({
              type: 'warning',
              message: '请选择是否退件'
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
          console.log('data', data)
          if (data.code === 200) {
            this.loading2 = false
            this.form.cancel = !this.form.cancel
            this.$refs[form].resetFields()
            this.form = {}
            this.freight = '请选择收件地址'
            this.showPackageList = {show: false, data: []}
            this.showProductList = {show: false}
            this.$notify({
              title: '成功',
              message: '下单成功！！！',
              type: 'success'
            })
            this.$router.push('/cn/cashier?order=' + data.obj.orderNo)
            this.onCancel('form')
          } else {
            this.loading2 = false
            this.$notify({
              title: '失败',
              message: '下单失败,稍后请重试',
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
      // 模态框确认操作
      confirm () {
        if (!this.item.name) {
          this.$message({
            type: 'warning',
            message: '联系人姓名不能为空'
          })
          return
        }
        if (!this.item.mobile) {
          this.$message({
            type: 'warning',
            message: '联系人电话不能为空'
          })
          return
        }
        if (!this.item.countrydata) {
          this.$message({
            type: 'warning',
            message: '联系人国家不能为空'
          })
          return
        }
        if (!this.item.address) {
          this.$message({
            type: 'warning',
            message: '联系人地址不能为空'
          })
          return
        }
        if (!this.item.postcode) {
          this.$message({
            type: 'warning',
            message: '邮编不能为空'
          })
        }
        if (this.type === 'add' && this.modalTitle === '新增寄件地址') {
          console.log(this.modalTitle)
          console.log('AAA', this.item)
          this.addSendAddr(this.item)
        }

        if (this.type === 'add' && this.modalTitle === '新增收件地址') {
          console.log(this.modalTitle)
          this.addReceAddr(this.item)
        }

        if (this.type === 'update' && this.modalTitle === '修改寄件地址') {
          console.log(this.modalTitle)
          this.updateSendAddr(this.item)
        }

        if (this.type === 'update' && this.modalTitle === '修改收件地址') {
          console.log(this.modalTitle)
          this.updateReceAddr(this.item)
        }
      },
      addAddr (type) {
        this.modalTitle = type === 'send' ? '新增寄件地址' : '新增收件地址'
        this.dialogFormVisible = true
        this.type = 'add'
        this.item = {isDefault: '1'}
        console.log('item', this.item)
        this.item.cancel = !this.item.cancel
      },
      updateAddr (item, type) {
        this.loading1 = true
        this.modalTitle = type === 'send' ? '修改寄件地址' : '修改收件地址'
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
        this.$confirm('地址删除将无法回复, 是否继续本次操作?', '删除本条地址', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
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
            message: '已取消删除'
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
        this.freight = '请选择收件地址'
        this.showPackageList = {show: true, data: []}
        this.showProductList = {show: false}
      },
      menu () {
        window.scrollTo(0, 0)
      },
      insuredChange (data) {
        console.log(this.form.insuredAmount)
        console.log('dataChange', data)
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
          console.log(this.form.volume)
          console.log(this.form.volumeWeight)
        } catch (error) {
          console.log('计算体积出错了', error)
        }
      },
      widthChange (e) {
        try {
          if (this.form.length && this.form.height) {
            this.form.volume = Number(this.form.length) * Number(this.form.height) * e
            this.form.volumeWeight = Number(this.form.volume) / 5000
            this.getPrice()
          }
          console.log(this.form.volume)
          console.log(this.form.volumeWeight)
        } catch (error) {
          console.log('计算体积出错了', error)
        }
      },
      heightChange (e) {
        try {
          if (this.form.width && this.form.length) {
            this.form.volume = Number(this.form.width) * Number(this.form.length) * e
            this.form.volumeWeight = this.form.volume / 5000
            this.getPrice()
          }
          console.log(this.form.volume)
          console.log(this.form.volumeWeight)
        } catch (error) {
          console.log('计算体积出错了', error)
        }
      },
      // 获取寄件地址信息
      async getSendAddr () {
        let data = await showSendAddr({
          wxUserId: localStorage.mj_userId
        })
        if (data.code === 200 && data.obj) {
          this.sendAddrInfo = data.obj
        } else if (data.msg === '暂未查询到信息') {
          this.receAddrInfo = []
          this.$message({
            type: 'warning',
            message: '暂无查询到寄件地址信息,建议新增'
          })
        } else {
          this.$message({
            message: '用户寄件地址列表获取失败',
            type: 'warning'
          })
        }
      },
      // 获取单条寄件地址信息
      async getOneSendAddr (item) {
        const data = await getOneSendAddr({id: item.id, wxUserId: localStorage.mj_userId})
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
            message: '用户地址信息获取失败,无法修改当前地址'
          })
          this.loading1 = false
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        }
      },
      // 修改寄件地址信息
      async updateSendAddr (payload) {
        console.log('payload', payload)
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
              message: '请选择省市县'
            })
            return
          } else if (name === '中国' && payload.citydata && payload.citydata.length < 3) {
            this.$message({
              type: 'warning',
              message: '省市县选择请精确到县级'
            })
            return
          }
        }
        newpayload.wxUserId = localStorage.mj_userId
        const data = await updateOneSendAddr({...newpayload})
        if (data.code === 200) {
          this.getSendAddr()
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        } else {
          this.$message({
            type: 'warning',
            message: '修改失败'
          })
        }
      },
      // 删除寄件地址信息
      async delSendAddr (id) {
        const data = await delSendAddrInfo({ids: id, wxUserId: localStorage.mj_userId})
        if (data.code === 200) {
          this.getSendAddr()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        } else {
          this.getSendAddr()
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      },
      // 创建寄件地址信息
      async addSendAddr (payload) {
        console.log('payload', payload)
        console.log('this.item', this.item)
        payload.wxUserId = localStorage.mj_userId
        payload.country = JSON.parse(payload.countrydata).id
        const name = JSON.parse(payload.countrydata).country_cn
        if (name === '中国' && payload.citydata && payload.citydata.length === 3) {
          payload.prov = payload.citydata[0].split('/')[0]
          payload.city = payload.citydata[1].split('/')[0]
          payload.county = payload.citydata[2].split('/')[0]
        } else if (name === '中国' && !payload.citydata) {
          this.$message({
            type: 'warning',
            message: '请选择省市县'
          })
          return
        } else if (name === '中国' && payload.citydata && payload.citydata.length < 3) {
          this.$message({
            type: 'warning',
            message: '省市县选择请精确到县级'
          })
          return
        }
        delete payload.cancel
        delete payload.countrydata
        try {
          console.log({...payload})
          const data = await addSendAddrInfo({...payload})
          if (data.code === 200) {
            this.getSendAddr()
            this.$message({
              type: 'success',
              message: '创建成功'
            })
            this.dialogFormVisible = false
            this.showModalCitySelect = false
          } else {
            this.$message({
              type: 'warning',
              message: '创建失败'
            })
          }
        } catch (e) {
          console.log('发生错误...', e)
        }
      },
      // 获取收件地址信息
      async getReceiveAddr () {
        const data = await showReceAddr({
          wxUserId: localStorage.mj_userId
        })
        if (data.code === 200 && data.obj) {
          this.receAddrInfo = data.obj
          this.showPackageList = {show: true, data: data.obj[0].country}
        } else if (data.msg === '暂未查询到信息') {
          this.receAddrInfo = []
          this.$message({
            type: 'warning',
            message: '暂无查询到收件地址信息,建议新增'
          })
        } else {
          this.$message({
            message: '用户收件地址列表获取失败',
            type: 'warning'
          })
        }
      },
      // 获取单条收件地址信息
      async getOneReceAddr (item) {
        const data = await getOneReceAddr({id: item.id, wxUserId: localStorage.mj_userId})
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
            message: '用户地址信息获取失败,无法修改当前地址'
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
        newpayload.wxUserId = localStorage.mj_userId
        const data = await updateOneReceAddr({...newpayload})
        if (data.code === 200) {
          this.getReceiveAddr()
          this.$message({
            type: 'success',
            message: '修改成功'
          })
          this.dialogFormVisible = false
          this.showModalCitySelect = false
        } else {
          this.$message({
            type: 'warning',
            message: '修改失败'
          })
        }
      },
      // 删除收件地址信息
      async delReceAddr (id) {
        const data = await delReceAddrInfo({ids: id, wxUserId: localStorage.mj_userId})
        if (data.code === 200) {
          this.getReceiveAddr()
          this.$message({
            type: 'success',
            message: '删除成功'
          })
        } else {
          this.getReceiveAddr()
          this.$message({
            type: 'error',
            message: '删除失败'
          })
        }
      },
      // 创建收件地址信息
      async addReceAddr (payload) {
        payload.wxUserId = localStorage.mj_userId
        payload.country = JSON.parse(payload.countrydata).id
        delete payload.cancel
        delete payload.countrydata
        try {
          const data = await addReceAddrInfo({...payload})
          if (data.code === 200) {
            this.getReceiveAddr()
            this.$message({
              type: 'success',
              message: '创建成功'
            })
            this.dialogFormVisible = false
            this.showModalCitySelect = false
          } else {
            this.$message({
              type: 'warning',
              message: '创建失败'
            })
          }
        } catch (e) {
          console.log('发生错误...', e)
        }
      },
      /**
       * [getPrice 获取预付费用]
       * @return {[type]} [description]
       */
      async getPrice () {
        try {
          if (!this.form.receiverCountry) {
            this.freight = '请选择您的收件地址'
            return
          }
          if (!this.form.weight) {
            this.freight = '请填写您的包裹重量'
            return
          }
          if (!this.form.packageType) {
            this.freight = '请选择您的产品类型'
            return
          }
          if (!this.form.productType) {
            this.freight = '请选择您的产品规格'
            return
          }
          if (this.form.insured === '1' && !this.form.insuredAmount) {
            this.freight = '您选择了保价但是没有填写报价金额'
            return
          }
          if (this.form.volumeWeight > 20) {
            this.freight = '您包裹的体积太大了,我们不能寄'
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
            this.freight = '很抱歉，您所选择产品规格暂不支持邮寄,请选择其他产品规格'
          }
          return
        } catch (err) {
          console.error(err)
          this.freight = '请先填写快件信息'
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
        background-image: url(/static/image/title.png);
        height: 48px;
        font-size: 20px;
        color: #ffffff;
        padding-left: 108px;
        line-height: 45px;
        margin-top: 30px;
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
