<template>
  <div class="admin_areas flex">
    <DashboardHeader />
    <div class="admin_areas__panel">
      <div class="admin_areas__panel__overlay" @click="closePopup"></div>
      <div class="admin_areas__panel__overlay_slide" @click="closeSlider"></div>
      <div
        class="admin_areas__panel__overlay_add"
        @click="closeAddSlider"
      ></div>

      <DashboardTopHeader />
      <DashboardAreasPopup :areaName="areaName" />
      <DashboardAreaSlider :areaName="areaName" />
      <AddAreaSlider />

      <div class="admin_areas__panel__tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input v-model="areaTxt" type="text" placeholder="Pesquisar..." />

          <!-- <div class="admin_areas__panel__tools__btns">
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

      <div class="admin_areas__panel__grid grid">
        <DashboardAreasCard
          v-for="area in searchFilter"
          :key="area.id"
          :id="area.id"
          :counter="area.id"
          :areaName="area.areaName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardAreasCard from "@/components/Dashboard/DashboardAreasCard.vue";
import DashboardAreasPopup from "@/components/Dashboard/DashboardAreasPopup.vue";
import DashboardAreaSlider from "@/components/Dashboard/DashboardAreaSlider.vue";
import AddAreaSlider from "@/components/Dashboard/AddSlider/AddAreaSlider.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardAreasCard,
    DashboardAreasPopup,
    DashboardAreaSlider,
    AddAreaSlider
  },
  data: () => {
    return {
      selectedInput: "",
      institution: "",
      areaTxt: "",
      areas: ""
    };
  },
  created() {
    this.areas = this.getAreasPT;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_areas__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getSelectedAreaByID", "getAreaByID", "getAreasPT"]),
    areaName() {
      let id = this.getSelectedAreaByID;

      let area = this.getAreaByID(id);

      let name;

      if (area) {
        name = area.areaName;
      }

      return name;
    },
    searchFilter() {
      return this.areas.filter(area => {
        let search = true;

        if (this.areaTxt != "") {
          search = area.areaName
            .toLowerCase()
            .includes(this.areaTxt.toLowerCase());
        }

        return search;
      });
    }
  },

  methods: {
    closePopup() {
      let admin_areas__panel__overlay = document.querySelector(
        ".admin_areas__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_delete_popup");

      admin_areas__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    },
    closeSlider() {
      let overlay = document.querySelector(
        ".admin_areas__panel__overlay_slide"
      );

      let slider = document.querySelector(".admin_areas__slider");

      overlay.classList.toggle("show_overlay_slide");
      slider.classList.toggle("show_slider");
    },
    closeAddSlider() {
      let slider = document.querySelector(".admin_areas__add_slider");
      let overlay = document.querySelector(".admin_areas__panel__overlay_add");

      slider.classList.toggle("open_add_area_slider");
      overlay.classList.toggle("open_add_area_overlay");
    }
  }
};
</script>
