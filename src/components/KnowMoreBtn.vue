<template>
  <div class="flex flex-ai-c flex-jc-c">
    <button :class="type">
      All news
    </button>
  </div>
</template>

<script>
export default {
  name: "KnowMoreBtn",
  props: ["type"]
};
</script>

<style></style>
