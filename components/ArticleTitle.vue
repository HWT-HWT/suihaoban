<template>
	<view class="Hot-Title">
		<view class="Hot-left">
			<slot name='left'></slot> 
		</view>
		
		<view class="Hot-rigth">
			<slot name='rigth'></slot>
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
		width: 100%;
		height: 100rpx;
		display: flex;
		align-items: center;
		background-color: #fafbfe;
		.Hot-left{
			width: 65%;
			height: 100%;
			display: flex;
			align-items: center;
			margin: 0 auto;
			font-size: 35rpx;
			font-weight: bold;
		}
		.Hot-rigth{
			width: 20%;
			height: 100%;
			padding-right: 10rpx;
			line-height: 75rpx;
			color: #267fc8;
			font-size: 28rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>