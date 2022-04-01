<template>
	<div class="home bg">
		<canvas id="home_canvas"></canvas>
		<div class="bg-moon"></div>
		<div class="header-background">
			<!-- 导航 -->
			<div class="header container">
				<header-cmp></header-cmp>
			</div>
		</div>
		<!-- -->
		<div class="container">
			<only></only>
			<only-partners></only-partners>
		</div>
		<!-- 底部 -->
		<div class="footer">
			<footer-cmp></footer-cmp>
		</div>
	</div>
</template>
<script>
	import headerCmp from "../home/components/headerCmp.vue";
	import only from "./components/only-top.vue";
	import onlyPartners from "./components/only-partners.vue";
	import footerCmp from "../home/footer/footerCmp.vue";

	export default {
		data() {
			return {};
		},
		props: {},
		computed: {},
		watch: {},
		components: {
			headerCmp,
			only,
			onlyPartners,
			footerCmp
		},
		created() {
		},
		mounted() {
			init("home_canvas");
		},
		methods: {},
	};
</script>

<style scoped lang="less">
	@import "../home/index";
	.bg{
		position: relative;
	}
	#home_canvas{
		position: fixed;
		widows: 100%;
		height: 100%;
		z-index: 0;
	}
	.header-background {
		background: rgba(33, 21, 59, 0.8);
	}
</style>
