<template>
	<view style="background-color: #eee;">
			<goodlist :goodslist="goodslist" @godetail="navigoodetail"></goodlist>
			<view style="text-align: center;" v-if="flag">
				------已经到底了------
			</view>
	</view>
</template>

<script>
	import goodlist from "../../components/goodlist.vue"
	export default {
		components:{goodlist},
		data() {
			return {
				goodslist:[],
				pageindex:1,
				flag:false
			}
		},
		onLoad() {
			this.getgoodlist()
		},
		methods: {
			//获取推荐商品列表
			async getgoodlist() {
				let res = await this.$request({
					url: "/getgoods?pageindex="+this.pageindex
				})
				console.log(res)
				this.goodslist = [...this.goodslist,...res.data.message];
			},
			//商品跳转
			navigoodetail(id){
				uni.navigateTo({
					url:`/pages/gooddetail/gooddetail?id=${id}`
				})
			}
		},
		onPullDownRefresh(){
			this.pageindex = 1;
			this.goodslist = [];
			this.flag = false;
			setTimeout(()=>{
				this.getgoodlist();
				uni.stopPullDownRefresh();
			},1000)
		},
		// 监听触底
		onReachBottom(){
			if(this.goodslist.length<this.pageindex*10) return this.flag = true
			this.pageindex++;
			this.getgoodlist();
		},
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
