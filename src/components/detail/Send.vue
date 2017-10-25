<template>
	<div>
		<Headers :show='show'></Headers>
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
							<div class="info">寄件渠道:扫码关注"国际快递服务中心"微信公总号,或者拨打客服热线021-34120053</div>
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
							<div class="img"><img src="/static/image/arr.png" alt="下一步"></div>
						</li>
						<li class="send_info">
							<div class="img"><img src="/static/image/ope.png" alt="检查"></div>
							<div class="info">提供开箱验视服务，多件包裹集中打包。</div>
						</li>
						<li class="ico">
							<div class="img"><img src="/static/image/arr.png" alt="下一步"></div>
						</li>
						<li class="send_info">
							<div class="img"><img src="/static/image/fre.png" alt="打包"></div>
							<div class="info">打包加固、更换包装、规避运输风险。</div>
						</li>
						<li class="ico">
							<div class="img"><img src="/static/image/arr.png" alt="下一步"></div>
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
		}
	},
	created(){
		window.document.title = 'Shanghai Mingzhang Network Technology Co., Ltd.'
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
	margin-top: 40px;
}
.send>.send_header{}
.send>.send_header>ul{}
.send>.send_header>ul>li{
	float: left;
	margin-right: 15px;
	border: 1px #e1e1e0 solid;
}
.send>.send_header>ul>li:last-child{
	margin-right: 0px;
}
.send>.send_header>ul>li>.img{
	width: 325px;
	height: 214px;
	overflow: hidden;
}
.send>.send_header>ul>li>.info{
	width: 325px;
	height: 134px;
	font-size: 18px;
	color: #333333;
	padding: 22px;
	line-height: 30px;
	box-sizing: border-box;
}

.send>.send_content{}
.send>.send_content>ul{}
.send>.send_content>ul>li{
	float: left;
}
.send>.send_content>ul>li.send_info{
	width: 230px;
}
.send>.send_content>ul>li.ico{
	width: 30px;
}
.send>.send_content>ul>li>.img{}
.send>.send_content>ul>li>.info{
	width: 230px;
}

.send>.send_footer{}
.send>.send_footer>ul{}
.send>.send_footer>ul>li{}
.send>.send_footer>ul>li>.img{}
.send>.send_footer>ul>li>.imfo{}

.img>img{
	width: inherit;
	height: inherit;
}
</style>