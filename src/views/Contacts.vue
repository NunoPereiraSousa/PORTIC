<template>
  <div class="contacts">
    <div
      class="contacts__write flex flex-ai-c flex-jc-c hide-for-mobile"
      @click="toggleForm"
    >
      <svg
        id="edit"
        xmlns="http://www.w3.org/2000/svg"
        width="19.556"
        height="19.556"
        viewBox="0 0 19.556 19.556"
      >
        <g id="Group_56" data-name="Group 56">
          <g id="Group_55" data-name="Group 55">
            <path
              id="Path_56"
              data-name="Path 56"
              d="M0,79.916v4.075H4.075L16.1,71.968l-4.075-4.075Z"
              transform="translate(0 -64.435)"
              fill="#ffffff"
            />
            <path
              id="Path_57"
              data-name="Path 57"
              d="M264.729,2.855,262.192.318a1.089,1.089,0,0,0-1.538,0l-1.988,1.988,4.075,4.075,1.988-1.988A1.089,1.089,0,0,0,264.729,2.855Z"
              transform="translate(-245.491 0)"
              fill="#ffffff"
            />
          </g>
        </g>
      </svg>
    </div>
    <div class="contacts__overlay hide-for-mobile" @click="closeForm"></div>
    <div class="contacts__side_form flex flex-fd-c flex-jc-sb hide-for-mobile">
      <h1>{{ $t("aboutUs.contactUs") }}</h1>

      <form class="grid">
        <input
          type="text"
          id="nameTxt"
          :placeholder="$t('aboutUs.form.name')"
        />
        <input
          type="text"
          id="surnameTxt"
          :placeholder="$t('aboutUs.form.surname')"
        />
        <input
          type="text"
          id="emailTxt"
          :placeholder="$t('aboutUs.form.email')"
        />
        <input
          type="text"
          id="phoneNumberTxt"
          :placeholder="$t('aboutUs.form.phone')"
        />
        <textarea
          id="contentTxt"
          :placeholder="$t('aboutUs.form.content')"
          cols="30"
          rows="3"
        ></textarea>
        <input
          type="submit"
          :value="$t('aboutUs.form.submit')"
          class="submit_btn"
        />
      </form>

      <div
        class="contacts__side_form__back flex flex-ai-c flex-jc-c"
        @click="closeForm"
      >
        <div class="arrow"></div>
      </div>
    </div>
    <section class="contacts__intro">
      <div class="contacts__intro__grid grid hide-above-tablet">
        <div class="contacts__intro__grid__entrance grid">
          <div>
            <h1>Portic</h1>
            <h3>An open door towards the future</h3>
          </div>
          <div
            class="contacts__intro__grid__entrance__circle flex flex-ai-c flex-jc-c"
          >
            <h4>
              <div>
                Porto Research,
              </div>
              <div>
                Technology &
              </div>
              <div>
                Innovation Center
              </div>
              <div>
                <span>Politécnico do Porto</span>
              </div>
            </h4>
          </div>
        </div>
        <div
          class="contacts__intro__desc"
          v-html="$store.getters.getEntityData.desc_html"
        ></div>
      </div>
      <div class="contacts__intro__grid grid hide-below-tablet">
        <!-- <div class="contacts__intro__grid__contacts grid">
          <h3>{{ $t("aboutUs.contactUs") }}</h3>
          <div>
            <h2>
              <a :href="`tel:+351${$store.getters.getEntityPhoneNumberLink}`">{{
                $store.getters.getEntityPhoneNumber
              }}</a>
            </h2>
            <h2>
              <a :href="`mailto:${$store.getters.getEntityEmail}`">{{
                $store.getters.getEntityEmail
              }}</a>
            </h2>
          </div>
          <div class="contacts__intro__grid__contacts__socials grid">
            <a
              v-for="media in $store.getters.getEntitySocials"
              :key="media.social_media_type"
              :href="media.url"
              target="_blank"
            >
              <div v-if="media.social_media_type == 'Twitter'">
                <i class="fab fa-twitter"></i>
              </div>
              <div v-else-if="media.social_media_type == 'Facebook'">
                <i class="fab fa-facebook-square"></i>
              </div>
              <div v-else-if="media.social_media_type == 'LinkedIn'">
                <i class="fab fa-linkedin"></i>
              </div>
              <div v-else-if="media.social_media_type == 'Youtube'">
                <i class="fab fa-youtube"></i>
              </div>
              <div v-else-if="media.social_media_type == 'Instagram'">
                <i class="fab fa-instagram"></i>
              </div>
            </a>
          </div>
        </div> -->
        <div class="contacts__intro__grid__entrance grid">
          <div>
            <h1>Portic</h1>
            <h3>An open door towards the future</h3>
          </div>
          <div
            class="contacts__intro__grid__entrance__circle flex flex-ai-c flex-jc-c"
          >
            <h4>
              <div>
                Porto Research,
              </div>
              <div>
                Technology &
              </div>
              <div>
                Innovation Center
              </div>
              <div>
                <span>Politécnico do Porto</span>
              </div>
            </h4>
          </div>
        </div>
        <!-- <div class="contacts__intro__socials grid hide-for-desktop">
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-youtube"></i>
          </a>
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-facebook-square"></i>
          </a>
        </div> -->
        <div class="contacts__intro__desc grid hide-for-tablet">
          <p v-html="$store.getters.getEntityData.desc_html"></p>
        </div>
      </div>
    </section>
    <section class="areas_information">
      <SubHeaderTitle :text="$t('areas.secondTitle')" class="light" />

      <p class="areas_information__info">
        {{ $t("areas.areasInformation") }}
      </p>
      <div class="areas_information__icons grid">
        <IconCard
          v-for="card in getIcons"
          :key="card.id_areas_focus"
          :icon="card.img"
          :content="card.description"
        />
      </div>
    </section>
    <section class="areas">
      <SubHeaderTitle :text="$t('areas.thirdTitle')" />
      <div class="areas__grid grid">
        <AreasCard
          v-for="(area, index) in areas"
          :key="area.id_area"
          :counter="index + 1"
          :index="index"
          :button_id="area.id_area"
          :card_id="`card_${index}`"
          :areaName="area.designation"
          :areaDesc="area.description"
          :careers="area.recruitment_tags"
          :courses="area.course_tags"
          :projects="area.project_tags"
          :units="area.unity_tags"
        />
      </div>
    </section>
    <!-- <section class="contacts__what_we_focus">
      <SubHeaderTitle :text="$t('aboutUs.focusTitle')" class="light" />

      <div class="contacts__what_we_focus__grid grid">
        <WhatWeFocusCard
          v-for="(focus, index) in getFocuses"
          :key="index + 1"
          :text="focus.description"
        />
      </div>
    </section> -->
    <!-- <section class="contacts__testimonials">
      <h1 class="contacts__testimonials__title">
        {{ $t("aboutUs.testimonialsTitle") }}
      </h1>
      <h3 class="contacts__testimonials__subtitle">
        {{ $t("aboutUs.testimonialsDesc") }}
      </h3>

      <h1 class="alert">
        {{ $t("aboutUs.testimonialsSoon") }}
        <span>coming soon!</span>
      </h1>

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
            name="Steve Jobs"
            company="Apple inc"
            content="Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet, 
                    adipiscing elit, sed do eiusmod tempor 
                    incididunt. Lorem ipsum dolor sit amet."
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
    </section> -->
    <section class="contacts__form grid">
      <div class="contacts__form__contacts grid">
        <h3>{{ $t("aboutUs.contactUs") }}</h3>
        <div>
          <h2>
            <a :href="`tel:+351${$store.getters.getEntityData.contacts[0]}`">{{
              $store.getters.getEntityData.contacts[0]
            }}</a>
          </h2>
          <h2>
            <a :href="`mailto:${$store.getters.getEntityData.emails[0]}`">{{
              $store.getters.getEntityData.emails[0]
            }}</a>
          </h2>
        </div>
        <div class="contacts__form__contacts__socials grid">
          <a
            v-for="media in $store.getters.getEntitySocials"
            :key="media.name"
            :href="media.url"
            target="_blank"
          >
            <div v-if="media.name == 'Twitter'">
              <i class="fab fa-twitter"></i>
            </div>
            <div v-else-if="media.name == 'Facebook'">
              <i class="fab fa-facebook-square"></i>
            </div>
            <div v-else-if="media.name == 'LinkedIn'">
              <i class="fab fa-linkedin"></i>
            </div>
            <div v-else-if="media.name == 'Youtube'">
              <i class="fab fa-youtube"></i>
            </div>
            <div v-else-if="media.name == 'Instagram'">
              <i class="fab fa-instagram"></i>
            </div>
          </a>
        </div>
      </div>
      <div class="contacts__form__form ">
        <form class="grid">
          <h1>{{ $t("aboutUs.contactUs") }}</h1>

          <input
            type="text"
            id="nameTxt"
            :placeholder="$t('aboutUs.form.name')"
          />
          <input
            type="text"
            id="surnameTxt"
            :placeholder="$t('aboutUs.form.surname')"
          />
          <input
            type="text"
            id="emailTxt"
            :placeholder="$t('aboutUs.form.email')"
          />
          <input
            type="text"
            id="phoneNumberTxt"
            :placeholder="$t('aboutUs.form.phone')"
          />
          <textarea
            id="contentTxt"
            :placeholder="$t('aboutUs.form.content')"
            cols="30"
            rows="3"
          ></textarea>
          <input
            type="submit"
            :value="$t('aboutUs.form.submit')"
            class="submit_btn"
          />
        </form>
      </div>
    </section>
    <section class="contacts__map">
      <h4>09:00 - 19:00</h4>
      <h3>
        {{ $store.getters.getEntityData.street }},
        {{ $store.getters.getEntityData.postal_code }}
      </h3>
      <div id="map"></div>
    </section>
    <Footer class="no__margin" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import IconCard from "@/components/IconCard.vue";
