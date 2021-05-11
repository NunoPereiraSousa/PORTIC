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
            <a
              href="https://www.instagram.com/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
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
        {{ news.content }}
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
        id: null,
        title: null,
        content: null,
        image: null,
        date: null,
        author: null
      },
      selectedId: null
    };
  },
  computed: {
    ...mapGetters(["getNewsById", "getSelectedNewsId"]),
    imageStyle() {
      return `background-image: url('${this.news.image}')`;
    }
  },
  created() {
    this.selectedId = this.getSelectedNewsId;

    this.news = this.getNewsById(this.selectedId);
  }
};
</script>
