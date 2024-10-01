import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import i18n from "./language/Index";
import './js/svg'
import SvgIcon from './components/Svgicon/Index.vue'
import Captcha from 'vue3-captcha';

// 定义特性标志
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
const app=createApp(App)
app
.use(store)
.use(router)
.use(Antd)
.use(i18n)
.use(Captcha)
.component('svg-icon',SvgIcon)
.mount("#app")

