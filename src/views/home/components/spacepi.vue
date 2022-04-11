<template>
	<div class="spacepi">
		<a-row type="flex" justify="space-between">
			<a-col :md="24" :xs="24" class="spacepi-left">
				<div style="text-align: center;" class="homebody">
					<!-- PC端 -->
					<div class="homebodybgpc">
						<div>
							<img src="@/assets/spacepititle.png"/>
						</div>
						<div class="margin-top-1">
							<span
								class="only">{{ this.$t("only") }}
							</span>
						</div>
						<div class="margin-top-1" style="display: flex;justify-content: center;">
							<div style="width: 50rem;">
								<span
									class="introduce">{{ this.$t("introduce") }}</span>
							</div>
						</div>
						<div>
							<div class="margin-top-5" style="position: 15px 0;">
								<div style="height: 3.75rem; display: flex;justify-content: center;">
									<div class="menu-but" style="z-index:999" v-for="(item,index) in spacepiBuntton" :key="index">
										<button @click="item.staus!=1?to(item.link):''" style="border-radius: 0.25rem;float: left;border: 0rem;font-size: 1rem;font-family: DIN;font-weight: bold;margin: 0.5rem;white-space:nowrap;" class="spacepi-button">
											<template v-if="lang.split('-').length>1">
												<template v-if="item.staus==0">
													{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
												</template>
												<template v-else>
													<a-dropdown>
														{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
													</a-dropdown>
													<div class="menu-a-n">
														<a-menu  style="border-radius: 0.25rem;" >
															<a-menu-item v-for="(i,index) in spacepiBunttonList" :key="index" v-if="i.b_id == item.id">
																<a href="javascript:;" @click="to(i.link)">
																	{{i[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
																</a>
															</a-menu-item >
														</a-menu>
													</div>
												</template>
											</template>
											<template v-else>
												<template v-if="item.staus==0">
													{{item[lang]}}
												</template>
												<template v-else>
													<a-dropdown>
														{{item[lang]}}
													</a-dropdown>
													<div class="menu-a-n">
														<a-menu  style="border-radius: 0.25rem;" >
															<a-menu-item v-for="(i,index) in spacepiBunttonList" :key="index" v-if="i.b_id == item.id">
																<a href="javascript:;" @click="to(i.link)">
																	{{i[lang]}}
																</a>
															</a-menu-item >
														</a-menu>
													</div>
												</template>
											</template>
										</button>
									</div>
								</div>
							</div>

							<div class="margin-happy_text">
								<span>{{ this.$t("happy_text") }}</span>
							</div>
							<div class="margin-address">
								<div class="address-but">
									<div style="float: left;width: 95%;">
										<span class="address">{{ address }}</span>
									</div>
									<div class="onCopy-right">
										<span v-clipboard:copy="address" v-clipboard:success="onCopy">
											<a-icon type="copy" class="onCopy"
												v-clipboard:success="onCopy" />
										</span>
									</div>
								</div>
							</div>
							<!-- 电报 -->
							<div style="margin-top: 2.5vw;">
								<a-row >
									<a-col class="gutter-row" :span="3" v-for="(item,index) in telegraph" :key="index">
										<div style="display: grid;justify-items: center;height: 9vw;" @click="to(item.link)">
											<img :src="item.picture" style="width:4.5vw;">
											<span style="font-size: 0.75vw;color: #ffffff;">{{item.name}}</span>
										</div>
									</a-col>
								</a-row>
							</div>
							<div class="margin-happy_text1">
								<span class="happy_text1">{{ this.$t("happy_text1") }}</span>
							</div>
							<div class="margin-happy_text1">
								<span class="happy_text1">{{ this.$t("happy_text2") }}</span>
							</div>
							<!-- 合作商链接 -->
							<div style="margin-top:2.5vw;float: left;">
								<a-row :gutter="[12,12]">
									<div v-if="partners.length==1">
										<a-col class="gutter-row"  v-for="(item,index) in partners" :key="index" :span="18">
											<div class="gutter-box" style="">
												<a @click="to(item.link)">
													<img :src="item.picture" style="width: 100%;">
												</a>
											</div>
										</a-col>
									</div>
									<div v-if="partners.length==2">
										<a-col class="gutter-row"  v-for="(item,index) in partners" :key="index" :span="10">
											<div class="gutter-box" style="">
												<a @click="to(item.link)">
													<img :src="item.picture" style="width: 100%;">
												</a>
											</div>
										</a-col>
									</div>
									<div v-if="partners.length==3">
										<a-col class="gutter-row"  v-for="(item,index) in partners" :key="index" :span="6">
											<div class="gutter-box" style="">
												<a @click="to(item.link)">
													<img :src="item.picture" style="width: 100%;">
												</a>
											</div>
										</a-col>
									</div>
									<div v-if="partners.length>=4">
										<a-col class="gutter-row"  v-for="(item,index) in partners" :key="index" :span="4">
											<div class="gutter-box" style="">
												<a @click="to(item.link)">
													<img :src="item.picture" style="width: 100%;">
												</a>
											</div>
										</a-col>
									</div>
								</a-row>
							</div>
							<div class="happy_gd" style="">
								<button @click="to('/#/partners')"
									style="border-radius: 0.25rem;float: left;border: 0rem;font-size: 1rem;font-family: DIN;font-weight: bold;margin: 0.5rem;white-space:nowrap;" class="spacepi-button">
									{{this.$t('happy_gd')}}
								</button>
							</div>
						</div>
					</div>
					<!-- 移动端 -->
					<div class="homebodybgm">
						<div>
							<img src="@/assets/spacepititlem.png" alt="" style="width:22.5rem" />
						</div>
						<div class="margin-top-1">
							<span
								style="font-family: Alibaba PuHuiTi;font-size: 16px;font-weight:bold;color: #FDD333;">{{ this.$t("only") }}
							</span>
						</div>
						<div class="margin-top-1" style="display: flex;justify-content: center;">
							<div style="width: 50rem;">
								<span
									style="font-family: PingFang SC;font-size: 18px;font-weight: bold;color: #FFFFFF;">{{ this.$t("introduce") }}</span>
							</div>
						</div>
						<div class="margin-top-5">
							<a-row   :gutter="[10,0]" style="width: 100%;">
								<a-col class="gutter-row" :span="12" v-for="(item,index) in spacepiBuntton" :key="index">
									<div  class="menu-but" @click="Jump(index,item.staus)" style="border-radius: 0.25rem;float: left;border: 0rem;font-size: 1rem;font-family: DIN;font-weight: bold;white-space:nowrap;width: 100%;z-index: 1;">
										<button @click="item.staus!=1?to(item.link):''" :style="tabarray[index]" class="spacepi-button">
											<template v-if="lang.split('-').length>1">
												<template v-if="item.staus==0">
													{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
												</template>
												<template v-else>
													<a-dropdown>
														{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
													</a-dropdown>
													<div class="menu-a-n">
														<a-menu  style="border-radius: 0.25rem;" >
															<a-menu-item v-for="(i,index) in spacepiBunttonList" :key="index" v-if="i.b_id == item.id">
																<a href="javascript:;" @click="to(i.link)">
																	{{i[lang.split('-')[0]+"_"+lang.split('-')[1]]}}
																</a>
															</a-menu-item >
														</a-menu>
													</div>
												</template>
											</template>
											<template v-else>
												<template v-if="item.staus==0">
													{{item[lang]}}
												</template>
												<template v-else @="Clicked">
													<a-dropdown>
														{{item[lang]}}
													</a-dropdown>
													<div class="menu-a-n">
														<a-menu  style="border-radius: 0.25rem;" >
															<a-menu-item v-for="(i,index) in spacepiBunttonList" :key="index" v-if="i.b_id == item.id" style="display: flex;align-items: center;justify-content: center;">
																<a href="javascript:;" @click="to(i.link)">
																	{{i[lang]}}
																</a>
															</a-menu-item >
														</a-menu>
													</div>
												</template>
											</template>
										</button>
									</div>
								</a-col>
							</a-row>
						</div>
						<div style="margin-top: 1.875rem;">
								<span style="font-family: Alibaba PuHuiTi;font-size: 16px;font-weight:bold;color: #FDD333;">{{ this.$t("happy_text") }}</span>
						</div>
						<div style="margin-top: 1.875rem;">
							<div
								style="width: 100%;height: 4rem;background: #2C1D51;border: 1px solid #FFFFFF;border-radius: 1.25vw;">
								<div style="float: left;width: 90%;">
									<span
										style="font-size: 1.625rem;font-family: DIN;font-weight: 400;color: #FFFFFF;line-height: 4rem;float: left;margin-left:1.5625rem">{{ address.substr(0,14) }}...{{ address.substr(address.length-5) }}</span>
								</div>
								<div style="float: right;width: 10%;">
									<span v-clipboard:copy="address" v-clipboard:success="onCopy">
										<a-icon type="copy"
											style="font-size: 1.625rem;font-family: DIN;font-weight: bold;color: #FDD333;line-height: 4rem;float: left;"
											v-clipboard:success="onCopy" />
									</span>
								</div>
							</div>
						</div>
						<!-- 电报 -->
						<div style="margin-top: 1.875rem;float: left;display: flex;">
							<div v-if="telegraph.length==1">
								<a-row :gutter="[12,12]">
									<a-col class="gutter-row" :span="24"  v-for="(item,index) in telegraph" :key="index">
										<div class="gutter-box">
											<a @click="to(item.link)">
												<img :src="item.m_picture" style="width: 100%;">
											</a>
										</div>
									</a-col>
								</a-row>
							</div>
							<div v-else>
								<a-row :gutter="[12,12]">
									<a-col class="gutter-row" :span="12"  v-for="(item,index) in telegraph" :key="index">
										<div class="gutter-box">
											<a @click="to(item.link)">
												<img :src="item.m_picture" style="width: 100%;">
											</a>
										</div>
									</a-col>
								</a-row>
							</div>
						</div>
						<div style="margin-top: 2.5vw;float: left;width: 100%;">
							<span style="font-family: Alibaba PuHuiTi;font-size: 1.25rem;font-weight:bold;color: #FDD333;">{{ this.$t("happy_text1") }}</span>
						</div>
						<div style="margin-top: 1vw;float: left;width: 100%;">
							<span style="font-family: Alibaba PuHuiTi;font-size: 1.25rem;font-weight:bold;color: #FDD333;">{{ this.$t("happy_text2") }}</span>
						</div>
						<!-- 合作商链接 -->
						<div style="margin-top: 5vw;  float: left;">
							<a-row :gutter="[12,12]">
								<div v-if="partners.length==1">
									<a-col class="gutter-row" :span="24"  v-for="(item,index) in partners" :key="index" style="">
										<div class="gutter-box" style="">
											<a @click="to(item.link)">
												<img :src="item.picture" style="width: 100%;">
											</a>
										</div>
									</a-col>
								</div>
								<div v-else>
									<a-col class="gutter-row" :span="12"  v-for="(item,index) in partners" :key="index" style="">
										<div class="gutter-box" style="">
											<a @click="to(item.link)">
												<img :src="item.picture" style="width: 100%;">
											</a>
										</div>
									</a-col>
								</div>
							</a-row>
						</div>
						<div style="margin-top:2.5vw;float: left;display: flex;justify-content: center;align-items: center;width: 100%;">
							<button @click="jumps('partners')"
									style="height:3.75rem;border-radius: 0.25rem;float: left;border: 0rem;font-size: 1rem;font-family: DIN;font-weight: bold;margin: 0.5rem;white-space:nowrap;" class="spacepi-button">
								{{this.$t('happy_gd')}}
							</button>
						</div>
					</div>
				</div>


			</a-col>
		</a-row>
	</div>
</template>

<script>
	import axios from "axios";
	import { mapState, mapMutations } from "vuex";
	export default {
		data() {
			return {
				address: this.$t("bsc_token"),
				tabarray: [],
				tabycoro: 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;',
				show: false,
				url_array: this.$t("url_array"),
				index_SpacePi:false,
				spacepiBuntton:[],
				spacepiBunttonList:[],
				array:[],
				array1:[],
				telegraph:[],
				partners:[],
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
		components: {},
		created() {
			this.location();
		},
		mounted() {
			document.addEventListener("click", (e) => {
				if (e.target.className !== "ant-dropdown-link ant-dropdown-trigger") {
					this.index_SpacePi = false;
				}
    		});
		},
		methods: {
			location()
            {
                this.getspacepiBuntton();
				this.getspacepiBunttonList();
				this.getspacepiTelegraph();
				this.getindexPartners();
            },
			// 地址复制
			onCopy(e) {
				// alert(e.text);
				this.$message.success(this.$t("copySuccess"));
			},
			Jump(e,status) {
				//this.tabarray[e] = "width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 024, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;";
				if(status == 0)
				{
					var array = [];
					for (var i = 0; i <this.tabarray.length;i++)
					{
						if(e == i)
						{
							array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background: #663399;color: #fdd333;border: 0;'
						}else{
							array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;'
						}
					}
					this.tabarray = array;
					setTimeout(()=>{
						var array = [];
						for (var i = 0; i <this.tabarray.length;i++)
						{
							if(e == i)
							{
								array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;'
							}else{
								array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;'
							}
						}
						this.tabarray = array;
					},2000);
				}else{
					var array = [];
					for (var i = 0; i <this.tabarray.length;i++)
					{
						if(e == i)
						{
							array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background: #663399;color: #fdd333;border: 0;'
						}else{
							array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;'
						}
					}
					this.tabarray = array;
				}
			},
			Clicked(e){

			},
			to(e) {
				window.open(e)
				
			},
			event() {
				if (this.show == true) {
					this.show = false;
				} else {
					this.show = true;
				}
			},
			tab(e) {
				if (e == 1) {
					this.tabarray = [1, 0, 0]
					this.address = this.$t("bsc_token");
				} else if (e == 2) {
					this.tabarray = [0, 1, 0]
					this.address = this.$t("hoce_token");
				} else {
					this.tabarray = [0, 0, 1]
					this.address = this.$t("tron_token");
				}
			},
			//获取TOP按钮
            getspacepiBuntton()
            {
                var _this = this;
                axios.post(this.domainUrl+"spacepiBuntton",{}).then(function(response){
                    _this.spacepiBuntton = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
			//获取TOP按钮列表
            getspacepiBunttonList()
            {
                var _this = this;
                axios.post(this.domainUrl+"spacepiBunttonList",{}).then(function(response){
                    _this.spacepiBunttonList = response.data.data;
					var array = [];
					var array1 = [];
					for (var i =0;i<_this.spacepiBunttonList.length;i++){
						array[i] = 'width: 100%;height:3.75rem;border-radius: 0.25rem;margin: 0.5rem;background:rgb(253, 211, 51);color:rgb(51, 51, 51);line-height:0;font-size: 1rem;font-family: DIN;font-weight: bold;border: 0;';
						array1[i] = false;
					}
					_this.tabarray = array;
					_this.array1 = array1;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
			//获取电报
            getspacepiTelegraph()
            {
                var _this = this;
                axios.post(this.domainUrl+"telegraph",{}).then(function(response){
                    _this.telegraph = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
			//获取重要合作商
            getindexPartners()
            {
                var _this = this;
                axios.post(this.domainUrl+"indexPartners",{}).then(function(response){
                    _this.partners = response.data.data;
                }).catch(function(error) {
                    //     // 请求失败处理
                });
            },
			 // 跳转
			jumps(e){
				this.$router.push({
				path: e,
				title: this.$t(e),
				query: {},
				});
			}
		},
	};
</script>

<style scoped lang="less">
	.ant-row{
		.gutter-row{

		}
	}
	.menu-a{
		position: relative;
	}
	.menu-a-n{
		display: none;
		position: absolute;
		width: 100%;
		top: 50px;
		left: 0;
		padding-top: 1vw;
	}
	.menu-but:hover{
		position: relative;
		margin: 0;
		list-style-type: none;
		background-clip: padding-box;
		border-radius: 4px;
		outline: none;
		-webkit-transform: translate3d(0, 0, 0);
		line-height:3.75rem;
		.menu-a-n{
			display: block;
			
		}
	}
	.spacepi {
		width: 100%;
		padding: 600px 0 0px;
		font-family: DIN;

		.spacepi-right {
			position: relative;
			left: -100px;
		}

		.homebodybgm {
			display: none;
		}

		@media screen and (max-width: 950px) {
			padding: 100% 0 50px;

			.spacepi-left {
				order: 2;
			}

			.spacepi-right {
				order: 1;
				position: inherit;
				left: inherit;
			}

			.homebodybgm {
				display: block;
			}

			.homebodybgpc {
				display: none;
			}

		}

		.spacepi-left {


			h1 {
				font-size: 3.5rem;
				font-weight: 900;
				color: @themeColor;

				span:nth-child(1) {
					font-size: 3.5rem;
					color: @fontColor-2;
				}
			}

			p {
				padding: 20px 0 40px;
				font-size: 1rem;
				color: @themeColor;
			}

			.spacepi-btn {
				display: flex;

				a {
					color: #000 !important;
					display: block;
					height: 50px;
					line-height: 50px;
					margin-right: 10px;
					margin-bottom: 40px;
					padding: 0 26px;
					border-radius: 30px;
					border: 1px solid @borderColor-2;
					background: @fontColor-1;
					font-size: 16px;
					font-weight: 700;

					&:nth-child(1) {
						color: #000 !important;
						background: @fontColor-2;
					}
				}
			}

			.copyaddress {
				margin-bottom: 30px;

				span {
					display: inline-block;
					height: 50px;
					line-height: 50px;
					margin-right: 10px;
					padding: 0 16px;
					border-radius: 10px;
					border: 1px solid @borderColor-2;
					background: @fontColor-1;
					font-size: 16px;
					font-weight: 500;
					color: @borderColor-2;

					&:nth-child(2) {
						padding: 0 14px;

						i {
							color: @fontColor-1;
							font-size: 1.5rem;
						}

						background: @fontColor-2;
					}
				}
			}

			.spacepi-link {
				display: flex;

				a {
					display: block;
					width: 40px;
					height: 39px;
					line-height: 38px;
					text-align: center;
					border-radius: 8px;
					margin-right: 12px;
					// background: url("../../../assets/link1.png");
					background-color: #fff;

					img {
						width: 25px;
						height: 25px;
					}
				}
			}
		}

		@media screen and (max-width: 950px) {
			.spacepi-left {
				h1 {
					font-size: 2.5rem;
					font-weight: 900;
					color: @themeColor;

					span:nth-child(1) {
						font-size: 2.5rem;
						color: @fontColor-2;
					}
				}

				p {
					padding: 20px 0 40px;
					font-size: 1.2rem;
					color: @themeColor;
				}

				.spacepi-btn {
					display: flex;
					flex-wrap: wrap;

					a {
						display: block;
						height: 50px;
						line-height: 50px;
						margin-right: 10px;
						margin-bottom: 10px;
						padding: 0 3rem;
						border-radius: 30px;
						border: 1px solid @borderColor-2;
						background: @fontColor-1;
						font-size: 16px;
						font-weight: 700;

						img {
							margin-right: 4px;
						}

						&:nth-child(1) {
							color: #082868 !important;
							background: #f9b24c;
						}
					}
				}

				.copyaddress {
					margin-top: 30px;
					margin-bottom: 30px;
					display: flex;
					justify-content: space-around;

					span {
						width: 80%;
						display: inline-block;
						height: 50px;
						line-height: 50px;
						margin-right: 10px;
						padding: 0 16px;
						border-radius: 10px;
						border: 1px solid @borderColor-2;
						background: @fontColor-1;
						font-size: 16px;
						font-weight: 500;
						color: @borderColor-2;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

						&:nth-child(2) {
							width: 15%;
							text-align: center;
							padding: 0;

							i {
								font-size: 1.6rem;
								color: #fff;
							}

							background-color: #f9b24c;
						}
					}
				}

				.spacepi-link {
					display: flex;

					a {
						display: block;
						width: 40px;
						height: 40px;
						line-height: 40px;
						text-align: center;
						border-radius: 8px;
						border: 0;
						margin-right: 15px;
						background-color: #fff;

						img {
							width: 25px;
							height: 25px;
						}
					}
				}
			}
		}

		.spacepi-right {
			text-align: center;

			img {
				position: absolute;
				right: 0;
				// top: 0px;
				width: 90%;
				z-index: 99;
			}

			@media screen and (max-width: 950px) {
				img {
					position: absolute;
					right: 0;
					// top: 0px;
					width: 50%;
					z-index: 99;
				}
			}
		}
	}

	.margin-top-1 {
		margin-top: 1rem;
	}

	;

	.margin-top-5 {
		margin-top: 1.25rem;
	}
</style>
