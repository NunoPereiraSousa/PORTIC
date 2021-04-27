<template>
  <div>
    <SubPageIntro
      :categoryTitle="$t('areas.mainTitle')"
      :title1="$t('areas.nAreas')"
      :text1="$t('areas.nAreasDesc', { n: $store.getters.getNAreas })"
      :title2="$t('areas.areasFocus')"
      :text2="$t('areas.areasFocusDesc')"
      :title3="$t('areas.areasStructure')"
      :text3="$t('areas.areasStructureDesc')"
      :title4="$t('areas.areasCoop')"
      :text4="$t('areas.areasCoopDesc')"
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
          v-for="area in getAreas"
          :key="area.id"
          :counter="area.id"
          :index="area.id"
          :button_id="area.id"
          :card_id="`card_${area.id}`"
          :areaName="area.areaName"
          :areaDesc="area.areaDesc"
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
  computed: {
    ...mapGetters([
      "getAreasPT",
      "getAreasEN",
      "getIconCardsPT",
      "getIconCardsEN"
    ]),
    getAreas() {
      let areasPT = this.getAreasPT;
      let areasEN = this.getAreasEN;

      return this.$i18n.locale == "pt" ? areasPT : areasEN;
    },
    getIcons() {
      let iconsPT = this.getIconCardsPT;
      let iconsEN = this.getIconCardsEN;

      return this.$i18n.locale == "pt" ? iconsPT : iconsEN;
    }
  }
};
</script>
