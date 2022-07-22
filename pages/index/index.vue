<template>
	<view>
		<swiper circular="true" class="home" autoplay="true" indicator-dots="true">
			<swiper-item v-for="item in swiper" :key="item.id">
				<img :src="item.img" />
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="nav_item" v-for="item in navs" :key="item.id" @click="gotopath(item.path)">
				<view :class="item.icon">
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<view class="goodall">
		<view class="goodtitle">
			推荐商品
		</view>
		<goodlist :goodslist="goodslist" @godetail="navigoodetail">></goodlist> 
		</view>
	</view>
</template>

<script>
	import goodlist from "../../components/goodlist.vue"
	export default {
		components:{goodlist},
		data() {
			return {
				swiper: [],
				goodslist: [],
				navs: [{
						id:1,
						icon: 'iconfont icon-ziyuan',
						title: '简易超市',
						path: '/pages/goods/goods'
					},
					{
						id:2,
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						id:3,
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						id:4,
						icon: 'iconfont icon-shipin',
						title: '学习视频',
						path: '/pages/videos/videos'
					}
				]

			}
		},
		onLoad() {
			this.getswipers()
			this.getgoodlist()
		},
		methods: {
			//获取轮播图数据
			async getswipers() {
				let res = await this.$request({
					url: "/getlunbo"
				})
				this.swiper = res.data.message;
				console.log(res)
			},
			//获取推荐商品列表
			async getgoodlist() {
				let res = await this.$request({
					url: "/getgoods"
				})
				console.log(res)
				this.goodslist = res.data.message
			},
			//四个图标跳转
			gotopath(url){
				uni.navigateTo({
					url
				})
		},
		//商品跳转
		navigoodetail(id){
			uni.navigateTo({
				url:`/pages/gooddetail/gooddetail?id=${id}`
			})
		}
		}
	}
</script>

<style lang="less">
	.home {
		width: 750rpx;
		height: 380rpx;

		img {
			width: 100%;
			height: 100%;
		}
	}

	.nav {
		display: flex;

		.nav_item {
			flex: 1;
			text-align: center;

			view {
				width: 120rpx;
				height: 120rpx;
				border-radius: 60%;
				background-color: #b50e03;
				line-height: 120rpx;
				font-size: 50rpx;
				color: #fff;
				margin: 20rpx auto;
			}

			.icon-tupian {
				font-size: 45rpx;
			}
		}
	}

	.goodall {
		background-color: #eee;
		overflow: hidden;
		margin-top: 10rpx;

		.goodtitle {
			text-align: center;
			line-height: 80rpx;
			color: #b50e03;
			font-size: 45rpx;
			// 为元素设置间距
			letter-spacing: 40rpx;
			margin: 14rpx auto;
			background-color: #fff;
		}

		
	}
</style>
