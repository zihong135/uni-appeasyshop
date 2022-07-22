<template>
	<view>
		<swiper indicator-dots>
			<swiper-item v-for="item in swiper">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="price">
			<text>￥{{goodstop.marketPrice}}</text>
			<text>￥{{goodstop.sellPrice}}</text>
		</view>
		<view class="goodsname">
			{{goodstop.title}}
		</view>
		<view class="line"> </view>
		<view class="box2">
			<view>货号:{{goodstop.goodsNo}}</view>
			<view>库存:{{goodstop.stockQuantity}}</view>
		</view>
		<view class="line">		
		</view>
		<view class="box3">
			<view class="title">
				详情介绍
			</view>
			<view class="contonent">
				<rich-text :nodes="goodsdetail.content"></rich-text>
			</view>
		</view>
		<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
	</view>
</template>

<script>
	import unigoodsnav from "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.vue"
	export default {
		data() {
			return {
				swiper:[],
				goodstop:"",
				goodsdetail:"",
				 options: [{
							icon: 'headphones',
							text: '客服'
						}, {
							icon: 'shop',
							text: '店铺',
							infoBackgroundColor:'#007aff',
							infoColor:"red"
						}, {
							icon: 'cart',
							text: '购物车',
							info: 2
						}],
					    buttonGroup: [{
					      text: '加入购物车',
					      backgroundColor: '#ff0000',
					      color: '#fff'
					    },
					    {
					      text: '立即购买',
					      backgroundColor: '#ffa200',
					      color: '#fff'
					    }
					    ]
					  }
		},
		components:{"uni-goods-nav":unigoodsnav},
		onLoad(options){
			this.getdetailswiper(options.id)
			this.getgoodtop(options.id)
			this.getdesc(options.id)
		},
		methods: {
			 async getdetailswiper(id){
				let res =await this.$request({
					url:`/getthumimages/${id}`
				})
				this.swiper = res.data.message;
			},
			async getgoodtop(id){
				let res = await this.$request({
					url:`/getinfo/${id}`
				})
				this.goodstop = res.data.message[0]
			},
			async getdesc(id){
				let res = await this.$request({
					url:`/getdesc/${id}`
				})
				console.log(res)
				this.goodsdetail = res.data.message[0]
			},
			onClick (e) {
				    uni.showToast({
				      title: `点击${e.content.text}`,
				      icon: 'none'
				    })
				  },
				  buttonClick (e) {
				    console.log(e)
				    this.options[2].info++
				  }
		}
	}
</script>

<style lang="less">
	swiper{
		height: 700rpx;
		image{
			height:100%;
			width: 100%;
		}
	}
	.price{
		padding: 10rpx;
		color: #b50e03;
		line-height: 80rpx;
		text:nth-child(2){
			font-size: 30rpx;
			color: #eee;
			text-decoration: line-through;
			margin-left: 30rpx;
		}
	}
	.goodsname{
		padding: 10rpx;
		line-height: 60rpx;

	}
	.line{
		width: 750rpx;
		height: 15rpx;
		background-color:#eee;
	}
	.box2{
		padding: 0 10px;
		font-size: 32rpx;
		line-height: 70rpx;
	}
	.box3{
		padding: 10rpx;
		padding-bottom: 50px;
		.title{
			font-size: 32rpx;
			padding-left: 10px;
			border-bottom: 1px solid #eee;
			line-height: 70rpx;
		}
		.contonent {
					padding: 10px;
					font-size: 28rpx;
					color: #333;
					line-height: 50rpx;
				}
	}
</style>
