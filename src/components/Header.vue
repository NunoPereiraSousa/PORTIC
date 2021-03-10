<template>
  <header>
    <nav>
      <a href=""><img src="../assets/logo.png" alt=""/></a>
      <div class="header__hamburger hide-for-desktop">
        <div class="header__hamburger__lines"></div>
        <div class="header__hamburger__lines"></div>
        <div class="header__hamburger__lines"></div>
      </div>
      <!-- @click="toggleNavbar" -->
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
