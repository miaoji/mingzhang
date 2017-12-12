<template>
	<div>
		<Headers :show='show'></Headers>
		<div class="w error"><img src="/static/image/404.png" /></div>
		<Footers></Footers>
	</div>
</template>
<script>
import Headers from '@/components/Headers'
import Footers from '@/components/Footers'

export default {
	name: 'IndexMain',
	components:{
		Headers,
		Footers
	},
	data(){
		return {
			msg: '',
			show:true,
		}
	},
	created(){
		this.menu()
		this.goIndex()
		this.$emit('location',location.hash)
	},
	methods:{
		goIndex(){
			setTimeout(() => {
			  this.$router.push({path:'/'})
			}, 2000)
		},
		menu(){
			window.document.title = '上海明彰网络科技有限公司'
			window.scrollTo(0,0)
		}
	}
}
</script>
<style scoped>
.error{
	background-color: #fff;
	text-align: center;
	margin-top: 30px;
	margin-bottom: 30px;
	padding: 100px 0px;
}
</style>