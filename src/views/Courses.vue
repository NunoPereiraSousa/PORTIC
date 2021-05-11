<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      :categoryTitle="$t('courses.courseKey')"
      :title1="$t('courses.nCourses')"
      :text1="$t('courses.nCoursesDesc', { n: $store.getters.getNCourses })"
      :title2="$t('courses.coursesTitle2')"
      :text2="$t('courses.coursesTitle2Desc')"
      content="Research and development, technology and knowledge transfer, innovation and creativity, entrepreneurship, incubation, spin-offs, startups – these are all part of Research, Technology & Innovation, a holistic chain of interrelated activities.
PORTIC includes units and groups with activities in different stages of the knowledge and innovation chain, in several areas of knowledge."
      :categoryDescription="$t('courses.infoDesc')"
    />
    <section class="courses_information">
      <SubHeaderTitle :text="$t('courses.icons.title')" class="light" />

      <p class="areas_information__info">
        {{ $t("courses.icons.desc") }}
      </p>

      <div class="areas_information__icons grid">
        <IconCard
          v-for="card in getCoursesIcons"
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
          v-for="course in getCourses"
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
  computed: {
    ...mapGetters([
      "getCoursesPT",
      "getCoursesEN",
      "getIconCoursesCardsPT",
      "getIconCoursesCardsEN"
    ]),
    getCoursesIcons() {
      let iconCoursesPT = this.getIconCoursesCardsPT;
      let iconCoursesEN = this.getIconCoursesCardsEN;

      return this.$i18n.locale == "pt" ? iconCoursesPT : iconCoursesEN;
    },
    getCourses() {
      let coursesPT = this.getCoursesPT;
      let coursesEN = this.getCoursesEN;

      return this.$i18n.locale == "pt" ? coursesPT : coursesEN;
    }
  }
};
</script>
