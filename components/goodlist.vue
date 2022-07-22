<template>
	<!-- 商品 -->
	<view class="goodall">
		<view class="goodlist">
			<view class="gooditem" v-for="item in goodslist" :key="item.id" @click="gotodetail(item.id)">
				<image :src="item.imgUrl">
					<view class="price">
						<text>￥{{item.sellPrice}}</text>
						<text>￥{{item.marketPrice}}</text>
					</view>
					<view class="name">
						{{item.title}}
					</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goodslist'],
		name:"goodlist",
		data() {
			return {
				
			};
		},
		methods:{
			gotodetail(id){
				this.$emit("godetail",id)
			}
		}
	}
</script>

<style lang="less">
.goodlist {
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;

			.gooditem {
				background-color: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				box-sizing: border-box;

				image {
					width: 80%;
					height: 300rpx;
					display: block;
					margin: 0 auto;
				}

				.price {
					color: #b50e03;
					font-size: 36rpx;
					margin: 20rpx 0 5rpx 0;

					text:nth-child(2) {
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						text-decoration: line-through;
					}
				}

				.name {
					font-size: 28rpx;
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		}
</style>