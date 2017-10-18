<template>
	<div class="header_nav">
		<ul class="w clear">
			<li class="left">
				<router-link to="/"><img src="/static/img/logo1.png"/><span class="logo">Shanghai Mingzhang Network Technology Co., Ltd.</span></router-link>
			</li>
			<li class="right btn" v-if='show'><router-link to="/enIndex">homepage</router-link></li>
			<li class="right language" v-if='!show'><router-link to="/enIndex">English</router-link> <span> | </span> <router-link to="/">中文</router-link></li>
			<!--<li class="left"><router-link to="#">货件查询</router-link></li>
			<li class="left"><router-link to="#">寄件服务</router-link></li>
			<li class="left"><router-link to="#">派送时效</router-link></li>
			<li class="left"><router-link to="#">服务站点</router-link></li>
			<li class="left"><router-link to="#">客户服务</router-link></li>
			<li class="right"><router-link to="#">会员中心</router-link></li>-->
		</ul>
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
	height: 80px;
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
	height: 44px;
	margin: 18px 0px;
}
.header_nav>ul>li>a>span.logo{
	line-height: 80px;
	position: relative;
	top: -32px;
	left: 15px;
	font-size: 24px;
	color: #545454;
	font-weight: 400;
}
/* 回到首页按钮 */

.header_nav>ul>li.language{
	margin-right: 10px;
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