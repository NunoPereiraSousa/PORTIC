<template>
  <div class="positions">
    <!-- <div class="scene"></div> -->
    <!-- <Intro extra="our " keyword="Projects" /> -->
    <SubPageIntro
      categoryTitle="Recrutamento"
      :title1="`${this.nPositions} carreiras disponíveis`"
      :text1="`Estão disponíveis carreiras nas áreas de ${this.positionNames}.`"
      title2="Title 2"
      text2="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title3="Title 3"
      text3="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title4="Title 4"
      text4="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      categoryDescription="Here goes some text about the projects and strategies PORTIC
      adotps in the projects ipsum dolor sit amet, consectetur 
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />

    <section class="positions__find_program">
      <h1 class="positions__find_program__title">
        Tudo começa com um pequeno passo
      </h1>

      <SubHeaderTitle text="Find your program" />

      <p class="positions__find_program__info">
        Os nossos programas oferecem experiências únicas tanto para estagiários,
        como para trabalhadores. Se consegue pensar de forma criativa e
        trabalhadora, então consegue fazer chegar a sua voz a pessoas de todas
        as partes do mundo.
      </p>
    </section>

    <section class="positions__come_prepared">
      <SubHeaderTitle text="Come prepared" class="light" />

      <div class="positions__come_prepared__grid grid">
        <ComePreparedCard
          v-for="tip in tips"
          :key="tip.id"
          :counter="tip.id"
          :title="tip.title"
          :desc="tip.desc"
        />
      </div>
    </section>

    <section class="positions__available">
      <SubHeaderTitle text="Carreias disponíveis" />
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
      "getTips",
      "getNPositions",
      "getPositionsNames"
    ])
  }
};
</script>
