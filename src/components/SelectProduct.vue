<!--
可接收参数：
	label,默认 暂无

向父组件通过 coutryChange 传递信息

父组件通过 @selectProductChange="事件名" 接收

 -->
<template>
  <el-form-item :label="label"
                :rules="[
      { required: true, message: '请选择产品规格'},
    ]"
  >
    <el-select v-model="select_product" size="large" :disabled="!showProductList.show" @change="handleChange"
               style="width: 100%" filterable placeholder="请选择产品规格">
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
      // this.getCountry()
      // this.getCountry({packageTypeId: 53})
    },

    data () {
      return {
        options: [],
        select_product: ''
      }
    },

    methods: {
      async getCountry (payload = {}) {
        console.log('payload', payload)
        let data = await query(payload)
        console.log('data', data)
        if (data.code === 200 && data.obj) {
          this.options = []
          for (let i = 0; i < data.obj.length; i++) {
            let item = data.obj[i]
            this.options.push({value: JSON.stringify(item), label: item.product_name})
          }
        } else {
          this.$message({
            message: '产品类型列表获取失败',
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
