<template>
  <header>
    <nav class="navbar flex flex-jc-sb flex-ai-c">
      <a href="" class="navbar__logo"
        ><img src="../assets/logo.png" alt="PORTIC"
      /></a>
      <div class="navbar__hamburger hide-for-desktop" @click="toggleNavbar">
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
        <div class="navbar__hamburger__lines"></div>
      </div>
      <div class="navbar__mobile_menu grid hide-for-desktop">
        <div class="navbar__mobile_menu__info">
          <h1>portic</h1>
          <p>An open door towards the future</p>
          <hr />
        </div>
        <div class="navbar__mobile_menu__links flex flex-fd-c">
          <a href="">Areas</a>
          <a href="">Courses</a>
          <a href="">Media</a>
          <a href="">Positions</a>
          <a href="">Projects</a>
          <a href="">Unities</a>
        </div>
        <div class="navbar__mobile_menu__policy">
          <p>Privacy Policy & © Copy Right 2021</p>
        </div>
      </div>
      <div class="navbar__desktop_menu hide-for-mobile">
        <div class="navbar__desktop_menu__links flex">
          <a href="">Areas</a>
          <a href="">Courses</a>
          <a href="">Media</a>
          <a href="">Positions</a>
          <a href="">Projects</a>
          <a href="">Unities</a>
        </div>
      </div>
    </nav>
    <div class="navbar__mobile_overlay"></div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toggleNavbar() {
      let lines = document.querySelectorAll(".navbar__hamburger__lines");

      lines.forEach(line => {
        line.classList.toggle("open");
      });

      // let title = document.querySelector(".header__title");
      // title.classList.toggle("change__color");

      let navbar__mobile_menu = document.querySelector(".navbar__mobile_menu");

      navbar__mobile_menu.classList.toggle("open__overlay");

      let navbar__mobile_overlay = document.querySelector(
        ".navbar__mobile_overlay"
      );
      navbar__mobile_overlay.classList.toggle("overlay_opened");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
