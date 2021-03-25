<template>
  <div class="project__team__grid__card flex flex-fd-c flex-ai-c">
    <img :src="image" alt="Team member image" />

    <h2>{{ name }}</h2>
    <h3>{{ position }}</h3>
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
    position: {
      type: String,
      required: true
    }
  }
};
</script>
