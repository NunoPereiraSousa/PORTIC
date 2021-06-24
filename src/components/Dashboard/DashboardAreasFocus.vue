<template>
  <div class="admin_users__panel__grid__card flex flex-ai-c flex-jc-sb focus">
    <div class="flex flex-ai-c">
      <div
        class="admin_users__panel__grid__card__img"
        :style="imageStyle"
      ></div>
      <h2>{{ content }} / {{ contentEn }}</h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_users__panel__grid__card__edit"
        @click="showEditPopup(id, content)"
      >
        Editar
      </button>
      <button
        class="admin_users__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    contentEn: {
      type: String,
      required: true
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
    showBlockPopup(id) {
      console.log(id);
    },
    showEditPopup(id, name) {
      console.log(id);
      console.log(name);

      let overlay = document.querySelector(".admin_about__panel__overlay3");
      let popup = document.querySelector(".admin_edit_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_ADMIN_AREA_FOCUS_ID", {
        id: id
      });
    },
    showPopup(id) {
      this.$store.commit("SET_SELECTED_ADMIN_AREA_FOCUS_ID", {
        id: id
      });

      let overlay = document.querySelector(".admin_about__panel__overlay4");
      let popup = document.querySelector(".admin_delete_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
      //   let overlay = document.querySelector(".admin_users__panel__overlay");
      //   let popup = document.querySelector(".admin_delete_popup");
      //   overlay.classList.toggle("show_overlay");
      //   popup.classList.toggle("show_popup");

      //   // COURSE ID LOGIC
      //   this.$store.commit("SET_SELECTED_user_ID", {
      //     id: userId
      //   });
    }
  }
};
</script>
