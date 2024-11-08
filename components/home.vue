<template>
	<view class="Home">
		<view class="NavTitle">
			<view class="occupy">
				
			</view>
			
			<view class="search">
				<view class="search-icon">
					<image class="search-icon" src="../static/suihaoban/对话.png" mode=""></image>
				</view>
				<view class="search-input">
					<uni-search-bar class="uni-mt-10" placeholder="搜索服务" bgColor="none" clearButton="none" cancelButton="none" @confirm="search" />
				</view>
				<view class="search-image">
					<image class="search-image" src="../static/suihaoban/ic_version_switch_enterprise.png" mode=""></image>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"home",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.Home{
		width: 100%;
		height: 100vh;
		background-color: #ccc;
		.NavTitle{
			width:100%;
			height: 200rpx;
			background-color: #ee734c;
			.occupy{
				width: 100%;
				height: 50%;
			}
			.search{
				width: 100%;
				height: 45%;
				// border: 1px solid;
				display: flex;
				// align-items: center;
				.search-icon{
					width: 10%;
					height: 100%;
					// border: 1px solid;
					display: flex;
					justify-content: center;
					align-items: center;
					padding-left: 10rpx;
					.search-icon{
						width: 50rpx;
						height: 50rpx;
					}
				}
				.search-input{
					width: 65%;
					height: 100%;
					display: flex;
					// border: 1px solid;
					align-items: center;
					.uni-mt-10{
						width: 95%;
						height: 55rpx;
						display: flex;
						align-items: center;
						background-color: #fff;
						border-radius:10rpx;
					}
				}
				.search-image{
					width: 25%;
					height: 100%;
					// border: 1px solid;
					display: flex; 
					align-items: center;
					border-radius: 5rpx;
					.search-image{
						width: 160rpx;
						height: 55rpx;
						
					}
				}
			}
		}
		
	}
</style>