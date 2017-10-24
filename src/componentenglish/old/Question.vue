<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_question w"><img src="/static/img/banner_question.jpg" alt=""></div>
		<div class="question w clear">
			<div class="question_nav left">
				<div class="tit">Help&Support</div>
				<div class="comtent"><router-link to="/enQuestion">Questions & Answers</router-link><span></span></div>
				<div class="comtent"><router-link to="/enViolate">Prohibited Articles</router-link></div>
			</div>
			<div class="right">
				<div class="title">Questions & Answers</div>
				<div class="question_tit">Q1:How is the freight calculated?</div>
				<div class="answer">A1:Freight is according to the actual weight and volume weight, actual weight is the weight of the goods on the scale, Volume weight refers to the weight of carton or package which is filled with goods, it need to measure length and width of carton or package(measure from the most prominent part), and the unit is centimeter. The volume weight formula is: Length * Width * Height / 5000 = Volume Weight (kg), same as DHL, UPS, TNT(EMS is divided by 8000). Volume weight takes the transit center measurement as final version after receiving.</div>

				<div class="question_tit">Q2:Can I express valuables?</div>
				<div class="answer">A2:It's NOT supported for gold, silver and other precious metals, SLR cameras, mobile phones, laptops and other high-value products are also not suggested, if you secretly hiding them in the package we will no responsible for them. If you insist that you must send, please confirm in advance and be ready to face any loss like missing anddamage. Sender takes all risk from pick-up to receiving.</div>

				<div class="question_tit">Q3:How about the Transit Time? </div>
				<div class="answer">A3：Our Service Center provided only reference time which is under normal circumstances, thus it can not be used as the final transit time, and doesn't include holidays and weekends. In addition, many external factors will cause delay, such as transit center out of capacity, bad weather, government policy, customs clearance and other issues. And the delay on those issues, we can not bear for all of your loss because that is not what we can control. Trust us, we least hope those situations to happen and we are as anxious as you. </div>

				<div class="question_tit">Q4: Is there anything that can not be delivered?</div>
				<div class="answer">A4:The following items are not allowed:<br/>
				1. imitation brand, luxury brand, allegedly infringing products<br/>
				2. video, herbs, tobacco, tea, live animals, non-staple food, powder, liquid, drugs<br/>
				3. pure battery, currency (including bank cards, promissory notes, checks etc.)<br/>
				4. Antique artifacts, watches, jewellery, precious metals<br/>
				5. stone or slate which is more than 3 centimeters<br/>
				6. Gambling, CDs, tapes, religious propaganda data, Obscene erotic books<br/>
				7. lighters, batteries, magnets, televisions, engines, motors, motors<br/>
				</div>

				<div class="question_tit">Q5:Why is online freight different with actual charges?</div>
				<div class="answer">A5:online freight is an estimated price, there may be national and description error, weight and volume is not accurate, weighing method and measurement is rough. Referring to Q1, you will easily understood why online freight and actual charges are different.</div>
			</div>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'enQuestion',
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
		window.document.title = '疑难解答-上海明彰网络科技有限公司'
		this.$emit('showbtn',true)
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
	width: 200px;
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
	line-height: 24px;
}
/* 右侧正文部分 */
.question>.right{
	width: 968px;
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