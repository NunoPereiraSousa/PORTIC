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
        @click="changeStatus(id)"
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
    async changeStatus(id) {
      this.$store.commit("SET_SELECTED_ADMIN_ENTITY_ID", {
        id: id
      });

      let currEntity = this.$store.getters.getAdminEntityById(
        this.$store.getters.getAdminEntityId
      );

      this.$store.commit("SET_ENTITY_STATUS", {
        entityStatus:
          currEntity.data_status === "Archived" ? "Published" : "Archived"
      });

      try {
        await this.$store.dispatch("setAdminEditEntityStatus");
        await this.$store.dispatch("setAdminEntities");
      } catch (error) {
        return error;
      }

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
