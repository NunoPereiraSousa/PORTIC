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
import MainTitle from "@/components/MainTitle.vue";
import CoursesCard from "@/components/CoursesCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    MainTitle,
    CoursesCard,
    Footer
  },
  data: () => {
    return {
      courses: null
    };
  },
  mounted() {
    this.courses = this.getCourses;
  },
  computed: {
    ...mapGetters(["getCourses"])
  }
};
</script>
