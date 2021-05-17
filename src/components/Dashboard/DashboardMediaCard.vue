<template>
  <div class="admin_medias__panel__grid__card">
    <iframe
      :src="videoURL"
      frameborder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="admin_medias__panel__grid__card__info">
      <h2>
        {{ title }}
      </h2>

      <div class="buttons flex flex-ai-c flex-jc-sb">
        <button
          class="admin_medias__panel__grid__card__edit"
          @click="openPage(id, courseName)"
        >
          Editar
        </button>
        <button
          class="admin_medias__panel__grid__card__remove"
          @click="showPopup(id)"
        >
          Remover
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardMediaCard",
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
