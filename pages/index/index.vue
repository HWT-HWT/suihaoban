<template>
	<view class="home">
		<Home v-if="!list[0]?.isTrue"></Home>
		<Work v-if="!list[1]?.isTrue"></Work>
		<Live v-if="!list[2]?.isTrue"></Live>
		<User v-if="!list[3]?.isTrue"></User>

		<!-- 底部taber -->
		
		<view style="height: 200rpx;">
			
		</view>
		<fontTaber @update:data='change'></fontTaber>
	</view>
</template>

<script>
	import fontTaber from '@/components/footTaber.vue'
	import Home from '@/components/home.vue'
	import Work from '@/components/Work.vue'
	import Live from '@/components/Live.vue'
	import User from '@/components/User.vue'
	export default {
		data() {
			return {
				list:[
						{labelName:'首页',icon:'../../static/suihaoban/ic_tab_home_normal.png',selectIcon:'../../static/suihaoban/tab_1.png',isTrue:false},
						{labelName:'办事',icon:'../../static/suihaoban/ic_tab_work_normal.png',selectIcon:'../../static/suihaoban/tab_2.png',isTrue:true},
						{labelName:'生活',icon:'../../static/suihaoban/ic_tab_live_normal.png',selectIcon:'../../static/suihaoban/tab_3.png',isTrue:true},
						{labelName:'个人',icon:'../../static/suihaoban/ic_tab_mine_normal.png',selectIcon:'../../static/suihaoban/tab_4.png',isTrue:true}
				]
			}
		},
		onLoad() {
			
		},
		methods:{
			change(data){
				this.list = data
				// console.log(this.list);
			}
		},
		components:{
			fontTaber,
			Home,
			Work,
			Live,
			User
		}
	}
</script>

<style lang="scss" scoped>
	.home{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
</style>
