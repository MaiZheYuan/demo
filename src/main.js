import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vant from "vant";
import { Lazyload, Sticky } from "vant";
import "vant/lib/index.css";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Sticky);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
