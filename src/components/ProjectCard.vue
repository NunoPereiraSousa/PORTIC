<template>
  <div class="projects__grid__card flex flex-fd-c flex-jc-sa">
    <h1 v-if="counter < 10">Project 0{{ counter }}</h1>
    <h1 v-else>Project {{ counter }}</h1>
    <h3>Ferrovia 4.0</h3>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: ["counter"]
};
</script>
