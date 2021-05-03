<template>
  <router-link :to="{ name: 'Home' }" class="flex flex-ai-c admin_nav__link">
    <img :src="svg" alt="Icon" />
    {{ name }}
  </router-link>
</template>

<script>
export default {
  name: "DashboardHeaderLink",
  props: {
    svg: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
