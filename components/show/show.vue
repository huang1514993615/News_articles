<template>
	<view class="boxs">
		<view class="title">{{show.title}}</view><view class="img"><image src="../../static/icon/xin_bg.png" mode=""></image></view>
		<view class="images">
			<block v-for="(item,index) in show.personal_img" :key="index">
				<image :src="item" mode=""></image>
			</block>
		</view>
		<view class="label">
			<view class="label-one">前端开发</view>
			<text>{{show.view_count}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			show:{
				type:Object
			}
		}
	}
</script>

<style scoped>
.boxs{
	width: 95%;
	border-radius:20rpx;
	box-shadow:2px 2px 5px #ccc;
	font-size: 32rpx;
	display: inline-block;
	white-space:nowrap;
	font-size: 32rpx;
	margin-left: 16rpx;
	padding-top: 15rpx;
}
.title{
	width: 82%;
	white-space: pre-wrap;
	display:inline-block;
	vertical-align: top;
	padding-left: 3%;
	font-size: 30rpx;
	font-weight: 600;
}
.img{
	width: 10%;
	height: 50rpx;
	display: inline-block;
	vertical-align: top;
	margin-left: 7%;
}
.img>image{
	width: 50rpx;
	height: 50rpx;
}
.images{
	width: 100%;
	height: 150rpx;
	overflow: hidden;
	
}
.images>image{
	width: 30%;
	height: 180rpx;
	border-radius: 10rpx;
	margin-left: 2.5%;
}
.label{
	width: 100%;
	height: 75rpx;
	text-align: right;
	padding-top: 25rpx;
	padding-right: 5%;
	
	
}
.label-one{
	display: inline-block;
	border: 1px solid red;
	color: red;
	border-radius: 30rpx;
	float: left;
	clear:both;
	margin-left: 3%;
	font-size: 28rpx;
	padding-left: 10rpx;
	padding-right: 10rpx;
}
.label>text{
	margin-right: 3%;
	
	font-size: 28rpx;
	color: #ccc;
}
</style>
