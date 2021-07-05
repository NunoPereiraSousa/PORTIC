<template>
  <div class="admin_careers__panel__grid__card grid">
    <div class="flex flex-ai-c flex-jc-sb">
      <div class="flex flex-ai-c">
        <h5 v-if="counter < 10">Carreira 0{{ counter }}</h5>
        <h5 v-else>Carreira {{ counter }}</h5>
        <h2>
          {{ careerName }}
        </h2>
      </div>
      <div class="flex flex-ai-c">
        <button
          class="admin_areas__panel__grid__card__remove"
          style="margin-right: 2rem;"
          @click="openAddConnectionsPage(id, careerName)"
        >
          Gerir conecções
        </button>
        <button
          class="admin_careers__panel__grid__card__edit"
          @click="openPage(id, careerName)"
        >
          Editar
        </button>
        <button
          class="admin_careers__panel__grid__card__remove"
          @click="showPopup(id)"
        >
          Remover
        </button>
      </div>
    </div>
    <div>
      <button
        class="admin_careers__panel__grid__card__more"
        @click="toggleInfo"
      >
        Ler mais
      </button>
    </div>
    <p v-html="careerContent" v-if="!hide"></p>
  </div>
</template>

<script>
export default {
  name: "DashboardCareersCard",
  props: {
    careerName: {
      type: String,
      required: true
    },
    careerContent: {
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
  data: () => {
    return {
      hide: true
    };
  },
  methods: {
    openPage(careerId, careerName) {
      this.$store.commit("SET_SELECTED_ADMIN_CAREER_ID", {
        id: careerId
      });

      this.$router.push({
        name: "DashboardEditCareers",
        params: { name: careerName }
      });
    },
    showPopup(careerId) {
      let overlay = document.querySelector(".admin_careers__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_ADMIN_CAREER_ID", {
        id: careerId
      });
    },
    toggleInfo() {
      this.hide = !this.hide;
    },
    openAddConnectionsPage(careerId, careerName) {
      this.$store.commit("SET_SELECTED_ADMIN_CAREER_ID", {
        id: careerId
      });

      this.$router.push({
        name: "DashboardCareerConnection",
        params: { name: careerName }
      });
    }
  }
};
</script>
