<template>
  <div class="admin_entities__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <div
        class="admin_entities__panel__grid__card__img"
        :style="imageStyle"
      ></div>
      <h2>
        {{ name }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_entities__panel__grid__card__remove"
        style="margin-right: 2rem;"
        @click="openMenusPage(id, name)"
      >
        Editar menus
      </button>
      <button
        class="admin_entities__panel__grid__card__remove"
        style="margin-right: 2rem;"
        @click="showImgPopup(id)"
      >
        Editar logo
      </button>
      <button
        class="admin_entities__panel__grid__card__edit"
        @click="openPage(id, name)"
      >
        Editar
      </button>
      <button
        class="admin_entities__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardEntitiesCard",
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    }
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.image}')`;
    }
  },
  methods: {
    openPage(id, name) {
      this.$store.commit("SET_SELECTED_ADMIN_ENTITY_ID", {
        id: id
      });

      this.$router.push({
        name: "DashboardEditEntities",
        params: { name: name }
      });
    },
    openMenusPage(id, name) {
      this.$store.commit("SET_SELECTED_ADMIN_ENTITY_ID", {
        id: id
      });

      this.$router.push({
        name: "DashboardEditEntitiesMenus",
        params: { name: name }
      });
    },
    showPopup(id) {
      let admin_entities__panel__overlay = document.querySelector(
        ".admin_entities__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_areas__popup");

      admin_entities__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");

      // AREA ID LOGIC
      console.log(id);

      // this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
      //   id: id
      // });
    },
    openAddConnectionsPage(id, name) {
      console.log(id, name);
      // this.$store.commit("SET_SELECTED_ADMIN_AREA_ID", {
      //   id: id
      // });
      // this.$router.push({
      //   name: "DashboardAreaConnection",
      //   params: { name: name }
      // });
    },
    showImgPopup() {
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
