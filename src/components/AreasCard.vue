<template>
  <div>
    <div
      class="areas__grid__card"
      :id="card_id"
      @click="expand(index)"
      v-on:click="show = !show"
    >
      <div class="flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c flex-jc-sb">
          <h5 class="areas__grid__card__sub_title" v-if="counter < 10">
            {{ $t("areas.areaKey") }} 0{{ counter }}
          </h5>
          <h5 class="areas__grid__card__sub_title" v-else>
            {{ $t("areas.areaKey") }} {{ counter }}
          </h5>
          <h2 class="areas__grid__card__title">
            {{ areaName }}
            <!-- {{ $t(item.title, { areaName: areaName }) }} -->
          </h2>
        </div>
        <button class="areas__grid__card__button" :id="button_id">
          <div class="areas__grid__card__button__lines"></div>
          <div class="areas__grid__card__button__lines"></div>
        </button>
      </div>
      <div class="areas__grid__card__content" v-if="show">
        <p class="areas__grid__card__content__paragraph">
          <!-- {{ $t("areas.content", { areaDesc: areaDesc }) }} -->
          {{ areaDesc }}
        </p>
      </div>
    </div>
  </div>
  <!-- <div class="areas__grid__card">
    <h2 class="areas__grid__card__title">{{ areaName }}</h2>
    <p class="areas__grid__card__paragraph">{{ areaDesc }}</p>
    <button class="areas__grid__card__button">
      <router-link :to="{ name: 'ProjectsCatalog' }">
        Know more about Area xpto
      </router-link>
    </button>
  </div> -->
</template>

<script>
import locale from "@/locales/pt.json";
import { mapGetters } from "vuex";

export default {
  name: "AreasCard",
  props: {
    areaName: {
      type: String,
      required: true,
      default: () => {
        // this.$t("areas").forEach(item => {
        //   console.log(item.title);
        //   return item.title;
        // });
        this.setPTLang();
      }
    },
    button_id: {
      type: Number,
      required: true
    },
    areaDesc: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    card_id: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data: () => {
    return {
      show: false,
      locale: locale
    };
  },
  computed: {
    ...mapGetters(["getAreas"]),
    setPTLang() {
      let areas = this.getAreas;
      let titles = areas.forEach(area => {
        return area.areaNamePT;
      });
      console.log(titles);
      return titles;
    }
  },
  mounted() {
    // console.log(this.locale);
  },
  methods: {
    expand(index) {
      this.selectedItem = index;

      //   let card = document.querySelector(`#card_${index}`);

      let lines = document.querySelectorAll(
        `#card_${index} .areas__grid__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });
    }
  }
};
</script>
