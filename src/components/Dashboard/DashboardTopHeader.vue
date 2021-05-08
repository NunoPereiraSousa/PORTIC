<template>
  <header class="top_header flex flex-ai-c flex-jc-sb">
    <div class="top_header__welcome">
      <h1>Bem-vindo, Nuno Sousa.</h1>
      <h3>{{ getTime() }}, {{ day }} de {{ getMonth() }}, {{ year }}</h3>
    </div>
    <div class="top_header__actions flex flex-ai-c">
      <button class="top_header__actions__remove flex flex-ai-c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.848"
          height="21.967"
          viewBox="0 0 17.848 21.967"
        >
          <g id="trash" transform="translate(-48)">
            <path
              id="Path_71"
              data-name="Path 71"
              d="M64.132,2.746H60.357V2.059A2.062,2.062,0,0,0,58.3,0H55.551a2.062,2.062,0,0,0-2.059,2.059v.686H49.716A1.718,1.718,0,0,0,48,4.462v2.4a.687.687,0,0,0,.686.686h.375l.593,12.455a2.057,2.057,0,0,0,2.057,1.961H62.137a2.057,2.057,0,0,0,2.057-1.961l.593-12.455h.375a.687.687,0,0,0,.686-.686v-2.4A1.718,1.718,0,0,0,64.132,2.746Zm-9.267-.686a.687.687,0,0,1,.686-.686H58.3a.687.687,0,0,1,.686.686v.686H54.865Zm-5.492,2.4a.344.344,0,0,1,.343-.343H64.132a.344.344,0,0,1,.343.343V6.178h-15.1ZM62.822,19.94a.686.686,0,0,1-.686.654H51.712a.686.686,0,0,1-.686-.654l-.59-12.389H63.412Z"
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M240.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,240.686,218.3Z"
              transform="translate(-183.762 -199.076)"
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M320.686,218.3a.686.686,0,0,0,.686-.686v-8.924a.686.686,0,1,0-1.373,0v8.924A.686.686,0,0,0,320.686,218.3Z"
              transform="translate(-260.33 -199.076)"
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M160.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,160.686,218.3Z"
              transform="translate(-107.195 -199.076)"
            />
          </g>
        </svg>

        Removidos
      </button>

      <div v-if="$route.name == 'DashboardAreas'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="openAddSlider"
        >
          <svg
            id="shape"
            xmlns="http://www.w3.org/2000/svg"
            width="19.095"
            height="19.099"
            viewBox="0 0 19.095 19.099"
          >
            <g id="Group_30" data-name="Group 30" transform="translate(0 0)">
              <g id="Group_29" data-name="Group 29">
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M19.155,4.776A2.387,2.387,0,0,0,14.59,3.81L12.552,3.47l-.2,1.177,2.048.342a2.387,2.387,0,0,0,1.473,2l-.581,4.384a2.382,2.382,0,0,0-2.1,2.359v.009L6.309,15.55a2.375,2.375,0,0,0-1.765-1.193L3.326,4.6a2.393,2.393,0,0,0,1.3-1.249l1.844.308.2-1.177-1.853-.31A2.381,2.381,0,1,0,2.141,4.743l1.22,9.75A2.387,2.387,0,1,0,6.625,16.71V16.7L13.5,14.887a2.381,2.381,0,1,0,2.969-3.368l.581-4.384A2.382,2.382,0,0,0,19.155,4.776ZM2.448,3.583A1.193,1.193,0,1,1,3.641,2.39,1.193,1.193,0,0,1,2.448,3.583ZM4.238,17.9A1.193,1.193,0,1,1,5.431,16.71,1.193,1.193,0,0,1,4.238,17.9Zm12.531-4.177a1.193,1.193,0,1,1-1.193-1.193A1.193,1.193,0,0,1,16.769,13.727Zm-1.193-8.95A1.193,1.193,0,1,1,16.769,5.97,1.193,1.193,0,0,1,15.575,4.776Z"
                  transform="translate(-0.06 0)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_3"
                  data-name="Rectangle 3"
                  width="1.552"
                  height="1.552"
                  transform="matrix(0.986, 0.165, -0.165, 0.986, 9.966, 3.005)"
                  fill="#fff"
                />
                <rect
                  id="Rectangle_4"
                  data-name="Rectangle 4"
                  width="1.552"
                  height="1.552"
                  transform="translate(7.663 3.489) rotate(9.486)"
                  fill="#fff"
                />
              </g>
            </g>
          </svg>

          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardCourses'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="openAddCoursesSlider"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.233"
            height="20.103"
            viewBox="0 0 25.233 20.103"
          >
            <path
              id="graduation-hat"
              d="M23.649,64.474v-6.75l.281-.081c1.077-.324,1.3-.871,1.3-1.273s-.226-.951-1.3-1.276l-9.218-2.765a7.588,7.588,0,0,0-2.095-.264,7.589,7.589,0,0,0-2.1.264L1.3,55.094c-1.077.324-1.3.871-1.3,1.273s.226.95,1.3,1.273l3.447,1.034V64.4c0,.692.45,1.667,2.6,2.381a17.323,17.323,0,0,0,5.271.73,17.323,17.323,0,0,0,5.271-.73c2.143-.714,2.6-1.689,2.6-2.381V58.674l1.688-.507v6.307a2.327,2.327,0,0,0-1.584,2.2v3.167a2.323,2.323,0,0,0,4.646,0V66.676a2.327,2.327,0,0,0-1.584-2.2Zm-12.7-10.729a6.188,6.188,0,0,1,1.671-.2,6.188,6.188,0,0,1,1.671.2l8.737,2.622-3.5,1.05h-.006l-5.234,1.569a6.189,6.189,0,0,1-1.671.2,6.189,6.189,0,0,1-1.668-.2L5.712,57.419H5.707l-3.5-1.052ZM19.006,64.4c0,.1-.268.541-1.581.978a15.831,15.831,0,0,1-4.8.658,15.831,15.831,0,0,1-4.8-.658c-1.313-.438-1.581-.883-1.581-.978v-5.28l4.292,1.288a7.587,7.587,0,0,0,2.095.264,7.588,7.588,0,0,0,2.095-.264l4.292-1.288Zm4.751,5.445a.844.844,0,1,1-1.688,0V66.676a.844.844,0,0,1,1.688,0Z"
              transform="translate(0 -52.063)"
              fill="#fff"
            />
          </svg>
          Adicionar
        </button>
      </div>

      <div class="top_header__actions__image" :style="imageStyle"></div>
    </div>
  </header>
