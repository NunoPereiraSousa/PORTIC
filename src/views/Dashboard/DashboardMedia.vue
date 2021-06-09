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
        <div class="flex flex-ai-c">
          <input
            v-model="videoTxt"
            type="text"
            placeholder="Pesquisar vídeo..."
          />
        </div>
      </div>

      <div class="admin_media__panel__grid grid">
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
      medias: ""
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

    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    // document.querySelector(
    //   ".admin_media__panel"
    // ).style.paddingLeft = `${navbar_width}px`;
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
