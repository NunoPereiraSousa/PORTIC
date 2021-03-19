<template>
  <div class="intro__title">
    <div :class="className">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MainTitle",
  props: {
    className: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