</template>

<script>
import methods from "../../views/Dashboard/DashboardHome";
export default {
  name: "DashboardTopHeader",
  data: () => {
    return {
      day: "",
      year: ""
    };
  },
  created() {
    this.day = methods.methods.getDay();
    this.year = methods.methods.getYear();
  },
  mounted() {
    this.updateTime = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.updateTime);
  },
  computed: {
    imageStyle() {
      return `background-image: url('https://www.hypeness.com.br/1/2020/01/Kobe_Bryant_04.jpg')`;
    }
  },
  methods: {
    getMonth() {
      let month = "";

      switch (new Date().getMonth()) {
        case 0:
          month = "janeiro";
          break;
        case 1:
          month = "fevereiro";
          break;
        case 2:
          month = "março";
          break;
        case 3:
          month = "abril";
          break;
        case 4:
          month = "maio";
          break;
        case 5:
          month = "junho";
          break;
        case 6:
          month = "julho";
          break;
        case 7:
          month = "agosto";
          break;
        case 8:
          month = "setembro";
          break;
        case 9:
          month = "outubro";
          break;
        case 10:
          month = "novembro";
          break;
        case 11:
          month = "dezembro";
          break;
      }

      return month;
    },
    getTime() {
      let now = new Date();

      let hours = now.getHours();

      if (hours == 0) hours = `${hours}0`;
      else if (hours < 10) hours = `0${hours}`;

      let minutes = now.getMinutes();

      if (minutes == 0) minutes = `${minutes}0`;
      else if (minutes < 10) minutes = `0${minutes}`;

      return `${hours}:${minutes}`;
    },
    openAddSlider() {
      let slider = document.querySelector(".admin_areas__add_slider");
      let overlay = document.querySelector(".admin_areas__panel__overlay_add");

      slider.classList.toggle("open_add_area_slider");
      overlay.classList.toggle("open_add_area_overlay");
    },
    openAddCoursesSlider() {
      let slider = document.querySelector(".admin_courses__add_slider");
      let overlay = document.querySelector(
        ".admin_courses__panel__overlay_add"
      );

      slider.classList.toggle("open_add_course_slider");
      overlay.classList.toggle("open_add_course_overlay");
    }
  }
};
</script>
