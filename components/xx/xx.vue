<template>
	<view class="nr">
	<!-- <block v-for="(item,index) in content" :key="index"> -->
	<view v-if="value.personal_img.length>2" class="xx">
	
		<view class="content">
		<view class="title">
			<text>{{value.title}}</text>
			<view class="dz" @click="dz">
				<image src="../../static/icon/xin.png" mode=""></image>
			</view>
		</view>
		<view class="tp">
			<block v-for="(item,index) in value.personal_img" :key="index">
				<image :src="item" mode=""></image>
			</block>
			
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
	<view v-else class="xx1">
		<view class="react">
			<view class="react-left">
				<image :src="value.personal_img[0]" mode=""></image>
			</view>
			<view class="react-right">
				<text style="font-weight: bold;">11111111111</text>
				<view class="dz">
					<image src="../../static/icon/xin.png" mode=""></image>
				</view>
				<br>
			
				<view class="footer1">
					<view class="bq">
						后端开发
					</view>
					<view class="ll">
						<text>111浏览</text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
	<!-- </block> -->
	
	
	</view>
</template>

<script>
	export default {
		props:{
			value:{
				type:Object
			}
		},
		data() {
			return {
				data:[],
			    
			}
		},
		methods: {
			dz(){
				
			}
		},
		mounted() {
		}
	}
</script>

<style>
.nr{
	width: 100%;
	height: auto;
	margin-bottom: 10rpx;
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
	width: 130rpx;
	height: 40rpx;
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
	font-size: 18rpx;
	line-height: 60rpx;
	float: right;
	color: #999999;
	
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
.xx1{
	border: 2rpx solid #C0C0C0;
	box-shadow: -1.5rpx -0.5rpx 8.5rpx -1.5rpx #C0C0C0;
	border-radius: 20rpx;
}
.content{
	width: 90%;
	height: auto;
	margin: 0 auto;
}
.react{
	width: 100%;
	height: 170rpx;
	
}
.react-left{
	width: 170rpx;
	height: 170rpx;
	display: inline-block;
	float: left;
	
}
.react-left image{
	width: 160rpx;
	height: 160rpx;
	vertical-align: middle;
	line-height: 170rpx;
}
.react-right{
	position: relative;
	width: 450rpx;
	height: 200rpx;
	display: inline-block;
	/* float: right; */
}
.xiangxi{
	font-size: 18rpx;
    display:inline-block;
	float: right;
	color: #999999;
	line-height: 60rpx;
}
.footer1{
	width: 100%;
	height: 60rpx;
	position: absolute;
	bottom: 40rpx;
	right: 10rpx;
}
</style>
