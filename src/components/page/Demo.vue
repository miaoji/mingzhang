<template>
	<div class="index">
		<div>
			<h1>这是一个首页</h1>
			<h1>state: -- {{count}} -- 为处理的状态</h1>
			<p>state: -- {{index}} {{count}} -- </p>
			<h2>getters: -- {{countaa}} -- 处理过的状态</h2>
			<h2>getters: -- {{realindex}} -- 处理过的状态</h2>
			<button @click='add(20)'>火星一号</button>
			<button @click='handleClickA()'>handleClickA</button>
			<button @click='increment()'>按钮二号</button>
			<button @click='chengshi()'>按钮二号</button>
			<el-button @click="$store.dispatch('iswinner')" type="success">handleClickB</el-button>
		</div>
	</div>
</template>

<script>
import store from '@/store'
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';

export default {
	name: 'Demo',
	data(){
		return {
			msg:'嘻嘻',
			list: []
		}
	},
	store,
	created(){
	},
	computed:{
		...mapState({
			count: ({ demo }) => demo.count,
			index: ({ demo }) => demo.index,
		}),
		...mapGetters([
			'countaa',
			'realindex'
		])
	},
	methods: {
		...mapMutations([
	    	'add',
	    	'reduce',
	    	'chengshi',
	    	'winner'
	  	]),
	  	...mapActions([
	  		// 'increment'
	  	]),
		handleClickA(){
			this.$store.dispatch('iswinner')
		},
		handleClickB(){
			this.$store.commit('winner')
		},
		aaClick(e){
			alert(e)
			console.log('e',e)
		}
	}
}
</script>