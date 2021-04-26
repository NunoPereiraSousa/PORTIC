import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./languages/en.json";
import pt from "./languages/pt.json";
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "pt",
  messages: {
    pt: pt,
    en: en
  }
});

export default i18n;
