<template>
  <div class="admin_tn flex">
    <DashboardHeader />
    <div class="admin_tn__panel">
      <div class="admin_tn__panel__overlay" @click="closePopup"></div>

      <DashboardTopHeader />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="filesTxt"
            type="text"
            placeholder="fichas de projeto..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader
  },
  data: () => {
    return {
      filesTxt: ""
    };
  }
};
</script>
