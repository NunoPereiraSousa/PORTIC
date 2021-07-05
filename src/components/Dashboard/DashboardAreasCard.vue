<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Área 0{{ counter }}</h5>
      <h5 v-else>Área {{ counter }}</h5>
      <h2>
        {{ areaName }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_areas__panel__grid__card__remove"
        style="margin-right: 2rem;"
        @click="openAddConnectionsPage(id, areaName)"
      >
        Gerir conecções
      </button>
      <button
        class="admin_areas__panel__grid__card__edit"
        @click="openPage(id, areaName)"
      >
        Editar
      </button>
      <button
        class="admin_areas__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAreasCard",
  props: {
    areaName: {
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
    openPage(areaId, areaName) {
      this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
        id: areaId
      });

      this.$router.push({
        name: "DashboardEditAreas",
        params: { name: areaName }
      });
    },
    showPopup(areaId) {
      let admin_about__panel__overlay = document.querySelector(
        ".admin_about__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_areas__popup");

      console.log(admin_about__panel__overlay, admin_delete_popup);

      admin_about__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");

      // AREA ID LOGIC

      this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
        id: areaId
      });
    },
    openAddConnectionsPage(id, areaName) {
      this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
        id: id
      });

      this.$router.push({
        name: "DashboardAddAreaConnection",
        params: { name: areaName }
      });
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
