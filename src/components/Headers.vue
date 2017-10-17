<template>
	<div class="header_nav">
		<ul class="w clear">
			<li class="left">
				<router-link to="/"><img src="/static/img/logo.png"/></router-link>
			</li>
			<li class="right"><router-link to="/" v-if='show'>回到首页</router-link></li>
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

<style>
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
/* 回到首页按钮 */

.header_nav>ul>li.right{}
.header_nav>ul>li.right>a{
	// border: 1px red solid;
	padding: 5px 10px;
	font-size: 16px;
	// border-radius: 20%;
	background-color: #333;
	color: #fff;
	position: relative;
	left: -22px;
}
</style>