<template>
  <div class="admin_entities__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Entidade 0{{ counter }}</h5>
      <h5 v-else>Entidade {{ counter }}</h5>
      <h2>
        {{ name }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_entities__panel__grid__card__edit"
        @click="openPage(id, name)"
      >
        Editar
      </button>
      <button
        class="admin_entities__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardEntitiesCard",
  props: {
    name: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: false
    }
  },
  methods: {
    openPage(id, name) {
      this.$store.commit("SET_SELECTED_ADMIN_ENTITY_ID", {
        id: id
      });

      this.$router.push({
        name: "DashboardEditEntities",
        params: { name: name }
      });
    },
    showPopup(id) {
      let admin_entities__panel__overlay = document.querySelector(
        ".admin_entities__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_areas__popup");

      admin_entities__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");

      // AREA ID LOGIC
      console.log(id);

      // this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
      //   id: id
      // });
    },
    openAddConnectionsPage(id, name) {
      console.log(id, name);
      // this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
      //   id: id
      // });
      // this.$router.push({
      //   name: "DashboardAreaConnection",
      //   params: { name: name }
      // });
    }
    // formatRouterPath(title) {
    //   return title.replace(/\s/g, "%20");
    // },
    // getUnityId(id, title) {
    //   this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

    //   let formatedTitle = this.formatRouterPath(title);

    //   if (this.$route.path != `/unities/${formatedTitle}`) {
    //     this.$router.push({
    //       name: "UnitiesPage",
    //       params: { name: title }
    //     });
    //   }
    // }
  }
};
</script>
