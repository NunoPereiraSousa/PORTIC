<template>
  <div>
    <div class="news__cards__card grid">
      <img :src="image" alt="News Image" />
      <div class="news__cars__card__content flex flex-fd-c flex-jc-sb">
        <h2>{{ title }}</h2>
        <p>{{ desc }}</p>
        <div class="flex flex-ai-c flex-jc-sb">
          <p class="date">{{ date }}</p>
          <button @click="toggleNews(id)">Saber mais</button>
        </div>
      </div>
    </div>
    <div :id="slideId">
      <div class="slide__panel">
        <h2>{{ slideTitle }}</h2>
        <p>{{ slideContent }}</p>
        <div
          class="slide__panel__back flex flex-ai-c flex-jc-c"
          @click="closeForm(id)"
        >
          <div class="arrow"></div>
        </div>
      </div>
      <div class="slide__panel__overlay" @click="closeForm"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NewsCard",
  props: ["image", "title", "desc", "date", "id", "slideId"],
  data: () => {
    return {
      slideTitle: null,
      slideContent: null
    };
  },
  computed: {
    ...mapGetters(["getNews", "getNewsById"])
  },
  methods: {
    toggleNews(id) {
      let slide__panel = document.querySelector(`#slide${id} .slide__panel`);
      slide__panel.classList.toggle("opened");
      let headerHeight = document.querySelector(".headers").offsetHeight;
      document.querySelector(".headers").style.top = `-${headerHeight}px`;
      document.querySelector(".headers").style.zIndex = 0;
      let slide__panel__overlay = document.querySelector(
        ".slide__panel__overlay"
      );
      slide__panel__overlay.classList.toggle("overlay_opened");

      this.setText(id);
    },
    setText(id) {
      let news = this.getNewsById(id);

      this.slideTitle = news.title;
      this.slideContent = news.content;

      console.log(this.slideTitle);
    },
    closeForm(id) {
      let slide__panel = document.querySelector(`#slide${id} .slide__panel`);

      slide__panel.classList.toggle("opened");

      document.querySelector(".headers").style.top = 0;
      document.querySelector(".headers").style.zIndex = "990";

      let slide__panel__overlay = document.querySelector(
        ".slide__panel__overlay"
      );

      slide__panel__overlay.classList.toggle("overlay_opened");
    }
  }
};
</script>
