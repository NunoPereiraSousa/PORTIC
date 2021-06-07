<template>
  <div>
    <div class="unities_page">
      <div>
        <h1 class="unities_page__title">
          {{ unity.title }}
        </h1>
      </div>
      <h4 class="unities_page__content">
        <div class="unities_page__img" :style="imageStyle"></div>
        {{ unity.content }}
      </h4>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Footer
  },
  data: () => {
    return {
      unity: {
        title: "",
        content: "",
        image: ""
      }
    };
  },
  mounted() {
    let unity = this.getUnityById(this.getSelectedUnityId);

    this.unity.title = unity.unityName;
    this.unity.content = unity.content;
    this.unity.image = unity.imageUrl;
  },
  computed: {
    ...mapGetters(["getSelectedUnityId", "getUnityById"]),
    imageStyle() {
      return `background-image: url('${this.unity.image}')`;
    }
  }
};
</script>
