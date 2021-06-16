<template>
  <div>
    <div class="news_page grid">
      <div>
        <h1 class="news_page__title">
          {{ news.title }}
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
            {{ news.author }}, <span>{{ news.date }}</span>
          </p>
        </div>
      </div>
      <p class="news_page__content">
        {{ news.desc }}
      </p>
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
      selectedNews: {}
    };
  },
  computed: {
    ...mapGetters(["getNewsById", "getSelectedNewsId"]),
    imageStyle() {
      return `background-image: url('${this.news.image}')`;
    },
    getCurrentNews() {
      return this.selectedNews.find(n => n.title === this.$route.params.name);
    }
  },
  created() {
    this.selectedNews = JSON.parse(localStorage.getItem("news"));

    this.news = {
      title: this.getCurrentNews.title,
      desc: this.getCurrentNews.description,
      image: this.convertImage(this.getCurrentNews.cover.data),
      date: this.getCurrentNews.published_date,
      author: this.getCurrentNews.writer
    };
  },
  methods: {
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    }
  }
};
</script>
