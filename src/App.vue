<template>
  <div id="app">
    <Headers :show='show'></Headers>
    <router-view @showbtn='showbtn'/>
    <Footers></Footers>
  </div>
</template>

<script>
import Headers from './components/Headers'
import IndexMain from './components/IndexMain'
import Footers from './components/Footers'
export default {
  name: 'app',
  data(){
    return {
      show: true
    }
  },
  components:{Headers,IndexMain,Footers},
  methods:{
    showbtn(e){
      this.show = e
    }
  }
}
</script>

<style>
/*基础样式配置*/  
body {
  padding: 0px;
  margin: 0px;
  background-color: #f7f4ef;
  font-family: "微软雅黑";
}
.show{
  display: block;
}
.hide{
  display: none;
}
.w {
  width: 1170px;
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
