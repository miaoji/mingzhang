<!--
可接收参数：
  label,默认 暂无

向父组件通过 selectCityChange 传递信息

父组件通过 @selectCityChange="事件名" 接收

 -->
<template>
  <el-form-item :label="label"
                :rules="[
      { required: true, message: '请选择您所在的城市'},
    ]"
  >
    <el-cascader
      :options="options"
      change-on-select
      filterable
      @change="handleChange"
      style="width: 80%"
      popper-class="select_model"
      :value='value'
    ></el-cascader>
  </el-form-item>
</template>
<script>
  import {cascade} from '@/services/country'

  export default {

    name: 'SelectCity',

    props: {
      label: {
        type: String,
        default: '暂无'
      },
      cancel: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        options: [],
        value: []
      }
    },

    created () {
      this.getSelectCity()
    },

    watch: {
      cancel () {
        this.value = []
      }
    },

    methods: {
      handleChange (data) {
        this.$emit('selectCityChange', data)
      },
      handleItemChange (data) {
      },
      async getSelectCity () {
        const data = await cascade()
        if (data.code === 200 && data.obj) {
          for (let i = 0; i < data.obj[0].provincesList.length; i++) {
            const item = data.obj[0].provincesList[i]
            this.options.push({
              value: item.id + '/' + item.province,
              label: item.province,
              children: []
            })
            for (let j = 0; j < (item.citiesList.length); j++) {
              const cityItem = item.citiesList[j]
              this.options[i].children.push({
                value: cityItem.id + '/' + cityItem.city,
                label: cityItem.city,
                children: []
              })
              for (let k = 0; k < cityItem.districtsList.length; k++) {
                const countyItem = cityItem.districtsList[k]
                this.options[i].children[j].children.push({
                  value: countyItem.id + '/' + countyItem.district,
                  label: countyItem.district
                })
              }
            }
          }
        } else {
          this.$message({
            message: '获取省份信息失败,请刷新页面重试！！！',
            type: 'warning'
          })
        }
      }
    }

  }
</script>
<style lang="less">
  .select_model {
    .el-cascader-menu {
      width: 200px !important;
    }
    /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
    ::-webkit-scrollbar {
      width: 3px; /*滚动条宽度*/
      height: 12px; /*滚动条高度*/
    }

    /*定义滚动条轨道 内阴影+圆角*/
    ::-webkit-scrollbar-track {
      /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  */
      border-radius: 10px; /*滚动条的背景区域的圆角*/
      background-color: #fff; /*滚动条的背景颜色*/
    }

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
      border-radius: 10px; /*滚动条的圆角*/
      /*-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  */
      background-color: #ddd; /*滚动条的背景颜色*/
    }
  }

</style>
