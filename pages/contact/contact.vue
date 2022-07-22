<template>
	<view class="contact">
			<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
			<view class="info">
				<view @click="phone">联系电话：400-618-9090 ( 点击拨打 )</view>
				<view>校区地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
			</view>
			<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude: 120.363172,
				latitude: 30.312212,
				scale: 11,
				markers:[{
				longitude: 120.363172,
				latitude: 30.312212,
				iconPath: '../../static/hmlogo.png',
				width: 30,
				height: 30}]}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	.contact{
		.img{
			width: 750rpx;
			height: 380rpx;
		}
		.info{
			font-size: 30rpx;
			padding: 10rpx 20rpx;
			view{
						line-height: 60rpx;
						border-bottom: 2px solid #eee;
					}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
