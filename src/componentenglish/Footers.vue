<template>
	<div class="footer">
		<div class="footer_main w">
			<ul class="clear">
				<li class="left">
					<div class="tit">We-chat Official Accounts</div>
					<div class="img"><img src="/static/img/weixin.jpg"/></div>
				</li>
				<li class="left">
					<div class="tit">Help&Support</div>
					<div class="footer_item"><router-link to="/Question">Troubleshooting</router-link></div>
					<div class="footer_item"><router-link to="/Violate">Prohibited Goods</router-link></div>
				</li>
				<li class="left">
					<div class="tit">About us</div>
					<div class="footer_item"><router-link to="/Introduce">Company Profile</router-link></div>
					<div class="footer_item"><router-link to="/Callme">Contact us</router-link></div>
				</li>
				<li class="left">
					<div class="tit">Address</div>
					<div class="footer_item">Operating Hours : 9:00-18:00  Mon - Fri</div>
					<div class="footer_item">TEL : 021-34120053</div>
					<div class="footer_item">Address : Room No.1, 168 alley, Hongtai Road, Hongqiao business district, Shanghai, China.</div>
				</li>
			</ul>
			<div class="footer_info">All Rights Reserved 明彰网络科技有限公司版权所有</div>
			<div class="footer_info">沪ICP备17039232号-1</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Footer',
	data(){
		return {
			msg: '这个页面是底部导航栏'
		}
	},
	created(){
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style>
/* 底部导航栏  */

.footer{
	background-color: #666;
	margin-top: 30px;
}

.footer>.footer_main>ul{
	padding: 30px 0;
	margin: 0px;
}
.footer>.footer_main>ul>li{
	list-style: none;
	width: 280px;
}
.footer>.footer_main>ul>li>.tit{
	font-size: 18px;
	font-weight: 400;
	color: #ccc;
	line-height: 1.5em;
}
.footer>.footer_main>ul>li>.footer_item{
	font-size: 16px;
	color: #ccc;
	line-height: 1.5em;
}
.footer>.footer_main>.footer_info{
	text-align: center;
	font-size: 16px;
	color: #ccc;
	/*padding-bottom: 10px;*/
}
.footer>.footer_main>ul>li>.img{
	width: 130px;
	height: 130px;
}
.footer>.footer_main>ul>li>.img>img{
	width: inherit;
	height: inherit;
}
</style>