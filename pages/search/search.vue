<template>
	<view class="seek">
		<input class="input" type="text" v-model="seek"  placeholder="请输入搜索内容"  />
		<view class="icon" @click="sou"><image src="../../static/icon/ziyuan.png"></image></view>
		<block v-for="item in contents" :key="item._id">
			<show class="show" :show="item"></show>
		</block>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				seek:'',
				contents:[]
			}
		},
		methods: {
			sou:function(){
				console.log(this.seek)
				uniCloud.callFunction({
					name: 'search',
					data:{
						title:this.seek
					}
				}).then((res) => {
				this.contents=res.result.data
					console.log(res)
				}).catch((err) => {
				
					console.error(err)
				})
			}
		},
		onLoad:function(){
			
		}
	}
</script>

<style>
.input{
	width:70%;
	height: 50rpx;
	border: 1rpx solid #ccc;
	margin-left: 10%;
	display: inline-block;
	vertical-align: top;
}
.icon{
	width: 10%;
	height: 50rpx;
	border: 1rpx solid #ccc;
	display: inline-block;
	vertical-align: top;
	text-align: center;
}
.icon>image{
	width: 50rpx;
	height: 50rpx;
}
</style>
