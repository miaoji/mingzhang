<template>
  <div class="user">
    <div class="user-container">
      <el-row :gutter="40">
        <!-- 导航栏 -->
        <el-col :xs="6" :sm="6" :md="6" :lg="4">
          <div class="grid-content menu">
            <el-menu default-active="1" class="el-menu-vertical-demo">
              <router-link to="/cn/user/directmail">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  直邮列表
                </el-menu-item>
              </router-link>
              <router-link to="/cn/user/customer">
                <el-menu-item index="2">
                  <i class="el-icon-message"></i>
                  客服中心
                </el-menu-item>
              </router-link>
            </el-menu>
          </div>
        </el-col>
        <!-- 内容 -->
        <el-col :xs="18" :sm="18" :md="18" :lg="18" class="content">
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
  export default {
    name: 'usercenter',
    data () {
      return {}
    },
    created () {
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
