<template>
  <div class="admin_tn flex">
    <DashboardHeader />
    <div class="admin_tn__panel">
      <div class="admin_tn__panel__overlay" @click="closePopup"></div>

      <DashboardTopHeader />
      <DashboardNewsPopup :newsName="newsName" />
      <DashboardNewsEditImgPopup :newsName="newsName" />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c" v-show="currentTab === 0">
          <input
            v-model="testimonialsTxt"
            type="text"
            placeholder="Pesquisar testemunhos..."
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

      <div class="admin_tn__panel__grid grid" v-show="currentTab === 0">
        <div v-if="getAdminTestimonials">
          <DashboardTestimonialCard
            v-for="testimonial in searchFilter"
            :key="testimonial.id_testimonial"
            :id="testimonial.id_testimonial"
            :counter="testimonial.id_testimonial"
            :company="testimonial.institution_name"
            :content="testimonial.testimonial_text_pt"
          />
        </div>
        <div>
          Ainda não existem testemunhos disponíveis
        </div>
      </div>
      <div class="admin_tn__panel__grid grid" v-show="currentTab === 1">
        <DashboardNewsCard
          v-for="(news, counter) in newsSearchFilter"
          :key="news.id_news"
          :id="news.id_news"
          :counter="counter + 1"
          :newsName="news.title_pt"
          :newsContent="news.description_pt"
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
import DashboardNewsPopup from "@/components/Dashboard/Popup/DashboardNewsPopup.vue";
import DashboardNewsEditImgPopup from "@/components/Dashboard/Popup/DashboardNewsEditImgPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardTestimonialCard,
    DashboardNewsPopup,
    DashboardNewsCard,
    DashboardNewsEditImgPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      testimonialsTxt: "",
      newsTxt: "",
      news: "",
      tabs: ["Testemunhos", "Notícias"],
      currentTab: 0
    };
  },
  async created() {
    this.news = this.getNews;

    try {
      await this.$store.dispatch("setAdminNews");
      await this.$store.dispatch("setAdminReviews");

      console.log(this.getAdminTestimonials.length);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  mounted() {
    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;
    // document.querySelector(
    //   ".admin_tn__panel"
    // ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    ...mapGetters([
      "getAdminNewsById",
      "getAdminNews",
      "getAdminSelectedNewsId",
      "getAdminTestimonials"
    ]),
    newsName() {
      let id = this.getAdminSelectedNewsId;

      let news = this.getAdminNewsById(id);

      let name;

      if (news) {
        name = news.title_pt;
      }

      return name;
    },
    searchFilter() {
      return this.getAdminTestimonials.filter(n => {
        let search = true;

        if (this.testimonialsTxt != "") {
          search = n.institution_name
            .toLowerCase()
            .includes(this.testimonialsTxt.toLowerCase());
        }

        return search;
      });
    },
    newsSearchFilter() {
      return this.getAdminNews.filter(n => {
        let search = true;

        if (this.newsTxt != "") {
          search = n.title_pt
            .toLowerCase()
            .includes(this.newsTxt.toLowerCase());
        }

        return search;
      });
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".admin_edit_img_focus_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
