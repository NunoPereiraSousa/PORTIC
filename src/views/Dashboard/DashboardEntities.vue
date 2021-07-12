<template>
  <div class="admin__entities flex">
    <DashboardHeader />

    <div class="admin__entities__panel">
      <!-- <div class="admin_about__panel__overlay" @click="closePopup"></div> -->
      <div
        class="admin__entities__panel__overlay2"
        @click="closeImgPopup"
      ></div>

      <DashboardTopHeader />
      <DashboardEntityImgPopup />

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <input
          v-model="entityTxt"
          type="text"
          placeholder="Pesquisar área..."
        />

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
            {{
              tab === "Utilizadores pendentes"
                ? `Utilizadores pendentes: ${getNPendentUsers}`
                : tab
            }}
          </button>
        </div>
      </div>

      <div class="admin__entities__panel__grid grid" v-show="currentTab === 0">
        <DashboardEntitiesCard
          v-for="entity in searchFilter"
          :key="entity.id_entity"
          :id="entity.id_entity"
          :image="entity.img"
          :name="entity.designation"
        />
      </div>

      <div class="admin__entities__panel__grid grid" v-show="currentTab === 1">
        <DashboardEntitiesCard
          v-for="entity in searchFilter2"
          :key="entity.id_entity"
          :id="entity.id_entity"
          :image="entity.img"
          :name="entity.designation"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardEntitiesCard from "@/components/Dashboard/DashboardEntitiesCard.vue";
import DashboardEntityImgPopup from "@/components/Dashboard/Popup/DashboardEntityImgPopup.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardEntitiesCard,
    DashboardEntityImgPopup
  },
  data: () => {
    return {
      entityTxt: "",
      tabs: ["Entidades", "Entidades arquivadas"],
      currentTab: 0
    };
  },
  async created() {
    try {
      await this.$store.dispatch("setAdminEntities");

      console.log(this.getAdminEntities);
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getAdminEntities"]),
    searchFilter() {
      return this.getAdminEntities
        .filter(entity => entity.data_status === "Published")
        .filter(entity => {
          let search = true;

          if (this.entityTxt != "") {
            search = entity.designation
              .toLowerCase()
              .includes(this.entityTxt.toLowerCase());
          }

          return search;
        });
    },
    searchFilter2() {
      return this.getAdminEntities
        .filter(entity => entity.data_status === "Archived")
        .filter(entity => {
          let search = true;

          if (this.entityTxt != "") {
            search = entity.designation
              .toLowerCase()
              .includes(this.entityTxt.toLowerCase());
          }

          return search;
        });
    }
  },
  methods: {
    closeImgPopup() {
      let admin_entities__panel__overlay = document.querySelector(
        ".admin__entities__panel__overlay2"
      );

      let admin_delete_popup = document.querySelector(".entity_img_popup");

      admin_entities__panel__overlay.classList.toggle("show_overlay");
      admin_delete_popup.classList.toggle("show_popup");
    }
  }
};
</script>
