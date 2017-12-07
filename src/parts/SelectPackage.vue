<!-- 
可接收参数： 
	label,默认 暂无

向父组件通过 coutryChange 传递信息

父组件通过 @coutryChange="事件名" 接收

 -->
<template>
	<el-form-item :label="label">
	  <el-select v-model="select_package" size="large" :disabled="!showPackageList.show" @change="handleChange" style="width: 100%" filterable placeholder="请选择">
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
import { query } from '@/services/parts/package'
  export default {
  	
  	name: 'SelectPackage',

  	props: {
  		label: {
  			type: String,
  			default: '暂无'
  		},
      showPackageList: {
        type: Object,
        default: {}
      }
  	},

  	created(){
  		// this.getCountry()
  	},

    data() {
      return {
        options: [],
        select_package: ''
      }
    },

    methods: {
    	async getCountry(payload={}){
        console.log('payload', payload)
    		let data = await query(payload)
    		if (data.code === 200 && data.obj) {
          this.options=[]
    			for (let i = 0; i<data.obj.length; i++){
    				let item = data.obj[i]
    				this.options.push({value: JSON.stringify(item), label:item.name_cn})
    			}
    		}else{
    			this.$message({
	          message: '包裹类型列表获取失败',
	          type: 'warning'
	        })
    		}
    	},
    	handleChange(){
    		this.$emit('selectPackageChange', this.select_package)
    	}
    },
    watch: {
      showPackageList(data){
        console.log('dadasda', data)
        this.getCountry({countryId: JSON.parse(data.data).id})
      }
    }

  }
</script>