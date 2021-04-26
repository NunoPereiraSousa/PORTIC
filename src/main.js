import Vue from "vue";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";

Vue.use(VueGlide);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
