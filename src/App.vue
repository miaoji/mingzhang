<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { gettoken as getToken, storage } from '@/utils'
import { guid } from '@/utils/uuid'

export default {
  name: 'app',
  data() {
    return {
      wid: 'width:1024px'
    }
  },
  beforeCreate() {
    getToken()
    if (!window.sessionStorage.getItem('locale')) {
      window.sessionStorage.setItem('locale', '/cn/')
    }
    // 如果browserId为空，则新增
    const browserId = storage({
      type: 'get',
      key: 'browserId'
    })
    if (!browserId) {
      storage({
        type: 'set',
        val: guid(),
        key: 'browserId'
      })
    }
  },
  async created() {
    if (document.body.offsetWidth < 1400) {
      document.body.style.width = '1400px'
    } else {
      this.wid = 'width:' + document.body.offsetWidth + 'px'
    }
  },
  methods: {
  }
}
</script>

<style>
@import "./assets/styles/colors.less";
@import "./assets/styles/helpers.less";
@import "./assets/styles/vars.less";

body {
  padding: 0px;
  margin: 0px;
  background-color: #fff;
  font-family: "微软雅黑";
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
