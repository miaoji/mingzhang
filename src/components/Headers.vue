<template>
	<div class="header_nav">
		<ul class="w clear">
			<li class="left">
				<router-link to="/"><img src="/static/image/logo.png"/><span class="logo">上海明彰网络科技有限公司</span></router-link>
			</li>
			<li class="right language">
				<a href="javascript:;">Language</a>
				<a href="javascript:;">|</a>
				<router-link :to="link">English</router-link>
				<!-- <span><img src="/static/image/sca_ico_arr.png" alt="banner"></span> -->
				<div class="eject hide">
					<router-link to="/">中文</router-link>
					<router-link to="/">English</router-link>
				</div>
			</li>
		</ul>
		<div class="header_nav_item" :class="{ toptoptop: aaaaa }">
			<ul class="w clear">
				<li class="left"><router-link to="/">首页</router-link></li>
				<li class="left"><router-link to="/OrderSend">我要寄件</router-link></li>
				<li class="left"><router-link to="/Prescription">参考时效</router-link></li>
				<li class="left"><router-link to="/Site">服务站点</router-link></li>
				<li class="left"><router-link to="/Introduce">关于我们</router-link></li>
				<li class="left"><router-link to="/Send">寄件流程</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data(){
		return{
			msg: 'Header',
			aaaaa: false
		}
	},
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	},
	mounted(){
		let _this=this
		window.onscroll=function(){
			if (document.documentElement.scrollTop>115) {
				console.log(document.documentElement.scrollTop)
				_this.aaaaa=true
				console.log(_this)
				console.log(_this.msg)
			}else{
				_this.aaaaa=false
				console.log(_this.aaaaa)
			}
		}
	},
	watch: {
	},
	props:{
		show:{
			type:Boolean,
			default:true
		},
		link:{
			type:String,
			default:'/enIndex'
		}
	}
}
</script>

<style scoped>
/*头部导航栏*/
.header_nav {
	background-color: #fff;
}
.header_nav>ul{
	height: 110px;
	overflow: hidden;
}
.header_nav>ul>li{
	height: inherit;
	list-style: none;
	margin-left: 85px;
}
.header_nav>ul>li:first-child{
	margin-left: 0px;
}
.header_nav>ul>li>span{
	display: inline-block;
	/*line-height: 80px;*/
	font-size: 18px;
}
.header_nav>ul>li>a{
	line-height: 80px;
	font-size: 18px;
	color: #3c3c3c;
	text-decoration: none;
}
.header_nav>ul>li>a:hover{
	color: #ff525e;
}
.header_nav>ul>li>a>img{
	height: 60px;
	margin: 25px 0px;
}
.header_nav>ul>li>a>span.logo{
	line-height: 80px;
	position: relative;
	top: -44px;
	left: 15px;
	font-size: 24px;
	color: #03061f;
	font-weight: 600;
}
/*横向导航栏*/

.header_nav>.header_nav_item{
	height: 75px;
	background: -webkit-linear-gradient(#494949, #1d1d1d); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#494949, #1d1d1d); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#494949, #1d1d1d); /* Firefox 3.6 - 15 */
	background: linear-gradient(#494949, #1d1d1d); /* 标准的语法 */
	-webkit-transition: all .5s;
	   -moz-transition: all .5s;
	    -ms-transition: all .5s;
	     -o-transition: all .5s;
	        transition: all .5s;
}
.header_nav>.header_nav_item.toptoptop{
	width: 100%;
	background: rgba(100, 100, 100, .8);
	position:fixed;
	top: 0px;
	z-index: 99999;
	left: 50%;
	margin-left: -50%;
}
.header_nav>.header_nav_item>ul{
	list-style: none;
	font-size: 14px;
}
.header_nav>.header_nav_item>ul>li{
	margin-right: 20px; 
	/* padding: 0px 10px; */
}
.header_nav>.header_nav_item>ul>li>a{
	line-height: 75px;
	padding: 10px 20px;
	border: 1px solid rgba(0,0,0,0);
	border-radius: 5px;
	color: #fff;
}
.header_nav>.header_nav_item>ul>li>a:hover{
	color: #ff1919;
	/* border-color: #ff1919; */
	/* background: -webkit-linear-gradient(#1a1a1a, #333);
	background: -o-linear-gradient(#1a1a1a, #333);
	background: -moz-linear-gradient(#1a1a1a, #333);
	background: linear-gradient(#1a1a1a, #333); */
}

/* 回到首页按钮 */
.header_nav>ul>li.language{
	margin-top: 18px;
}
.header_nav>ul>li.language>a{
	margin-right: 10px;
	color: #313131;
	font-size: 13px;
}
.header_nav>ul>li.language>a:hover{
	color: #313131;
}
.header_nav>ul>li.btn{}
.header_nav>ul>li.btn>a{
	padding: 5px 10px;
	font-size: 16px;
	background-color: #333;
	color: #fff;
	position: relative;
	left: -22px;
}
</style>