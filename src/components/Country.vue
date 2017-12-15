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
	  <el-select v-model="country_data" size="large" @change="handleChange" style="width: 80%" filterable placeholder="请选择">
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
      },
      values: {
        type: String,
        default: ''
      }
  	},

  	async created(){
      await this.$store.dispatch('getCountryCnInfo')
      await this.$store.dispatch('getCountryEnInfo')
      this.getCountry()
      console.log('123', this)
  	},

    data() {
      return {
        options: [],
        country_data: ''
      }
    },

    methods: {
    	getCountry(){
        if (this.type === 'cn') {
          this.options = this.$store.state.country.cnData
        }else{
          this.options = this.$store.state.country.enData
        }
    	},
    	handleChange(){
    		this.$emit('coutryChange', this.country_data)
        console.log(this.type)
    	}
    },

    watch: {
      cancel(val){
        this.country_data = ''
      },
      values(val){
        this.country_data = val
      },
      type(val){
        this.getCountry()
      }
    }

  }
</script>