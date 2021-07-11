<template>
  <div>
    <SubPageIntro
      :categoryTitle="$t('unities.unitiesKey')"
      :content="getCurrentMenus.page_description"
    />

    <section class="unities">
      <h1 class="unities_title">
        {{ $t("unities.title") }}
      </h1>

      <div class="unities__grid grid">
        <UnitiesCard
          v-for="(unity, index) in getUnitiesArr"
          :key="index + 1"
          :counter="`0${index + 1}`"
          :imageUrl="unity.img"
          :unityName="unity.designation"
          :unityDesc="unity.description"
          :id="unity.id_unity"
          :title="unity.designation"
          @click.native="getUnityId(unity.id_unity, unity.designation)"
        />
      </div>
      <SlidePanel :title="unitySelectedTitle" :content="unitySelectedContent" />
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubPageIntro from "@/components/SubPageIntro.vue";
import SlidePanel from "@/components/SlidePanel.vue";
import UnitiesCard from "@/components/Unities/UnitiesCard.vue";
import Footer from "@/components/Footer.vue";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "Unities",
  components: {
    SubPageIntro,
    UnitiesCard,
    SlidePanel,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      unities: null,
      teamWorkPrinciples: null,
      unitySelectedTitle: null,
      unitySelectedContent: null,
      loadedData: false,
      menu: {},
      loading: false
    };
  },
  created() {
    this.unities = this.getUnities;
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_UNITIES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setUnities");
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters(["getUnities", "getSelectedMenuID", "getMenus"]),
    getCurrentMenus() {
      let menus = this.getMenus;
      console.log(
        menus
          .filter(menu => menu.id_menu === this.getSelectedMenuID)
          .find(n => n.id_menu === this.getSelectedMenuID).page_description
      );

      return menus
        .filter(menu => menu.id_menu === this.getSelectedMenuID)
        .find(n => n.id_menu === this.getSelectedMenuID);
    },
    getSelectedMenuDesc() {
      return this.menus.find(menu => menu.id_menu === this.selectedMenuId)
        .page_description;
    },
    getUnitiesArr() {
      return this.getUnities;
    }
  },
  methods: {
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    },
    formatRouterPath(title) {
      return title.replace(/\s/g, "%20");
    },
    getUnityId(id, title) {
      this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

      let formatedTitle = this.formatRouterPath(title);

      if (this.$route.path != `/unities/${formatedTitle}`) {
        this.$router.push({
          name: "UnitiesPage",
          params: { name: title }
        });
      }
    }
  }
};
</script>
