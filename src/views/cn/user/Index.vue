<template>
  <div class="user">
    <div class="user-container">
      <el-row :gutter="40">
        <!-- 导航栏 -->
        <el-col :xs="5" :sm="5" :md="5" :lg="5">
          <div class="grid-content menu">
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <router-link :to="linkdirectmail">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  {{$t('message.userindex.t1')}}
                </el-menu-item>
              </router-link>
              <router-link :to="linkcustomer">
                <el-menu-item index="2">
                  <i class="el-icon-message"></i>
                  {{$t('message.userindex.t2')}}
                </el-menu-item>
              </router-link>
            </el-menu>
          </div>
        </el-col>
        <!-- 内容 -->
        <el-col :xs="17" :sm="17" :md="17" :lg="17" class="content">
          <div class="grid-content">
            <transition>
              <router-view></router-view>
            </transition>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {storage} from '@/utils'
  export default {
    name: 'usercenter',
    data () {
      return {
        linkdirectmail: '/cn/user/directmail',
        linkcustomer: '/cn/user/customer'
      }
    },
    created () {
      const href = storage({
        key: 'locale',
        prefix: false
      }) || 'cn'
      this.linkdirectmail = '/' + href + '/user/directmail'
      this.linkcustomer = '/' + href + '/user/customer'
    },
    methods: {}
  }
</script>
<style scoped lang="less">
  @import '../../../assets/styles/helpers.less';

  .user {
    &-container {
      .normal-container;
      .bg-purple-dark {
        background: #99a9bf;
      }
      .bg-purple {
        background: #d3dce6;
      }
      .bg-purple-light {
        background: #e5e9f2;
      }
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
      }
      .content {
        border-top: solid 1px #e6e6e6;
      }
    }
  }
</style>
