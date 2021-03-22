<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      categoryTitle="Courses"
      title1="Title 1"
      text1="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
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
    <MainTitle className="main__title" text="Explore our courses" />
    <section class="courses">
      <!-- <Intro extra="our " keyword="courses" /> -->
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
import SubPageIntro from "@/components/SubPageIntro.vue";
import MainTitle from "@/components/MainTitle.vue";
import CoursesCard from "@/components/CoursesCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    MainTitle,
    CoursesCard,
    Footer
  }
};
</script>
