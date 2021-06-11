<template>
  <div class="admin_media flex">
    <DashboardHeader />

    <div class="admin_media__panel">
      <div class="admin_media__panel__overlay" @click="closePopup"></div>
      <div class="admin_media__panel__overlay2" @click="closeDeletePopup"></div>
      <div class="admin_media__panel__overlay3" @click="closeAddPopup"></div>

      <DashboardTopHeader />
      <DashboardEditMedia :mediaName="mediaName" :videoUrl="videoUrl" />
      <DashboardMediaPopup :name="mediaName" />
      <DashboardAddMediaPopup />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="videoTxt"
            type="text"
            placeholder="Pesquisar vídeo..."
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
            Informação geral dos mídia
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

      <div class="admin_media__panel__grid grid" v-show="currentTab === 0">
        <DashboardMediaCard
          v-for="media in searchFilter"
          :key="media.id_media"
          :id="media.id_media"
          :videoURL="convertToYoutubeURL(media.youtube_path)"
          :title="media.description"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardMediaCard from "@/components/Dashboard/DashboardMediaCard.vue";
import DashboardEditMedia from "@/components/Dashboard/Popup/DashboardEditMedia.vue";
import DashboardMediaPopup from "@/components/Dashboard/Popup/DashboardMediaPopup.vue";
import DashboardAddMediaPopup from "@/components/Dashboard/Popup/DashboardAddMediaPopup.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardMediaCard,
    DashboardEditMedia,
    DashboardMediaPopup,
    DashboardAddMediaPopup
  },
  data: () => {
    return {
      videoTxt: "",
      medias: "",
      tabs: ["Mídia", "Informações"],
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
    this.$store.commit("SET_SELECTED_MEDIAS_LANG", {
      lang: "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setMedias");

      console.log(this.getMedias);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getMedias", "getSelectedMediaByID", "getMediaByID"]),
    searchFilter() {
      return this.getMedias.filter(video => {
        let search = true;

        if (this.videoTxt != "")
          search = video.title
            .toLowerCase()
            .includes(this.videoTxt.toLowerCase());

        return search;
      });
    },
    mediaName() {
      console.log(this.getSelectedMediaByID);
      let id = this.getSelectedMediaByID;

      let media = this.getMediaByID(id);

      let name;

      if (media) {
        name = media.description;
      }

      return name;
    },
    videoUrl() {
      let id = this.getSelectedMediaByID;

      let media = this.getMediaByID(id);

      let videoUrl;

      if (media) {
        videoUrl = media.youtube_path;
        console.log(videoUrl);
      }

      return videoUrl;
    }
  },
  methods: {
    convertToYoutubeURL(url) {
      // url = "https://www.youtube.com/watch?v=t4-8lJ0ALNU";

      let urlArr = url.split("/");

      let urlID = urlArr[urlArr.length - 1].replace("watch?v=", "");

      return `https://www.youtube.com/embed/${urlID}`;
    },
    closePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    closeDeletePopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay2");
      let popup = document.querySelector(".admin_medias__popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    closeAddPopup() {
      let overlay = document.querySelector(".admin_media__panel__overlay3");
      let popup = document.querySelector(".admin_add_media_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
