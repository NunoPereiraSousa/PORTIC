<template>
  <div class="projects__grid__card">
    <div class="projects__grid__card__normal_state">
      <h1>{{ initials }}</h1>
      <p>{{ title }}</p>
      <h3>Referência 1234567</h3>
      <div class="state" :style="backgroudColor"></div>
    </div>
    <div class="projects__grid__card__hovered_state hide-for-mobile">
      <div class="position flex flex-jc-sb flex-fd-c">
        <div class="projects__grid__card__hovered_state__overlay"></div>
        <div class="top">
          <h1>/ {{ initials }}</h1>
          <p v-html="description"></p>
        </div>
        <div class="bottom">
          <button @click="setSelectedProject(projectInitials)">
            Saber mais
          </button>
        </div>
      </div>
      <div class="state" :style="backgroudColor"></div>
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
    description: {
      type: String,
      required: true
    },
    projectInitials: {
      type: String,
      required: true
    },
    overallBudget: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: false
    }
  },
  computed: {
    backgroudColor() {
      return `background-color: ${this.color}`;
    }
  },
  methods: {
    setSelectedProject(name) {
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
