<!--
可接收参数：
  label,默认 暂无

向父组件通过 coutryChange 传递信息

父组件通过 @coutryChange="事件名" 接收

 -->
<template>
  <el-form-item :label="label"
                :rules="[
      { required: true, message: this.info.msg},
    ]"
  >
    <el-select v-model="country_data" size="large" @change="handleChange" style="width: 80%" filterable
               :placeholder="info.select">
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
  // import { query } from '@/services/country'
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

    async created () {
      if (this.$route.fullPath.split('/en/').length === 2) {
        this.info = {
          select: 'Please choose',
          msg: 'The country can\'t be empty'
        }
      }
      await this.$store.dispatch('getCountryCnInfo')
      await this.$store.dispatch('getCountryEnInfo')
      this.getCountry()
    },

    data () {
      return {
        options: [],
        country_data: '',
        info: {
          select: '请选择',
          msg: '国家不能为空'
        }
      }
    },

    methods: {
      getCountry () {
        if (this.type === 'cn') {
          this.options = this.$store.state.country.cnData
        } else {
          this.options = this.$store.state.country.enData
        }
      },
      handleChange () {
        this.$emit('coutryChange', this.country_data)
      }
    },

    watch: {
      cancel (val) {
        this.country_data = ''
      },
      values (val) {
        this.country_data = val
      },
      type (val) {
        this.getCountry()
      }
    }

  }
</script>
