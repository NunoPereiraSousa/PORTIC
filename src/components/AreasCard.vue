<template>
  <div>
    <div
      class="areas__grid__card"
      :id="card_id"
      @click="expand(index)"
      v-on:click="show = !show"
    >
      <div class="flex flex-ai-c flex-jc-sb ">
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
      <p class="areas__grid__card__content areas__grid__card__toggle collapse">
        {{ areaDesc }}
      </p>
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
import { mapGetters } from "vuex";

export default {
  name: "AreasCard",
  props: {
    areaName: {
      type: String,
      required: true
    },
    button_id: {
      type: String,
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
      show: false
    };
  },
  computed: {
    ...mapGetters(["getAreas"])
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

      let card = document.querySelector(`#card_${index}`);

      let card__toggle = document.querySelector(
        `#card_${index} .areas__grid__card__toggle`
      );

      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        card__toggle.style.display = "block";

        let height = card__toggle.clientHeight;

        console.log(height);

        setTimeout(() => {
          card__toggle.style.height = `${height + 32}px`;
          card__toggle.style.paddingTop = `32px`;
          card__toggle.style.display = "";
        }, 1);

        card__toggle.classList =
          "areas__grid__card__content areas__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.classList =
            "areas__grid__card__content areas__grid__card__toggle open";
        }, 300);
      } else {
        card__toggle.classList =
          "areas__grid__card__content areas__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.style.height = "0px";
          card__toggle.style.paddingTop = `0px`;
        }, 1);

        setTimeout(() => {
          card__toggle.classList =
            "areas__grid__card__content areas__grid__card__toggle collapse";
          card__toggle.style.height = "";
          card__toggle.style.paddingTop = "";
        }, 300);
      }
    }
  }
};
</script>
