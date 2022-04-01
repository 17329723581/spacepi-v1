<template>
	<div class="warp">
		<div class="only-partners-container">
            <div class="only-partners-link" >
                <div v-for="(item,index) in array" :key="index">
                    <div v-if="lang.split('-').length>1">
                        <div class="title">{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}</div>
                        <div class="hr"></div>
                        <div class="content">
                            <a-row :gutter="[12,12]" class="p">
                                <div v-for="(i,ind) in data" :key="ind">
                                    <a-col class="gutter-row" :span="4"  v-if="item.id == i.p_id">
                                        <div class="gutter-box" >
                                            <a @click="to(i.link)">
                                                <img :src="i.picture" class="img">
                                            </a>
                                        </div>
                                    </a-col>
                                </div>
                            </a-row>
                            <a-row :gutter="[12,12]" class="m">
                                <div v-for="(i,ind) in data" :key="ind">
                                    <a-col class="gutter-row" :span="12" v-if="item.id == i.p_id">
                                        <div class="gutter-box">
                                            <a @click="to(i.link)">
                                                <img :src="i.picture" class="img">
                                            </a>
                                        </div>
                                    </a-col>
                                </div>
                            </a-row>
                        </div>
                    </div>
                    <div v-else>
                        <div class="title">{{item[lang]}}</div>
                        <div class="hr"></div>
                        <div class="content">
                            <a-row :gutter="[12,12]" class="p">
                                <div v-for="(i,ind) in data" :key="ind">
                                    <a-col class="gutter-row" :span="4"  v-if="item.id == i.p_id">
                                        <div class="gutter-box" >
                                            <a @click="to(i.link)">
                                                <img :src="i.picture" class="img">
                                            </a>
                                        </div>
                                    </a-col>
                                </div>
                            </a-row>
                            <a-row :gutter="[12,12]" class="m">
                                <div v-for="(i,ind) in data" :key="ind">
                                    <a-col class="gutter-row" :span="12" v-if="item.id == i.p_id">
                                        <div class="gutter-box">
                                            <a @click="to(i.link)">
                                                <img :src="i.picture" class="img">
                                            </a>
                                        </div>
                                    </a-col>
                                </div>
                            </a-row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>
<script>
    import axios from "axios";
    import { mapState, mapMutations } from "vuex";
	export default {
		data() {
			return {
                array:[],
                data:[],
			};
		},
		props: {},
		computed: {
            ...mapState([
                "domainUrl",
                "lang"
            ]),
        },
		watch: {},
		components: {
        },
		created() {
            this.location();
        },
		mounted() {},
		methods: {
            location()
            {
                this.partnersC();
                this.partners();
            },
            //获取友情合作商分类数据
            partnersC()
            {
                var _this = this;
                axios.post(this.domainUrl+"partnersList").then(function(response){
                    _this.array = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
            //获取友情合作商链接
            partners()
            {
                var _this = this;
                axios.post(this.domainUrl+"Partners").then(function(response){
                    _this.data = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
            //跳转外部浏览器
            to(e)
            {
                window.open(e)
            }
        },
	};
</script>
<style scoped lang="less">
    @import "./css/only-partners";
</style>