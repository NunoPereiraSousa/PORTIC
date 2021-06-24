<template>
  <div class="admin_courses__popup admin_delete_popup">
    <h2>
      Tem a certeza que pretende eliminar o curso <br />
      <span>{{ courseName }}</span>
    </h2>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="deleteCourse">
        Confimar
      </button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCoursesPopup",
  props: {
    courseName: {
      type: String,
      required: false
    }
  },
  methods: {
    async deleteCourse() {
      try {
        this.$store.dispatch("setAdminDeleteCourse");
        this.$store.dispatch("setAdminCourses");
      } catch (error) {
        console.log(error);
        return error;
      }

      this.closePopup();
    },
    closePopup() {
      let overlay = document.querySelector(".admin_courses__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
