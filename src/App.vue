<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
/*基础样式配置*/  
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
