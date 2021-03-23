<template>
  <div class="positions__come_prepared__grid__card">
    <h2>0{{ counter }}. {{ title }}</h2>
    <p>{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: "ComePreparedCard",
  props: {
    counter: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    }
  }
};
</script>
