<template>
  <div>
    <div class="project">
      <section class="project__entry">
        <div class="project__entry__grid grid">
          <h1>
            <a>Project</a>
            <div>Ferrovia 4.0</div>
          </h1>

          <div class="project__entry__grid__circle flex flex-ai-c flex-jc-c">
            <h4>
              <div>
                RESEARCH
              </div>
              <div>
                DEVELOPMENT
              </div>
              <div>
                DEMONSTRATION
              </div>
            </h4>
          </div>

          <div class="project__entry__grid__contacts">
            <h3>
              <div>For enquires or more information please</div>
              <div>contact by phone number or email</div>
            </h3>

            <h2>
              <a href="tel:+351919554127">(+351) 919 554 127</a>
            </h2>
            <h2>
              <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
            </h2>
          </div>
        </div>
        <div class="project__entry__carousel">
          <div class="slide-track">
            <Slide v-for="i in 12" :key="i" slideText="Isep" />
          </div>
        </div>
      </section>
      <section class="project__objective">
        <SubHeaderTitle text="Description" />
        <p>
          The overall objective of the project is to develop different
          components, tools and systems, to be tested on rolling stock and real
          infrastructures, which are oriented towards the economic and
          ecological sustainability of the railway system, to reduce operating
          and maintenance costs; for reliable information systems to support
          decision-making in asset management and for the creation of security
          systems capable of monitoring the infrastructure and triggering alerts
          and protection / intervention measures. It is also the ambition of the
          project to ensure that cybersecurity technologies and methodologies
          are incorporated into the structure of information and communication
          technologies of the railway system, in order to avoid unwanted
          intrusions.
        </p>
        <p><b>Overall budget: </b>1 166 146 €</p>
        <p><b>PORTIC budget: </b>818 077 €</p>
      </section>
      <section class="project__gallery">
        <SubHeaderTitle text="The gallery" class="light" />
        <div class="project__gallery__grid">
          <vue-glide
            :bullet="true"
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
              <img
                src="https://www.kmuw.org/sites/kmuw/files/styles/x_large/public/201609/heart_in_the_middle.jpg"
                alt="Project Image"
              />
            </vue-glide-slide>
          </vue-glide>
        </div>
      </section>
      <section class="project__news">
        <SubHeaderTitle text="Latest News" class="light" />

        <div class="project__news__grid grid">
          <NewsCard
            v-for="i in 3"
            :key="i"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            title="Lorem ipsum dolor amet elit, sed consectetur  eiusmod."
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            date="05 de março"
          />
        </div>
      </section>
      <section class="project__team">
        <SubHeaderTitle text="Project Team" />

        <div class="project__team__grid grid">
          <TeamCard
            v-for="i in 5"
            :key="i"
            image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Fredrick_Douglass_Housing_Project_Towers_2010.jpg"
            name="Anna Mendiev"
            position="Art Director"
          />
        </div>
      </section>
      <section class="project__contacts">
        <SubHeaderTitle text="Contacts" />

        <p>
          For enquires or more information please contact by phone number or
          email
        </p>

        <h3>
          <a href="tel:+351919554127">(+351) 919 554 127</a>
        </h3>
        <h3>
          <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
        </h3>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import Slide from "@/components/Project/Slide.vue";
import NewsCard from "@/components/NewsCard.vue";
import TeamCard from "@/components/Project/TeamCard.vue";
import Footer from "@/components/Footer.vue";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  name: "Project",
  components: {
    SubHeaderTitle,
    Slide,
    NewsCard,
    TeamCard,
    Footer,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  }
};
</script>
