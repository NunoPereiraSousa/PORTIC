<template>
  <div class="admin_tn__panel__grid__card grid">
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
          class="admin_users__panel__grid__card__block"
          @click="showEditImgPopup(id)"
        >
          Mudar Imagem
        </button>
        <button
          class="admin_tn__panel__grid__card__edit"
          @click="openPage(id, newsName)"
        >
          Editar
        </button>
        <button
          class="admin_tn__panel__grid__card__remove"
          @click="showPopup(id)"
        >
          Remover
        </button>
      </div>
    </div>
    <div>
      <button class="admin_tn__panel__grid__card__more" @click="toggleInfo">
        Ler mais
      </button>
    </div>
    <p v-html="newsContent" v-if="!hide"></p>
  </div>
</template>

<script>
export default {
  name: "DashboardNewsCard",
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
    openPage(newsId, newsName) {
      console.log(newsId, newsName);
      this.$store.commit("SET_SELECTED_ADMIN_NEWS_ID", {
        id: newsId
      });

      this.$router.push({
        name: "DashboardEditNews",
        params: { name: newsName }
      });
    },
    showPopup(newsId) {
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // NEWS ID LOGIC

      this.$store.commit("SET_SELECTED_ADMIN_NEWS_ID", {
        id: newsId
      });
    },
    showEditImgPopup(newsId) {
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".admin_edit_img_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_ADMIN_NEWS_ID", {
        id: newsId
      });
    },
    toggleInfo() {
      this.hide = !this.hide;
    }
  }
};
</script>
