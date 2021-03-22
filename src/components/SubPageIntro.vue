<template>
  <div class="sub_page_intro grid">
    <div class="sub_page_intro__paragraphs">
      <p>Porto / Research /</p>
      <p>Technology / Innovation / Centre</p>
    </div>
    <div class="sub_page_intro__title">
      <h1>{{ categoryTitle }}</h1>
    </div>
    <div class="sub_page_intro__stats">
      <div class="sub_page_intro__stats__card">
        <h3>{{ title1 }}</h3>
        <p>{{ text1 }}</p>
      </div>
      <div class="sub_page_intro__stats__card">
        <h3>{{ title2 }}</h3>
        <p>{{ text2 }}</p>
      </div>
    </div>
    <div class="sub_page_intro__stats">
      <div class="sub_page_intro__stats__card">
        <h3>{{ title3 }}</h3>
        <p>{{ text3 }}</p>
      </div>
      <div class="sub_page_intro__stats__card">
        <h3>{{ title4 }}</h3>
        <p>{{ text4 }}</p>
      </div>
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
    title1: {
      type: String,
      required: true
    },
    text1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    },
    title3: {
      type: String,
      required: true
    },
    text3: {
      type: String,
      required: true
    },
    title4: {
      type: String,
      required: true
    },
    text4: {
      type: String,
      required: true
    }
  }
};
</script>
