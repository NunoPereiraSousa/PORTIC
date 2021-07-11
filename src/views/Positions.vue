<template>
  <div class="positions">
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
          :areas="position.area_tags"
          :courses="position.course_tags"
          :projects="position.project_tags"
          :units="position.unity_tags"
        />
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import CareersCard from "@/components/Positions/CareersCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    CareersCard,
    SubHeaderTitle,
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
      // await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setCareers");

      console.log(this.$store.getters.getCareers);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getPositionsNames"])
  }
};
</script>
