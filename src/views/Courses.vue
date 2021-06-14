<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      :categoryTitle="$t('courses.courseKey')"
      content="Research and development, technology and knowledge transfer, innovation and creativity, entrepreneurship, incubation, spin-offs, startups – these are all part of Research, Technology & Innovation, a holistic chain of interrelated activities.
PORTIC includes units and groups with activities in different stages of the knowledge and innovation chain, in several areas of knowledge."
    />
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
import CoursesCard from "@/components/CoursesCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    SubPageIntro,
    SubHeaderTitle,
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
