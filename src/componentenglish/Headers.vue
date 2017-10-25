<template>
	<div class="header_nav">
		<ul class="w clear">
			<li class="left">
				<router-link to="/"><img src="/static/image/logo.png"/><span class="logo">International Express Service Center</span></router-link>
			</li>
			<li class="right btn" v-if='show'><router-link to="/enIndex">homepage</router-link></li>
			<li class="right language" v-if='!show'>
				<router-link to="/enIndex">Language</router-link>
				<a href="javascript:;">|</a>
				<router-link to="/">English</router-link>
				<span><img src="/static/image/sca_ico_arr.png" alt=""></span>
				<div class="eject hide">
					<router-link to="/">中文</router-link>
					<router-link to="/">English</router-link>
				</div>
			</li>
			<!--<li class="left"><router-link to="#">货件查询</router-link></li>
			<li class="left"><router-link to="#">寄件服务</router-link></li>
			<li class="left"><router-link to="#">派送时效</router-link></li>
			<li class="left"><router-link to="#">服务站点</router-link></li>
			<li class="left"><router-link to="#">客户服务</router-link></li>
			<li class="right"><router-link to="#">会员中心</router-link></li>-->
		</ul>
		<div class="header_nav_item">
			<ul class="w clear">
				<li class="left"><router-link to="/enIndex">HOME</router-link></li>
				<li class="left"><router-link to="/enSend">SEND&nbsp;&nbsp;OUT</router-link></li>
				<li class="left"><router-link to="/enPrescription">REFERENCE&nbsp;&nbsp;TIME</router-link></li>
				<li class="left"><router-link to="/enSite">SERVICE&nbsp;&nbsp;SITE</router-link></li>
				<li class="left"><router-link to="/enIntroduce">ABOUT&nbsp;&nbsp;US</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Header',
	data(){
		return{
			msg: 'Header'
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
	props:{
		show:{
			type:Boolean,
			default:true
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
}
.header_nav>.header_nav_item>ul{
	list-style: none;
	color: #fff;
	font-size: 14px;
}
.header_nav>.header_nav_item>ul>li{
	margin-right: 20px; 
	padding: 0px 20px;
}
.header_nav>.header_nav_item>ul>li>a{
	line-height: 75px;
}
.header_nav>.header_nav_item>ul>li:hover{
	color: #d7132e;
	background: -webkit-linear-gradient(#1a1a1a, #333); /* Safari 5.1 - 6.0 */
	background: -o-linear-gradient(#1a1a1a, #333); /* Opera 11.1 - 12.0 */
	background: -moz-linear-gradient(#1a1a1a, #333); /* Firefox 3.6 - 15 */
	background: linear-gradient(#1a1a1a, #333); /* 标准的语法 */
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