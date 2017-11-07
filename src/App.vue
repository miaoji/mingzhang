<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      wid:'width:1024px'
    }
  },
  created(){
    console.log('aaa',document.body.offsetWidth )
    console.log('bbb',document.body.clientWidth)
    console.log('ccc',window.screen.availWidth)
    if (document.body.offsetWidth<1400) {
      // this.wid='width:1400px'
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
