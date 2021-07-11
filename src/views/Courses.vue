<template>
  <div>
    <!-- <div class="scene"></div> -->
    <SubPageIntro
      :categoryTitle="$t('courses.courseKey')"
      :content="setMenuInfo.page_description"
    />
    <section class="courses">
      <SubHeaderTitle :text="$t('courses.title')" />
      <div class="courses__grid grid">
        <CoursesCard
          v-for="(course, index) in courses"
          :key="course.id_course"
          :index="index"
          :button_id="course.id_course"
          :card_id="`card_${index}`"
          :courseName="course.designation"
          :courseDesc="course.html_structure"
          :areas="course.area_tags"
          :careers="course.recruitment_tags"
          :projects="course.project_tags"
          :units="course.unity_tags"
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
    ...mapGetters([
      "getCourses",
      "getMenus",
      "getSelectedMenuID",
      "getCurrentMenuInfo"
    ]),
    courses() {
      return this.getCourses;
    },
    setMenuInfo() {
      return this.getCurrentMenuInfo;
    },
    getCurrentMenus() {
      let menus = this.getMenus;
      console.log(
        menus
          .filter(menu => menu.id_menu === this.getSelectedMenuID)
          .find(n => n.id_menu === this.getSelectedMenuID).page_description
      );

      return menus
        .filter(menu => menu.id_menu === this.getSelectedMenuID)
        .find(n => n.id_menu === this.getSelectedMenuID);
    }
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_COURSES_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      // await this.$store.dispatch("setEntityId");
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
