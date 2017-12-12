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
import { mapState } from 'vuex';
import { query } from '@/services/country'
  export default {
  	
  	name: 'country',
    computed: {
      ...mapState({
        cnDate: ({ country }) => country.cnDate,
        enData: ({ country }) => country.enData,
      }),
    },
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
      this.$store.dispatch('getCountryCnInfo')
      this.$store.dispatch('getCountryEnInfo')
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
        if (this.type === 'cn') {
          console.log('this.cnData',this.$store.state.country.cnData)
          this.options = this.$store.state.country.cnData
        }else{
          console.log('this.enData',this.$store.state.country.enData)
          console.log('this.enData',this.enData)
          this.options = this.$store.state.country.enData
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