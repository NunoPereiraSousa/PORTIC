<template>
  <div class="news__cards__card grid">
    <div class="news__cards__card__image" :style="imageStyle"></div>
    <div class="news__cars__card__content flex flex-fd-c flex-jc-sb">
      <h2>{{ title }}</h2>
      <p v-html="content"></p>
      <div class="flex flex-ai-c flex-jc-sb">
        <p class="date">{{ date }}</p>
        <button @click="setSelectedNews(title, id)">
          {{ $t("homepage.news.button") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsCard",
  props: ["image", "title", "content", "date", "id"],
  data: () => {
    return {
      slideTitle: null,
      slideContent: null
    };
  },
  computed: {
    ...mapGetters(["getNews", "getNewsById"]),
    imageStyle() {
      return `background-image: url('${this.image}')`;
    }
  },
  methods: {
    setSelectedNews(title, id) {
      console.log(title, id);
      this.$store.commit("SET_SELECTED_NEWS_ID", { id: id });

      this.$router.push({
        name: "NewsPage",
        params: { name: title }
      });
    }
  }
};
</script>
