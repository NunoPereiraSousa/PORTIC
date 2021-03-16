<template>
  <div class="flex flex-ai-c flex-jc-c">
    <button
      class="know__more"
      :style="{
        'background-color': backgroundColor,
        color: color,
        border: border
      }"
    >
      All news
    </button>
  </div>
</template>

<script>
export default {
  name: "KnowMoreBtn",
  props: ["backgroundColor", "color", "border"]
};
</script>

<style></style>
