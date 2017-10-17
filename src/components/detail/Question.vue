<template>
	<div>
		<div class="img_question w"><img src="/static/img/banner_question.jpg" alt=""></div>
		<div class="question w clear">
			<div class="question_nav left">
				<div class="tit">帮助支持</div>
				<div class="comtent"><router-link to="/Question">疑难解答</router-link><span></span></div>
				<div class="comtent"><router-link to="/Violate">禁运物品</router-link></div>
			</div>
			<div class="right">
				<div class="title">疑难解答</div>
				<div class="question_tit">一、问：运费是怎样计算的？</div>
				<div class="answer">答：快递按照实际重量和体积重量两者取大者计算运费，实际重量就是货物放在秤上面的重量，体积重量指的是货物装好箱子之后，测量箱子的长宽高，并且是最突出部分的尺寸，单位按照厘米计算，体积重量计算公式为：长度*宽度*高度/5000=体积重量（单位为kg）。国际快递DHL/UPS/TNT等都是按照长宽高相称除以5000计算，EMS邮政快递按照长宽高相乘除以8000计算，关于体积重量，最终以收货后，在国际快递服务中心的转运中心测量为准。</div>
				<div class="question_tit">二、问：可以快递贵重物品吗？</div>
				<div class="answer">答：黄金、白银等贵金属，单反相机、手机、笔记本电脑等高价值产品是不支持快递的，如果您偷偷在货物内藏匿此类货物，在运输途中丢失，不做任何赔偿，如您要求我们为您寄运，请提前确认好、丢失、破损等问题，不做任何赔偿。</div>
				<div class="question_tit">三、问：时效是怎么计算的呢？</div>
				<div class="answer">答：国际快递服务中心提供的时效仅仅为参考时效，是在正常情况下的时效，不能作为最终转运的时间，并且不包括节假日，双休日。另外因为外界因素，例如，快递公司爆仓、天气恶劣、海关查车、清关等问题造成的时效延误，请谅解。这类问题并非我们所能控制，我们也跟您一样的焦急，并且关于此类问题的时效延误，我们无法为您承担您的一切损失。</div>
				<div class="question_tit">四、问：有什么物品是不能寄递的吗？</div>
				<div class="answer">答：以下物品都是不能寄递的。
				（1）仿名牌、奢品牌、涉嫌侵权产品
				（2）视频、药材、烟草、茶叶、活体动物、副食品、粉末、液体、毒品
				（3）纯电池、货币（包括银行卡、本票、支票、汇票、债券）、军火及其配件、摩托车成品
				（4）古董文物、名表、珠宝首饰、贵金属
				（5）三公分厚度以上的石头或者石板
				（6）赌局、光盘、磁带、宗教宣传数据、淫秽色情书籍等
				（7）打火机、电池、磁铁、电视机、发动机、马达、电机
				</div>
				<div class="question_tit">五、问：为什么在线填写的寄递价格和实际收费存在误差？</div>
				<div class="answer">答：因为出货，智能按照收到货物给您确认的实际重量来收费。您在线填写的价格，可能存在国家错误、描述不准确、称重方法错误、无法测量体积、测量体积未测量最凸出部分，电子称误差、测量物品未装箱等原因，会和实际收费存在误差。</div>
			</div>
		</div>	
	</div>
</template>
<script>
export default {
	name: 'Question',
	created(){
		window.document.title = '疑难解答-上海明彰网络科技有限公司'
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
/* 疑难解答部分 */
/* banner 部分 */
.img_question{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_question>img{
	height: inherit;
	width: inherit;
}

/* 左侧nav导航栏部分 */
.question>.question_nav{
	width: 180px;
	padding: 44px 22px;
	box-sizing: border-box;
	color: #555;
}
.question>.question_nav>div{
	border-bottom: 1px #a0a0a0 dashed;
	line-height: 2em;
	text-align: center;
}
.question>.question_nav>.tit{
	font-size: 22px;
	font-weight: bold;
}
.question>.question_nav>.comtent{
	font-size: 18px;
}
/* 右侧正文部分 */
.question>.right{
	width: 988px;
	box-sizing: border-box;
	padding: 0px 30px 30px;
	border-left: 1px #a0a0a0 dashed;
}
.question>.right>.title{
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	color: #555;
}
.question{
	background-color: #fff;
	padding: 30px 0px;
	box-sizing: border-box;
	// margin-top: 30px;
	margin-bottom: 100px;
}

.question>div>.question_tit{
	font-size: 20px;
	color: #555;
	font-weight: bold;
	line-height: 1.8em;
}
.question>div>.answer{
	font-size: 18px;
	color: #666;
	line-height: 1.5em;
	margin-bottom: 10px;
	padding-left: 40px;
	padding-bottom: 10px;
	// border-bottom: 1px #999999 dotted;
}
.question>div>.answer:last-child{
	border-bottom: none;
}

</style>