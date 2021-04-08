<template>
  <div>
    <div class="slide__panel">
      <div class="flex flex-ai-c flex-jc-sb slide__panel__actions">
        <p class="slide__panel__actions__author" v-if="author != null">
          <small>Autor: {{ author }}</small>
        </p>
        <div
          class="slide__panel__back flex flex-ai-c flex-jc-c"
          @click="closeForm"
        >
          <div class="arrow"></div>
        </div>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
    <div class="slide__panel__overlay" @click="closeForm"></div>
  </div>
</template>

<script>
export default {
  name: "SlidePanel",
  props: {
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: false
    }
  },
  methods: {
    closeForm() {
      let slide__panel = document.querySelector(".slide__panel");

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
