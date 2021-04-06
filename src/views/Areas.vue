<template>
  <div>
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Areas" /> -->
    <SubPageIntro
      categoryTitle="Áreas"
      title1="Número de áreas"
      :text1="
        `O centro PORTIC incorpora um número total de ${$store.getters.getNAreas} áreas.`
      "
      title2="Foco em diverentes áreas"
      text2="Focamo-nos numa grande diversidade de tecnologias e áreas de atuação."
      title3="Estruturas integradas"
      text3="A super estrutura PORTIC incorpora várias estruturas do Instituto Politécnico do Porto - IPP."
      title4="Estruturas englobantes"
      text4="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      categoryDescription="Here goes some text about the projects and strategies PORTIC
      adotps in the projects ipsum dolor sit amet, consectetur 
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <section class="areas_information">
      <SubHeaderTitle text="As áreas de atuação" class="light" />

      <p class="areas_information__info">
        O Porto Research, Technology & Innovation Center inclui unidades e
        grupos com atividades em diferentes níveis de conhecimento e inovação,
        como também em áreas de conhecimento.
      </p>

      <div class="areas_information__icons grid">
        <IconCard
          v-for="card in iconCards"
          :key="card.id"
          :icon="card.icon"
          :content="card.content"
        />
      </div>
    </section>
    <section class="areas">
      <SubHeaderTitle text="Explore as nossas áreas" />
      <div class="areas__grid grid">
        <AreasCard
          v-for="area in areas"
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
      areas: null,
      iconCards: null
    };
  },
  created() {
    this.areas = this.getAreas;
    this.iconCards = this.getIconCards;
  },
  computed: {
    ...mapGetters(["getAreas", "getIconCards"])
  }
};
</script>
