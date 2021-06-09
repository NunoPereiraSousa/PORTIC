<template>
  <div class="admin_courses flex">
    <DashboardHeader />
    <div class="admin_courses__panel">
      <div class="admin_courses__panel__overlay" @click="closePopup"></div>

      <DashboardCoursesPopup :courseName="courseName" />
      <DashboardTopHeader />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="courseTxt"
            type="text"
            placeholder="Pesquisar curso..."
          />

          <!-- <div class="admin_courses__panel__tools__btns">
            <button>Estatísticas</button>
            <button>Informações</button>
            <button>Áreas</button>
          </div> -->
        </div>

        <div class="flex flex-ai-c">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.848"
              height="11.924"
              viewBox="0 0 15.848 11.924"
            >
              <g id="tick" transform="translate(0.5 -67.422)">
                <g
                  id="Group_44"
                  data-name="Group 44"
                  transform="translate(0 67.997)"
                >
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M14.556,68.214a.739.739,0,0,0-1.045,0l-8.85,8.85-3.4-3.4A.739.739,0,0,0,.216,74.706L4.14,78.63a.739.739,0,0,0,1.045,0l9.372-9.372A.739.739,0,0,0,14.556,68.214Z"
                    transform="translate(0 -67.997)"
                    fill="#28aa2d"
                    stroke="#28aa2d"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>

            {{ institution == "" ? "PORTIC" : institution }}
          </p>
          <select v-model="institution">
            <option value="">Instituition</option>
            <option value="PORTIC" selected>PORTIC</option>
            <option value="ESMAD">ESMAD</option>
            <option value="ISEP">ISEP</option>
            <option value="FEUP">FEUP</option>
          </select>
        </div>
      </div>

      <div class="admin_courses__panel__grid grid">
        <DashboardCoursesCard
          v-for="(course, index) in searchFilter"
          :key="course.id_course"
          :id="course.id_course"
          :counter="index + 1"
          :courseName="course.designation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardCoursesCard from "@/components/Dashboard/DashboardCoursesCard.vue";
import DashboardCoursesPopup from "@/components/Dashboard/Popup/DashboardCoursesPopup.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardCoursesCard,
    DashboardCoursesPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      courseTxt: "",
      courses: ""
    };
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_COURSES_LANG", {
      lang: "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setCourses");
      console.log(this.getCourses);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }

    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    // document.querySelector(
    //   ".admin_courses__panel"
    // ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getSelectedCourseByID", "getCourseByID", "getCourses"]),
    courseName() {
      let id = this.getSelectedCourseByID;

      let course = this.getCourseByID(id);

      let name;

      if (course) {
        name = course.designation;
      }

      return name;
    },
    searchFilter() {
      return this.getCourses.filter(course => {
        let search = true;

        if (this.courseTxt != "") {
          search = course.designation
            .toLowerCase()
            .includes(this.courseTxt.toLowerCase());
        }

        return search;
      });
    }
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
