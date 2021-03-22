<template>
  <div class="unities__card">
    <h4 class="unities__card__subtitle">0{{ counter }}/0{{ length }}</h4>
    <h2 class="unities__card__title">{{ title }}</h2>
    <p class="unities__card__desc">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "PrincipleCard",
  props: {
    counter: {
      type: Number,
      required: true
    },
    length: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>
