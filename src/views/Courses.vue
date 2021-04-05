<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      categoryTitle="Cursos"
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
