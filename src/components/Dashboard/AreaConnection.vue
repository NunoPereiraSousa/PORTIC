<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <h2>{{ category }} {{ name }}</h2>

    <div class="flex flex-ai-c">
      <button
        class="admin_areas__panel__grid__card__remove"
        @click="deleteAreaCon"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AreaConnection",
  props: {
    category: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    async deleteAreaCon() {
      this.$store.commit("SET_SELECTED_AC", {
        courseId: this.id
      });

      try {
        await this.$store.dispatch("setAdminDeleteAC");
        await this.$store.dispatch("setAdminAreas");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
