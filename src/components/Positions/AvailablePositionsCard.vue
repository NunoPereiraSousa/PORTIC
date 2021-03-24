<template>
  <div class="positions__available__card grid" :id="card_id">
    <div class="flex flex-fd-c flex-jc-sb">
      <h2 class="positions__available__card__header">{{ title }}</h2>
      <button
        class="positions__available__card__button flex flex-ai-c hide-below-tablet"
        @click="toggleInfo(index)"
      >
        <div class="positions__available__card__button__container">
          <div class="positions__available__card__button__lines"></div>
          <div class="positions__available__card__button__lines"></div>
        </div>
        <h4 class="positions__available__card__button__header">More details</h4>
      </button>
    </div>

    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category }}
      </li>
    </ul>

    <button
      class="positions__available__card__button flex flex-ai-c hide-above-tablet"
      @click="hide = !hide"
    >
      <div class="positions__available__card__button__container">
        <div class="positions__available__card__button__lines"></div>
        <div class="positions__available__card__button__lines"></div>
      </div>
      <h4 class="positions__available__card__button__header">More details</h4>
    </button>

    <div class="positions__available__card__info">
      <p v-html="content" v-if="!hide"></p>
    </div>

    <button class="positions__available__card__apply_btn">
      Apply now
    </button>
  </div>
</template>

<script>
export default {
  name: "AvailablePositionsCard",
  props: {
    card_id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    },
    content: {
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
      hide: true
    };
  },
  mounted() {
    // console.log(this.positions);
  },
  methods: {
    toggleInfo(index) {
      this.hide = !this.hide;

      // let lines = document.querySelectorAll(
      //   ".positions__available__card__button__lines"
      // );

      let lines = document.querySelectorAll(
        `#card_${index} .positions__available__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      let textArr = document.querySelectorAll(
        `#card_${index} .positions__available__card__info`
      );

      console.log(textArr);

      textArr.forEach(item => {
        item.classList.toggle("opened");
      });
    }
  }
};
</script>
