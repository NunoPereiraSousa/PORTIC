<template>
  <div class="admin_unities__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Unidade 0{{ counter }}</h5>
      <h5 v-else>Unidade {{ counter }}</h5>
      <h2>
        {{ unityName }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_unities__panel__grid__card__edit"
        @click="openPage(id, unityName)"
      >
        Editar
      </button>
      <button
        class="admin_unities__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardUnitiesCard",
  props: {
    unityName: {
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
    openPage(unityId, unityName) {
      this.$store.commit("SET_SELECTED_UNITY_ID", {
        id: unityId
      });

      this.$router.push({
        name: "DashboardEditUnities",
        params: { name: unityName }
      });
    },
    showPopup(unityId) {
      let overlay = document.querySelector(".admin_unities__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");
      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC
      this.$store.commit("SET_SELECTED_UNITY_ID", {
        id: unityId
      });
    }
  }
};
</script>
