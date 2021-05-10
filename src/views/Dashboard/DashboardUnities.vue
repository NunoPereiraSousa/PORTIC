<template>
  <div class="admin_unities flex">
    <DashboardHeader />
    <div class="admin_unities__panel">
      <div class="admin_unities__panel__overlay" @click="closePopup"></div>
      <div
        class="admin_unities__panel__overlay_slide"
        @click="closeSlider"
      ></div>
      <div
        class="admin_unities__panel__overlay_add"
        @click="closeAddSlider"
      ></div>

      <DashboardTopHeader />
      <AddUnitySlider />
      <DashboardUnitiesPopup :unityName="unityName" />
      <DashboardUnitiesSlider :unityName="unityName" />

      <div class="admin_unities__panel__tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="unityTxt"
            type="text"
            placeholder="Pesquisar unidades..."
          />
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
        <DashboardUnitiesCard
          v-for="unity in searchFilter"
          :key="unity.id"
          :id="unity.id"
          :counter="unity.id"
          :unityName="unity.unityName"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardUnitiesCard from "@/components/Dashboard/DashboardUnitiesCard.vue";
import AddUnitySlider from "@/components/Dashboard/AddSlider/AddUnitySlider.vue";
import DashboardUnitiesPopup from "@/components/Dashboard/Popup/DashboardUnitiesPopup.vue";
import DashboardUnitiesSlider from "@/components/Dashboard/Slider/DashboardUnitiesSlider.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardUnitiesCard,
    AddUnitySlider,
    DashboardUnitiesPopup,
    DashboardUnitiesSlider
  },
  data: () => {
    return {
      institution: "PORTIC",
      unityTxt: "",
      unities: ""
    };
  },
  created() {
    this.unities = this.getUnities;

    console.log(this.unities);
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_unities__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getSelectedUnityId", "getUnityById", "getUnities"]),
    unityName() {
      let id = this.getSelectedUnityId;

      let unity = this.getUnityById(id);

      let name;

      if (unity) {
        name = unity.unityName;
      }

      return name;
    },
    searchFilter() {
      return this.unities.filter(unity => {
        let search = true;

        if (this.unityTxt != "") {
          search = unity.unityName
            .toLowerCase()
            .includes(this.unityTxt.toLowerCase());
        }

        return search;
      });
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_unities__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    closeAddSlider() {
      let slider = document.querySelector(".admin_unities__add_slider");
      let overlay = document.querySelector(
        ".admin_unities__panel__overlay_add"
      );

      slider.classList.toggle("open_add_unity_slider");
      overlay.classList.toggle("open_add_unity_overlay");
    },
    closeSlider() {
      let overlay = document.querySelector(
        ".admin_unities__panel__overlay_slide"
      );
      let slider = document.querySelector(".admin_unities_edit__slider");
      overlay.classList.toggle("show_overlay_slide");
      slider.classList.toggle("show_slider");
    }
  }
};
</script>
