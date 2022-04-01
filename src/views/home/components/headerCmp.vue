<template>
  <header>
    <div class="header-logo" id="top">
      <div class="header-logo-pc">
        <a href="">
          <img src="@/assets/logo.png" alt="" style="width: 4.375rem;" />
          <img
            src="@/assets/spacepi.png"
            alt=""
            style="width: 6.25rem;margin-left: 0.9375rem;"
          />
        </a>
      </div>
      <div class="header-logo-m">
        <a href="">
          <img src="@/assets/logos.png" alt="" style="width: 11.25rem" />
        </a>
      </div>
    </div>
    <nav class="header-nav">
      <ul>
        <li
          v-for="item in nav"
          :key="item.name"
          @click="routerPush(item.patn, item.name)"
        >
          <a href="javascript:;">{{ item.title }}</a>
        </li>
        <div v-for="(item,index) in menu" :key="index">
          <li v-if="lang.split('-').length>1" @click="Jump(item.link)">
            <a href="javascript:;">{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}</a>
          </li>
          <li v-else @click="Jump(item.link)">
            <a href="javascript:;">{{item[lang]}}</a>
          </li>
        </div>
        <li class="lang">
          <a-icon type="global" />
          <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              {{ langName }}
              <a-icon type="caret-down" style="color: #5A51A8;" />
            </a>
            <a-menu slot="overlay" class="dow" @click="changeLang" style="width: min-content;">
              <a-menu-item v-for="item of langList" :key="item.key">
                <a href="javascript:;">{{ item.name }}</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </li>
      </ul>
    </nav>

    <nav class="m-header-nav">
      <div class="m-header-dow">
        <a-icon type="global" style="color: #fff" />
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            {{ langName }}
            <a-icon type="caret-down" style="color: #5A51A8;" />
          </a>
          <a-menu slot="overlay" class="dow" @click="changeLang" style="width: min-content;">
            <a-menu-item v-for="item of langList" :key="item.key">
              <a href="javascript:;">{{ item.name }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
      <div class="m-memu-i" @click.stop="changeMemu = true">
        <a-icon type="menu" style="font-size: 1.5625rem;" />
      </div>
      <div class="m-nav" :class="{ show: changeMemu }">
        <ul>
          <div style="margin-top: -20px;text-align: center">
            
          </div>
          <li
            v-for="item in nav"
            :key="item.name"
            @click="routerPush(item.patn, item.name)"
          >
            <a href="javascript:;">{{ item.title }}</a>
          </li>
          <div v-for="(item,index) in menu" :key="index">
            <li v-if="lang.split('-').length>1" @click="Jump(item.link)">
              <a href="javascript:;">{{item[lang.split('-')[0]+"_"+lang.split('-')[1]]}}</a>
            </li>
            <li v-else @click="Jump(item.link)">
              <a href="javascript:;">{{item[lang]}}</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      menu:[],
      shows:false,
      url_array: [
        this.$t("url_array")[0],
        {
          url:this.$t("footer_twitter_url"),
        },{
          url:this.$t("index_English_Telegram"),
        },{
          url:this.$t("index_Chinese_Telegram"),
        },{
          url:this.$t("index_SpacePi_Bscscan"),
        }
      ],
      changeMemu: false,
      nav: [
        {
          path: "/",
          title: this.$t("home"),
          name: "Home",
        },
      ],
      langName: "",
      langList: [
        // 英语，中文繁体、中文简体、土耳其、韩语、日语、印度尼西亚语、泰语、阿拉伯语
        {
          key: "en-US",
          name: "English",
        },{
          key: "tr-TR",
          name: "Türk",
        },{
          key: "ko-KR",
          name: "한국어",
        },{
          key: "ja-JP",
          name: "日本",
        },{
          key: "in",
          name: "Indonesia",
        },{
          key: "th",
          name: "ไทย",
        }
        ,{
          key: "ar",
          name: "عربي",
        },{
          key: "zh-TW",
          name: "繁體中文",
        },{
          key: "zh-CN",
          name: "简体中文",
        }
      ],
    };
  },
  props: {},
  computed: {
    ...mapState(["lang",'domainUrl']),
  },
  watch: {},
  components: {},
  created() {
    this.langName = this.langList.filter((e) => {
      return this.lang === e.key;
    })[0].name;
    this.location();
  },
  mounted() {
    // 模拟外部点击  关闭移动端侧边导航
    document.addEventListener("click", (e) => {
      if (e.target.className !== "m-nav show") {
        this.changeMemu = false;
      }
    });
  },
  methods: {
    ...mapMutations(["updateLang"]),
    // 切换语言

    changeLang({ key }) {
      const lang = key;
      // console.log(key)
      // const lang = key === "en-US" ? "en-US" : "zh-CN";

      this.$i18n.locale = lang;
      this.$cookie.set("lang", lang);
      this.$store.commit("updateLang", lang);
      this.LangReload();
    },
    routerPush(path, name) {
      this.$router.push({
        path: path,
        name: name,
        query: {},
      });
    },
    Jump(e) {
				if (this.show == true) {
					this.show = false;
				} else {
					this.show = true;
				}
				window.open(e)
			},
    showss(){
      if(this.shows ==true){
        this.shows = false;
      }else{
        this.shows = true;
      }
    },
    location()
    {
        this.getMenu();
    },
    getMenu()
    {
      var _this = this;
      axios.post(this.domainUrl+"spacepiMenu").then(function(response){
        console.log('数据',response.data.data);
        _this.menu = response.data.data;
      }).catch(function(error) {
         //     // 请求失败处理
      });
    }
  },
};
</script>

