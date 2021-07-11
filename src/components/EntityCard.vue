<template>
  <div
    class="projects__grid__card entity__card"
    @click="setSelectedEntity(id, initials)"
  >
    <div>
      <h1>{{ initials }}</h1>
      <p>{{ title }}</p>
    </div>
    <div>
      <button @click="setSelectedEntity(id, initials)">
        Saber mais
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EntityCard",
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
    }
  },
  methods: {
    setSelectedEntity(id) {
      // localStorage.setItem("entityID", JSON.stringify(id));

      // localStorage.setItem(
      //   "entities",
      //   JSON.stringify(this.getSecondaryEntities)
      // );

      console.log(id);

      this.$store.commit("SET_ENTITY_ID", {
        entity_id: id
      });

      this.$router.push({
        name: "Home"
      });
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
