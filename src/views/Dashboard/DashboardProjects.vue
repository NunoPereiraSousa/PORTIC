<template>
  <div class="admin_projects flex">
    <DashboardHeader />
    <div class="admin_projects__panel">
      <div class="admin_projects__panel__overlay" @click="closePopup"></div>

      <DashboardProjectsPopup :projectName="projectName" />

      <DashboardTopHeader />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="projectTxt"
            type="text"
            placeholder="Pesquisar projeto..."
          />
          <select v-model="institution">
            <option value="">Instituition</option>
            <option value="PORTIC" selected>PORTIC</option>
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
            Informação geral dos projetos
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
        <DashboardProjectsCard
          v-for="project in searchFilter"
          :key="project.id"
          :id="project.id"
          :counter="project.id"
          :projectName="project.initials"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardProjectsCard from "@/components/Dashboard/DashboardProjectsCard.vue";
import DashboardProjectsPopup from "@/components/Dashboard/Popup/DashboardProjectsPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardProjectsPopup,
    DashboardProjectsCard
  },
  data: () => {
    return {
      institution: "PORTIC",
      projectTxt: "",
      projects: "",
      images: [],
      tabs: ["Projetos", "Informações"],
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
  created() {
    // this.projects = this.getAdminProjects;
    this.images = [
      "https://wp.zillowstatic.com/streeteasy/2/Amazon-building-10b3c7.jpg",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200",
      "https://www.gannett-cdn.com/presto/2019/07/18/PSAL/4010fe7f-35e9-4108-9954-96f6f521bab1-AmazonFulfillmentCenter_ar_01.JPG?auto=webp&crop=2399,1349,x1,y86&format=pjpg&width=1200"
    ];

    console.log(this.images);
  },
  async mounted() {
    // this.$store.commit("SET_SELECTED_PROJECTS_LANG", {
    //   lang: "pt"
    // });

    try {
      await this.$store.dispatch("setAdminProjects");
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters([
      "getSelectedProjectByID",
      "getProjectByID",
      "getAdminProjects"
    ]),
    projectName() {
      let id = this.getSelectedProjectByID;

      let project = this.getProjectByID(id);

      let name;

      if (project) {
        name = project.initials;
      }

      return name;
    },
    searchFilter() {
      return this.getAdminProjects.filter(project => {
        let search = true;

        if (this.projectTxt != "") {
          search = project.initials
            .toLowerCase()
            .includes(this.projectTxt.toLowerCase());
        }

        return search;
      });
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_projects__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
