<template>
	<view class="newslist">
		<newitem :newlist = "newlist" @navigatordetail="godetail"></newitem>
	</view>
</template>

<script>
	import newitem from "../../components/newitem.vue"
	export default {
		data() {
			return {
				newlist:[]
			}
		},
		components:{
			newitem
		},
		onLoad() {
			this.getnewlist()
		},
		methods: {
			async getnewlist(){
				let res = await this.$request({
					url:"/getnewslist"
				})
				this.newlist = res.data.message
				console.log(this.newlist)
			},
			godetail(id){
				uni.navigateTo({
					url:`/pages/newdetail/newdetail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="less">
	.newslist{
		
	}
</style>
