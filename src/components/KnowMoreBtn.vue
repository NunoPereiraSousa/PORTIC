<template>
  <div class="flex flex-ai-c flex-jc-c">
    <button :class="type">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "KnowMoreBtn",
  props: {
    type: {
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
