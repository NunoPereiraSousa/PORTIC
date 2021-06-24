<template>
  <div class="admin_areas flex">
    <DashboardHeader />
    <div class="admin_areas__panel">
      <div class="admin_about__panel__overlay" @click="closePopup"></div>
      <div class="admin_about__panel__overlay2" @click="closeAddPopup"></div>
      <div class="admin_about__panel__overlay3" @click="closeEditPopup"></div>
      <div class="admin_about__panel__overlay4" @click="closeDeletePopup"></div>

      <DashboardTopHeader />
      <DashboardAreasPopup :areaName="areaName" />
      <DashboardFocusPopup :focusName="focusName" />
      <DashboardAddFocusPopup />
      <DashboardDeleteFocusPopup :focusName="focusName" />
      <DashboardEditFocusPopup
        :focusName="focusName"
        :focusNameEn="focusNameEn"
      />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="areaTxt"
            type="text"
            placeholder="Pesquisar área..."
          />
          <select v-model="institution">
            <option value="">Instituition</option>
            <option value="PORTIC">PORTIC</option>
            <option value="ESMAD">ESMAD</option>
            <option value="ISEP">ISEP</option>
            <option value="FEUP">FEUP</option>
          </select>
          <p class="flex flex-ai-c">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.848"
              height="11.924"
              style="width: 20px"
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
        </div>

        <button class="edit_confirm_button" v-show="currentTab === 2">
          Confirmar
        </button>

        <div v-show="currentTab === 1">
          <button class="edit_confirm_button">
            Confirmar
          </button>
          <button class="edit_confirm_button" @click="openAddFocusPopup">
            Adicionar
          </button>
        </div>
        <button class="edit_confirm_button" v-show="currentTab === 2">
          Adicionar
        </button>
        <div class="flex flex-ai-c">
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            @click="currentTab = index"
            :class="{ active: currentTab === index }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.848"
              height="11.924"
              style="width: 20px"
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
            {{ tab }}
          </button>
        </div>
      </div>

      <div class="admin_areas__panel__grid grid" v-show="currentTab === 2">
        <div class="">
          <h3 class="dashboard_subheader">
            Informação geral das áreas
          </h3>
          <div class="area_edit_editor">
            <quill-editor
              v-model="content"
              :options="editorOption"
              ref="quillEditor"
            >
            </quill-editor>
          </div>
        </div>
      </div>

      <div class="admin_areas__panel__grid grid" v-show="currentTab === 1">
        <DashboardAreasFocus
          v-for="focus in getFocus"
          :key="focus.id_areas_focus"
          :id="focus.id_areas_focus"
          :image="focus.img"
          :content="focus.description_pt"
          :contentEn="focus.description_eng"
        />
      </div>

      <div class="admin_areas__panel__grid grid" v-show="currentTab === 0">
        <DashboardAreasCard
          v-for="(area, index) in searchFilter"
          :key="area.id_area"
          :id="area.id_area"
          :counter="index + 1"
          :areaName="area.designation_pt"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardAreasCard from "@/components/Dashboard/DashboardAreasCard.vue";
import DashboardAreasFocus from "@/components/Dashboard/DashboardAreasFocus.vue";
import DashboardAreasPopup from "@/components/Dashboard/Popup/DashboardAreasPopup.vue";
import DashboardFocusPopup from "@/components/Dashboard/Popup/DashboardFocusPopup.vue";
import DashboardAddFocusPopup from "@/components/Dashboard/Popup/DashboardAddFocusPopup.vue";
import DashboardEditFocusPopup from "@/components/Dashboard/Popup/DashboardEditFocusPopup.vue";
import DashboardDeleteFocusPopup from "@/components/Dashboard/Popup/DashboardDeleteFocusPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardAreasCard,
    DashboardAreasFocus,
    DashboardAreasPopup,
    DashboardFocusPopup,
    DashboardAddFocusPopup,
    DashboardEditFocusPopup,
    DashboardDeleteFocusPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      areaTxt: "",
      areas: "",
      tabs: ["Áreas", "Focus", "Informações"],
      currentTab: 0,
      content: "",
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: ["Porto Sans Stencil"] }],
            [
              {
                color: ["#080808", "#ffffff", "#c94d24", "#666666", "#999999"]
              },
              {
                background: [
                  "#080808",
                  "#ffffff",
                  "#c94d24",
                  "#666666",
                  "#999999"
                ]
              }
            ],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_AREAS_LANG", {
      lang: "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setAdminAreas");
      await this.$store.dispatch("setAdminAreasFocus");

      console.log(this.$store.getters.getAdminAreasFocus);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters([
      "getAdminSelectedAreaId",
      "getAdminAreaById",
      "getAdminAreas",
      "getAdminSelectedAreaFocusId",
      "getAdminAreaFocusById"
    ]),
    areaName() {
      let id = this.getAdminSelectedAreaId;

      let area = this.getAdminAreaById(id);

      let name;

      if (area) {
        name = area.designation_pt;
      }

      return name;
    },
    searchFilter() {
      return this.getAdminAreas.filter(area => {
        let search = true;

        if (this.areaTxt != "") {
          search = area.designation_pt
            .toLowerCase()
            .includes(this.areaTxt.toLowerCase());
        }

        return search;
      });
    },
    getFocus() {
      return this.$store.getters.getAdminAreasFocus;
    },
    focusName() {
      let id = this.getAdminSelectedAreaFocusId;

      let focus = this.getAdminAreaFocusById(id);

      let name;

      if (focus) {
        name = focus.description_pt;
      }

      return name;
    },
    focusNameEn() {
      let id = this.getAdminSelectedAreaFocusId;

      let focus = this.getAdminAreaFocusById(id);

      let name;

      if (focus) {
        name = focus.description_eng;
      }

      return name;
    }
  },
  methods: {
    closePopup() {
      let admin_about__panel__overlay = document.querySelector(
        ".admin_about__panel__overlay"
      );

      let admin_delete_popup = document.querySelector(".admin_delete_popup");

      admin_about__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    },
    openAddFocusPopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay2");

      let addPopup = document.querySelector(".admin_add_focus_popup");

      overlay.classList.toggle("show_overlay");
      addPopup.classList.toggle("show_popup");
    },
    closeAddPopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay2");

      let addPopup = document.querySelector(".admin_add_focus_popup");

      overlay.classList.toggle("show_overlay");
      addPopup.classList.toggle("show_popup");
    },
    closeEditPopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay3");

      let addPopup = document.querySelector(".admin_add_focus_popup");

      overlay.classList.toggle("show_overlay");
      addPopup.classList.toggle("show_popup");
    },
    closeDeletePopup() {
      let overlay = document.querySelector(".admin_about__panel__overlay4");

      let deletePopup = document.querySelector(".admin_delete_focus_popup");

      overlay.classList.toggle("show_overlay");
      deletePopup.classList.toggle("show_popup");
    }
  }
};
</script>
