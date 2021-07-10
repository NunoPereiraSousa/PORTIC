<template>
  <div class="admin__entities flex">
    <DashboardHeader />

    <div class="admin__entities__panel">
      <DashboardTopHeader />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <input
          v-model="entityTxt"
          type="text"
          placeholder="Pesquisar área..."
        />
      </div>

      <div class="admin__entities__panel__grid grid">
        <DashboardEntitiesCard
          v-for="(entity, index) in searchFilter"
          :key="entity.id_entity"
          :id="entity.id_entity"
          :counter="index + 1"
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
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardEntitiesCard
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
  }
};
</script>
