<template>
	<view class="tab-btn">
		<view class="tab-btn" v-if='label.isTrue'>
			<view class="tab-btn-ioc">
				<image class="ioc-image" :src='label.icon' mode=""></image>
			</view>
				{{label.labelName}}
		</view>
		
		<view class="tab-btn" style="height: 70%; display: flex; align-items: center;" v-else>
			<view class="tab-btn-ioc">
				 <image class="ioc-avc-image " :src='label.selectIcon' mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		props:{
			label:{
				type:Object
			}
		},
		created() {
			
		},
	}
</script>

<style lang="scss" scoped>
	.tab-btn{
		width: 100%;
		height: 100%;
		.tab-btn{
			width: 100%;
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
					height:45rpx;
				}
			}
		}
	}
</style>
