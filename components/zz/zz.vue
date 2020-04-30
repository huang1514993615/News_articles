<template>
	<view class="content">
	<block>
		<view class="react">
			<view class="react-left">
				<image src="../../static/icon_2oeptpwi45f/zhuye.png" mode=""></image>
			</view>
			<view class="react-right">
				<text style="font-weight: bold;">作者名字</text>
				<br>
				<text style="font-size: 18rpx; color: #999999;">作者职业</text>
				<view class="xiangxi">
					<text>发帖num     粉丝nums</text>
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
.content{
	width: 100%;
	margin: 0 auto;
}
.react{
	width: 100%;
	height: auto;
	
}
.react-left{
	width: 120rpx;
	height: 120rpx;
	display: inline-block;
	float: left;
}
.react-left image{
	width: 100rpx;
	height: 100rpx;
}
.react-right{
	width: 400rpx;
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
</style>
