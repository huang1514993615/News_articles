<template>
	<view class="">
		<view class="top">
			<view class="search" @click="sousuo">
				<image class="image" src="../../static/icon/ziyuan.png"></image>uni—app vue react
			</view>
			
		</view>
		<scroll-view class="tabs-box" scroll-x="true">
			<block v-for="(item,index) in list" :key="index">
				<view :class="{'box':true,'red':active==index}" @click="actives(index)">
					{{item}}
				</view>
			</block>
		</scroll-view>
		<view v-if="active==0" class="page">
			<block v-for="item in content" :key="item._id">
				<show class="show" :show="item"></show>
			</block>
		</view>
		<view v-if="active==1">2</view>
		<view v-if="active==2">3</view>
		<view v-if="active==3">4</view>
		<view v-if="active==4">5</view>
		<view v-if="active==5">6</view>
		<view v-if="active==6">7</view>
	</view>
</template>

<script>
	import show from '../../components/show/show.vue'
	export default {
		data() {
			return {
				list: ["全部", "后端开发", "职场生活", "前端开发", "人工智能", "娱乐生活", "移动开发"],
				active: 0,
				content: {}
			}
		},
		components: {
			show
		},
		methods: {
			actives(e) {
				this.active = e
			},
			sousuo:function(){
				 uni.navigateTo({
				     url: '../search/search'
				 });
			}
			
			          

		},
		onLoad: function() {

			uniCloud.callFunction({
				name:'gets'
			}).then((res) => {
				console.log(res)
				this.content = res.result.data
			}).catch((err) => {

				console.error(err)
			})

			console.log('执行')

		}
	}
</script>

<style>
	.top {
		width: 100%;
		height: 80rpx;
		background-color: #e07a76;
		padding: 0.1rpx;

	}

	.search {
		width: 90%;
		height: 50rpx;
		background-color: #ffffff;
		border-radius: 30rpx;
		margin-left: 5%;
		margin-top: 15rpx;
		font-size: 26rpx;
		color: #a1a1a1;
		line-height: 50rpx;
	}

	.image {
		width: 30rpx;
		height: 30rpx;
		margin-left: 5%;
		/* margin-top: 10rpx; */
		margin-right: 3%;
		vertical-align: top;
		margin-top: 15rpx;
	}

	.tabs-box {
		width: 100%;
		height: 70rpx;
		white-space: nowrap;
	}

	.page {
		padding-left: 1.5%;
	}

	.box {
		height: 100%;
		line-height: 50rpx;
		display: inline-block;
		white-space: nowrap;
		font-size: 32rpx;
		margin-left: 16rpx;
	}

	.red {
		color: red;
	}

	.show {
		margin-top: 15rpx;
	}
</style>
