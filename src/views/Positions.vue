<template>
  <div class="positions">
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Projects" /> -->
    <SubPageIntro
      :categoryTitle="$t('careers.careersKey')"
      :title1="$t('careers.nCareers', { n: $store.getters.getNPositions })"
      :text1="$t('careers.nCareersDesc')"
      :title2="$t('careers.careersTitle2')"
      :text2="$t('careers.careersTitle2Desc')"
      :title3="$t('careers.careersTitle3')"
      :text3="$t('careers.careersTitle3Desc')"
      :title4="$t('careers.careersTitle4')"
      :text4="$t('careers.careersTitle4Desc')"
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
        <AvailablePositionsCard
          v-for="position in positions"
          :key="position.id"
          :card_id="`card_${position.id}`"
          :index="position.id"
          :title="position.title"
          :categories="position.categories"
          :content="position.content"
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
import AvailablePositionsCard from "@/components/Positions/AvailablePositionsCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    SubHeaderTitle,
    ComePreparedCard,
    AvailablePositionsCard,
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
  mounted() {
    this.tips = this.getTips;
    this.positions = this.getPositions;
    this.nPositions = this.getNPositions;
    this.positionNames = this.getPositionsNames;
  },
  computed: {
    ...mapGetters([
      "getPositions",
      "getTipsPT",
      "getTipsEN",
      "getNPositions",
      "getPositionsNames"
    ]),
    getTips() {
      let tipsPT = this.getTipsPT;
      let tipsEN = this.getTipsEN;

      return this.$i18n.locale == "pt" ? tipsPT : tipsEN;
    }
  }
};
</script>
