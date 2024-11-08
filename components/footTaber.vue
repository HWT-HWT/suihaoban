<template>
	<view class="tab">
		<TabBtn class="TabBtn" :label="list[0]" @tap="btn(list,list[0])"></TabBtn>
		
		<TabBtn class="TabBtn" :label="list[1]" @tap="btn(list,list[1])"></TabBtn>
	
		<view class="tab-btn">
			<view class="tab-btn-ioc">
				 <image style="height: 150rpx; margin-top: -25rpx;" src="../static/suihaoban/t.png" mode=""></image>
			</view>
		</view>
	
		<TabBtn class="TabBtn" :label="list[2]" @tap="btn(list,list[2])"></TabBtn>
		
		<TabBtn class="TabBtn" :label="list[3]" @tap="btn(list,list[3])"></TabBtn>
	</view>
</template>

<script>
	import TabBtn from './Tab_btn/Tab_btn.vue'
	export default {
		data() {
			return {
				list:[
						{labelName:'首页',icon:'../../static/suihaoban/ic_tab_home_normal.png',selectIcon:'../../static/suihaoban/tab_1.png',isTrue:false},
						{labelName:'办事',icon:'../../static/suihaoban/ic_tab_work_normal.png',selectIcon:'../../static/suihaoban/tab_2.png',isTrue:true},
						{labelName:'生活',icon:'../../static/suihaoban/ic_tab_live_normal.png',selectIcon:'../../static/suihaoban/tab_3.png',isTrue:true},
						{labelName:'个人',icon:'../../static/suihaoban/ic_tab_mine_normal.png',selectIcon:'../../static/suihaoban/tab_4.png',isTrue:true}
				]
			};
		},
		methods: {
			btn(item,list){
				
				item.forEach(t => {
					t.isTrue = true
				});
				
				list.isTrue = !list.isTrue
				this.$emit("update:data",this.list)
			}
		},
		components:{
			TabBtn,
		}
	}
</script>

<style lang="scss" scoped>
	.tab{
		width: 100%;
		height: 150rpx;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		display: flex;
		// align-items: center;
		// background: ;
		border: 1px solid #ccc;
		.TabBtn{
			width: 20%;
			height: 100%;
			// border: 1px solid #ccc;
		}
		.tab-btn{
			width: 20%;
			height: 100%;
			text-align: center;
			font-size: 20rpx;
			.tab-btn-ioc{
				width: 100%;
				height: 50%;
				// border: 1px solid ;
				display: flex;
				align-items: center;
				justify-content: center;
				.ioc-image{
					width: 50rpx;
					height: 50rpx;
				}
				.ioc-avc-image{
					display: flex;
					width: 120rpx;
					height:50rpx;
				}
			}
		}
	}
</style>