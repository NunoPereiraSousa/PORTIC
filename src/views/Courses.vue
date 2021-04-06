<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      categoryTitle="Cursos"
      title1="Número de cursos"
      :text1="
        `O centro PORTIC incorpora um número total de ${$store.getters.getNCourses} cursos.`
      "
      title2="Cursos focados em diversas áreas"
      text2="Os nossos cursos oferecem oportunidades em diferentes áreas de atuação."
      title3="Oportunidades nacionais e internacionais"
      text3="Possibilidade de cooperação com diversas entidades nacionais e internacionais."
      title4="Enrequecimento de conhecimento"
      text4="Através dos cursos, os alunos enriquessem o seu portfolio e seus conhecimentos."
      categoryDescription="Mais abaixo disponibilizamos informações acerca dos cursos que o PORTIC oferece, assim como informações relativas às categorias e áreas envolventes destes mesmos cursos."
    />
    <section class="courses_information">
      <SubHeaderTitle text="Foco nos nossos cursos" class="light" />

      <p class="areas_information__info">
        A Porto Design Factory oferece vários programas educativos, diversos em
        duração, objetivos ou até mesmo em metodologias pedagógicas, que podem
        envolver estudantes de cursos de licenciatura, mestrado, pós-graduação,
        doutoramento e pós-doc ou até mesmo profissionais e empreendedores.
      </p>

      <div class="areas_information__icons grid">
        <IconCard
          v-for="card in iconCoursesCards"
          :key="card.id"
          :icon="card.icon"
          :content="card.content"
        />
      </div>
    </section>
    <section class="courses">
      <SubHeaderTitle text="Explore os nossos cursos" />
      <div class="courses__grid grid">
        <CoursesCard
          v-for="course in courses"
          :key="course.id"
          :index="course.id"
          :button_id="course.id"
          :card_id="`card_${course.id}`"
          :courseName="course.courseName"
          :courseDesc="course.courseDesc"
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
import IconCard from "@/components/IconCard.vue";
import CoursesCard from "@/components/CoursesCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    SubHeaderTitle,
    IconCard,
    CoursesCard,
    Footer
  },
  data: () => {
    return {
      courses: null,
      iconCoursesCards: null
    };
  },
  mounted() {
    this.courses = this.getCourses;
    this.iconCoursesCards = this.getIconCoursesCards;
  },
  computed: {
    ...mapGetters(["getCourses", "getIconCoursesCards"])
  }
};
</script>