<style scoped lang="less">
header {
  width: 100%;
  // padding: 53px 0 0;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-logo {
    z-index: 99;

    img {
      width: 90%;
    }
  }
  .header-logo-m {
    display: none;
  }
}

.dow {
  flex-wrap: wrap;
  text-align: left;
  width: 100px;

  li {
    width: 100%;
    padding: 10px 10px;
  }
}

/deep/ .ant-dropdown-menu-item {
  a {
    color: #000 !important;
  }
}

.m-header-nav {
  display: none;
}

ul {
  display: flex;

  li {
    margin-right: 25px;
    font-size: 1.1rem;

    a {
      color: #fff;
      font-size: 1.1rem;
      font-weight: 800;
    }
  }
}

@media screen and (max-width: 768px) {
  header {
    // width: 100vw;
    // padding: 30px 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    .header-logo {
      z-index: 99;

      img {
        width: 70%;
      }
    }
    .header-logo-pc {
      display: none;
    }
    .header-logo-m {
      display: block;
    }
  }

  .header-nav {
    display: none;
  }

  .m-header-nav {
    display: block;
    width: 35%;

    .m-header-dow {
      float: left;
    }

    .show {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0 !important;
      //right: 0 !important;
    }

    .m-memu-i {
      // position: absolute;
      // top: 30px;
      // right: 1.5rem;
      // margin-left: 10px;
      float: right;
      z-index: 999;
      color: #fff;

      i {
        font-size: 2rem;
      }
    }

    .m-nav {
      position: fixed;

      top: 0;
      bottom: 0;
      left: -100%;
      z-index: 9999;
      width: 200px;
      // min-height: 100vh;
      // box-shadow: 0px 2px 4px rgb(50, 191, 247);
      // background: #ffffff !important;
      background-color: rgba(90,81,168,0.6);
      transition: all 0.3s;
      backdrop-filter: blur(25px);
      padding-top: 50px;
      box-sizing: border-box;

      ul {
        display: inherit;

        li {
          margin-right: 0;
          padding: 20px 0px 20px;
          text-align: center;
          color: #333;
          font-size: 1.1rem;

          a {
            font-size: 1.1rem;
            font-weight: 800;
          }
        }
      }
    }
  }
}
</style>
