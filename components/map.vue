<template>
	<view class="map">
		<view id="amap" class="amap"></view>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				latitude: 30.218143, // 纬度
				longitude: 120.280798, // 经度
			};
		},
 
	};
</script>
<script module="ModuleInstance" lang="renderjs">
	//renderjs运行在视图层的js，只支持app-vue和h5（简单来说就是开了另外一条线程）
	//大幅降低逻辑层和视图层的通讯损耗，提供高性能视图交互能力（减少通讯损耗提升性能，例如一些手势或canvas动画的场景）
	export default {
		data() {
			return {
				map: null,
				layer: null,
				parkList: [],
				markerId: ''
			};
		},
		mounted() {
			if (window.AMap) {
				//todo 如果能访问到AMap直接初始化
				this.initAmap();
			} else {
				//todo 动态引入
				const script = document.createElement('script');
				script.src = "https://webapi.amap.com/maps?v=1.4.15&key=e70bb04434bff2962559ca5f3845ef8e";;
				script.onload = () => {
					//todo 初始化地图
					this.initAmap();
				}
				document.head.appendChild(script);
			}
		},
		methods: {
			initAmap() {
				this.map = new AMap.Map('amap', {
					zoom: 10, //显示的缩放级别
					// zooms: [2, 30], //地图显示的缩放级别范围, 默认为 [2, 20] ，取值范围 [2 ~ 30]
					center: [108.954239, 34.265472], //todo 中心点坐标
					mapStyle: 'amap://styles/57994c871bb604a4c79184f5f65d8782', //todo 地图样式
					resizeEnable: true   //是否监控地图容器尺寸变化
				});
			}
		},
	};
</script>
<style lang="scss">
    	page{
		width: 100%;
		height: 80%;
	}
	.map {
		width: 100%;
		height: 100%;
	}
 
	#amap {
		width: 100%;
		height: 100%;
	}
</style>