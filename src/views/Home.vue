<template>
  <div class="home">
    <div class="scene"></div>
    <!-- <div class="overlay"></div> -->
    <Intro extra="" keyword="PORTIC" />
    <Quote />
    <section class="news">
      <h1 class="news__title">
        Discover our news and releases
      </h1>
      <div class="news__cards grid">
        <NewsCard
          image="https://jooinn.com/images/building-project-1.jpg"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <NewsCard
          image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <NewsCard
          image="https://www.itu.int/en/hq-building/PublishingImages/new-hq-building-impression-01.jpg"
          title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
          date="05 de março"
        />
        <div class="flex flex-ai-c flex-jc-c">
          <button>
            All news
          </button>
        </div>
      </div>
    </section>
    <section class="testimonials">
      <h1 class="testimonials__title">
        Clients who placed their trust in us
      </h1>
      <div class="testimonials__cards">
        <vue-glide
          :startAt="1"
          :gap="40"
          :breakpoints="{
            450: {
              perView: 1
            },
            768: {
              perView: 2
            },
            1200: {
              perView: 3
            }
          }"
          :rewind="false"
          :bound="true"
          :infinite="false"
        >
          <vue-glide-slide v-for="i in 10" :key="i">
            <TestimonialCard
              name="Alex Poporov"
              company="Apple inc"
              content="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet, 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet, 
                    adipiscing elit, sed do eiusmod tempor."
          /></vue-glide-slide>
          <template slot="control">
            <button data-glide-dir="<">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 400.004 400.004"
                class="left__arrow"
              >
                <path
                  d="M382.688 182.686H59.116l77.209-77.214c6.764-6.76 6.764-17.726 0-24.485-6.764-6.764-17.73-6.764-24.484 0L5.073 187.757c-6.764 6.76-6.764 17.727 0 24.485l106.768 106.775a17.252 17.252 0 0012.242 5.072c4.43 0 8.861-1.689 12.242-5.072 6.764-6.76 6.764-17.726 0-24.484l-77.209-77.218h323.572c9.562 0 17.316-7.753 17.316-17.315 0-9.562-7.753-17.314-17.316-17.314z"
                ></path>
              </svg>
            </button>
            <button data-glide-dir=">">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 268.832 268.832"
                class="right__arrow"
              >
                <path
                  d="M265.171 125.577l-80-80c-4.881-4.881-12.797-4.881-17.678 0-4.882 4.882-4.882 12.796 0 17.678l58.661 58.661H12.5c-6.903 0-12.5 5.597-12.5 12.5 0 6.902 5.597 12.5 12.5 12.5h213.654l-58.659 58.661c-4.882 4.882-4.882 12.796 0 17.678 2.44 2.439 5.64 3.661 8.839 3.661s6.398-1.222 8.839-3.661l79.998-80c4.882-4.882 4.882-12.796 0-17.678z"
                ></path>
              </svg>
            </button>
          </template>
        </vue-glide>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Intro from "@/components/Intro.vue";
import Quote from "@/components/Quote.vue";
import NewsCard from "@/components/NewsCard.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import Footer from "@/components/Footer.vue";
import { Glide, GlideSlide } from "vue-glide-js";
import { background } from "../../js/background";

export default {
  name: "Home",
  components: {
    Intro,
    Quote,
    NewsCard,
    TestimonialCard,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  mounted() {
    background();
  }
};
</script>
