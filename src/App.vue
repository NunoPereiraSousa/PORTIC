<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <SubHeader />
    <Header />
    <router-view />
  </div>
</template>

<script>
import SubHeader from "@/components/SubHeader.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    SubHeader,
    Header
  }
};
</script>

<style lang="scss">
@import "../css/style.css";
</style>
