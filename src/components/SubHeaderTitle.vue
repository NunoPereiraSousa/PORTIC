<template
  ><h1 class="sub__header__title">{{ text }}</h1>
</template>

<script>
export default {
  name: "SubHeaderTitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
