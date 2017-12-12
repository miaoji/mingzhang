<!-- 
可接收参数： 
	label,默认 暂无

向父组件通过 coutryChange 传递信息

父组件通过 @coutryChange="事件名" 接收

 -->
<template>
	<el-form-item :label="label"
    :rules="[
      { required: true, message: '国家不能为空'},
    ]"
  >
	  <el-select v-model="country_name" size="large" @change="handleChange" style="width: 80%" filterable placeholder="请选择">
	    <el-option
	      v-for="item in options"
	      :key="item.value"
	      :label="item.label"
	      :value="item.value">
	    </el-option>
	  </el-select>
  </el-form-item>
</template>

<script>
import { query } from '@/services/country'
  export default {
  	
  	name: 'country',

  	props: {
  		label: {
  			type: String,
  			default: '暂无'
  		},
      cancel: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'cn'
      }
  	},

  	created(){
  		this.getCountry()
  	},

    data() {
      return {
        options: [],
        country_name: ''
      }
    },

    methods: {
    	async getCountry(){
    		let data = await query()
    		if (data.code === 200 && data.obj) {
          let index = 0
          if (this.type==='en') {
            index = 1
          }
    			for (let i = index; i<data.obj.length; i++){
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
    	handleChange(){
    		this.$emit('coutryChange', this.country_name)
    	}
    },

    watch: {
      cancel(val){
        console.log('123123456')
        this.country_name = ''
      }
    }

  }
</script>