<template>
	<view class="detailall" >
		<view class="title">
			{{newdetail.title}}
		</view>
		<view class="info">
			<text>发表时间:{{newdetail.addTime}}</text>
			<text>浏览:1</text>
		</view>
		<view class="contonent">
			<rich-text :nodes="newdetail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newdetail:""
			}
		},
		onLoad(options) {
			console.log(options)
			this.getnewdetail(options.id)
		},
		methods: {
			async getnewdetail(id){
				let res = await this.$request({
					url:`/getnew/${id}`
				})
				this.newdetail = res.data.message[0]
			}
		}
	}
</script>

<style lang="less">
.detailall{
	padding: 0rpx 20rpx ;
	font-size: 30rpx;
	.title{
		text-align: center;
		margin: 20rpx 0;
		width: 710rpx;
		display: block;

	}
	.info{
		display: flex;
		justify-content: space-between;
	}
}
</style>
