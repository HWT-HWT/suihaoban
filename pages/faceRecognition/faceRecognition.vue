  <template>
	   <view class="face">
		   <view class="face-title">
				<FaceTitle></FaceTitle>
		   </view>
	     <view class="pushContent">
	       <live-pusher id="pusherId" ref="pusherRef" class="livePusher" 
	                  aspect="1:1" :whiteness="1" :beauty="1" device-position="front"
	                  />
	       <cover-image class="pusherImg" src="../../static/suihaoban/renlian.png" alt=""></cover-image>
	     </view>
	   </view>
  </template>
  
  <script lang="ts" setup>
  import FaceTitle from '@/components/FaceTitle.vue'
  import { onMounted, ref, getCurrentInstance, type ComponentInternalInstance } from 'vue';

  const pusherRef = ref({} as UniHelper.LivePusherInstance)
  
  onMounted(() => {
    const instance = getCurrentInstance() as ComponentInternalInstance;
    const pusherContext = uni.createLivePusherContext("pusherId", instance.ctx)
	pusherContext.switchCamera()
    // pusherContext.startPreview({}) // nvue 页面吊起摄像头
  })
  </script> 
  
  <style>
	  page{
	    background-color: #FFF !important;
	  }
  </style>
  <style lang="scss"  scoped>
  .face{
	height:100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
	.face-title{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 45rpx;
		color: #0064ff;
		letter-spacing: 1rpx;
	}
	 .livePusher{
		width: 600rpx;
		height: 500rpx;
	  }
	.pusherImg{
	  position: absolute;
	  top: 100rpx;
	  left: 0;
	  bottom: 0;
	  right: 0;
	  width: 100%;
	  height: 80%;
	}
  }
  </style>
