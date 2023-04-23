<template>
	
	<view style="height: 400rpx;">
	     <image style="width: 100%;height: 100%;" mode="aspectFill" :src="banner_url"></image>
	</view>
	
	<view style="margin: 20rpx;">
	  <text style="color: black;font-size: 14px;font-weight:700;">可能结果</text>
	</view>
<view class="layout_horizontal" style="margin-top: 30rpx;">
    <view style="flex:1;width: 33.3%;" v-for="(item, index) in list">
      <view class="layout_vertical" @click="chooseAction(index)">
        <image  class="image" mode="aspectFill"  :src= "item['baike_info']['image_url']?item['baike_info']['image_url']:'/static/logo.png'"  ></image>
        <text class="black-text">{{item['name']}}</text>
           <text class="green-text">{{item['score']}}%</text>
      </view>     
    </view>
</view>



<view  style="margin:20rpx; display: flex;flex-direction: column;" @click="viewMore(choose_index)">
  <!-- <text style="font-size: 15px;margin-bottom: 20rpx;">{{list[choose_index]['baike_info']['description']?list[choose_index]['baike_info']['description']:'暂无更多信息'}}</text> -->
  <image style="width: 80%;height: 400rpx;align-self: center;  border-radius: 20rpx;" mode="aspectFill" :src="list[choose_index]['baike_info']['image_url']?list[choose_index]['baike_info']['image_url']:'' "></image>
  
  <view  style="margin:20rpx; display: flex;flex-direction: column;" >
    <text style="font-size: 15px;margin-bottom: 10rpx; color:blue;text-align: center;" @click="viewMore(choose_index)">点此可观看</text>
 <text style="font-size: 15px;margin-bottom: 10rpx; color:blue;text-align: center;" @click="viewMore(choose_index)">{{list[choose_index].name}}视频介绍</text>
 
  </view>
  <text class="tips">因花时，花果，光线，角度等因素，目前全国无法实现100%得出准确结果，当前结果仅供参考，具体还将以现实情况斟酌</text>
</view>


	
</template>

<script>
	export default {
		data() {
			return {
				list:[],
				banner_url:'',
				choose_index:0,
			}
		},
		onLoad: function (options) {
		  this.list=JSON.parse(options.list);
		  this.banner_url=options.image_url;
		  console.log(this.banner_url); 
		   //将概率小数，变成百分比，方便前端展示
		        for(var i=0;i< this.list.length;i++){
		           let item=this.list[i];
		           let  score=item["score"]*100;
		           item["score"]=parseInt(score+"");
		          
		        };
		},
		methods:{
		    chooseAction(index){
				this.choose_index=index;
			},
			viewMore(index){
				var baike_url=this.list[index].baike_info.baike_url;
				uni.navigateTo({
				      url: '/pages/webview/webview?baike_url='+baike_url,
				});
			}
		}
	
	}
</script>

<style>
	
	.layout_horizontal{
	  height: 200rpx;
	  display: flex;
	  /*row 横向  column 列表  */
	  flex-direction: row;
	}
	
	/*纵向布局  */
	.layout_vertical{
	  height: 200rpx;
	  display: flex;
	  /*row 横向  column 列表  */
	  flex-direction: column;
	  justify-content: center;
	  align-items: center;
	}
	
	.image{
	  border-radius: 80rpx;
	  overflow: hidden;
	  width: 100rpx;
	  height: 100rpx;
	  margin-bottom: 20rpx;
	}
	.tips{
	  margin-top: 20rpx;
	  font-size:12px;
	  color:grey;
	}
	
</style>