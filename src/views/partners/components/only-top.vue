<template>
	<div class="warp">
		<div class="only-top-container">
            <div class="left">
                <div class="title">{{this.$t('partners_title')}}</div>
                <div class="text">{{this.$t('partners_text')}}</div>
            </div>
            <div class="right">
                <logo></logo>
            </div>
        </div>
	</div>
</template>
<script>
    import logo from "../../home/components/logo.vue";
	export default {
		data() {
			return {

			};
		},
		props: {},
		computed: {},
		watch: {},
		components: {
            logo,
        },
		created() {},
		mounted() {},
		methods: {},
	};
</script>
<style scoped lang="less">
    @import "./css/only-top";
</style>