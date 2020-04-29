<template>
	<view>
		<form @submit="" @reset="">
			<text class="user">用户名</text>
			<input type="text" value="" />
			<text class="phone">手机号</text>
			<input type="text" value="" />
			<text class="password">密 码</text>
			<input type="text" password="true" />
			<button form-type="submit">注册</button>
			<button form-type="reset">重置</button>
		</form>
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

</style>
