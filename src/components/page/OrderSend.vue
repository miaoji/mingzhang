<template>
	<div class="sendorder_box">
		<Headers :show='show' :link='link'></Headers>
		<div class="sendorder">
			<el-form class="form" ref="form" :model="form" label-width="100px">
				<div class="sendorder_item">
					<h1 class="page_tit">寄件人信息</h1>
				  <el-form-item label="寄件人姓名 : ">
				    <el-input placeholder="请输入寄件人姓名" v-model="form.senderName" />
				  </el-form-item>
				  <el-form-item label="电话 : ">
				    <el-input placeholder="请输入电话号码" v-model="form.senderMobile" />
				  </el-form-item>
				  <country label="国家/地区 : " @coutryChange="coutrySendChange"/>
				  <select-city label="地区选择 : " @selectCityChange="selectCityChange" v-show="showSendCitySelect"/>
				  <el-form-item label="街道地址 : ">
				    <el-input placeholder="请输入详细的街道地址" v-model="form.senderAddress" />
				  </el-form-item>
				  <el-form-item label="邮编 : ">
				    <el-input placeholder="请输入邮编" v-model="form.senderPostcode" />
				  </el-form-item>
				</div>
				<div class="sendorder_item">
					<h1 class="page_tit">收件人信息</h1>
				  <el-form-item label="收件人姓名 : ">
				    <el-input placeholder="请输入收件人姓名" v-model="form.receiverName" />
				  </el-form-item>
				  <el-form-item label="电话 : ">
				    <el-input placeholder="请输入电话号码" v-model="form.receiverMobile" />
				  </el-form-item>
				  <country v-model="form.aa" label="国家/地区 : " @coutryChange="coutryReceiveChange"/>
				  <el-form-item label="街道地址 : ">
				    <el-input placeholder="请输入详细的街道地址" v-model="form.receiverAddress" />
				  </el-form-item>
				  <el-form-item label="邮编 : ">
				    <el-input placeholder="请输入右边" v-model="form.receiverPostcode" />
				  </el-form-item>
				</div>
				<div class="sendorder_item">
					<h1 class="page_tit">包裹信息</h1>
				  <select-package :showPackageList="showPackageList" label="产品类型 : " @selectPackageChange="selectPackageChange"/>
				  <select-product :showProductList="showProductList" label="产品规格 : " @selectProductChange="selectProductChange"/>
				  <el-form-item label="产品规格 : ">
				    <el-input placeholder="请选择产品规格" v-model="form.name" />
				  </el-form-item>
				  <el-form-item label="是否保价 : ">
				    <el-radio-group v-model="form.resource">
				      <el-radio label="是"></el-radio>
				      <el-radio label="否"></el-radio>
				    </el-radio-group>
				  </el-form-item>
				  <el-form-item label="保价金额 : ">
				    <el-input placeholder="请填写您的保价金额" v-model="form.name" />
				  </el-form-item>
				  <el-form-item label="是否退件 : ">
				    <el-radio-group v-model="form.resource">
				      <el-radio label="是"></el-radio>
				      <el-radio label="否"></el-radio>
				    </el-radio-group>
				  </el-form-item>
				  <el-form-item label="备注信息 : ">
				    <el-input type="textarea"  placeholder="我想跟快递小哥说点什么" v-model="form.name" />
				  </el-form-item>
				</div>

				<div class="sendorder_item">
					<h1 class="page_tit">包裹报关</h1>
					<table-package></table-package>
					<div class="send_submit">
					    <el-button type="success" @click="onSubmit">确认下单</el-button>
					    <el-button @click="onCancel" >重置</el-button>
					</div>
				</div>
				<div class="explain_info">
					<p>体验微信下单</p>
					<div class="img"><img src="/static/image/weChat.jpg" alt="国际快递服务中心公众号"></div>
				</div>
			</el-form>
		</div>
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
			show: true,
			link: '/less',
			dialogVisible: false,
			form: {},
			showSendCitySelect: false,
			showPackageList: {},
			showProductList: {},
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
	},
	methods:{
		onSubmit(){
			console.log('data', this.form)
		},
		onCancel(){
			this.form={}
		},
		menu(){
			window.scrollTo(0,0)
		},
		coutrySendChange(data) {
			// 获取寄件人国家信息
			this.form.senderCountry=data
			if (data === '中国') {
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
		},
		selectPackageChange(data) {
			this.form.package=data
			this.showProductList = {show:true,data:data}
		},
		selectProductChange(data) {
			this.form.paoduct=data
		}
	}
}
</script>
<style scoped lang="less">
.sendorder_box {
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
				.send_submit {
					text-align: center;
					// background-color: #fff;
					// border: 1px #ddd solid;
					padding: 50px 0px;
					button {
						width: 25%;
						margin: 0px 40px;
						height: 50px;
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
				}
			}
		}
	}

}
</style>
