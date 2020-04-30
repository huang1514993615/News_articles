<template>
	<view class="nr">
	<block>
	<view class="xx">
		<view class="content">
		<view class="title">
			<text>11111111</text>
			<view class="dz">
				<image src="../../static/icon/xin.png" mode=""></image>
			</view>
		</view>
		<view class="tp">
			<image src="../../static/icon_2oeptpwi45f/zhuye.png" mode=""></image>
			<image src="../../static/icon_2oeptpwi45f/zhuye.png" mode=""></image>
			<image src="../../static/icon_2oeptpwi45f/zhuye.png" mode=""></image>
		</view>
		<view class="footer">
			<view class="bq">
				后端开发
			</view>
			<view class="ll">
				<text>111浏览</text>
			</view>
		</view>
	</view>
	</view>
	</block>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.nr{
	width: 100%;
	height: auto;
}
.dz{
	display: inline-block;
	float: right;
}
.dz image{
	width: 50rpx;
	height: 50rpx;
}
.title{
	width: 100%;
	height: 60rpx;
	vertical-align: middle;
}
.tp{
	width: 100%;
	height: 150rpx;
	display: flex;
	flex-direction: row;
}
.tp image{
	width: 30%;
	height: 120rpx;
	border: 1px solid #555555;
	border-radius: 10rpx;
	margin: 10rpx;
}
.bq{
	display: inline-block;
	width: 150rpx;
	height: 50rpx;
	color: #DD524D;
	border: 2rpx solid #DD524D;
	font-size: 20rpx;
	border-radius: 40rpx;
	line-height: 40rpx;
	text-align: center;
	vertical-align: middle;
}
.ll{
	float: right;
	font-size: 20rpx
}
.footer{
	width: 100%;
	height: 60rpx;
	vertical-align: middle;
}
.xx{
	border: 2rpx solid #C0C0C0;
	box-shadow: -1.5rpx -0.5rpx 8.5rpx -1.5rpx #C0C0C0;
	border-radius: 20rpx;
}
.content{
	width: 90%;
	height: auto;
	margin: 0 auto;
}

</style>
