<template>
  <div class="admin_careers__panel__grid__card grid">
    <div class="flex flex-ai-c flex-jc-sb">
      <div class="flex flex-ai-c">
        <h5 v-if="counter < 10">Testemunho 0{{ counter }}</h5>
        <h5 v-else>Testemunho {{ counter }}</h5>
        <h2>
          {{ company }}
        </h2>
      </div>
      <div class="flex flex-ai-c">
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
    <p v-html="content" v-if="!hide"></p>
  </div>
</template>

<script>
export default {
  name: "DashboardTestimonialCard",
  props: {
    company: {
      type: String,
      required: true
    },
    content: {
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
    showPopup(id) {
      let overlay = document.querySelector(".admin_tn__panel__overlay2");
      let popup = document.querySelector(".remove_review");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC

      this.$store.commit("SET_SELECTED_REVIEW_ID", {
        id: id
      });
    },
    toggleInfo() {
      this.hide = !this.hide;
    }
  }
};
</script>
