<template>
  <div class="projects__grid__card" @click="setSelectedProject(id, initials)">
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
          <button @click="setSelectedProject(id, initials)">
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
    id: {
      type: String,
      required: true
    },
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
    setSelectedProject(id, initials) {
      localStorage.setItem("projectID", JSON.stringify(id));

      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: id
      });

      let formatedTitle = this.formatRouterPath(initials);

      if (this.$route.path !== `/project/${formatedTitle}`) {
        this.$router
          .push({
            name: "Project",
            params: { id: initials }
          })
          .catch(err => {
            return err;
          });
      }
    },
    formatBudget(n) {
      return `${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}€`;
    },
    formatRouterPath(title) {
      return title.replace(/\s/g, "%20");
    }
  }
};
</script>
