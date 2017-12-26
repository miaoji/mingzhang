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
              <span class='content'>{{iitem}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div style="height: 252px"></div>
  </div>
</template>
<script>
export default {
  name: 'customer',
  data () {
    return {
      customer: [{
        title: this.$t('message.userindex.t3'),
        content: this.$t('message.userindex.t4')
      }, {
        title: this.$t('message.userindex.t5'),
        content: this.$t('message.userindex.t6')
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
  .content {
    padding-left: 12px;
  }
</style>
