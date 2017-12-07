<template>
<div class="demo">
	<h1>测试页面</h1>
	<div>
		<Inputs v-model="aaa"></Inputs>
	</div>
	<el-button @click="aaa=''">这是一个按钮</el-button>
	<el-button @click="aaaaaa">这是一个按钮</el-button>
</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'
import Inputs from '@/parts/Input'
export default {
	name: 'orderSend',
	components:{
		Headers,
		Footers,
		Inputs
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			numberValidateForm: {},
			aaa: '',
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
		aaaaaa(){
			alert(this.aaa)
		},
		submitForm(formName) {
			this.$refs[formName].validate((valid) => {
				if (valid) {
					alert('submit!');
				} else {
					console.log('error submit!!');
					return false;
				}
			})
		},
		resetForm(formName) {
			this.$refs[formName].resetFields();
		}
	}
}
</script>

<style scropd lang="less">
	.demo{
		padding: 50px;
		text-align: center;
	}
</style>