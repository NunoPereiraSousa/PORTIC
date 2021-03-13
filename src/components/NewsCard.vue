<template>
  <div class="news__cards__card grid">
    <img src="../../assets/news1.png" alt="News Image" />
    <div class="news__card__content flex flex-fd-c flex-jc-sb">
      <h2>{{ title }}</h2>
      <p>{{ desc }}</p>
      <div class="flex flex-ai-c flex-jc-sb">
        <p class="date">{{ date }}</p>
        <a href="">Saber mais</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["image", "title", "desc", "date"]
};
</script>
