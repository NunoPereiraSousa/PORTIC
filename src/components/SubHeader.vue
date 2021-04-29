<template>
  <header class="subheader grid">
    <div class="subheader__contacts flex flex-jc-sb flex-ai-c">
      <div class="email flex flex-jc-sb flex-ai-c">
        <i class="fa fa-envelope"></i>
        <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
      </div>

      <div class="hide-for-mobile phone flex flex-jc-sb flex-ai-c">
        <i class="fas fa-phone-volume"></i>
        <a href="tel:+351225571020">(+351) 22 557 1020</a>
      </div>
    </div>
    <div class="subheader__socials flex flex-jc-sb flex-ai-c hide-above-phone">
      <a href="https://twitter.com/politecnico" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.instagram.com/politecnicodoporto/" target="_blank">
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
    <div class="subheader__languages flex flex-jc-sb flex-ai-c">
      <button class="en" @click="changeLangEN">EN</button>
      <hr />
      <button class="pt" @click="changeLangPT">
        PT
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "SubHeader",
  data: () => {
    return {
      isDisabled: false
    };
  },
  mounted() {
    this.getLang();
  },
  methods: {
    changeLangEN() {
      this.$i18n.locale = "en";

      let enBtn = document.querySelector(".en");
      let ptBtn = document.querySelector(".pt");

      ptBtn.classList.remove("selected");
      enBtn.classList.add("selected");

      this.$store.commit("SET_LOCALE", this.$i18n.locale);
    },
    changeLangPT() {
      this.$i18n.locale = "pt";

      let enBtn = document.querySelector(".en");
      let ptBtn = document.querySelector(".pt");

      enBtn.classList.remove("selected");
      ptBtn.classList.add("selected");

      this.$store.commit("SET_LOCALE", this.$i18n.locale);
    },
    getLang() {
      let enBtn = document.querySelector(".en");
      let ptBtn = document.querySelector(".pt");

      if (this.$i18n.locale == "en") {
        enBtn.classList.add("selected");
      } else {
        ptBtn.classList.add("selected");
      }
    }
  }
};
</script>

<style></style>
