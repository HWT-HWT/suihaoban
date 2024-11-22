<template>
	<view class="Estate">
		
		<view class="banner">
			<image src="../../static/suihaoban/bg_zhunyingzhunban.png" mode=""></image>
		</view>
		
		<view class="Estate-title">
			<view class="title-icon">
				<image class="title-image" src="../../static/suihaoban/title.png"></image>
			</view>
			<view class="Estate-icon">
				<image class="title-image" src="../../static/suihaoban/Es_icon.png" mode=""></image>
				<view class="title-text">
					不动产等级预约
				</view>
			</view>
		</view>
		
		<view class="Estate-list">
			<ArticleTitleVue>
				<template #left>
					查询服务
				</template>
				<template #rigth>
					<view style="color:#b2b2b2;font-size: 25rpx; display: flex;align-items: center;justify-content: center;">查看更多&nbsp;<image src="../../static/suihaoban/rigth_1.png" mode=""></image></view>
				</template>
			</ArticleTitleVue>
			
			<view class="list" v-for="(item,index) in list" :key="index" @click="NavTo">
				<view class="list-icon">
					<image class="list-icon-image" src="../../static/suihaoban/Es_icon_1.png" mode=""></image>
				</view>
				<view class="list-text">
					{{item}}
				</view>
			</view>
			
			<view class="list">
				<view class="list-icon">
					<image class="list-icon-image" src="../../static/suihaoban/Es_icon_2.png" mode=""></image>
				</view>
				<view class="list-text">
					备案校验
				</view>
			</view>
			
			<view class="list">
				<view class="list-icon">
					<image class="list-icon-image" src="../../static/suihaoban/Es_icon_3.png" mode=""></image>
				</view>
				<view class="list-text">
					协助司法执行信息查询
				</view>
			</view>
			
		</view>
		
		<view class="Sum-Home" style="margin-top: 20rpx;">
			<ArticleTitleVue>
				<template #left>
					阳光住房
				</template>
			</ArticleTitleVue>
			
			<view class="list" v-for="(item,index) in listTow" :key="index">
				<view class="list-icon">
					<image class="list-icon-image" src="../../static/suihaoban/diandian.png" mode=""></image>
				</view>
				<view class="list-text">
					{{item}}
				</view>
				<view class="list-icon" style="width: 15%;">
					<image style="width: 40rpx;height: 40rpx;" class="list-icon-image" src="@/static/suihaoban/rigth_1.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<view class="qiti">
			<ArticleTitleVue>
				<template #left>
					其他
				</template>
				<template #rigth>
					<view style="color:#b2b2b2;font-size: 25rpx; display: flex;align-items: center;justify-content: center;">查看更多&nbsp;<image src="../../static/suihaoban/rigth_1.png" mode=""></image></view>
				</template>
			</ArticleTitleVue>
			
			<view class="list" v-for="(item,index) in listthree" :key="index">
				<view class="list-icon">
					<image class="list-icon-image" src="../../static/suihaoban/diandian.png" mode=""></image>
				</view>
				<view class="list-text">
					{{item}}
				</view>
				<view class="list-icon" style="width: 15%;">
					<image style="width: 40rpx;height: 40rpx;" class="list-icon-image" src="@/static/suihaoban/rigth_1.png" mode=""></image>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import ArticleTitleVue from '../../components/ArticleTitle.vue'
	export default {
		data() {
			return {
				list:['自然个人名下房产查询','不动产等级查册表(产权人班)','不动产登记查册表(非产权人自然状况版)','法人查询名下不动产等级信息'],
				listTow:['备案查询','房源核查','房屋租聘备案/信息采集校验','政策法规','租金参考'],
				listthree:['广州市商品房网签','e讯通','常见问题解答','政策法规','业务公告','行政处理决定书']
			};
		},
		components:{
			ArticleTitleVue
		},
		methods:{
			NavTo(){
				uni.navigateTo({
					url:'/pages/faceRecognition/faceRecognition'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.Estate{
		width: 100%;
		background-color: #f6f6f6;
		.banner{
			width: 100%;
			height: 300rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.Estate-title{
			width: 95%;
			height: 300rpx;
			background-color: #ffffff;
			border-radius: 20rpx;
			margin: 0 auto;
			// border: 1px solid;
			margin-top: -80rpx;
			position: relative;
			z-index: 999;
			.title-icon{
				width: 100%;
				height: 50%;
				position: relative;
				top: -60rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				// border: 1px solid;
				.title-image{
					width: 160rpx;
					height: 145rpx;
				}
			}
			.Estate-icon{
				width: 100%;
				margin-top: 20rpx;
				// border: 1px solid;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				.title-image{
					width: 60rpx;
					height: 60rpx;
				}
				.title-text{
					width: 100%;
					text-align: center;
					font-size: 25rpx;
					margin-top: 5rpx;
				}
			}
		}
		.Estate-list{
			width: 100%;
			height: 850rpx;
			background-color: #ffffff;
			margin-top: 20rpx;
			image{
				width: 30rpx;
				height: 30rpx;
				line-height: 100rpx;
			}
			.list{
				margin: 10rpx auto;
				width: 95%;
				float: right;
				height: 100rpx;
				background-color: #f5f8ff;
				display: flex;
				align-items: center;
				.list-icon{
					width: 15%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.list-icon-image{
						width: 40rpx;
						height: 40rpx;
					}
				}
				.list-text{
					font-size: 28rpx;
					flex: 1;
				}
			}
		}
		.Sum-Home{
			width: 100%;
			height: 600rpx;
			background-color: #ffffff;
			.list{
				width: 95%;
				float: right;
				height: 100rpx;
				display: flex;
				background-color: #ffffff;
				align-items: center;
				.list-icon{
					width: 6%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.list-icon-image{
						width: 15rpx;
						height: 15rpx;
					}
				}
				.list-text{
					font-size: 28rpx;
					flex: 1;
				}
			}
		}
		.qiti{
			width: 100%;
			height: 700rpx;
			margin-top: 20rpx;
			background-color: #ffffff;
			image{
				width: 30rpx;
				height: 30rpx;
				line-height: 100rpx;
			}
			.list{
				width: 95%;
				float: right;
				height: 100rpx;
				display: flex;
				align-items: center;
				background-color: #ffffff;
				.list-icon{
					width: 6%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					.list-icon-image{
						width: 15rpx;
						height: 15rpx;
					}
				}
				.list-text{
					font-size: 28rpx;
					flex: 1;
				}
			}
		}
	}
</style>
