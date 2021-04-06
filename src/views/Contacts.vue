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
      <h1>Contacte-nos facilmente</h1>

      <form class="grid">
        <input type="text" id="nameTxt" placeholder="Nome*" />
        <input type="text" id="surnameTxt" placeholder="Sobrenome*" />
        <input type="text" id="emailTxt" placeholder="E-mail*" />
        <input
          type="text"
          id="phoneNumberTxt"
          placeholder="Número de telemóvel*"
        />
        <textarea
          id="contentTxt"
          placeholder="Tell us something *"
          cols="30"
          rows="3"
        ></textarea>
        <input type="submit" value="Enviar" class="submit_btn" />
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
        <div class="contacts__intro__grid__contacts grid">
          <h3>Conecta-te connosco a qualquer momento</h3>
          <div>
            <h2>
              <a href="tel:+351919554127">(+351) 919 554 127</a>
            </h2>
            <h2>
              <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
            </h2>
          </div>
          <div class="contacts__intro__grid__contacts__socials grid">
            <a href="">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="">
              <i class="fab fa-flickr"></i>
            </a>
            <a href="">
              <i class="fab fa-youtube"></i>
            </a>
            <a href="">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
        <!-- <div class="contacts__intro__socials grid">
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="" class="flex flex-ai-c flex-jc-c">
            <i class="fab fa-flickr"></i>
          </a>
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
      </div>
      <div class="contacts__intro__grid grid hide-below-tablet">
        <div class="contacts__intro__grid__contacts grid">
          <h3>Conecte-se connosco a qualquer momento</h3>
          <div>
            <h2>
              <a href="tel:+351919554127">(+351) 919 554 127</a>
            </h2>
            <h2>
              <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
            </h2>
          </div>
          <div class="contacts__intro__grid__contacts__socials grid">
            <a href="https://twitter.com/politecnico" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.flickr.com/people/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-flickr"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/UCa0njrkoyEd8kwjIVPE5pNg"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/portic-pporto/mycompany/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/porticpporto" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
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
          <p>scroll down</p>
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
          <p>
            <span
              >O PORTIC -Porto Research, Technology & Innovation Center </span
            >visa agregar vários centros e grupos de investigação das escolas do
            P.PORTO num único espaço físico, configurando uma superestrutura
            dedicada à investigação, transferência de tecnologia, inovação e
            empreendedorismo. Alojará ainda a Porto Global Hub que integra a
            Porto Design Factory, a Porto Business Innovation e a Startup Porto
            e que tem como visão ajudar a criação de projetos locais
            sustentáveis para uma vida melhor.
          </p>
        </div>
      </div>
    </section>
    <section class="contacts__what_we_focus">
      <SubHeaderTitle text="Focamo-nos em" class="light" />

      <div class="contacts__what_we_focus__grid grid">
        <WhatWeFocusCard
          v-for="focus in focuses"
          :key="focus.id"
          :text="focus.text"
        />
      </div>
    </section>
    <section class="contacts__testimonials">
      <h1 class="contacts__testimonials__title">
        … e agora o que dizem sobre nós
      </h1>
      <h3 class="contacts__testimonials__subtitle">
        Nós disponibilizamos aos nossos clientes os melhores serviços possíveis
        e eles dão-nos incriveis feedbacks
      </h3>

      <h1 class="alert">
        Estamos a coletar muitos testemunhos...
        <span>coming soon!</span>
      </h1>

      <!-- <vue-glide
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
      </vue-glide> -->
    </section>
    <section class="contacts__form grid">
      <div class="contacts__form__contacts grid">
        <h3>Conecte-se connosco a qualquer momento</h3>
        <div>
          <h2>
            <a href="tel:+351919554127">(+351) 919 554 127</a>
          </h2>
          <h2>
            <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
          </h2>
        </div>
        <div class="contacts__form__contacts__socials grid">
          <a href="https://twitter.com/politecnico" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/politecnicodoporto/"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.flickr.com/people/politecnicodoporto/"
            target="_blank"
          >
            <i class="fab fa-flickr"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UCa0njrkoyEd8kwjIVPE5pNg"
            target="_blank"
          >
            <i class="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/portic-pporto/mycompany/"
            target="_blank"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/porticpporto" target="_blank">
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
      <div class="contacts__form__form ">
        <form class="grid">
          <h1>Contacte-nos</h1>

          <input type="text" id="nameTxt" placeholder="Nome *" />
          <input type="text" id="surnameTxt" placeholder="Sobrenome *" />
          <input type="text" id="emailTxt" placeholder="E-mail *" />
          <input
            type="text"
            id="phoneNumberTxt"
            placeholder="Número de telemóvel *"
          />
          <textarea
            id="contentTxt"
            placeholder="Diga-nos algo *"
            cols="30"
            rows="3"
          ></textarea>
          <input type="submit" value="Enviar" class="submit_btn" />
        </form>
      </div>
    </section>
    <section class="contacts__map">
      <h4>09:00 - 19:00</h4>
      <h3>Rua Arquitecto Lobão Vital 172, 4200-374 Porto</h3>
      <div id="map"></div>
    </section>
    <Footer class="no__margin" />
  </div>
</template>

<script>
import SubHeaderTitle from "@/components/SubHeaderTitle.vue";
import WhatWeFocusCard from "@/components/Contacts/WhatWeFocusCard.vue";
// import TestimonialCard from "@/components/TestimonialCard.vue";
import Footer from "@/components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "Contacts",
  components: {
    SubHeaderTitle,
    WhatWeFocusCard,
    // TestimonialCard,
    Footer
  },
  data: () => {
    return {
      focuses: null
    };
  },
  computed: {
    ...mapGetters(["getFocuses"])
  },
  mounted() {
    this.focuses = this.getFocuses;

    this.map = new window.google.maps.Map(document.getElementById("map"), {
      center: new window.google.maps.LatLng(41.176586, -8.60563),
      zoom: 18,
      mapTypeId: "roadmap"
    });

    new window.google.maps.Marker({
      position: { lat: 41.176586, lng: -8.60563 },
      map: this.map
    });
  },
  methods: {
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
