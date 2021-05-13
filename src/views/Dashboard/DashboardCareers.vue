<template>
  <div class="admin_careers flex">
    <DashboardHeader />
    <div class="admin_careers__panel">
      <div class="admin_careers__panel__overlay" @click="closePopup"></div>

      <DashboardCareersPopup :careerName="careerName" />
      <DashboardTopHeader />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="careerTxt"
            type="text"
            placeholder="Pesquisar carreira..."
          />

          <!-- <div class="admin_careers__panel__tools__btns">
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

      <div class="admin_careers__panel__grid grid">
        <DashboardCareersCard
          v-for="career in searchFilter"
          :key="career.id"
          :id="career.id"
          :counter="career.id"
          :careerName="career.title"
          :careerContent="career.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardCareersCard from "@/components/Dashboard/DashboardCareersCard.vue";
import DashboardCareersPopup from "@/components/Dashboard/Popup/DashboardCareersPopup.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardCareersCard,
    DashboardCareersPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      careerTxt: "",
      courses: ""
    };
  },
  created() {
    this.careers = this.getPositions;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_careers__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getSelectedCareerByID", "getCareerByID", "getPositions"]),
    careerName() {
      let id = this.getSelectedCareerByID;

      let career = this.getCareerByID(id);

      let name;

      if (career) {
        name = career.title;
      }

      return name;
    },
    searchFilter() {
      return this.careers.filter(career => {
        let search = true;

        if (this.careerTxt != "") {
          search = career.title
            .toLowerCase()
            .includes(this.careerTxt.toLowerCase());
        }

        return search;
      });
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_careers__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
