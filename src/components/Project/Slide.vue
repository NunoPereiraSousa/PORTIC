<template>
  <div class="slide flex flex-ai-c">
    <span v-if="slideText == 'PORTIC'">{{ slideText.toUpperCase() }}</span>
    <div v-else>{{ slideText.toUpperCase() }}</div>
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: "Slide",
  props: {
    slideText: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  }
};
</script>
