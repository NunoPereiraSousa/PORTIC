<template>
  <div
    class="areas__grid__card"
    :id="card_id"
    @click="expand(index)"
    v-on:click="show = !show"
  >
    <div class="flex flex-ai-c flex-jc-sb">
      <div class="flex flex-ai-c flex-jc-sb">
        <h5 class="areas__grid__card__sub_title" v-if="counter < 10">
          Área 0{{ counter }}
        </h5>
        <h5 class="areas__grid__card__sub_title" v-else>Área {{ counter }}</h5>
        <h2 class="areas__grid__card__title">{{ areaName }}</h2>
      </div>
      <button class="areas__grid__card__button" :id="button_id">
        <div class="areas__grid__card__button__lines"></div>
        <div class="areas__grid__card__button__lines"></div>
      </button>
    </div>
    <div class="areas__grid__card__content" v-if="show">
      <p class="areas__grid__card__content__paragraph">{{ areaDesc }}</p>
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
export default {
  name: "AreasCard",
  props: {
    areaName: {
      type: String,
      required: true
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
      show: false
    };
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
