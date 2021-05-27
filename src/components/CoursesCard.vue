<template>
  <div
    class="courses__grid__card"
    :id="card_id"
    @click="expand(index)"
    v-on:click="show = !show"
  >
    <div class="flex flex-ai-c flex-jc-sb">
      <h2 class="courses__grid__card__title">{{ courseName }}</h2>
      <button class="courses__grid__card__button" :id="button_id">
        <div class="courses__grid__card__button__lines"></div>
        <div class="courses__grid__card__button__lines"></div>
      </button>
    </div>
    <div class="courses__grid__card__toggle collapse">
      <div class="courses__grid__card__content">
        <p
          class="courses__grid__card__content__paragraph"
          v-html="courseDesc"
        ></p>
      </div>

      <!-- <div class="courses__grid__card__buttons flex flex-ai-c flex-jc-sb">
        <div class="grid">
          <KnowMoreBtn type="know__more light" text="Application" />
          <KnowMoreBtn type="know__more light" text="Notice" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import KnowMoreBtn from "@/components/KnowMoreBtn.vue";
export default {
  name: "CoursesCard",
  props: {
    courseName: {
      type: String,
      required: true
    },
    button_id: {
      type: Number,
      required: true
    },
    courseDesc: {
      type: String,
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
  components: {
    // KnowMoreBtn
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
        `#card_${index} .courses__grid__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      let card = document.querySelector(`#card_${index}`);

      let card__toggle = document.querySelector(
        `#card_${index} .courses__grid__card__toggle`
      );

      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        card__toggle.style.display = "block";

        console.log(card__toggle);

        let height = card__toggle.clientHeight;

        console.log(height);

        setTimeout(() => {
          card__toggle.style.height = `${height + 32}px`;
          card__toggle.style.paddingTop = `32px`;
          card__toggle.style.display = "";
        }, 1);

        card__toggle.classList = "courses__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.classList = "courses__grid__card__toggle open";
        }, 300);
      } else {
        card__toggle.classList = "courses__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.style.height = "0px";
          card__toggle.style.paddingTop = `0px`;
        }, 1);

        setTimeout(() => {
          card__toggle.classList = "courses__grid__card__toggle collapse";
          card__toggle.style.height = "";
          card__toggle.style.paddingTop = "";
        }, 300);
      }
    }
  }
};
</script>
