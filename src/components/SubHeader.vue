<template>
  <header class="subheader grid">
    <div class="subheader__contacts flex flex-jc-sb flex-ai-c">
      <i class="fa fa-envelope"></i>
      <p>portic@portic.ipp.pt</p>

      <div class="hide-for-mobile phone flex flex-jc-sb flex-ai-c">
        <i class="fas fa-phone-volume"></i>
        <p>(+351) 22 557 1020</p>
      </div>
    </div>
    <div class="subheader__socials flex flex-jc-sb flex-ai-c hide-above-phone">
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
