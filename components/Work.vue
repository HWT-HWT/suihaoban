<template>
	<view class="Home">
		<view class="NavTitle" :style="{backgroundColor:backgroundColor}">
			<view class="occupy">
				
			</view>
			
			<view class="search">
				<view class="search-icon">
					<image class="search-icon" src="../static/suihaoban/dh.png" mode=""></image>
				</view>
				<view class="search-input">
					<uni-search-bar  class="uni-mt-10" placeholder="搜索服务" bgColor="" clearButton="none" cancelButton="none"  /> 
				</view>
				<view class="search-image">
					<image class="search-image" src="../static/suihaoban/ic_version_switch_enterprise.png" mode=""></image>
				</view>
			</view>
		</view>
		
		<scroll-view style="width: 100%; height: 100vh;background-color: #fafbfe;" scroll-y="true"  @scroll="onPageScroll" enable-flex>
				<view style="width: 100%;background-color:#fafbfe;">
					
					<view class="operate">
						
					</view>
					
					<view class="WorkList">
						<view class="WorkList-box">
							<view class="WorkList-box-image">
								
							</view>
							<view class="WorkList-box-text">
								
							</view>
						</view>
					</view>
					
				</view>
				
				<view style="height: 100rpx;">
					
				</view>
		</scroll-view>
	</view>
</template>

<script>
	import titleVue from '@/components/ArticleTitle.vue';
	export default {
		name:"home",
		data() {
			return {
				 backgroundColor: '',
				 scrollThreshold: 200,
				 scrollTop:'',
			};
		},
		methods: {
		    onPageScroll(event) {
				  this.scrollTop =  event.detail.scrollTop;
				  
				  if(this.scrollTop>this.scrollThreshold){
					  this.backgroundColor = '#1e95f3'
				  }
				  if(this.scrollTop<this.scrollThreshold){
				  	this.backgroundColor = ''
					
				  }
			},
			NagTo(index){
				console.log(index);
				index === 5 ? uni.navigateTo({
					url:'/pages/Estate/Estate'
				}): index
			}
		},
		components:{
			titleVue
		}
	}
</script>

<style lang="scss" scoped>
	.Home{
		width: 100%;
		background-color: #ccc;
		.NavTitle{
			width:100%;
			height: 200rpx;
			z-index: 999;
			position: fixed;
			.occupy{
				width: 100%;
				height: 50%;
			}
			.search{
				width: 100%;
				height: 45%;
				display: flex;
				.search-icon{
					width: 10%;
					height: 100%;
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
					width: 60%;
					height: 100%;
					display: flex;
					align-items: center;
					margin: 0 auto;
					.uni-mt-10{
						width: 95%;
						height: 20rpx;
						display: flex;
						align-items: center;
						background-color: rgb(255, 255, 255,0.5);
						border-radius:10rpx;
						color: #fff;
					}
				}
				.search-image{
					width: 25%;
					height: 100%;
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
		.operate{
			width: 100%;
			height: 300rpx;
			background: #1e95f3;
		
		}
		.WorkList{
			width: 90%;
			height: 200rpx;
			background-color: #fff;
			border:1px solid;
			margin: 0 auto;
			margin-top: -90rpx;
			border-radius: 10rpx;
			.WorkList-box{
				display: flex;
				flex-wrap: wrap;
				height: 100%;
				width: 25%;
				border: 1px solid;
				.WorkList-box-image{
					image{
						
					}
				}
			}
		}
	}
</style>