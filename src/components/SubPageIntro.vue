<template>
  <div class="sub_page_intro grid">
    <div>
      <div class="sub_page_intro__paragraphs">
        <p>Porto / Research /</p>
        <p>Technology / Innovation / Centre</p>
      </div>
      <div class="sub_page_intro__title">
        <h1>{{ categoryTitle }}</h1>
      </div>
    </div>
    <div class="sub_page_intro__text">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubPageIntro",
  props: {
    categoryTitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>
