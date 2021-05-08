<template>
  <div class="admin_courses flex">
    <DashboardHeader />
    <div class="admin_courses__panel">
      <div
        class="admin_courses__panel__overlay_slide"
        @click="closeSlider"
      ></div>
      <div
        class="admin_courses__panel__overlay_add"
        @click="closeAddSlider"
      ></div>
      <AddCourseSlider />
      <DashboardTopHeader />

      <div class="admin_courses__panel__tools flex flex-ai-c flex-jc-sb">
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
            <option value="PORTIC">Instituition</option>
            <option value="ESMAD">ESMAD</option>
            <option value="ISEP">ISEP</option>
            <option value="FEUP">FEUP</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import AddCourseSlider from "@/components/Dashboard/AddSlider/AddCourseSlider.vue";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    AddCourseSlider
  },
  data: () => {
    return {
      institution: "",
      courseTxt: "",
      courses: ""
    };
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_courses__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  methods: {
    closeAddSlider() {
      let slider = document.querySelector(".admin_courses__add_slider");
      let overlay = document.querySelector(
        ".admin_courses__panel__overlay_add"
      );

      slider.classList.toggle("open_add_course_slider");
      overlay.classList.toggle("open_add_course_overlay");
    },
    closeSlider() {
      let overlay = document.querySelector(
        ".admin_courses__panel__overlay_slide"
      );

      let slider = document.querySelector(".admin_courses__slider");

      overlay.classList.toggle("show_overlay_slide");
      slider.classList.toggle("show_slider");
    }
  }
};
</script>
