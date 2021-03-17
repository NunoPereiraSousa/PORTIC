<template>
  <div>
    <div class="scene"></div>
    <section class="courses">
      <Intro extra="our " keyword="courses" />
      <Quote />
      <div class="courses__grid grid">
        <CoursesCard
          v-for="i in 6"
          :key="i"
          :index="i"
          :button_id="i"
          :card_id="`card_${i}`"
          areaName="ME310 Porto"
          areaDesc="ME310 Porto O ME310 Porto é uma Pós-Graduação em Product Innovation, de natureza interdisciplinar, “project-based” e “team-based”, para estudantes com licenciatura ou mestrado concluídos, que representa uma verdadeira integração entre engenharia, ciências empresariais e design. Esta pós-graduação foi criada, originalmente, na Universidade de Stanford e funciona há mais de 40 anos. O curso está focado em ensinar aos estudantes os métodos de inovação e os processos necessários para designers, engenheiros e gestores de projetos de inovação do futuro. Após a conclusão do curso, os alunos adquirirão as competências necessárias para serem líderes globais de inovação."
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Intro from "@/components/Intro.vue";
import Quote from "@/components/Quote.vue";
import CoursesCard from "@/components/CoursesCard.vue";
import Footer from "@/components/Footer.vue";
import { background } from "../../js/background";
export default {
  components: {
    Intro,
    Quote,
    CoursesCard,
    Footer
  },
  mounted() {
    background();
  }
};
</script>
