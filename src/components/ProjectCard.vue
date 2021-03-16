<template>
  <div class="projects__grid__card">
    <div class="projects__grid__card__normal_state">
      <h1 v-if="counter < 10">Project 0{{ counter }}</h1>
      <h1 v-else>Project {{ counter }}</h1>
      <h3>Ferrovia 4.0</h3>
    </div>
    <div class="projects__grid__card__hovered_state hide-for-mobile">
      <div class="position flex flex-jc-sb flex-fd-c">
        <div class="projects__grid__card__hovered_state__overlay"></div>
        <div class="top">
          <h1>
            / Ferrovia 4.0
          </h1>
          <p>
            Research and development, technology and knowledge transfer,
            innovation and creativity.
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
  props: ["counter"]
};
</script>
