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

    // console.log(this.getSelectedUnityId, unity);

    this.unity.title = unity.designation;
    this.unity.content = unity.description;
    this.unity.image = this.convertImage(unity.img.data);
  },
  computed: {
    ...mapGetters(["getSelectedUnityId", "getUnityById"]),
    imageStyle() {
      return `background-image: url('${this.unity.image}')`;
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
