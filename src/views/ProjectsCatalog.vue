<template>
  <section class="projects_catalog">
    <div class="flex flex-jc-c flex-ai-c flex-fd-c">
      <h3>PORTIC <span>&#9654;</span> Projects</h3>
      <h1 class="projects_catalog__title">Projects</h1>
      <p>These are the projects that our team was part of.</p>
    </div>
    <div class="projects_catalog__filters grid">
      <input type="text" id="projectTxt" placeholder="Search project" />
      <div
        class="flex flex-jc-sa flex-ai-c hide-for-desktop"
        style="width: 100%"
      >
        <h2 class="projects_catalog__filters__sorting">Finance sorting</h2>
        <h2
          class="projects_catalog__filters__institutions"
          @click="showFilters"
        >
          Institutions
        </h2>
      </div>
      <div class="hide-for-mobile">
        <h2 class="projects_catalog__filters__sorting">Finance sorting</h2>
        <h2
          class="projects_catalog__filters__institutions"
          @click="showFilters"
        >
          Institutions
        </h2>
      </div>
      <div class="projects_catalog__filters__categories">
        <div class="grid">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </div>
      <div class="projects__grid grid" style="width: 100%">
        <ProjectCard
          v-for="i in 12"
          :key="i"
          :counter="i"
          @mouseover.native="onHover"
          @mouseleave.native="notHover"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  components: {
    ProjectCard
  },
  mounted() {},
  methods: {
    showFilters() {
      document
        .querySelector(".projects_catalog__filters__categories")
        .classList.toggle("opened");
    }
  }
};
</script>
