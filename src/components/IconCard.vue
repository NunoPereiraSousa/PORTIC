<template>
  <div class="areas_information__icons__card flex flex-ai-c flex-fd-c">
    <div class="areas_information__icons__card__img" :style="imageStyle"></div>
    <h4>
      {{ content }}
    </h4>
  </div>
</template>

<script>
export default {
  name: "IconCard",
  props: {
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.icon}')`;
    }
  }
};
</script>
