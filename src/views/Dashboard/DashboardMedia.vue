<template>
  <div class="admin_media flex">
    <DashboardHeader />

    <div class="admin_media__panel">
      <DashboardTopHeader />

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
          :key="media.id"
          :videoURL="convertToYoutubeURL(media.videoURL)"
          :title="media.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardMediaCard from "@/components/Dashboard/DashboardMediaCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardMediaCard
  },
  data: () => {
    return {
      videoTxt: "",
      medias: ""
    };
  },
  created() {
    this.medias = this.getMediasPT;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_media__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters(["getMediasPT"]),
    searchFilter() {
      return this.medias.filter(video => {
        let search = true;

        if (this.videoTxt != "")
          search = video.title
            .toLowerCase()
            .includes(this.videoTxt.toLowerCase());

        return search;
      });
    }
  },
  methods: {
    convertToYoutubeURL(url) {
      // url = "https://www.youtube.com/watch?v=t4-8lJ0ALNU";

      let urlArr = url.split("/");

      let urlID = urlArr[urlArr.length - 1].replace("watch?v=", "");

      return `https://www.youtube.com/embed/${urlID}`;
    }
  }
};
</script>
