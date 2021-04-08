<template>
  <div class="projects__grid__card">
    <div class="projects__grid__card__normal_state">
      <div>
        <h1>{{ initials }}</h1>
        <p>{{ formatBudget(overallBudget) }}</p>
        <!-- <p>PORTIC budget: {{ porticBudget }}</p> -->
      </div>
      <h3 v-if="counter < 10">Projeto 0{{ counter }}</h3>
      <h3 v-else>Projeto {{ counter }}</h3>
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
          <button @click="setSelectedProject(projectInitials)">
            Saber mais
          </button>
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
    },
    projectInitials: {
      type: String,
      required: true
    },
    overallBudget: {
      type: Number,
      required: true
    }
    // porticBudget: {
    //   type: Number,
    //   required: false
    // }
  },
  methods: {
    setSelectedProject(name) {
      console.log(name);
      this.$store.commit("SET_SELECTED_PROJECT", {
        initials: name
      });
      this.$router.push({
        name: "Project",
        params: { name: name }
      });
    },
    formatBudget(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€`;
    }
  }
};
</script>
