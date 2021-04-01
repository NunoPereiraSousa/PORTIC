<template>
  <div>
    <SubPageIntro
      categoryTitle="Unities"
      title1="Title 1"
      text1="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title2="Title 2"
      text2="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title3="Title 3"
      text3="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      title4="Title 4"
      text4="Lorem ipsum dolor sit amet, consectetur
      enim ad minim veniam, quis nostrud."
      categoryDescription="Here goes some text about the projects and strategies PORTIC
      adotps in the projects ipsum dolor sit amet, consectetur 
      eiusmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <section class="principles">
      <MainTitle
        className="main__title"
        text="Our five guiding principles that we focus on."
      />

      <vue-glide
        :startAt="0"
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
        <vue-glide-slide
          v-for="principle in teamWorkPrinciples"
          :key="principle.id"
        >
          <PrincipleCard
            :counter="principle.id"
            :length="5"
            :title="principle.title"
            :desc="principle.desc"
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
    </section>
    <section class="unities">
      <MainTitle className="main__title" text="Explore our unities" />

      <div class="unities__grid grid">
        <UnitiesCard
          v-for="unity in unities"
          :key="unity.id"
          :counter="unity.id"
          :imageUrl="unity.imageUrl"
          :unityName="unity.unityName"
          :unityDesc="unity.unityDesc"
          :id="unity.id"
          @click.native="getUnityId"
        />
      </div>
      <SlidePanel :title="unitySelectedTitle" :content="unitySelectedContent" />
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SubPageIntro from "@/components/SubPageIntro.vue";
import MainTitle from "@/components/MainTitle.vue";
import SlidePanel from "@/components/SlidePanel.vue";
import PrincipleCard from "@/components/Unities/PrincipleCard.vue";
import UnitiesCard from "@/components/Unities/UnitiesCard.vue";
import Footer from "@/components/Footer.vue";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "Unities",
  components: {
    SubPageIntro,
    MainTitle,
    PrincipleCard,
    UnitiesCard,
    SlidePanel,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  data: () => {
    return {
      unities: null,
      teamWorkPrinciples: null,
      unitySelectedTitle: null,
      unitySelectedContent: null
    };
  },
  created() {
    this.unities = this.getUnities;
    this.teamWorkPrinciples = this.getTeamWorkPrinciples;
  },
  computed: {
    ...mapGetters([
      "getUnities",
      "getTeamWorkPrinciples",
      "getUnityById",
      "getSelectedUnityId"
    ])
  },
  methods: {
    getUnityId() {
      let unityId = this.getSelectedUnityId;

      if (unityId != null) this.getSelectedUnity(unityId);
    },
    getSelectedUnity(id) {
      let unity = this.getUnityById(id);

      this.unitySelectedTitle = unity.unityName;
      this.unitySelectedContent = unity.content;
    }
  }
};
</script>
