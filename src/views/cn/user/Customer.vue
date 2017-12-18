<template>
  <div class="customer">
    <div class="customer-container">
      <el-row>
        <el-col :span="10" v-for="item, index in customer" :key="index" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix">
              <span style="line-height: 36px;">{{item.title}}</span>
            </div>
            <div style="padding: 14px;" v-for="iitem in item.content">
              <span>{{iitem}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'customer',
  data () {
    return {
      customer: [{
        title: '国内客服',
        content: [
          '微信号: IESC007',
          'QQ: 3187904519',
          'E-mail: custom_service@ming-tech.net',
          '服务电话: 021-34120053'
        ]
      }, {
        title: '国外客服',
        content: [
          '微信号: IESC007',
          '热线: 647-995-2600'
        ]
      }]
    }
  },
  created () {
  },
  methods: {}
}
</script>
<style scoped lang="less">
  .customer {
    &-container {
      padding: 1rem 0;
    }
  }
</style>
