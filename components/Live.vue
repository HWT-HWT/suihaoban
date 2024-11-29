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
				 peopleLsit:['ETC办理','国际驾照办理','智慧充电','视频会员','健康通'],
				 ZoneList:[
						{name:'社保',image:'../static/suihaoban/ioc1.png'},
						{name:'医保',image:'../static/suihaoban/ioc2.png'},
						{name:'公积金',image:'../static/suihaoban/ioc3.png'},
						{name:'出入境',image:'../static/suihaoban/ioc4.png'},
						{name:'城乡居民医疗',image:'../static/suihaoban/ioc5.png'},
						{name:'不动产',image:'../static/suihaoban/ioc5.png'},
						{name:'民政',image:'../static/suihaoban/ioc6.png'},
						{name:'考试教育',image:'../static/suihaoban/ioc7.png'},
					 ],
				 bannerIcon:[
					 {
						 name:'数字空间',
						 image:"../static/suihaoban/Nav_title_ioc1.png"
					 },
					 {
						 name:'电子印章',
						 image:"../static/suihaoban/Nav_title_ioc2.png"
					 },
					 {
						 name:'亮证',
						 image:"../static/suihaoban/Nav_title_ioc3.png"
					 },
					 {
						 name:'关爱版',
						 image:"../static/suihaoban/Nav_title_ioc4.png"
					 },
				 ],
				 iconLog:[
					 [
						 {
						 						 name:'社保卡申领',
						 						 image:'../static/suihaoban/home_list_1.png'
						 },
						 {
						 						 name:'车辆年检',
						 						 image:'../static/suihaoban/home_list_2.png'
						 },
						 {
						 						 name:'拍证件照',
						 						 image:'../static/suihaoban/home_list_3.png'
						 },
						 {
						 						 name:'欠薪投诉',
						 						 image:'../static/suihaoban/home_list_4.png'
						 },
						 {
						 						 name:'随手拍',
						 						 image:'../static/suihaoban/home_list_5.png'
						 },
						 {
						 						 name:'签证服务',
						 						 image:'../static/suihaoban/home_list_6.png'
						 },
						 {
						 						 name:'志愿时',
						 						 image:'../static/suihaoban/home_list_7.png'
						 },
						 {
						 						 name:'微心愿征集',
						 						 image:'../static/suihaoban/home_list_8.png'
						 },
						 {
						 						 name:'景区购票',
						 						 image:'../static/suihaoban/home_list_9.png'
						 },
						 {
						 						 name:'贷款',
						 						 image:'../static/suihaoban/home_list_10.png'
						 }
					 ],
					 [
						 {
												 name:'居住证',
												 image:'../static/suihaoban/home_list_1.png'
						 },
						 {
												 name:'广州图书馆',
												 image:'../static/suihaoban/home_list_2.png'
						 },
						 {
												 name:'考试教育',
												 image:'../static/suihaoban/home_list_3.png'
						 },
						 {
												 name:'查缴服务',
												 image:'../static/suihaoban/home_list_4.png'
						 },
						 {
												 name:'服务一张图',
												 image:'../static/suihaoban/home_list_5.png'
						 },
						 {
												 name:'实时公交',
												 image:'../static/suihaoban/home_list_6.png'
						 },
						 {
												 name:'交通运输',
												 image:'../static/suihaoban/home_list_7.png'
						 },
						 {
												 name:'百姓提案',
												 image:'../static/suihaoban/home_list_8.png'
						 },
						 {
												 name:'签证服务',
												 image:'../static/suihaoban/home_list_9.png'
						 },
						 {
												 name:'更多',
												 image:'../static/suihaoban/home_list_10.png'
						 }
					 ]
				 ]
			};
		},
		methods: {
		    onPageScroll(event) {
				  this.scrollTop =  event.detail.scrollTop;
				  
				  if(this.scrollTop>this.scrollThreshold){
					  this.backgroundColor = '#ff0000'
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
		.banner{
			width: 100%;
			height: 500rpx;
			background-color: #fff;
			.swiper-item{
				width: 100%;
				height: 100%;
				border-radius:0 0 50rpx 50rpx ;
				image{
					width: 100%;
					height: 100%;
				}
			}
			
		}
		.ioc{
			width: 100%;
			height: 570rpx;
			position: absolute;
			top: 0%;
			// border: 1px solid;
			z-index: 998;
			.icon{
				// border: 1px solid;
				width: 90%;
				height: 40%;
				position: absolute;
				bottom: 33%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				left: 40rpx;
				.icon-btn{
					width: 18%;
					aspect-ratio: 1/1;
					// border: 1px solid;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					font-size: 25rpx;
					color: #fff;
					z-index: 999;
					.icon-btn-icon{
						width: 70%;
						height: 85rpx;
						background-size: 100%;
					}
				}
			}
			.bannerMini{
				width: 100%;
				height: 90rpx;
				position: absolute;
				bottom: 0;
				right: -50rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtoAAABaCAYAAACGwfHCAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE7mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjMgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMS0wN1QxNTowMDo0NiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0xMS0wN1QxNTowMDo0NiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTEtMDdUMTU6MDA6NDYrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1ODBjZDA2LTQ3MWItZjQ0ZC04NDZkLTljNjAyYzNkZmZlZCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTgwY2QwNi00NzFiLWY0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");
				background-size: 100%;
				font-size: 30rpx;
			}
		}
		.occupy-box{
			width: 100%;
			height: 65rpx;
			background-color: #fafbfe;
		}
		
		.swiper{
			width: 100%;
			height: 370rpx;
			margin-top: 30rpx;
			.icon-log{
				width: 100%;
				height: 95%;
				background-color: #fafbfe;
				padding-bottom: 30rpx;
				.log-box{
					width: 95%;
					height: 100%;
					margin: 0 auto;
					display: grid;
					grid-template-columns: repeat(5,2fr);
					padding-bottom: 30rpx;
					gap: 10rpx;
					.btn-log{
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
						font-size: 25rpx;
						padding-bottom: 20rpx;
						.btn-log-image{
							width: 80rpx;
							height: 65rpx;
						}
						.btn-log-text{
							width: 95%;
							text-align: center;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
		
		.Zone{
			width: 100%;
			height: 300rpx;
			background-color: #fafbfe;
			padding-top: 10rpx;
		}
		
		.Hot{
			width: 100%;
			height: 280rpx;
			background-color:#fafbfe ;
			padding-top: 20rpx;
			// border: 1px solid;
			.Hot-icon{
				width: 90%;
				height: 100%;
				// border: 1px solid;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin: 0 auto;
				.Hot-icon-box{
					margin-top: 10rpx;
					background-color: #fbfdff;
					width: 23%;
					height: 43%;
					border: 1px solid #daebff;
					border-radius:7rpx ;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					font-size: 26rpx;
					padding-bottom: 10rpx;
					.box-image{
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						padding-top: 20rpx;
						.Hot-icon-box-image{
							width: 55rpx;
							height: 55rpx;
						}
						
					}
					.Hot-icon-box-text{
						width: 92%;
						margin: 0 auto;
						text-align: center;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		
		.Hot-content{
			height: 50rpx;
			border-radius: 40rpx;
			border: 1px solid #6aa0be;
			font-size: 23rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #e9f8fb;
			color: #2972a7;
			padding:0 5rpx;
			image{
				width: 25rpx;
				height: 25rpx;
				margin: 0 5rpx;
			}
		}
		.characteristic{
			width: 90%;
			height: 500rpx;
			margin: 0 auto;
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			justify-content: space-between;
			.characteristic-image{
				width: 33%;
				height: 240rpx;
				.image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.people{
			width: 100%;
			height:281rpx;
			.people-image{
				width: 90%;
				height: 45%;
				// border: 1px solid;
				margin: 0 auto;
				.image{
					width: 100%;
					height: 100%;
				}
			}
			.people-icon{
				width: 100%;
				height: 45%;
				// border: 1px solid;
				padding-top: 20rpx;
				display: flex;
				justify-content: space-between;
				.icon{
					width: 20%;
					height: 100%;
					// border: 1px solid;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					align-items: center;
					.image{
						width:55rpx;
						height: 55rpx;
					}
					.text{
						width: 100%;
						// border: 1px solid;
						text-align: center;
						font-size: 25rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.backG{
			width: 90%;
			height: 80rpx;
			margin: 20rpx auto;
			.image{
				width: 100%;
				height: 100%;
			}
		}
		.backGu{
			width: 95%;
			height: 160rpx;
			display: flex;
			// border: 1px solid;
			margin: 0 auto;
			.backGuUrl{
				width: 45%;
				height: 100%;
				margin: 0 auto;
				.image{
					width: 100%;
					height: 100%;
				}
			}
		}
		.backGun{
			width: 90%;
			height: 125rpx;
			margin: 0 auto;
			.image{
				width: 100%;
				height: 100%;
			}
		}
		.backGund{
			width: 95%;
			height: 110rpx;
			margin: 0 auto;
			.image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>