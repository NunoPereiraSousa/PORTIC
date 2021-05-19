<template>
  <div class="admin_about__panel__grid__card grid">
    <div class="flex flex-ai-c flex-jc-sb">
      <div class="flex flex-ai-c">
        <h5 v-if="counter < 10">Focus 0{{ counter }}</h5>
        <h5 v-else>Focus {{ counter }}</h5>
        <h2>
          {{ focusName }}
        </h2>
      </div>
      <button
        class="admin_about__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardFocusCard",
  props: {
    focusName: {
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
    showPopup(focusId) {
      let overlay = document.querySelector(".admin_about__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // FOCUS ID LOGIC

      this.$store.commit("SET_SELECTED_FOCUS_ID", {
        id: focusId
      });
    }
  }
};
</script>
