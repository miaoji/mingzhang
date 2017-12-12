<template>
	<div class="index">
		<div>
			<h1>这是一个首页</h1>
			<h1>state: -- {{count}} -- 为处理的状态</h1>
			<p>state: -- {{index}} {{count}} -- </p>
			<h2>getters: -- {{countaa}} -- 处理过的状态</h2>
			<h2>getters: -- {{realindex}} -- 处理过的状态</h2>
			<button @click='add(20)'>火星一号</button>
			<button @click='handleClickA()'>handleClickA</button>
			<button @click='increment()'>按钮二号</button>
			<button @click='chengshi()'>按钮二号</button>
			<el-button @click="$store.dispatch('iswinner')" type="success">handleClickB</el-button>
		</div>
	</div>
</template>

<script>
import store from '@/store'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import { showSend } from '@/services/address'

export default {
	name: 'Demo',
	data(){
		return {
			msg:'嘻嘻',
			list: []
		}
	},
	store,
	created(){
		this.getSendAddr()
	},
	computed:{
		...mapState({
			count: ({ demo }) => demo.count,
			index: ({ demo }) => demo.index,
		}),
		...mapGetters([
			'countaa',
			'realindex'
		])
	},
	methods: {
		...mapMutations([
	    	'add',
	    	'reduce',
	    	'chengshi',
	    	'winner'
	  	]),
	  	...mapActions([
	  		// 'increment'
	  	]),
	  	async getSendAddr(){
    		let data = await showSend({
    			wxUserId: localStorage.mj_userId
    		})
    		if (data.code === 200 && data.obj) {
    			for (let i = 0; i<data.obj.length; i++){
    				let item = data.obj[i]
    				this.options.push({value: JSON.stringify(item),label:item.country_cn})
    			}
    		}else{
    			this.$message({
	          message: '国家列表获取失败',
	          type: 'warning'
	        })
    		}
    	},
		handleClickA(){
			this.$store.dispatch('iswinner')
		},
		handleClickB(){
			this.$store.commit('winner')
		},
		aaClick(e){
			alert(e)
			console.log('e',e)
		}
	}
}
</script>



<!-- <template>
<el-form :model="form" ref="form" label-width="100px" class="demo-form">
	<el-form-item label="寄件人姓名 : " prop="senderName"
	    :rules="[
	      { required: true, message: '寄件人姓名不能为空'}
	    ]"
	  >
	    <el-input placeholder="请输入寄件人姓名" v-model="form.senderName" />
	  </el-form-item>
    <el-form-item label="活动名称" prop="name"
	    :rules="[
	      { required: true, message: '请选择是否保价'},
	    ]"
	  >
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动区域" prop="region">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间" required>
    <el-col :span="11">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送" prop="delivery">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质" prop="type">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源" prop="resource">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式" prop="desc">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
    <el-button @click="resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {},
        rules: {}
      };
    },
    methods: {
      submitForm(form) {
      	console.log('form', form)
        this.$refs[form].validate((valid) => {
        	console.log('valid', valid)
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(form) {
        this.$refs[form].resetFields();
      }
    }
  }
</script> -->