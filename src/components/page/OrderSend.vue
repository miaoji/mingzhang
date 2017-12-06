<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="sendorder">
			<div class="box">123</div>
			<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="寄件地址">
			    <el-input v-model="form.name" />
			  </el-form-item>
			  <el-form-item label="收件地址">
			    <el-input v-model="form.name" />
			  </el-form-item>
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
			    <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
export default {
	name: 'Send',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			dialogVisible: false,
			form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
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
		}
	}
}
</script>

<style scoped lang="less">
.sendorder{
	width: 800px;
	height: 500px;
	margin: 50px auto 200px;
	.box{
		color: red;
	}
}
</style>