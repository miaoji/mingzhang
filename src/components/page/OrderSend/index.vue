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
					<div class="send_submit">
				    <el-button type="primary" @click="onSubmit">确认下单</el-button>
				    <el-button @click="onCancel" >取消</el-button>
					</div>
				</div>
			</el-form>
		</div>
		<div class="explain_info">
			<p>体验微信下单</p>
			<div class="img"><img src="/static/image/weChat.jpg" alt="国际快递服务中心公众号"></div>
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
export default {
	name: 'orderSend',
	components:{
		Headers,
		Footers,
		Country,
		SelectCity,
		SelectPackage
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			dialogVisible: false,
			form: {},
			showSendCitySelect: false,
			showPackageList: {}
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
				console.log('from', this.form)
			}
		},
		coutryReceiveChange(data) {
			this.form.receiverCountry=data
			this.showPackageList = {show:true,data:data}
		},
		selectPackageChange(data) {
			this.form.package=data
		}
	}
}
</script>
<style scoped lang="less" src="./index.less"></style>