<template>
  <div class="slide">
    <span v-if="slideText == 'PORTIC/P.PORTO'">{{
      slideText.toUpperCase()
    }}</span>
    <div v-else>{{ slideText.toUpperCase() }}</div>
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    slideText: {
      type: String,
      required: true
    }
  }
};
</script>
