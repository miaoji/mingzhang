<template>
  <el-form-item :label="label">
    <el-cascader 
      @active-item-change="handleItemChange" 
      style="width: 100%" 
      placeholder="试试搜索：指南" 
      :options="options" 
      filterable
      :props="props"
      @change="handleChange"
    />
  </el-form-item>
</template>
<script>
  import { cascade } from '@/services/country'
  export default {
    name:'SelectCity',
    props: {
      label: {
        type: String,
        default: '暂无'
      }
    },
    data() {
      return {
        options: [],
        props: {
          value: 'label',
          children: 'cities'
        }
      }
    },
    created(){
      this.getProvince()
    },
    methods: {
      handleChange(data){
        console.log('dadsfsdf', data)
      },
      handleItemChange(data){
        console.log('daata', data)

      },
      async getProvince(){
        const data = await cascade()
        if (data.code === 200 && data.obj) {
          for (let i=0; i < data.obj[0].provincesList.length; i++) {
            const item = data.obj[0].provincesList[i]
            this.options.push({
              value: JSON.stringify(item), 
              label: item.province, 
              children: []
            })
            for (let j = 0; j < item.citiesList.length; j++) {
              const cityItem = item.citiesList[j]
              this.options[i].children.push({
                value: JSON.stringify(cityItem), 
                label: cityItem.city, 
                children: []
              })
              for (let k = 0; k < cityItem.districtsList.length; k++) {
                console.log(23)
                const countyItem = cityItem.districtsList[k]
                this.options[i].children[j].children.push({
                  value: JSON.stringify(countyItem), 
                  label: countyItem.district, 
                })
              }
            }
          }
          console.log(this.options)
        }else{
          this.$message({
            message: '获取省份信息失败,请刷新页面重试！！！',
            type: 'warning'
          })
        }
      },
    }

  }
</script>