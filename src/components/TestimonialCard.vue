<template>
  <div class="testimonials__cards__card">
    <img :src="image" alt="Testimonial Author" />
    <h3>{{ name }}</h3>
    <h4>{{ company }}</h4>
    <div class="testimonials__cards__card__text">
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "company", "content"]
};
</script>

<style></style>
