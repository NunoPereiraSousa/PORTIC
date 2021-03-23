<template>
  <div class="positions__available__card grid">
    <h2 class="positions__available__card__header">{{ title }}</h2>

    <div>
      <ul>
        <li v-for="category in categories" :key="category.id">
          {{ category }}
        </li>
      </ul>
    </div>

    <button
      class="positions__available__card__button flex flex-ai-c"
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

    <div>
      <button class="positions__available__card__apply_btn">
        Apply now
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailablePositionsCard",
  props: {
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
    }
  },
  data: () => {
    return {
      hide: true
    };
  },
  mounted() {
    // console.log(this.positions);
  }
};
</script>
