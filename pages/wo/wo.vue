<template>
	<view>
		<view class="header">
			<navigator class="imgnavigator" url="../personaleditor/personaleditor">
				<image src="../../static/icon_56ubw6foco5/ziyuan.png" class="unlistedimage"></image>
			</navigator>			
			<view class="headertext">
				<text class="unlisted">
					<navigator url="../login/login" class="navigator">登录</navigator>/
					<navigator url="../register/register" class="navigator">注册</navigator>
				</text>
				<text class="vermicelli">粉丝0</text>
				<text class="follow">关注0</text>
				<text class="collect">收藏0</text>
			</view>			
		</view>		
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
	.header{
		width: 100%;
		height: 250rpx;
		border-bottom: 1rpx solid #cccccc;
	}
	.imgnavigator>.unlistedimage{
		float: left;
		margin: 40rpx;
		width: 170rpx;
		height: 170rpx;
		border-radius: 50%;
		border: 1rpx solid #808080;
		background-color: #cccccc;
	}
	.headertext{
		float:lef;
		font-size: 32rpx;
		color: #555555;
		padding-top: 60rpx;
	}
	.unlisted{
		display: block;
		font-weight: 700;
		font-size: 46rpx;
		line-height: 92rpx;
		color: #000000;
	}
	.unlisted .navigator{
		display:inline;
	}
	.vermicelli{
		padding-right: 30rpx;
	}
	.follow{
		padding-right: 30rpx;
	}
</style>
