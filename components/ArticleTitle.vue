<template>
	<view class="Hot-Title">
		<view class="Hot-left">
			<slot name='left'></slot> 
		</view>
		<slot name='content'>
		
		</slot>
		<view class="Hot-rigth">
			<view  style="float: right;line-height: 100rpx; display: flex;">
				<slot name='rigth'></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		// name:"HoeTitle",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.Hot-Title{
		width: 90%;
		height: 100rpx;
		display: flex;
		align-items: center;
		margin: 0 auto;
		.Hot-left{
			width: 25%;
			height: 100%;
			display: flex;
			align-items: center;
			margin: 0 auto;
			font-size: 35rpx;
			font-weight: bold;
		}
		.Hot-rigth{
			flex: 1;
			height: 100%;
			color: #267fc8;
			font-size: 27rpx;
		}
	}
</style>