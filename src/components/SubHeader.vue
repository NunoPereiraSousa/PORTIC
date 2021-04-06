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
      <p>EN</p>
      <hr />
      <p class="selected">PT</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "SubHeader"
};
</script>

<style></style>
