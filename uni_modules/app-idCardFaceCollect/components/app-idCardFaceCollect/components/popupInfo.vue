<template>
	<cover-view class="mask" :style="`width: ${systemInfo.windowWidth}px;height:${systemInfo.windowHeight}px`">
		<view class="content">
			<image src="@/static/images/index/error.png" class="icon" mode="widthFix"></image>
			<text class="text">您拍摄的照片无法识别证件信息，请重新拍摄。</text>
			<text class="btn" :style="`width: ${systemInfo.windowWidth}px;`">重新拍摄</text>
		</view>
	</cover-view>
</template>

<script setup lang="ts">
	import { reactive } from "vue";

	// 获取手机系统信息
	const systemInfo = reactive({
		windowWidth: 0,
		windowHeight: 0
	})

	const info = uni.getSystemInfoSync();
	systemInfo.windowWidth = info.windowWidth
	systemInfo.windowHeight = info.windowHeight
</script>

<style lang="scss">
	.mask {
		background: rgba(0, 0, 0, 0.65);
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-between;
			width: 640rpx;
			height: 408rpx;
			border-radius: 16rpx;
			background-color: #fff;
			padding-top: 32rpx;
			box-sizing: border-box;

			.icon {
				width: 96rpx;
				height: 96rpx;
				border-radius: 50%;
			}

			.text {
				font-size: 34rpx;
				font-weight: bold;
				color: #353535;
				padding: 16rpx 48rpx 32rpx 48rpx;
				box-sizing: border-box;
				text-align: center;

			}

			.btn {
				width: 100%;
				height: 112rpx;
				border-top: solid 1px #E5E5E5;
				line-height: 112rpx;
				text-align: center;
				color: #3A7DFE;
				font-weight: bold;
			}

		}
	}
</style>
