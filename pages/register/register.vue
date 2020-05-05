<template>
	<view class="registerform">
		<form>
			<text class="registertext">用户名</text>
			<input type="text" value="" class="registerinput" v-model="user"/>
			<text class="registertext">手机号</text>
			<input type="text" value="" class="registerinput"  v-model="phone"/>
			<text class="registertext password">设置密码</text>
			<input type="text" class="registerinput" :password="image" v-model="password"/>
			<image v-if="image==true" src="../../static/image/Closeeyes.png" class="eyeimage" @click="eyepassword"></image>
			<image v-else-if="image==false" src="../../static/image/eyes.png" class="eyeimage" @click="eyepassword"></image>
			<view class="registerbutton">
				<button form-type="submit" class="registersubmit" @click="sign()">注册</button>
				<button form-type="reset" class="registerreset">重置</button>
			</view>			
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				image:true,
				user:'',
				phone:'',
				password:''
			}
		},
		methods: {
			eyepassword:function(){
				this.image=!this.image
			},
			sign:function(){
				var that = this
				var flg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
				var asd = flg.test(that.phone)
				if(that.user== ""){
					uni.showToast({
						icon: "none",
						title: "请填写用户名"
					})
				}else if (that.phone == "") {
					uni.showToast({
						icon: "none",
						title: "请填写手机号"
					})
				} else if (!asd) {
					uni.showToast({
						icon: "none",
						title: "请填写正确手机号"
					})
				}else if (that.password == "") {
					uni.showToast({
						icon: "none",
						title: "请填写密码"
					})
				}else{
					this.get()
				}
			},
			get() {
			
				uniCloud.callFunction({
					name: 'get',
					data: {
						phone:this.phone
					}
				}).then((res) => {
					let len=res.result.data.length
					console.log(len)
					if(len ==0){
						this.add();					
					}else{
						uni.showModal({
							content: `手机号已经注册`,
							showCancel: false
						})
					}
					
				}).catch((err) => {
					console.log('执行')				
					
				})
			},				
			add() {
				uni.showLoading({
					title: '处理中...'
				})
				uniCloud.callFunction({
					name: 'add',
					data: {
						name: this.user,
						phone: this.phone,
						password: this.password
					}
				}).then((res) => {
					console.log(res)
					
					uni.hideLoading()
					uni.showModal({
						content: `注册成功`,
						showCancel: false
					});
					setTimeout(function() {
						uni.navigateTo({
						url: "../login/login"
						})
					}, 500);
				}).catch((err) => {
					uni.hideLoading()
					uni.showModal({
						content: `用户已存在，注册失败`,
						showCancel: false
					})
					console.error(err)
				})
			}
		}
	}
</script>

<style>
.registerform{
	width: 85%;
	margin: 100rpx auto;
	height: auto;
}
.registertext{
	display: inline-block;
	width: 200rpx;
	height: 100rpx;
	line-height: 130rpx;
	font-size: 40rpx;
	font-weight: 300;
	text-align: left;
	color: #000000;
}
.registerinput{
	display: inline-block;
	width: 400rpx;
	height: 50rpx;
	line-height: 130rpx;
	border: 1rpx solid #808080;	
}
.password{
	position: relative;
}
.eyeimage{
	position: absolute;
	width: 50rpx;
	height: 40rpx;
	top: 235rpx;
	right: 100rpx;
}
.registerbutton{
	margin-top:100rpx ;
	height: 300rpx;
}
.registerbutton>button{
	background-color:#e07a76;
	height: 100rpx;
	line-height: 100rpx;
	color: #ffffff;
	border: 2rpx solid #DD524D;
	margin: 20rpx 0;
}
</style>
