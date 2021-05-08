<template>
  <div class="admin_courses__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar o curso <br />
      <span>{{ courseName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm">Confimar</button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardCoursesPopup",
  props: {
    courseName: {
      type: String,
      required: false
    }
  },
  computed: {
    ...mapGetters(["getSelectedCourseByID", "getCourseByID"])
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_courses__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
