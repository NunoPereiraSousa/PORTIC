<template>
  <div class="projects__grid__card">
    <div class="projects__grid__card__normal_state">
      <h1>{{ initials }}</h1>
      <h3 v-if="counter < 10">Project 0{{ counter }}</h3>
      <h3 v-else>Project {{ counter }}</h3>
    </div>
    <div class="projects__grid__card__hovered_state hide-for-mobile">
      <div class="position flex flex-jc-sb flex-fd-c">
        <div class="projects__grid__card__hovered_state__overlay"></div>
        <div class="top">
          <h1>/ {{ initials }}</h1>
          <p>
            {{ title }}
          </p>
        </div>
        <div class="bottom">
          <a href="">Know more</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    initials: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    }
  }
};
</script>
