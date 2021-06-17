import "quill/dist/quill.bubble.css"; // for bubble theme
import "quill/dist/quill.core.css"; // import styles
import "quill/dist/quill.snow.css"; // for snow theme
import Vue from "vue";
import VueGlide from "vue-glide-js";
import "vue-glide-js/dist/vue-glide.css";
import VueQuillEditor from "vue-quill-editor";
import App from "./App.vue";
import i18n from "./i18n";
import router from "./router";
import store from "./store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};

Vue.use(VueQuillEditor /* { default global options } */);
Vue.use(VueGlide);
Vue.use(Toast, options);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
