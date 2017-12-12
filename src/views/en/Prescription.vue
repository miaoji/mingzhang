<template>
	<div>
		<div class="clear w">
			<div class="prescription_left left">
				<div class="info">Reference Time</div>
				<div class="line"></div>
				<div class="img"><img src="/static/image/banner_prescription.png" alt=""></div>
			</div>
			<div class="prescription right">
				<div class="tit">Integrate international express service center Wholeheartedly，efficiently，globally</div>
				<div class="heaer_info">We adhere to the modern logistics service concept: fast, efficient and safe. So we provide customers professional and high-performance services</div>
				<table border="1" cellspacing="0">
				<tr>
					<td colspan="4" class="title">Reference Time（calculate from picking up）</td>
				</tr>
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
		</div>
	</div>
</template>
<script>
export default {
	name: 'prescription',
	data(){
		return {
			show: true,
			link:'/Prescription'
		}
	},
	created(){
		window.document.title = 'Shanghai Mingzhang Network Technology Co., Ltd.'
		this.menu()
		this.$emit('location',location.hash)
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
.prescription_left{
	padding-top: 22px;
	width: 288px;
	height: 488px;
	border: 1px #e1e1e0 solid;
	background-color: #fff;
}
.prescription_left>.info{
	font-size: 16px;
	font-weight: 600;
	line-height: 30px;
	padding: 28px 28px 10px;
	color: #333333;
}
.prescription_left>.img{
	margin: 70px auto 0px;
	width: 250px;
	height: 250px;
	overflow: hidden;
}
.prescription_left>.img>img{
	width: inherit;
	height: inherit;
}
/* 右侧边栏 */

.prescription{
	width: 978px;
	border: 1px solid #e1e1e0;
	background-color: #fff;
	padding: 0px 40px 100px;
	box-sizing: border-box;
	color: #333;
	margin-bottom: 150px;
}
.prescription>.line{
	width: 55px;
	height: 3px;
	margin-top: 14px;
	background-color: #ea000a;
}
.prescription_left>.line{
	width: 55px;
	height: 3px;
	margin-top: 2px;
	margin-left: 28px;
	background-color: #ea000a;
}
.prescription>.heaer_info{
	margin-top: 8px;
	font-size: 16px;
	line-height: 30px;
	color: #999999;
}
.prescription>.tit{
	margin-top: 20px;
	font-size: 18px;
	font-weight: bold;
	line-height: 1.8em;
}
.prescription>.tit>.icon{
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #333333;
	border-radius: 50%;
	margin-bottom: 2px;
	margin-right: 8px;
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