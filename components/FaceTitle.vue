<template>
	<view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name:"FaceTitle",
		data() {
			return {
				title:'未检出到人脸'
			};
		},
		methods:{
			setText(){
				  setTimeout(() => {
					this.title = '脸部亮一点'
					console.log(1);
						setTimeout(() => {
							this.title = '靠近一点'
							console.log(2);
								setTimeout(() => {
									this.title = '保存脸部向前'
									console.log(2);
								}, 1500);
						}, 1500);
				  }, 3000);

			}
		},
		mounted() {
			this.setText()
		}
	}
</script>

<style lang="scss">

</style>