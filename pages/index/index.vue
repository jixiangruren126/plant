<template>
	<view class="content">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular indicator-dots="ture" autoplay="ture" interval="3000" duration="1000" >
				<swiper-item v-for="(item,index) in banner_list">
					<view class="swiper-item uni-bg-red"  @click="bannerAction(index)">
						  <image style="width: 100%; height: 100%; background-color: #eeeeee;" mode="aspectFill" :src="item.pic_url"
						                       ></image>
					</view>
				</swiper-item>
				
			</swiper>
		</view>
	</view>
	
	<button type="primary" class="button" style="background-color:limegreen;"  @click="takePhoto(1)">拍照识别</button>
	<button type="default" class="button" @click="takePhoto(0)">从相册上传</button>
	<canvas
	  type="2d"
	  id="canvas"
	  canvas-id="canvas"
	  style="width: 300px; height: 800px;position: absolute; left:-1000px;top:-1000px;;"
	></canvas>
	
</template>

<script>
import { api } from '../../common/network/api'
import service from '../../common/network/request'
	export default {
		data() {
			return {
				title: 'Hello',
				banner_list:[],
				canvasWidth:0,
				canvasHeight:0,
				accessToken:'',
			}
		},
		onLoad() {
			this.getBannerInfo();
			this.getAccessToken();
		},
		
		methods: {
			//获得百度api
			async getAccessToken(){
				var that=this;
				console.log(api.default.get_access_token);
				uni.request({
					url:api.default.get_access_token,
					method:'GET',
					success:function(res){
						that.accessToken=res.data.access_token;
						console.log(that.accessToken);
					}
				})
			     
			},
			
			async getBannerInfo(e){
				const {data: res} = await service.get(api.default.index);
				if(res.code != '0'){
					return uni.showToast({
							title: 'banner获取失败',
							duration: 2000,
							icon: 'none'
					});
				}else{
				
					this.banner_list=res.data.banner_list;
					
				}
			},
			takePhoto(type){
				var that=this;
				var  str=(type==0)?'album':'camera';
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: [str], //从相册选择
					success: function (res) {
						console.log(res.tempFilePaths);
						that.imageCompression(res.tempFilePaths[0],that);
					}
				});
			},
			
			
			
			imageCompression(filePath,that){
				
				uni.showLoading({
					title: '正在识别'
				}),
				uni.getImageInfo({
					src:filePath,
					success:function(res){
						var ratio = 2;
						// 图片原始长宽
						var canvasWidth = res.width;
						var canvasHeight = res.height;
						// 保证宽高在600以内
						while (canvasWidth > 800 || canvasHeight > 800){
							canvasWidth = Math.trunc(res.width / ratio);
							canvasHeight = Math.trunc(res.height / ratio);
							ratio++;
						}
						that.canvasWidth=canvasWidth;
						that.canvasHeight=canvasHeight;
						
						
						console.log(process.env.UNI_PLATFORM); // 打印当前平台的名称，如"android"或"ios"
						
						uni.compressImage({
						  src: filePath,
						  compressedWidth:canvasWidth,
						  compressHeight:canvasHeight,
						  success: res => {
						    console.log(res.tempFilePath)
							that.uploadImage(res.tempFilePath,that)
						  }
						})

					}
				})
			},
			
			//上传所选图片
			  uploadImage(filtPath,that){
			     uni.uploadFile({
			            url: api.default.upload_image,
			            filePath: filtPath,
			            name: "image",
			            success: function(t) {},
			            complete: function(t) {
			                console.log(t);
			                t=JSON.parse(t.data)
	
			                const distinguish_url=api.default.distinguish_image+that.accessToken;
			                var dic={
			                  url:t.data['url'],
			                  distinguish_url:distinguish_url,
			                }
			                console.log(dic)
			                that.queryDataFromBaidu(dic)
			            }
			       });
			  },
			  
			  queryDataFromBaidu:function(t){
			      var that=this;
			      uni.request({
			        url: t.distinguish_url, 
			        method: 'post',
			        data: {
			        //所需要参数
			         url: t.url,
			         baike_num: 3
			        },
			    //请求头  注：在get请求中可有可无，但post需要
			        header: {
			          'content-type': 'application/x-www-form-urlencoded' // 默认值
			        },
			        success(res) {
			             uni.hideLoading();
			             console.log(res);
			            if(res.data["result"].count == 0){
			                uni.showModal({
			                  title: "提示",
			                  content: "没有找到相关植物，请重新上传"
			                });
			            }else{
							
							const jsonData = JSON.stringify(res.data["result"]);
			                uni.navigateTo({
			                      url: '/pages/detail/detail?image_url='+ t.url +"&list="+jsonData,
			                });
			          
			              }
			        }
			      })
			    },
				
				bannerAction(index){
					
					var baike_url='';
					if(index == 1){
						baike_url='https://baike.baidu.com/item/%E5%A2%A8%E8%A5%BF%E5%93%A5%E9%BC%A0%E5%B0%BE%E8%8D%89/5120402?fr=aladdin';
					}else{
						baike_url='https://baike.baidu.com/item/%E6%A8%B1%E8%8A%B1/70387?fr=aladdin';
					}
					uni.navigateTo({
					      url: '/pages/webview/webview?baike_url='+baike_url,
					});
				}
				
		},
		
		
	}
	
	
	
</script>

<style>
	.uni-margin-wrap {
		width:690rpx;
		width: 100%;;
	}
	.swiper {
		height: 500rpx;
	}
	.swiper-item {
		display: block;
		height: 500rpx;
		line-height: 500rpx;
		text-align: center;
	}

	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}

	.uni-common-mt{
		margin-top:60rpx;
		position:relative;
	}

	.info {
		position: absolute;
		right:20rpx;
	}

    .uni-padding-wrap {
        width:550rpx;
        padding:0 100rpx;
    }
	
	.button{
		margin-top: 25px;
		margin-bottom: 10px;
		margin-left: 40px;
		margin-right: 40px;
		
	}
</style>