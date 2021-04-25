<template>
  <div class="news__cards__card grid">
    <!-- <img :src="image" alt="News Image" /> -->
    <div class="news__cards__card__image" :style="imageStyle"></div>
    <div class="news__cars__card__content flex flex-fd-c flex-jc-sb">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <div class="flex flex-ai-c flex-jc-sb">
        <p class="date">{{ date }}</p>
        <button @click="toggleNews(id)">Saber mais</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsCard",
  props: ["image", "title", "desc", "date", "id"],
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
    toggleNews(id) {
      this.$store.commit("SET_SELECTED_NEWS_ID", { id: id });

      let slide__panel = document.querySelector(".slide__panel");
      slide__panel.classList.toggle("opened");
      let headerHeight = document.querySelector(".headers").offsetHeight;
      document.querySelector(".headers").style.top = `-${headerHeight}px`;
      document.querySelector(".headers").style.zIndex = 0;
      let slide__panel__overlay = document.querySelector(
        `.slide__panel__overlay`
      );

      slide__panel__overlay.classList.toggle("overlay_opened");
      // let scrollPos = window.scrollY;

      document.body.classList.add("panel-open");
    }
  }
};
</script>
