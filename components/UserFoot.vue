<template>
	<view class="UserFoot">
		<view class="UserFootList">
			<view class="UserFootList-image">
				<view class="image">
					<image class="image-icon" src="../static/suihaoban/User_bg_3.png" mode=""></image>
					<image class="image-icon" src="../static/suihaoban/User_bg_4.png" mode=""></image>
					<image class="image-icon" src="../static/suihaoban/User_bg_5.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<articleTitle>
			<template #left>
				更多
			</template>
		</articleTitle>
		
		<view style="width: 100%;height: 135rpx;">
			<image  style="width: 100%;height: 100%;" src="../static/suihaoban/User_bg_6.png" mode=""></image>
		</view>
		
		<view style="width: 100%;height: 150rpx; margin-top: 40rpx;">
			<image  style="width: 100%;height: 100%;" src="../static/suihaoban/User_bg_7.png" mode=""></image>
		</view>
		
	</view>
</template>

<script>
	import articleTitle from './ArticleTitle.vue'
	export default {
		name:"UserFoot",
		data() {
			return {
				
			};
		},
		components:{
			articleTitle
		}
	}
</script>

<style lang="scss" scoped>
	.UserFoot{
		width: 100%;
		margin-top: 20rpx;
		.UserFootList{
			width: 95%;
			height: 100%;
			display: flex;
			margin: 0 auto;
			.image{
				width: 100%;
				height: 100%;
				display: flex; 
				justify-content: space-between;
				.image-icon{
					width: 200rpx;
					height: 180rpx;
					margin-left: 25rpx;
				}
			}
		}
	}
</style>