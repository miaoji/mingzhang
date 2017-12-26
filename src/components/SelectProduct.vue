<!--
可接收参数：
	label,默认 暂无

向父组件通过 coutryChange 传递信息

父组件通过 @selectProductChange="事件名" 接收

 -->
<template>
  <el-form-item :label="label"
                :rules="[
      { required: true, message: this.info.select},
    ]"
  >
    <el-select v-model="select_product" size="large" :disabled="!showProductList.show" @change="handleChange"
               style="width: 100%" filterable :placeholder="info.select">
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
  import {query} from '@/services/components/product'

  export default {

    name: 'SelectPackage',

    props: {
      label: {
        type: String,
        default: '暂无'
      },
      showProductList: {
        type: Object,
        default: {}
      }
    },

    created () {
      if (this.$route.fullPath.split('/en/').length === 2) {
        this.info = {
          select: 'choose',
          msg1: 'type list acquisition failure'
        }
      }
    },

    data () {
      return {
        options: [],
        select_product: '',
        info: {
          select: '请选择',
          msg1: '产品类型列表获取失败'
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
            this.options.push({value: JSON.stringify(item), label: item.product_name})
          }
        } else {
          this.$message({
            message: this.info.msg1,
            type: 'warning'
          })
        }
      },
      handleChange () {
        this.$emit('selectProductChange', this.select_product)
      }
    },
    watch: {
      showProductList (data) {
        this.select_product = undefined
        if (data.show === false) {
          return
        }
        this.getCountry({packageTypeId: JSON.parse(data.data).id})
      }
    }

  }
</script>
