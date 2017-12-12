<template>
	<div class="sendorder_box">
		<Headers :show='show' :link='link'></Headers>
		<div class="sendorder">
			<el-form class="form" ref="form" :model="form" label-width="100px">

				<div class="sendorder_item" v-show="true">
					<h1 class="page_tit">寄件人信息</h1>
					<div @click='sendAddress(key,item)' v-show="showSendAddr||key===sendAddrIndex?true:false" :class="{ active: key===sendAddrIndex?true:false}" v-for="(item,key) in sendAddrInfo" class="sendAddrInfo">
						<p class="item1">姓名 : {{item.name}}</p>
						<p class="item2">电话 : {{item.mobile}}</p>
						<p class="item3">地址 : {{item.address}}</p>
						<p class="item4">备注 : {{item.remark}}</p>
						<p class="item5">
							<el-button type="text" @click="updateAddr(item,'send')" style="color:#bd7e00">编辑</el-button>
							<el-button type="text" @click="delAddr(item,'send')" style="color:#fa5555">删除</el-button>
						</p>
					</div>
					<div style="marginLeft: 28px">
						<el-button type="text" size="mini" @click="addAddr(send)">创建新地址</el-button>
						<el-button type="text" size="mini" @click="showSendAddr=!showSendAddr" v-show="showSendAddr===false">更多地址</el-button>
						<el-button type="text" size="mini" @click="showSendAddr=!showSendAddr" v-show="showSendAddr===true">收起</el-button>
					</div>
				</div>
				<div class="sendorder_item" v-show="true">
					<h1 class="page_tit">收件人信息</h1>
					<div @click='receAddress(key,item)' v-show="showReceAddr||key===receAddrIndex?true:false" :class="{ active: key===receAddrIndex?true:false}" v-for="(item,key) in receAddrInfo" class="sendAddrInfo">
						<p class="item1">姓名 : {{item.name}}</p>
						<p class="item2">电话 : {{item.mobile}}</p>
						<p class="item3">地址 : {{item.address}}</p>
						<p class="item4">备注 : {{item.remark}}</p>
						<p class="item5">
							<el-button type="text" size="mini" @click="addAddr(rece)">创建新地址</el-button>
							<el-button type="text" @click="updateAddr(item,'rece')" style="color:#bd7e00">编辑</el-button>
							<el-button type="text" @click="delAddr(item,'rece')" style="color:#fa5555">删除</el-button>
						</p>
					</div>
					<div style="marginLeft: 28px">
						<el-button type="text" size="mini" @click="showReceAddr=!showReceAddr" v-show="showReceAddr===false">更多地址</el-button>
						<el-button type="text" size="mini" @click="showReceAddr=!showReceAddr" v-show="showReceAddr===true">收起</el-button>
					</div>
				</div>
				<div class="sendorder_item" v-show="false">
					<h1 class="page_tit">寄件人信息</h1>
				  <el-form-item label="寄件人姓名 : " prop="senderName"
				    :rules="[
				      { required: true, message: '寄件人姓名不能为空'}
				    ]"
				  >
				    <el-input placeholder="请输入寄件人姓名" v-model="form.senderName" />
				  </el-form-item>
				  <el-form-item label="电话 : " prop="senderMobile"
				    :rules="[
				      { required: true, message: '电话号码不能为空'},
				      { type: 'number', message: '电话号码必须是数字值'}
				    ]"
				  >
				    <el-input placeholder="请输入电话号码" v-model.number="form.senderMobile" />
				  </el-form-item>
				  <country label="国家/地区 : " :cancel="form.cancel" @coutryChange="coutrySendChange"/>
				  <select-city label="地区选择 : " :cancel="form.cancel" @selectCityChange="selectCityChange" v-show="showSendCitySelect"/>
				  <el-form-item label="街道地址 : " prop="senderAddress"
				    :rules="[
				      { required: true, message: '街道地址不能为空'},
				    ]"
				  >
				    <el-input placeholder="请输入详细的街道地址" v-model="form.senderAddress" />
				  </el-form-item>
				  <el-form-item label="邮编 : " prop="senderPostcode"
				    :rules="[
				      { required: true, message: '邮编不能为空'},
				    ]"
				  >
				    <el-input placeholder="请输入邮编" v-model="form.senderPostcode" />
				  </el-form-item>
				</div>

				<div class="sendorder_item" v-show="false">
					<h1 class="page_tit">收件人信息</h1>
				  <el-form-item label="收件人姓名 : " prop="receiverName"
				    :rules="[
				      { required: true, message: '收件人姓名不能为空'},
				    ]"
				  >
				    <el-input placeholder="请输入收件人姓名" v-model="form.receiverName" />
				  </el-form-item>
				  <el-form-item label="电话 : " prop="receiverMobile"
				    :rules="[
				      { required: true, message: '电话号码不能为空'},
				    ]"
				  >
				    <el-input placeholder="请输入电话号码" v-model="form.receiverMobile" />
				  </el-form-item>
				  <country v-model="form.aa" :cancel="form.cancel" label="国家/地区 : " type="en" @coutryChange="coutryReceiveChange"/>
				  <el-form-item label="街道地址 : " prop="receiverAddress"
				    :rules="[
				      { required: true, message: '街道地址不能为空'},
				    ]"
				  >
				    <el-input placeholder="请输入详细的街道地址" v-model="form.receiverAddress" />
				  </el-form-item>
				  <el-form-item label="邮编 : " prop="receiverPostcode"
				    :rules="[
				      { required: true, message: '邮编不能为空'}
				    ]"
				  >
				    <el-input placeholder="请输入邮编" v-model="form.receiverPostcode" />
				  </el-form-item>
				</div>

				<div class="sendorder_item">
					<h1 class="page_tit">包裹信息</h1>
				  <el-form-item label="包裹重量 : " prop="weight"
				    :rules="[
				      { required: true, message: '包裹重量不能为空'},
				    ]"
				  >
				    <el-input placeholder="请填写您的包裹重量" @change="weightChange" v-model="form.weight" />
				  </el-form-item>
				  <select-package :showPackageList="showPackageList" label="产品类型 : " @selectPackageChange="selectPackageChange"/>
				  <select-product :showProductList="showProductList" label="产品规格 : " @selectProductChange="selectProductChange"/>
				  <el-form-item label="是否保价 : " prop="insured"
				    :rules="[
				      { required: true, message: '请选择是否保价'},
				    ]"
				  >
				    <el-radio-group v-model="form.insured">
				      <el-radio label="1">是</el-radio>
				      <el-radio label="0">否</el-radio>
				    </el-radio-group>
				  </el-form-item>
				  <el-form-item label="保价金额 : ">
				    <el-input placeholder="请填写您的保价金额" v-model="form.insuredAmount" />
				  </el-form-item>
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
				    <el-input type="textarea"  placeholder="我想跟快递小哥说点什么" v-model="form.remark" />
				  </el-form-item>
				</div>

				<div class="sendorder_item">
					<h1 class="page_tit">包裹报关</h1>
					<table-package></table-package>
					<p class="freight">预付运费: ￥ <span>{{freight}}</span></p>
					<div class="send_submit">
					    <el-button type="success" @click="submitForm('form')">确认下单</el-button>
					    <el-button @click="onCancel('form')" >重置</el-button>
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
			<p>此项服务以自愿为原则。寄件人选择此项服务时，应确定保价金额与每个邮件内件实际价值一致，每个邮件保价金额最高限额为二十万元人民币，保价费按申报的保价金额的0.5%收取，每件最低收取1.00元人民币。未按规定交纳保价费的快件，不属于保价快件。</p>
		</el-dialog>
		<el-dialog title="关于退件" custom-class="dialog" :visible.sync="returnGoodVisible">
			<p>若快递妥投出现问题，我们会逆向返还给寄件人，逆向物流费用将由寄件人承担。</p>
		</el-dialog>
		<el-dialog title="包裹报关" custom-class="dialog" :visible.sync="packageVisible">
			<p>包裹用于清关使用，若不填，清关另需其他材料我们会电话联系您。</p>
		</el-dialog>

		<el-dialog class="dialog" :title="modalTitle" width="600px" :visible.sync="dialogFormVisible">
			<el-form :model="item" label-width="90px">
			<el-form-item label="联系人姓名" :label-width="formLabelWidth">
			  <el-input v-model="item.name" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="电话" :label-width="formLabelWidth">
			  <el-input v-model="item.mobile" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="国家地区" :label-width="formLabelWidth">
			  <el-input v-model="item.country" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="地址" :label-width="formLabelWidth">
			  <el-input v-model="item.address" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="邮编" :label-width="formLabelWidth">
			  <el-input v-model="item.postcode" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="备注" :label-width="formLabelWidth">
			  <el-input v-model="item.remark" auto-complete="off"></el-input>
			</el-form-item>
			<el-form-item label="设为默认地址" :label-width="formLabelWidth">
			  <el-input v-model="item.is_default" auto-complete="off"></el-input>
			</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
			<el-button type="primary" @click="confirm">确 定</el-button>
			<el-button @click="dialogFormVisible = false">取 消</el-button>
			</div>
	    </el-dialog>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import Country from '@/parts/Country'
