<template>
<div>
	<Headers :show='show' :link='link'></Headers>
	<h1>测试页面</h1>
	<div>
		<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
		  <el-form-item
		    label="年龄"
		    prop="age"
		    :rules="[
		      { required: true, message: '年龄不能为空'},
		      { type: 'number', message: '年龄必须为数字值'}
		    ]"
		  >
		    <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
		    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
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
	name: 'orderSend',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
			link: '/OrderSend',
			numberValidateForm: {
	          // age: ''
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