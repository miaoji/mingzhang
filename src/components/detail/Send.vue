<template>
	<div>
		<Headers :show='show' :link='link'></Headers>
		<div class="clear w">
			<div class="send_left left">
				<div class="info">关注公众号:</div>
				<div class="img"><img src="/static/image/weixin.jpg" alt=""></div>
			</div>
			<div class="send right">
				<div class="title">寄件</div>
				<div class="send_header">
					<ul class="clear">
						<li>
							<div class="img"><img src="/static/image/sen.png" alt="寄件渠道"></div>
							<div class="info">寄件渠道:扫码关注"国际快递服务中心"微信公总号,或者拨打客服热线021-34120053,加拿大热线647-995-2600。</div>
						</li>
						<li>
							<div class="img"><img src="/static/image/pay.png" alt="下单方式"></div>
							<div class="info">下单方式:提供线上、线下等多种下单方式,并提供全物流轨迹追踪。</div>
						</li>
						<li>
							<div class="img"><img src="/static/image/revc.png" alt="取件方式"></div>
							<div class="info">取件方式：上门取件【根据您的要求，安排取件时间】，驿站投递等。</div>
						</li>
					</ul>
				</div>

				<div class="title">快件处理</div>
				<div class="send_content">
					<ul class="clear">
						<li class="send_info">
							<div class="img"><img src="/static/image/rig.png" alt="确认"></div>
							<div class="info">确认快件品名及包装是否符合运输标准。</div>
						</li>
						<li class="ico">
							<div class="imgs"><img src="/static/image/arr.png" alt="下一步"></div>
						</li>
						<li class="send_info">
							<div class="img"><img src="/static/image/ope.png" alt="检查"></div>
							<div class="info">提供开箱验视服务，多件包裹集中打包。</div>
						</li>
						<li class="ico">
							<div class="imgs"><img src="/static/image/arr.png" alt="下一步"></div>
						</li>
						<li class="send_info">
							<div class="img"><img src="/static/image/fre.png" alt="打包"></div>
							<div class="info">打包加固、更换包装、规避运输风险。</div>
						</li>
						<li class="ico">
							<div class="imgs"><img src="/static/image/arr.png" alt="下一步"></div>
						</li>
						<li class="send_info">
							<div class="img"><img src="/static/image/way.png" alt="运送"></div>
							<div class="info">多种运输方式快递送达更快捷。</div>
						</li>
					</ul>
				</div>

				<div class="title">跟踪反馈</div>
				<div class="send_footer">
					<ul class="clear">
						<li>
							<div class="img"><img src="/static/image/sea.png" alt=""></div>
							<div class="info">在线查询快件全物流轨迹</div>
						</li>
						<li>
							<div class="img"><img src="/static/image/ans.png" alt=""></div>
							<div class="info">专业客服及时反馈关键信息</div>
						</li>
						<li>
							<div class="img"><img src="/static/image/que.png" alt=""></div>
							<div class="info">问题件一对一处理</div>
						</li>
					</ul>
				</div>
			</div>	
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'Send',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			show: true,
			link: '/enSend'
		}
	},
	created(){
		window.document.title = '上海明彰网络科技有限公司'
		this.menu()
	},
	methods:{
		menu(){
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
ul{
	list-style: none;
	padding: 0px;
	margin: 0px;
}
.clear{
	margin-top: 35px;
}
/* 左侧边栏 */
.send_left{
	padding-top: 22px;
	padding-bottom: 22px;
	width: 168px;
	/* height: 488px; */
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.send_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 10px 28px 10px;
	color: #333333;
}
.send_left>.img{
	margin: 0px auto;
	width: 150px;
	height: 150px;
	overflow: hidden;
}
.send_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.send{
	width: 1094px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 200px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.send>.title{
	color: #1f323c;
	font-size: 32px;
	text-align: center;
	margin-bottom: 40px;
	margin-top: 80px;
}
.send>.send_header{
	margin-top: 80px;
}
.send>.send_header>ul{}
.send>.send_header>ul>li{
	float: left;
	margin-right: 20px;
	border: 1px #e1e1e0 solid;
	/* -webkit-transition: all 0.5s;
	   -moz-transition: all 0.5s;
	    -ms-transition: all 0.5s;
	     -o-transition: all 0.5s;
	        transition: all 0.5s; */
}
/* .send>.send_header>ul>li:hover{
	box-shadow:0 15px 30px rgba(0,0,0,0.3);
	-webkit-transform: translateY(-4px);
	   -moz-transform: translateY(-4px);
	    -ms-transform: translateY(-4px);
	     -o-transform: translateY(-4px);
	        transform: translateY(-4px);
} */
.send>.send_header>ul>li:last-child{
	margin-right: 0px;
}
.send>.send_header>ul>li>.img{
	width: 321px;
	height: 179px;
	overflow: hidden;
}
.send>.send_header>ul>li>.img>img{
	width: 321px;
}
.send>.send_header>ul>li>.info{
	width: 321px;
	height: 134px;
	font-size: 14px;
	color: #333333;
	padding: 22px;
	line-height: 30px;
	box-sizing: border-box;
}

.send>.send_content{
	margin-top: 80px;
}
.send>.send_content>ul{
	padding: 0px;
	margin: 0px;
}
.send>.send_content>ul>li{
	float: left;
}
.send>.send_content>ul>li:last-child{
	float: right;
}
.send>.send_content>ul>li.send_info{
	width: 210px;
}
.send>.send_content>ul>li.ico{
	width: 34px;
	height: 13px;
	padding: 0px 11px;
	margin-top: 74px;
}
.send>.send_content>ul>li>.img{
	width: 210px;
	text-align: center;
}
.send>.send_content>ul>li>.img>img{
}
.send>.send_content>ul>li>.img:hover>img{
	/* -webkit-transition: all 1.2s;
	   -moz-transition: all 1.2s;
	    -ms-transition: all 1.2s;
	     -o-transition: all 1.2s;
	        transition: all 1.2s;
	-webkit-transform: rotateY(360deg);
	   -moz-transform: rotateY(360deg);
	    -ms-transform: rotateY(360deg);
	     -o-transform: rotateY(360deg);
	        transform: rotateY(360deg); */
}
.send>.send_content>ul>li>.info{
	width: 210px;
	padding-top: 36px;
	color: #999;
	font-size: 18px;
	line-height: 1.5em;
	text-align: center;
}

.send>.send_footer{
	margin-top: 80px;
}
.send>.send_footer>ul{}
.send>.send_footer>ul>li{
	width: 318px;
	height: 408px;
	box-sizing: border-box;
	border: 1px #bfbfbd solid;
	border-radius: 5px;
	float: left;
	margin-right: 10px;
}
.send>.send_footer>ul>li:last-child{
	float: right;
	margin-right: 29px;
}
.send>.send_footer>ul>li>.img{
	text-align: center;
	height: 125px;
	width: 262px;
	margin: 0 auto;
	padding-top: 80px;
	padding-bottom: 76px;
	border-bottom: 1px solid #bfbfbd;
}
.send>.send_footer>ul>li>.info{
	color: #666;
	text-align: center;
	padding-top: 40px;
}

</style>