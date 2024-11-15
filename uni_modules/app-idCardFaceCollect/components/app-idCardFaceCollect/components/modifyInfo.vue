<template>
	<view class="mask" :style="`width: ${systemInfo.windowWidth}px;height:${systemInfo.windowHeight}px`">
		<view class="content">
			<text class="title">修改姓名</text>
			<view class="info">
				<text class="label">姓名：</text>
				<input type="text" class="input">
			</view>
			<view class="btn">
				<text class="cancel">
					不修改
				</text>
				<text class="confirm">
					确认
				</text>
			</view>
		</view>
	</view>
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
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		top: 0;

		.content {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 560rpx;
			border-radius: 16rpx;
			background-color: #fff;
			padding-top: 32rpx;
			box-sizing: border-box;

			.title {
				color: #333333;
				font-size: 36rpx;
				font-weight: bold;
			}

			.info {
				display: flex;
				flex-direction: row;
				align-items: center;
				width: 500rpx;
				font-size: 32rpx;
				margin-top: 88rpx;
				padding-bottom: 40rpx;
				margin-bottom: 40rpx;
				border-bottom: 2rpx solid #eee;

				.label {
					color: #979B9F;
				}

				.value {
					color: #323845;
					flex: 1;
				}

				.input {
					flex: 1;
				}
			}

			.btn {
				width: 560rpx;
				height: 98rpx;
				border-top: solid 2rpx #E5E5E5;

				display: flex;
				flex-direction: row;
				text-align: center;

				.cancel {
					flex: 1;
					color: #3A7DFE;
					border-right: #EEEEEE solid 2rpx;
					line-height: 98rpx;
					text-align: center;
				}

				.confirm {
					flex: 1;
					font-weight: bold;
					line-height: 98rpx;
					text-align: center;
					color: #3A7DFE;
				}
			}

		}
	}
</style>
