<template>
  <div>
    <SubPageIntro
      :categoryTitle="$t('areas.mainTitle')"
      :title1="$t('areas.nAreas')"
      :text1="$t('areas.nAreasDesc', { n: 1 })"
      :title2="$t('areas.areasFocus')"
      :text2="$t('areas.areasFocusDesc')"
      content="Research and development, technology and knowledge transfer, innovation and creativity, entrepreneurship, incubation, spin-offs, startups – these are all part of Research, Technology & Innovation, a holistic chain of interrelated activities.
PORTIC includes units and groups with activities in different stages of the knowledge and innovation chain, in several areas of knowledge."
      :categoryDescription="$t('areas.infoDesc')"
    />
    <section class="areas_information">
      <SubHeaderTitle :text="$t('areas.secondTitle')" class="light" />

      <p class="areas_information__info">
        {{ $t("areas.areasInformation") }}
      </p>
      <div class="areas_information__icons grid">
        <IconCard
          v-for="card in getIcons"
          :key="card.id"
          :icon="card.icon"
          :content="card.content"
        />
      </div>
    </section>
    <section class="areas">
      <SubHeaderTitle :text="$t('areas.thirdTitle')" />
      <div class="areas__grid grid">
        <AreasCard
          v-for="(area, index) in $store.getters.getAreas"
          :key="area.id_area"
          :counter="index + 1"
          :index="index"
          :button_id="area.id_area"
          :card_id="`card_${index}`"
          :areaName="area.designation"
          :areaDesc="area.description"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SubPageIntro from "@/components/SubPageIntro.vue";
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import AreasCard from "@/components/AreasCard.vue";
import IconCard from "@/components/IconCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    // Intro,
    SubPageIntro,
    SubHeaderTitle,
    AreasCard,
    IconCard,
    Footer
  },
  data: () => {
    return {
      iconCards: null
    };
  },
  created() {
    this.iconCards = this.getIconCards;
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_AREAS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setAreas");
      console.log(this.$store.getters.getAreas);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getAreas", "getIconCardsPT", "getIconCardsEN"]),
    // getAreas() {
    //   let areas = this.getAreasPT;

    //   return this.$i18n.locale == "pt" ? areasPT : areasEN;
    // },
    getIcons() {
      let iconsPT = this.getIconCardsPT;
      let iconsEN = this.getIconCardsEN;

      return this.$i18n.locale == "pt" ? iconsPT : iconsEN;
    }
  }
};
</script>
