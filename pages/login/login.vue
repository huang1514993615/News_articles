<template>
	<view class="loginform">
		<form>
			<text class="logintext">手机号</text>
			<input type="text" class="logininput" v-model="phone"/>
			<text class="logintext">密码</text>
			<input type="text" class="logininput" :password="image" v-model="password"/>
			<image v-if="image==true" src="../../static/image/Closeeyes.png" class="eyeimage" @click="eyepassword"></image>
			<image v-else-if="image==false" src="../../static/image/eyes.png" class="eyeimage" @click="eyepassword"></image>
			<view class="loginbutton">
				<button form-type="submit" @click="login()">登录</button>
				<button form-type="submit" @click="sign()">注册</button>
				<button form-type="reset">重置</button>
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
				password:'',
				passwords:''
			}
		},
		methods: {
			eyepassword:function(){
				this.image=!this.image
			},
			login:function(){
				var that = this
				var flg = /^(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
				var asd = flg.test(that.phone)
				if (that.phone == "") {
					uni.showToast({
						icon: "none",
						title: "请填写手机号"
					})
				} else if (!asd) {
					uni.showToast({
						icon: "none",
						title: "请填写正确手机号"
					})
				} else if (that.password == "") {
					uni.showToast({
						icon: "none",
						title: "请填写密码"
					})
				}else{
					this.get();	
					
				}
				
			},
			get() {

				uniCloud.callFunction({
					name: 'get',
					data: {
						phone:this.phone
					}
				}).then((res) => {
					console.log(res)
					this.passwords=res.result.data[0].password
					if(this.passwords==this.password){
						uni.showModal({
							content: `登录成功`,
							showCancel: false
						});//登录成功以后跳转页面
						setTimeout(function() {
							uni.switchTab({
								url: "../wo/wo"
							})
						}, 500);
					}else{
						uni.showModal({
							content: `密码错误`,
							showCancel: false
						})
					}
				}).catch((err) => {
					
					uni.showModal({
						content: `账号输入错误`,
						showCancel: false
					})
				})
			},
			sign(e) {
				uni.navigateTo({
					url: '../register/register',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style>
.loginform{
	width: 85%;
	margin: 100rpx auto;
	height: auto;
}
.logintext{
	display: inline-block;
	width: 200rpx;
	height: 100rpx;
	line-height: 130rpx;
	font-size: 40rpx;
	font-weight: 300;
	text-align: left;
	color: #000000;
}
.logininput{
	display: inline-block;
	width: 400rpx;
	height: 50rpx;
	line-height: 130rpx;
	border: 1rpx solid #808080;	
}
.eyeimage{
	position: absolute;
	width: 50rpx;
	height: 40rpx;
	top: 135rpx;
	right: 100rpx;
}
.loginbutton{
	margin-top:100rpx ;
	height: 300rpx;
}
.loginbutton>button{
	background-color:#e07a76;
	height: 100rpx;
	line-height: 100rpx;
	color: #ffffff;
	border: 2rpx solid #DD524D;
	margin: 20rpx 0;
}
</style>
