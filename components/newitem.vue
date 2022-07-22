<template>
	<view>
		<view class="newitem" v-for="item in newlist" @click="godetail(item.id)">
			<image :src="item.imgUrl"></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.addTime}}</text>
					<text>浏览:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"newitem",
		props:["newlist"],
		data() {
			return {
				
			};
		},
		methods:{
			godetail(id){
				console.log("111")
				this.$emit("navigatordetail",id)
			}
		}
	}
</script>

<style lang="less">
.newitem{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 2rpx solid #b50e03;
			image{
				min-width: 200rpx;
				max-width: 200rpx;
				height: 150rpx;
			}
			.right{
				margin-left: 15rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.title{
					font-size: 30rpx;
				}
				.info{
					font-size: 24rpx;
					text:nth-child(2){
						margin-left: 40rpx;
					}
				}
			}
		}
</style>