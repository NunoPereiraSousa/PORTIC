<template>
  <div class="project__team__grid__card flex flex-fd-c flex-ai-c">
    <img :src="image" alt="Team member image" />

    <h2>{{ name }}</h2>
    <a :href="`tel:+351${number}`">{{ number }}</a>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  }
};
</script>
