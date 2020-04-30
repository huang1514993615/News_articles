<template>
	<view class="content">
	<view class="PageHeader">
		<text :class="{a:a}" @click="wz" type="default">文章</text>
		<text :class="{b:b}" @click="zz" type="default">作者</text>
	</view>
	<xx v-show="a"></xx>
	<zz v-show="b"></zz>
	</view>
</template>
			
<script>
	import xx from '../../components/xx/xx.vue'
	import zz from '../../components/zz/zz.vue'
	export default {
		components:{
			xx:xx,
			zz:zz
		},
		data() {
			return {
				a:true,
				b:false
			}
		},
		methods: {
			wz(){
				this.a=true;
				this.b=false;
			},
			zz(){
				this.a=false;
				this.b=true;
			},
			add() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'add',//云函数名字
					data: {//请求参数
						name: 'DCloud',
						subType: 'uniCloud',
						createTime: Date.now()
					}
				}).then((res) => {//相应处理
					uni.hideLoading()
					uni.showModal({
						content: `成功添加一条数据，文档id为：${res.result.id}`,
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `添加数据失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			remove() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'remove'
				}).then((res) => {
					uni.hideLoading()
					uni.showModal({
						content: res.result.msg,
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `删除失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			update() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'update',
					data: {
						name: 'DCloud',
						subType: 'html 5+',
						createTime: Date.now()
					}
				}).then((res) => {
					uni.hideLoading()
					uni.showModal({
						content: res.result.msg,
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `更新操作执行失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			get() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'get'
				}).then((res) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询成功，获取数据列表为：${JSON.stringify(res.result.data)}`,
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `查询失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			useCommon() {
				console.log('请确保自己已经阅读并按照公用模块文档操作 https://uniapp.dcloud.io/uniCloud/cf-common')
				uniCloud.callFunction({
					name: 'useCommon'
				}).then((res) => {
					uni.hideLoading()
					uni.showModal({
						content: '云函数useCommon返回结果：' + JSON.stringify(res.result),
						showCancel: false
					})
					console.log(res)
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `云函数useCommon执行失败，错误信息为：${err.message}`,
						showCancel: false
					})
					console.error(err)
				})
			},
			upload() {
				new Promise((resolve, reject) => {
					uni.chooseImage({
						chooseImage: 1,
						success: res => {
							const path = res.tempFilePaths[0]
							let ext
							// #ifdef H5
							ext = res.tempFiles[0].name.split('.').pop()
							// #endif
							// #ifndef H5
							ext = res.tempFilePaths[0].split('.').pop()
							// #endif
							const options = {
								filePath: path,//配置上传路径
								cloudPath: Date.now() + '.' + ext,//在云存储中文件名字
								
							}
							resolve(options)
						},
						fail: () => {
							reject(new Error('Fail_Cancel'))
						}
					})
				}).then((options) => {
					// 云存储
					// 每次上传和下载dous 异步的
					// 每次只上传一个文件
					// 云存储中相同文件名字会覆盖
					// 上传云存储成功后返回fileID 标识该文件
					uni.showLoading({
						title: '文件上传中...'
					})
					return uniCloud.uploadFile({
						...options,
						onUploadProgress(e) {
							console.log(e)
						}
					})
				}).then(res => {//云存储上传成功
					uni.hideLoading()
					console.log(res);
					uni.showModal({
						content: '图片上传成功，fileId为：' + res.fileID,
						showCancel: false
					})
				}).catch((err) => {
					uni.hideLoading()
					console.log(err);
					if (err.message !== 'Fail_Cancel') {
						uni.showModal({
							content: `图片上传失败，错误信息为：${err.message}`,
							showCancel: false
						})
					}
				})
			}
		}
	}
</script>

<style>
*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.content{
	width: 90%;
	margin: 0 auto;
	
}
.PageHeader{
	width: 100%;
	margin: 0 auto;
	height: 100rpx;
	
}
.PageHeader text{
	display: inline-block;
	width: 330rpx;
	height: 70rpx;
	border: 2rpx solid #DD524D;
	font-size: 30rpx;
	line-height: 70rpx;
	vertical-align: middle;
	text-align: center;
}
.PageHeader text:nth-child(1){
	border-radius: 10rpx 0 0 10rpx;
}
.PageHeader text:nth-child(2){
	border-radius:0 10rpx 10rpx 0;
}
.a{
	color: #DD524D;
}
.b{
	color: #DD524D;
}
</style>
