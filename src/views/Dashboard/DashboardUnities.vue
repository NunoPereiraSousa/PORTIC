<template>
  <div class="admin_unities flex">
    <DashboardHeader />
    <div class="admin_unities__panel">
      <div class="admin_unities__panel__overlay" @click="closePopup"></div>

      <DashboardTopHeader />
      <DashboardUnitiesPopup :unityName="unityName" />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="unityTxt"
            type="text"
            placeholder="Pesquisar unidades..."
          />
        </div>

        <button class="edit_confirm_button" v-show="currentTab === 1">
          Confirmar
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

      <div class="admin_areas__panel__grid grid" v-show="currentTab === 1">
        <div class="">
          <h3 class="dashboard_subheader">
            Informação geral das unidades
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

      <div class="admin_courses__panel__grid grid" v-show="currentTab === 0">
        <DashboardUnitiesCard
          v-for="(unity, index) in searchFilter"
          :key="unity.id_unity"
          :id="unity.id_unity"
          :counter="index + 1"
          :unityName="unity.designation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardUnitiesCard from "@/components/Dashboard/DashboardUnitiesCard.vue";
import DashboardUnitiesPopup from "@/components/Dashboard/Popup/DashboardUnitiesPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardUnitiesCard,
    DashboardUnitiesPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      unityTxt: "",
      unities: "",
      tabs: ["Unidades", "Informações"],
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
    this.$store.commit("SET_SELECTED_UNITIES_LANG", {
      lang: "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setUnities");
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }

    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    // document.querySelector(
    //   ".admin_unities__panel"
    // ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getSelectedUnityId", "getUnityById", "getUnities"]),
    unityName() {
      let id = this.getSelectedUnityId;

      let unity = this.getUnityById(id);

      let name;

      if (unity) {
        name = unity.designation;
      }

      return name;
    },
    searchFilter() {
      return this.getUnities.filter(unity => {
        let search = true;

        if (this.unityTxt != "") {
          search = unity.designation
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
    }
  }
};
</script>
