<template>
  <div class="admin_tn flex">
    <DashboardHeader />
    <div class="admin_tn__panel">
      <div class="admin_tn__panel__overlay" @click="closePopup"></div>

      <DashboardTopHeader />
      <DashboardUnitiesPopup :unityName="unityName" />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="testimonialsTxt"
            type="text"
            placeholder="Pesquisar testemunhos..."
          />
        </div>
        <div class="flex flex-ai-c" v-show="currentTab === 1">
          <input
            v-model="newsTxt"
            type="text"
            placeholder="Pesquisar notícias..."
          />
        </div>

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

      <div class="admin_tn__panel__grid grid" v-show="currentTab === 0">
        <DashboardTestimonialCard
          v-for="unity in searchFilter"
          :key="unity.id"
          :id="unity.id"
          :counter="unity.id"
          :unityName="unity.unityName"
        />
      </div>
      <div class="admin_tn__panel__grid grid" v-show="currentTab === 1">
        <DashboardNewsCard
          v-for="news in newsSearchFilter"
          :key="news.id"
          :id="news.id"
          :counter="news.id"
          :newsName="news.title"
          :newsContent="news.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardTestimonialCard from "@/components/Dashboard/DashboardTestimonialCard.vue";
import DashboardNewsCard from "@/components/Dashboard/DashboardNewsCard.vue";
import DashboardUnitiesPopup from "@/components/Dashboard/Popup/DashboardUnitiesPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardTestimonialCard,
    DashboardUnitiesPopup,
    DashboardNewsCard
  },
  data: () => {
    return {
      institution: "PORTIC",
      testimonialsTxt: "",
      newsTxt: "",
      unities: "",
      news: "",
      tabs: ["Testemunhos", "Notícias"],
      currentTab: 0
    };
  },
  created() {
    this.unities = this.getUnitiesPT;

    this.news = this.getNews;
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_tn__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters([
      "getSelectedUnityId",
      "getUnityById",
      "getUnitiesPT",
      "getNewsById",
      "getSelectedNewsId",
      "getNews"
    ]),
    unityName() {
      let id = this.getSelectedUnityId;

      let unity = this.getUnityById(id);

      let name;

      if (unity) {
        name = unity.unityName;
      }

      return name;
    },
    newsName() {
      let id = this.getSelectedNewsId;

      let news = this.getNewsById(id);

      let name;

      if (name) {
        name = news.title;
      }

      return name;
    },
    searchFilter() {
      return this.unities.filter(unity => {
        let search = true;

        if (this.unityTxt != "") {
          search = unity.unityName
            .toLowerCase()
            .includes(this.testimonialsTxt.toLowerCase());
        }

        return search;
      });
    },
    newsSearchFilter() {
      return this.news.filter(n => {
        let search = true;

        if (this.unityTxt != "") {
          search = n.title.toLowerCase().includes(this.newsTxt.toLowerCase());
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
