import Vue from 'vue'
import Vue18n from 'vue-i18n'
import Cookie from 'js-cookie'

Vue.use(Vue18n);

const i18n = new Vue18n({
    locale: Cookie.get('lang') || 'en-US',
    messages: {
		// 英语，中文繁体、中文简体、土耳其、韩语、日语、印度尼西亚语、泰语、阿拉伯语
        'en-US': require('../locale/en').default,//英语
		'zh-TW':require('../locale/tw').default,//中文繁体
        'zh-CN': require('../locale/zh').default,//中文简体
		'tr-TR': require('../locale/tr').default,//土耳其
		'ko-KR': require('../locale/ko-KR').default,//韩语
		'ja-JP': require('../locale/ja-JP').default,//日语
		'in': require('../locale/in-DO').default,//印度尼西亚语
		'th': require('../locale/th').default,//泰语
		'ar': require('../locale/ar').default,//阿拉伯语
    }
})

export default i18n;
