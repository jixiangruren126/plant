<template>
		<view>
			<web-view :webview-styles="webviewStyles"  :src="baike_url"></web-view>
		</view>
</template>


<script>
	export default {
		data() {
			return {
				baike_url:''
			}
		},
		onLoad: function (options) {
		  this.baike_url=options.baike_url;
		  console.log(this.baike_url); 
		  
		}
		
	
	}
</script>

<style>
	
	
</style>