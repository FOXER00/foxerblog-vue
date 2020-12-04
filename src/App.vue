<template>
	<div id="app">
		<img src="./assets/logo.png" />
		<div><el-button @click="startHacking">Start</el-button></div>
		<!-- 路由出口 -->
		<!-- 路由匹配到的组件将渲染在这里 -->
		<!-- <router-view></router-view> -->
	</div>
</template>
<script>
export default {
	methods: {
		startHacking() {
			this.$notify({
				title: 'It works!',
				type: 'success',
				message: "We've laid the ground work for you. It's time for you to build something epic!",
				duration: 5000
			});
		}
	}
};
</script>

<style>
#app {
	font-family: Helvetica, sans-serif;
	text-align: center;
}
</style>
