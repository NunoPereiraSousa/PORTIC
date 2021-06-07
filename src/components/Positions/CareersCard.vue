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
        <h4 class="positions__available__card__button__header">
          {{ $t("careers.card.knowMore") }}
        </h4>
      </button>
    </div>

    <ul class="categories">
      <li v-for="category in categories" :key="category.id">
        {{ category.designation }}
      </li>
    </ul>

    <button
      class="positions__available__card__button flex flex-ai-c hide-above-tablet"
      @click="toggleInfo(index)"
    >
      <div class="positions__available__card__button__container">
        <div class="positions__available__card__button__lines"></div>
        <div class="positions__available__card__button__lines"></div>
      </div>
      <h4 class="positions__available__card__button__header">
        {{ $t("careers.card.knowMore") }}
      </h4>
    </button>

    <div
      class="positions__available__card__info positions__available__card__toggle collapse"
    >
      <p v-html="content"></p>
    </div>

    <a
      class="positions__available__card__apply_btn"
      href="https://portal.ipp.pt/concursos/sc/pessoal/"
      target="_blank"
    >
      {{ $t("careers.card.btnText") }}
    </a>
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
  methods: {
    toggleInfo(index) {
      // this.hide = !this.hide;

      let lines = document.querySelectorAll(
        `#card_${index} .positions__available__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      let card = document.querySelector(`#card_${index}`);

      let card__toggle = document.querySelector(
        `#card_${index} .positions__available__card__toggle`
      );

      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        card__toggle.style.display = "block";

        let height = card__toggle.clientHeight;

        setTimeout(() => {
          card__toggle.style.height = `${height + 32}px`;
          card__toggle.style.paddingTop = `32px`;
          card__toggle.style.display = "";
        }, 1);

        card__toggle.classList =
          "positions__available__card__info positions__available__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.classList =
            "positions__available__card__info positions__available__card__toggle open";
        }, 300);
      } else {
        card__toggle.classList =
          "positions__available__card__info positions__available__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.style.height = "0px";
          card__toggle.style.paddingTop = `0px`;
        }, 1);

        setTimeout(() => {
          card__toggle.classList =
            "positions__available__card__info positions__available__card__toggle collapse";
          card__toggle.style.height = "";
        }, 300);
      }
    }
  }
};
</script>
