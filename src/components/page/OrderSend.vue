<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="sendorder">
			<el-form class="form" ref="form" :model="form" label-width="100px">
				<h1 class="page_tit">寄件人信息</h1>
			  <el-form-item label="寄件人姓名">
			    <el-input v-model="form.senderName" />
			  </el-form-item>
			  <el-form-item label="电话">
			    <el-input v-model="form.senderMobile" />
			  </el-form-item>
			  <country v-model="form.aa" label="国家/地区" @coutryChange="coutryChange"/>
			  <select-city label="地区选择"/>
			  <el-form-item label="街道地址">
			    <el-input v-model="form.senderAddress" />
			  </el-form-item>
			  <el-form-item label="邮编">
			    <el-input v-model="form.senderPostcode" />
			  </el-form-item>
				<h1 class="page_tit">收件人信息</h1>
			  <el-form-item label="收件人姓名">
			    <el-input v-model="form.receiverName" />
			  </el-form-item>
			  <el-form-item label="电话">
			    <el-input v-model="form.receiverMobile" />
			  </el-form-item>
			  <el-form-item label="国家/地区">
			    <el-input v-model="form.receiverCountry" />
			  </el-form-item>
			  <el-form-item label="街道地址">
			    <el-input v-model="form.receiverAddress" />
			  </el-form-item>
			  <el-form-item label="邮编">
			    <el-input v-model="form.receiverPostcode" />
			  </el-form-item>
				<h1 class="page_tit">包裹信息</h1>
			  <el-form-item label="产品类型">
			    <el-input v-model="form.name" />
			  </el-form-item>
			  <el-form-item label="产品规格">
			    <el-input v-model="form.name" />
			  </el-form-item>
			  <el-form-item label="是否保价">
			    <el-radio-group v-model="form.resource">
			      <el-radio label="是"></el-radio>
			      <el-radio label="否"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="保价金额">
			    <el-input v-model="form.name" />
			  </el-form-item>
			  <el-form-item label="是否退件">
			    <el-radio-group v-model="form.resource">
			      <el-radio label="是"></el-radio>
			      <el-radio label="否"></el-radio>
			    </el-radio-group>
			  </el-form-item>
			  <el-form-item label="备注信息">
			    <el-input v-model="form.name" />
			  </el-form-item>

			  <el-form-item>
			    <el-button type="primary" @click="onSubmit">确认下单</el-button>
			    <el-button>取消</el-button>
			  </el-form-item>
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
export default {
	name: 'orderSend',
	components:{
		Headers,
		Footers,
		Country,
		SelectCity
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			dialogVisible: false,
			form: {}
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
		menu(){
			window.scrollTo(0,0)
		},
		coutryChange(data) {
			// 获取寄件人国家信息
			console.log('datasss', data)
			this.form.country=data
		}
	}
}
</script>

<style scoped lang="less">
.sendorder{
	width: 998px;
	padding: 0px 40px;
	border: 1px #ddd solid;
	border-radius: 3px;
	margin: 50px auto 200px;
	.page_tit {
		font-size: 20px;
		color: #555;
		margin-top: 30px;
		text-align: center;
	}
	.form {
		width: 800px;
		margin: 0px auto;
	}
}
</style>