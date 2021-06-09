<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      :categoryTitle="$t('courses.courseKey')"
      :title1="$t('courses.nCourses')"
      :text1="$t('courses.nCoursesDesc', { n: 0 })"
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
          :key="card.id_courses_focus"
          :icon="convertImage(card.img.data)"
          :content="card.description"
        />
      </div>
    </section>
    <section class="courses">
      <SubHeaderTitle text="Explore os nossos cursos" />
      <div class="courses__grid grid">
        <CoursesCard
          v-for="(course, index) in courses"
          :key="course.id_course"
          :index="index"
          :button_id="course.id_course"
          :card_id="`card_${index}`"
          :courseName="course.designation"
          :courseDesc="course.html_structure"
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
    ...mapGetters(["getCourses", "getCoursesFocus"]),
    getCoursesIcons() {
      return this.getCoursesFocus;
    },
    courses() {
      return this.getCourses;
    }
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_COURSES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setCourses");
      await this.$store.dispatch("setCoursesFocus");
      console.log(this.$store.getters.getCoursesFocus);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  methods: {
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    }
  }
};
</script>
