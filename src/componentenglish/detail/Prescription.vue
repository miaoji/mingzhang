<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="img_prescription w"><img src="/static/img/banner_prescription.jpg" alt=""></div>
		<div class="prescription w">
			<div class="header">We adhere to the modern logistics service concept: fast, efficient and safe. So we provide customers professional and high-performance services</div>
			<table border="1" cellspacing="0">
				<tr><td colspan="4" class="title">Reference Time（calculate from picking up）</td></tr>
				<tr>
					<th>Region</th>
					<th>Sub-region</th>
					<th>Country</th>
					<th>Delivery Duration</th>
				</tr>
				<tr>
					<td rowspan="6">Asia</td>
					<td>1</td>
					<td>Macau</td>
					<td>2-3</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Korea etc</td>
					<td>2-3</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Japan</td>
					<td>2-3</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Burma etc</td>
					<td>2-4</td>
				</tr>
				<tr>
					<td>5</td>
					<td>India etc</td>
					<td>4-5</td>
				</tr>
				<tr>
					<td>6</td>
					<td>Pakistan</td>
					<td>4-5</td>
				</tr>
				<tr>
					<td rowspan="5">America</td>
					<td>7</td>
					<td>USA</td>
					<td>2-3</td>
				</tr>
				<tr>
					<td>8</td>
					<td>Canada</td>
					<td>3-4</td>
				</tr>
				<tr>
					<td>9</td>
					<td>Mexico</td>
					<td>3-4</td>
				</tr>
				<tr>
					<td>10</td>
					<td>Panama etc</td>
					<td>5-6</td>
				</tr>
				<tr>
					<td>11</td>
					<td>Chile etc</td>
					<td>5-6</td>
				</tr>
				<tr>
					<td rowspan="3">Europe</td>
					<td>12</td>
					<td>German etc</td>
					<td>3-4</td>
				</tr>
				<tr>
					<td>13</td>
					<td>Iceland etc</td>
					<td>5-6</td>
				</tr>
				<tr>
					<td>14</td>
					<td>Russia</td>
					<td>5-7</td>
				</tr>
				<tr>
					<td>Middle East</td>
					<td>15</td>
					<td>UAE etc</td>
					<td>4-5</td>
				</tr>
				<tr>
					<td rowspan="2">Africa</td>
					<td>16</td>
					<td>Egypt etc</td>
					<td>4-5</td>
				</tr>
				<tr>
					<td>17</td>
					<td>Angola etc</td>
					<td>5-6</td>
				</tr>
				<tr>
					<td>Oceania</td>
					<td>18</td>
					<td>New Zealand etc</td>
					<td>3-4</td>
				</tr>
			</table>
		</div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/componentenglish/Headers'
import Footers from '@/componentenglish/Footers'

export default {
	name: 'Prescription',
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
<style>

/* 配送时效 */
.img_prescription{
	margin-top: 30px;
	height: 356px;
	overflow: hidden;
}
.img_prescription>img{
	height: inherit;
	width: inherit;
}
.prescription{
	// margin-top: 30px;
	background-color: #fff;
	padding:40px;
	box-sizing: border-box;
	color: #555;
}
.prescription>.header{
	font-size: 24px;
	line-height: 2em;
}
.prescription>table{
	width: 800px;
	border-color: #bbb;
	margin: 30px auto;
}
.prescription>table tr td.title{
	text-align: center;
	font-size: 30px;
	line-height: 2em;
	/* border: 1px #000 solid; */
}
.prescription>table tr td{
	text-align: center;
	height: 30px;
}
</style>