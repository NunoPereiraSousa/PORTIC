<template>
  <div class="positions">
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Projects" /> -->
    <SubPageIntro
      :categoryTitle="$t('careers.careersKey')"
      :title1="$t('careers.nCareers', { n: $store.getters.getCareersLength })"
      :text1="$t('careers.nCarrersDesc')"
      :title2="$t('careers.careersTitle2')"
      :text2="$t('careers.careersTitle2Desc')"
      content="Research and development, technology and knowledge transfer, innovation and creativity, entrepreneurship, incubation, spin-offs, startups – these are all part of Research, Technology & Innovation, a holistic chain of interrelated activities.
PORTIC includes units and groups with activities in different stages of the knowledge and innovation chain, in several areas of knowledge."
      :categoryDescription="$t('careers.infoDesc')"
    />

    <section class="positions__find_program">
      <h1 class="positions__find_program__title">
        {{ $t("careers.mainTitle") }}
      </h1>

      <SubHeaderTitle :text="$t('careers.title')" />

      <p class="positions__find_program__info">
        {{ $t("careers.desc") }}
      </p>
    </section>

    <section class="positions__come_prepared">
      <SubHeaderTitle :text="$t('careers.title2')" class="light" />

      <div class="positions__come_prepared__grid grid">
        <ComePreparedCard
          v-for="tip in getTips"
          :key="tip.id"
          :counter="tip.id"
          :title="tip.title"
          :desc="tip.desc"
        />
      </div>
    </section>

    <section class="positions__available">
      <SubHeaderTitle :text="$t('careers.title3')" />
      <div class="positions__available__grid grid">
        <CareersCard
          v-for="(position, index) in $store.getters.getCareers"
          :key="index + 1"
          :card_id="`card_${index + 1}`"
          :index="index + 1"
          :title="position.designation"
          :categories="position.categories"
          :content="position.desc_html_structure"
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
import ComePreparedCard from "@/components/Positions/ComePreparedCard.vue";
import CareersCard from "@/components/Positions/CareersCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    SubHeaderTitle,
    ComePreparedCard,
    CareersCard,
    Footer
  },
  data: () => {
    return {
      tips: null,
      nPositions: 0,
      positions: null,
      positionNames: null
    };
  },
  async mounted() {
    this.tips = this.getTips;
    this.positionNames = this.getPositionsNames;

    this.$store.commit("SET_SELECTED_CAREERS_LANG", {
      lang: this.$i18n.locale === "pt" ? "pt" : "en"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setCareers");

      console.log(this.$store.getters.getCareers);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getTipsPT", "getTipsEN", "getPositionsNames"]),
    getTips() {
      let tipsPT = this.getTipsPT;
      let tipsEN = this.getTipsEN;

      return this.$i18n.locale == "pt" ? tipsPT : tipsEN;
    }
  }
};
</script>
