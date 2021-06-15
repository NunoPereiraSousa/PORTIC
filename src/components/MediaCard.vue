<template>
  <div class="media__grid__card">
    <iframe
      :src="videoURL"
      frameborder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="media__grid__card__info">
      <h1 class="media__grid__card__info__title">{{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MediaCard",
  props: {
    videoURL: {
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
