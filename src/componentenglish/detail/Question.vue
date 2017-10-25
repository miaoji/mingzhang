<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="clear w">
			<div class="question_left left">
				<div class="info">Contact Us</div>
				<div class="line"></div>
				<div class="content action"><router-link to='/enQuestion'>Questions & Answers</router-link></div>
				<div class="content"><router-link to='/enViolate'>Prohibited Articles</router-link></div>
			</div>
			<div class="question right">
				<div class="image">
					<img src="/static/image/banner_question.png" alt="">
				</div>
				<div class="tit">Questions & Answers</div>
				<div class="line"></div>
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
	name: 'question',
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
.clear{
	margin-top: 35px;
}
/* 左侧边栏 */
.question_left{
	padding-top: 22px;
	width: 288px;
	height: 488px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.question_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 38px 38px 10px;
	color: #333333;
}
.question_left>.content{
	font-size: 14px;
	color: #666;
	line-height: 30px;
	margin: 0px 38px 10px;
	border-bottom: 1px #555 solid;
}
.question_left>.content.action{
	color: red;
}
.question_left>.info:last-child{}
.question_left>.img{
	margin: 70px auto 0px;
	width: 180px;
	height: 180px;
	overflow: hidden;
}
.question_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.question{
	width: 978px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.question>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	margin-bottom: 20px;
	background-color: #ea000a;
}
.question_left>.line{
	width: 55px;
	height: 3px;
	margin-top: 2px;
	margin-left: 38px;
	margin-bottom: 30px;
	background-color: #ea000a;
}
.question>.header_info{
	text-indent: 1em;
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #666;
}
.question>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
}
.question>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
}
.question>.comtent{
	margin-top: 6px;
	font-size: 16px;
	line-height: 1.8em;
	font-weight: bold;
}
.question>.image{
	text-align: center;
	margin-top: 30px;
}

.question>.question_tit{
	font-size: 18px;
	color: #333;
	font-weight: bold;
	line-height: 1.8em;
}
.question>.answer{
	font-size: 16px;
	color: #666;
	line-height: 1.5em;
	margin-bottom: 10px;
	/* padding-left: 40px; */
	padding-bottom: 10px;
}
</style>