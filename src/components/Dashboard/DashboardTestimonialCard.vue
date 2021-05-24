<template>
  <div class="admin_careers__panel__grid__card grid">
    <div class="flex flex-ai-c flex-jc-sb">
      <div class="flex flex-ai-c">
        <h5 v-if="counter < 10">Notícia 0{{ counter }}</h5>
        <h5 v-else>Notícia {{ counter }}</h5>
        <h2>
          {{ newsName }}
        </h2>
      </div>
      <div class="flex flex-ai-c">
        <button
          class="admin_careers__panel__grid__card__edit"
          @click="openPage(id, newsName)"
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
    <p v-html="newsContent" v-if="!hide"></p>
  </div>
</template>

<script>
export default {
  name: "DashboardTestimonialCard",
  props: {
    newsName: {
      type: String,
      required: true
    },
    newsContent: {
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
  data: () => {
    return {
      hide: true
    };
  },
  methods: {
    openPage(newsId, newsName) {
      this.$store.commit("SET_SELECTED_NEWS_ID", {
        id: newsId
      });

      this.$router.push({
        name: "DashboardEditNews",
        params: { name: newsName }
      });
    },
    showPopup(careerId) {
      let overlay = document.querySelector(".admin_careers__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC

      this.$store.commit("SET_SELECTED_CAREER_ID", {
        id: careerId
      });
    },
    toggleInfo() {
      this.hide = !this.hide;
    }
  }
};
</script>