// import WhatWeFocusCard from "@/components/Contacts/WhatWeFocusCard.vue";
// import TestimonialCard from "@/components/TestimonialCard.vue";
import AreasCard from "@/components/AreasCard.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contacts",
  components: {
    SubHeaderTitle,
    IconCard,
    // WhatWeFocusCard,
    // TestimonialCard,
    AreasCard,
    Footer
  },
  data: () => {
    return {};
  },
  created() {
    this.handleAPI();
  },
  mounted() {
    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: new window.google.maps.LatLng(
        this.$store.getters.getEntityData.lat,
        this.$store.getters.getEntityData.long
      ),
      zoom: 18,
      mapTypeId: "roadmap"
    });

    new window.google.maps.Marker({
      position: {
        lat: this.$store.getters.getEntityData.lat,
        lng: this.$store.getters.getEntityData.long
      },
      map: this.map
    });
  },
  computed: {
    ...mapGetters(["getAreas", "getAreasGroups"]),
    areas() {
      return this.getAreas;
    },
    getIcons() {
      return this.getAreasGroups;
    }
  },
  methods: {
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    },
    async handleAPI() {
      this.$store.commit("SET_SELECTED_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });
      this.$store.commit("SET_SELECTED_AREAS_LANG", {
        lang: this.$i18n.locale == "en" ? "en" : "pt"
      });

      try {
        // await this.$store.dispatch("setEntityId");
        await this.$store.dispatch("setAreas");
        await this.$store.dispatch("setAreasGroups");
      } catch (error) {
        console.log(`App: ${error}`);
        return error;
      }
    },
    toggleForm() {
      let contacts__side_form = document.querySelector(".contacts__side_form");

      contacts__side_form.classList.toggle("opened");

      let contacts__overlay = document.querySelector(".contacts__overlay");

      contacts__overlay.classList.toggle("overlay_opened");
    },
    closeForm() {
      let contacts__side_form = document.querySelector(".contacts__side_form");

      contacts__side_form.classList.toggle("opened");

      let contacts__overlay = document.querySelector(".contacts__overlay");

      contacts__overlay.classList.toggle("overlay_opened");
    }
  }
};
</script>
