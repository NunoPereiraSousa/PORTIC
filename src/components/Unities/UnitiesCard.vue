<template>
  <div class="unities__grid__card grid">
    <div class="unities__grid__card__image" :style="imageStyle"></div>
    <div class="unities__grid__card__info grid">
      <h2 class="unities__grid__card__info__title">{{ unityName }}</h2>
      <p class="unities__grid__card__info__description">{{ unityDesc }}</p>
      <div class="unities__grid__card__info__button">
        <div class="flex flex-ai-c">
          <button
            class="flex flex-ai-c flex-jc-sb"
            @click="openSlide(id, title)"
          >
            <div class="flex flex-ai-c flex-jc-c">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.832 268.832"
              >
                <path
                  d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"
                ></path>
              </svg>
            </div>
            <h3>{{ $t("unities.card.button") }}</h3>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UnitiesCard",
  props: {
    counter: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    unityName: {
      type: String,
      required: true
    },
    unityDesc: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.imageUrl}')`;
    }
  },
  methods: {
    openSlide(id, title) {
      // console.log(id, title);
      this.$store.commit("SET_SELECTED_UNITY_ID", { id: id });

      // let slide__panel = document.querySelector(".slide__panel");
      // slide__panel.classList.toggle("opened");
      // let headerHeight = document.querySelector(".headers").offsetHeight;
      // document.querySelector(".headers").style.top = `-${headerHeight}px`;
      // document.querySelector(".headers").style.zIndex = 0;
      // let slide__panel__overlay = document.querySelector(
      //   `.slide__panel__overlay`
      // );

      // slide__panel__overlay.classList.toggle("overlay_opened");

      this.$router.push({
        name: "UnitiesPage",
        params: { name: title }
      });
    }
  }
};
</script>
