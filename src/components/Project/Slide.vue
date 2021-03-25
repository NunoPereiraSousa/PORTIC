<template>
  <div class="slide">
    <span v-if="text === 'PORTIC'">{{ slideText.toUpperCase() }}</span>
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
  },
  data: () => {
    return {
      text: null
    };
  }
};
</script>
