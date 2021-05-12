<template>
  <div class="admin_courses__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Curso 0{{ counter }}</h5>
      <h5 v-else>Curso {{ counter }}</h5>
      <h2>
        {{ courseName }}
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_courses__panel__grid__card__edit"
        @click="openPage(id, courseName)"
      >
        Editar
      </button>
      <button
        class="admin_courses__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardCoursesCard",
  props: {
    courseName: {
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
  computed: {
    ...mapGetters(["getSelectedCourseByID", "getCourseByID"])
  },
  methods: {
    openPage(courseId, courseName) {
      this.$store.commit("SET_SELECTED_COURSE_ID", {
        id: courseId
      });

      this.$router.push({
        name: "DashboardEditCourses",
        params: { name: courseName }
      });
    },
    showPopup(courseId) {
      let overlay = document.querySelector(".admin_courses__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      // COURSE ID LOGIC

      this.$store.commit("SET_SELECTED_COURSE_ID", {
        id: courseId
      });
    }
  }
};
</script>
