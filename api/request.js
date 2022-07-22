import { fail } from "assert"

export const request = (options)=>{
	const baseurl = "http://localhost:8090"
	return new Promise((resolve,rejects)=>{
		uni.request({
			url:baseurl+options.url,
			method:options.method||"GET",
			data:options.data,
			success:(res)=>{
				console.log(res)
				if(res.data.status !==200){
					return uni.showToast({
						title:"获取数据失败"
					})
					return
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:"获取数据失败"
				})
			}
		})
	})
}