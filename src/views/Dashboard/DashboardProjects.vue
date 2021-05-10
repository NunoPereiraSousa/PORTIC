<template>
  <div class="admin_projects flex">
    <DashboardHeader />
    <div class="admin_projects__panel">
      <div class="admin_projects__panel__overlay"></div>
      <!-- <div
        class="admin_projects__panel__overlay_slide"
        @click="closeSlider"
      ></div>
       -->
      <div
        class="admin_projects__panel__overlay_add"
        @click="closeAddSlider"
      ></div>
      <AddProjectSlider />

      <DashboardTopHeader />
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import AddProjectSlider from "@/components/Dashboard/AddSlider/AddProjectSlider.vue";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    AddProjectSlider
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_projects__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  methods: {
    closeAddSlider() {
      let slider = document.querySelector(".admin_projects__add_slider");
      let overlay = document.querySelector(
        ".admin_projects__panel__overlay_add"
      );

      slider.classList.toggle("open_add_project_slider");
      overlay.classList.toggle("open_add_project_overlay");
    }
  }
};
</script>
