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
    <el-select v-model="select_package" size="large" :disabled="!showPackageList.show" @change="handleChange"
               style="width: 100%" filterable :placeholder="info.msg">
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
  import {query} from '@/services/components/package'

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

    created () {
      if (this.$route.fullPath.split('/en/').length === 2) {
        this.info = {
          msg: 'Please choose',
          msg1: 'Package type list acquisition failure'
        }
      }
    },

    data () {
      return {
        options: [],
        select_package: '',
        info: {
          msg: '请选择产品类型',
          msg1: '包裹类型列表获取失败'
        }
      }
    },

    methods: {
      async getCountry (payload = {}) {
        let data = await query(payload)
        if (data.code === 200 && data.obj) {
          this.options = []
          for (let i = 0; i < data.obj.length; i++) {
            let item = data.obj[i]
            this.options.push({value: JSON.stringify(item), label: item.name_cn})
          }
        } else {
          this.$message({
            message: this.info.msg1,
            type: 'warning'
          })
        }
      },
      handleChange () {
        this.$emit('selectPackageChange', this.select_package)
      }
    },
    watch: {
      showPackageList (data) {
        this.select_package = undefined
        if (data.show === false) {
          return
        }
        if (data.data !== '') {
          this.getCountry({countryId: JSON.parse(data.data).id || data.data})
        }
      }
    }

  }
</script>
