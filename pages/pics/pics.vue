<template>
	<view  class="pics">
		<scroll-view scroll-y class="left">
				<view   :class="active == index ?'active':''"    @click="changeactive(index,item.id)" v-for="(item,index) in category" :key="item.id">
					{{item.title}}
				</view>
		</scroll-view>
		<scroll-view scroll-y class="right" >
			<view v-for="item in rightdata" :key="item.title">
				<image :src="item.imgUrl" @click="previewimg(item.imgUrl)"></image>
				<text>{{item.zhaiyao}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				category:[],
				active:0,
				rightdata:[]
			}
		},
		onLoad() {
			this.getimgcategory()
			this.changeactive(0,1)
		},
		methods: {
			//获取分类
			async getimgcategory(){
				let res = await this.$request({
					url:"/getimgcategory"
				})
				this.category = res.data.message;
				console.log(this.category)
			},
			//改变高亮
			async changeactive(index,id){
				this.active = index
				let res = await this.$request({
					url:'/getimages/'+id
				})
				this.rightdata = res.data.message
			},
			//查看图片
			previewimg(url){
				//返回图片地址到新数组
				let urls = this.rightdata.map(v=>{
					return v.imgUrl
				})
				uni.previewImage({
					current:url,
					urls
				})
			}
		}
	}
</script>

<style lang="less">
.pics{
	height: 100%;
	display: flex;
	.left{
		height: 100%;
		width: 200rpx;
		margin-top:2rpx;
		border-right: 2rpx solid #eee;
		view{
			height: 120rpx;
			line-height: 120rpx;
			text-align: center;
			font-size: 30rpx;
			border-bottom: 2rpx solid #eee;
		}
	}
	.active{
		background-color: #b50e03;
		color: #fff;
	}
	.right{
		height: 100%;
		width: 520rpx;
		margin: 10rpx auto;
		image{
						width: 520rpx;
						height: 520rpx;
						border-radius: 5px;
					}
					text{
						font-size: 30rpx;
						line-height: 60rpx;
					}

	}
}
</style>
