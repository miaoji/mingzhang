<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import { getToken } from '@/services/token'
// import md5 from 'js-md5'
import { beforeCreate as getToken } from '@/utils'

export default {
  name: 'app',
  data(){
    return {
      wid:'width:1024px'
    }
  },
  methods: {
  },
  beforeCreate(){
    getToken()
  },
  created(){
    if (document.body.offsetWidth<1300) {
      document.body.style.width='1400px'
    }else{
      this.wid='width:'+document.body.offsetWidth+'px'
    }
  },
}
</script>

<style>

body {
  padding: 0px;
  margin: 0px;
  background-color: #fff;
  font-family: "微软雅黑";
}
.show{
  display: block;
}
.hide{
  display: none;
}
.w {
  width: 1300px;
  margin: 0 auto;
}

.left {
  float: left;
}

.right {
  float: right;
}

.clear:after {
  display: block;
  content: "";
  clear: both;
}

a{
  text-decoration: none;
  color: inherit;
}

</style>