import SelectCity from '@/parts/SelectCity'
import SelectPackage from '@/parts/SelectPackage'
import SelectProduct from '@/parts/SelectProduct'
import TablePackage from '@/parts/TablePackage'
import { getPrice } from '@/services/parts/getPrice'
import { showSendAddr,showReceiveAddr } from '@/services/address'

export default {
	name: 'orderSend',
	components:{
		Headers,
		Footers,
		Country,
		SelectCity,
		SelectPackage,
		SelectProduct,
		TablePackage
	},
	data(){
		return {
			dialogTableVisible: false,
			returnGoodVisible: false,
			packageVisible: false,
			show: true,
			link: '/less',
			dialogVisible: false,
			form: {
				senderName: '',
				cancel: true
			},
			showSendCitySelect: false,
			showPackageList: {},
			showProductList: {},
			freight: '尚未获取到,请填写快件信息',
			sendAddrInfo:[],
			sendAddrIndex: 0,
			showSendAddr: false,
			receAddrInfo: [],
			receAddrIndex: 0,
			showReceAddr: false,
			dialogFormVisible: false,
			formLabelWidth:'120px',
			item:{},
			modalTitle: '新建地址'
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
		this.getSendAddr()
		this.getReceiveAddr()
	},
	methods:{
		confirm(){
			// 地址信息修改
		},
		addAddr(type){
			this.modalTitle= type==='send'?'新增寄件地址':'新增收件地址'
			this.dialogFormVisible=true
			this,item = {}
		},
		updateAddr(item,type){
			this.item = item			
			this.modalTitle= type==='send'?'寄件地址修改':'收件地址修改'
			this.dialogFormVisible=true
		},
		delAddr(item,type){
			this.$confirm('地址删除将无法回复, 是否继续本次操作?', '删除本条地址', {
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
		},
		sendAddress(e){
			this.sendAddrIndex = e
			this.showSendAddr = false
			console.log(this.sendAddrInfo[e])
		},
		receAddress(e){
			this.receAddrIndex = e
			this.showReceAddr = false
			this.form.receiverCountry=this.receAddrInfo[e].country
			this.showPackageList = {show:true,data:this.receAddrInfo[e].country}
			this.showProductList = {show:false}
			this.getPrice()
		},
		async getReceiveAddr(){
			let data = await showReceiveAddr({
    			wxUserId: localStorage.mj_userId
			})
			if (data.code===200&& data.obj) {
				this.receAddrInfo = data.obj
				console.log('data1232',data)
			}else{
				this.$message({
					message: '用户收件地址列表获取失败',
					type: 'warning'
				})
			}
		},
		async getSendAddr(){
    		let data = await showSendAddr({
    			wxUserId: localStorage.mj_userId
    		})
    		if (data.code === 200 && data.obj) {
    			console.log('data', data)
    			this.sendAddrInfo = data.obj
    		}else{
    			this.$message({
		          message: '用户寄件地址列表获取失败',
		          type: 'warning'
		        })
    		}
    	},
		submitForm(form) {
			this.$refs[form].validate((valid) => {
				if (valid) {
				  alert('submit!');
				} else {
				  console.log('error submit!!');
				  return false;
				}
			});
	    },
		onCancel(form){
			this.form.cancel=!this.form.cancel
			this.$refs[form].resetFields();
			console.log('开始清空了')
			this.form={}
			// for (item in this.form) {
			// 	item=undefined
			// }
			console.log(this.form)
			this.showPackageList = {show: false,data:[]}
			this.showProductList = {show: false}
		},
		menu(){
			window.scrollTo(0,0)
		},
		coutrySendChange(data) {
			// 获取寄件人国家信息
			this.form.senderCountry=data
			console.log('data',JSON.parse(data).country_cn)
			if (JSON.parse(data).country_cn === '中国') {
				this.showSendCitySelect = true
			}else{
				this.showSendCitySelect = false
			}
		},
		selectCityChange(data) {
			// 获取寄件人地区三联信息
			if (data && data.length === 3) {
				this.form.province=data[0].split('/')[1]
				this.form.city=data[1].split('/')[1]
				this.form.county=data[2].split('/')[1]
			}
		},
		coutryReceiveChange(data) {
			this.form.receiverCountry=data
			this.showPackageList = {show:true,data:data}
			this.showProductList = {show:false}
			this.getPrice()
		},
		selectPackageChange(data) {
			this.form.packageType=data
			this.showProductList = {show:true,data:data}
			this.getPrice()
		},
		selectProductChange(data) {
			this.form.productType=data
			console.log('我想跟快递小哥说点什么')
			this.getPrice()
		},
		weightChange() {
			console.log(1)
			this.getPrice()
		},
		/**
	     * [getPrice 获取预付费用]
	     * @return {[type]} [description]
	     */
	    async getPrice () {
			try {

				// if (!this.form.receiverCountry) {
				//   this.freight = '请先选择收件地址'
				//   return
				// }
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
				if (this.form.insured==='1' && !this.form.insuredAmount) {
					this.freight = '您选择了保价但是没有填写报价金额'
					return
				}
				const payload = {
					weight: this.form.weight,
					countryId: this.receAddrInfo[this.receAddrIndex].country,
					packageTypeId: JSON.parse(this.form.packageType).id,
					productTypeId: JSON.parse(this.form.productType).id
				}
				console.log('payload', payload)
				const price = await getPrice(payload)
				console.log('price', price)
				let data = price.obj
				console.log('data', data)
				if (this.form.insured==='1') {
					this.freight = data.finalPrice + this.form.insuredAmount*0.005
				}else{
					this.freight = data.finalPrice
				}
				// this.priceId = data.priceId
				// this.advanceStatus['status'] = true
				// this.advanceStatus['text'] = '请先输入重量'
				// this.advance = data.finalPrice
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
	.el-dialog {
		width: 420px!important;
	}
	.el-dialog__header {
	padding:15px 15px 10px 25px!important;
	}
	.dialog {
		.el-dialog {
			width: 700px!important;
		}
	}
	.el-dialog__body {
		padding:30px 50px 20px;
		border-top: 1px #ddd solid;
		border-bottom: 1px #ddd solid;
		.el-form-item__label {
		  width: 120px!important;
		}
		.el-form-item__content {
		  margin-left: 120px!important;
		  margin-right: 40px!important;
		}
	}
	background-color: #f0f0f0;
	.sendorder{
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
					padding:20px 10px 0px;
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
						text-overflow:ellipsis;
						white-space:nowrap;
						overflow: hidden;
					}
					p.item2 {
						width: 45%;
						padding-right: 10px;
						text-overflow:ellipsis;
						white-space:nowrap;
						overflow: hidden;
					}
					p.item3 {
						width: 45%;
						padding-right: 10px;
						text-overflow:ellipsis;
						white-space:nowrap;
						overflow: hidden;
					}
					p.item4 {
						width: 45%;
						padding-right: 10px;
						text-overflow:ellipsis;
						white-space:nowrap;
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
				.freight{
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
					p:last-child{
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
