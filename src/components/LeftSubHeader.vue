<template>
  <div :class="`${titleClass}__title`">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "LeftSubHeader",
  props: {
    titleClass: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
