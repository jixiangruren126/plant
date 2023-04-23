<template>
	<view class="content">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular indicator-dots="ture" autoplay="ture" interval="1000" duration="500">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
	
	<button type="primary" class="button">拍照识别</button>
	<button type="default" class="button">从相册上传</button>

	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.uni-margin-wrap {
		width:690rpx;
		width: 100%;;
	}
	.swiper {
		height: 400rpx;
	}
	.swiper-item {
		display: block;
		height: 400rpx;
		line-height: 400rpx;
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