<template>
  <div>
    <div class="news_page grid">
      <div>
        <h1 class="news_page__title">
          {{ currNews.title }}
        </h1>
        <div class="news_page__img" :style="imageStyle"></div>
        <div class="news_page__details flex flex-ai-c flex-jc-sb">
          <div class="news_page__share">
            <a href="https://www.facebook.com/porticpporto" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/portic-pporto/mycompany/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p class="news_page__author">
            {{ currNews.writer }},
            <span>{{ currNews.published_date }}</span>
          </p>
        </div>
      </div>
      <div class="news_page__content" v-html="currNews.description"></div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Footer
  },
  data: () => {
    return {
      news: {
        title: null,
        desc: null,
        image: null,
        date: null,
        author: null
      },
      selectedId: null,
      selectedNews: {},
      currNews: {}
    };
  },
  computed: {
    ...mapGetters(["getAdminNewsById", "getSelectedNewsId"]),
    imageStyle() {
      return `background-image: url('${this.currNews.cover}')`;
    },
    getCurrentNews() {
      console.log(this.$store.getters.getNews);
      let selectedNews = this.$store.getters.getNews;
      console.log(
        selectedNews.find(n => n.id_news === this.getSelectedNewsId).title
      );

      return selectedNews.find(n => n.id_news === this.getSelectedNewsId);
    }
  },
  created() {
    let news = JSON.parse(localStorage.getItem("currNews"));
    let id = JSON.parse(localStorage.getItem("vuex"));
    console.log(news, id.newsModule.selectedNewsId);
    this.currNews = this.findNews(news, id.newsModule.selectedNewsId);
  },
  methods: {
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    },
    findNews(array, id) {
      return array.find(n => n.id_news === id);
    }
  }
};
</script>
