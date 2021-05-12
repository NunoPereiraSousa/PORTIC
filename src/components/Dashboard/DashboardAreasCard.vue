<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Área 0{{ counter }}</h5>
      <h5 v-else>Área {{ counter }}</h5>
      <h2>
        {{ areaName }}
        <!-- {{ $t(item.title, { areaName: areaName }) }} -->
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_areas__panel__grid__card__edit"
        @click="openSlider(id, areaName)"
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
      type: Number,
      required: false
    }
  },
  methods: {
    openSlider(areaId, areaName) {
      // let overlay = document.querySelector(
      //   ".admin_areas__panel__overlay_slide"
      // );

      // let slider = document.querySelector(".admin_areas__slider");

      // overlay.classList.toggle("show_overlay_slide");
      // slider.classList.toggle("show_slider");

      // AREA ID LOGIC

      this.$store.commit("SET_SELECTED_AREA_ID", {
        id: areaId
      });

      this.$router.push({
        name: "DashboardEditAreas",
        params: { name: areaName }
      });
    },
    showPopup(areaId) {
      let admin_areas__panel__overlay = document.querySelector(
        ".admin_areas__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_delete_popup");

      admin_areas__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");

      // AREA ID LOGIC

      this.$store.commit("SET_SELECTED_AREA_ID", {
        id: areaId
      });
    }
  }
};
</script>
