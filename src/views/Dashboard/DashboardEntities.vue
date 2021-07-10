<template>
  <div class="admin__entities flex">
    <DashboardHeader />

    <div class="admin__entities__panel">
      <!-- <div class="admin_about__panel__overlay" @click="closePopup"></div> -->
      <div
        class="admin__entities__panel__overlay2"
        @click="closeImgPopup"
      ></div>

      <DashboardTopHeader />
      <DashboardEntityImgPopup />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <input
          v-model="entityTxt"
          type="text"
          placeholder="Pesquisar área..."
        />
      </div>

      <div class="admin__entities__panel__grid grid">
        <DashboardEntitiesCard
          v-for="entity in searchFilter"
          :key="entity.id_entity"
          :id="entity.id_entity"
          :image="entity.img"
          :name="entity.designation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardEntitiesCard from "@/components/Dashboard/DashboardEntitiesCard.vue";
import DashboardEntityImgPopup from "@/components/Dashboard/Popup/DashboardEntityImgPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardEntitiesCard,
    DashboardEntityImgPopup
  },
  data: () => {
    return {
      entityTxt: ""
    };
  },
  async created() {
    try {
      await this.$store.dispatch("setAdminEntities");

      console.log(this.getAdminEntities);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getAdminEntities"]),
    searchFilter() {
      return this.getAdminEntities.filter(entity => {
        let search = true;

        if (this.entityTxt != "") {
          search = entity.designation
            .toLowerCase()
            .includes(this.entityTxt.toLowerCase());
        }

        return search;
      });
    }
  },
  methods: {
    closeImgPopup() {
      let admin_entities__panel__overlay = document.querySelector(
        ".admin__entities__panel__overlay2"
      );

      let admin_delete_popup = document.querySelector(".entity_img_popup");

      admin_entities__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    }
  }
};
</script>
