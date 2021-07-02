<template>
  <div class="investor__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h2>
        {{ name }}
      </h2>
    </div>

    <button
      class="admin_areas__panel__grid__card__remove"
      @click="deletePartner(id)"
    >
      Remover
    </button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      requred: true
    }
  },
  methods: {
    async deletePartner(id) {
      this.$store.commit("SET_SELECTED_PARTNER_ID", {
        id: id
      });

      try {
        await this.$store.dispatch("setAdminDeleteProjectPartner");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  }
};
</script>
