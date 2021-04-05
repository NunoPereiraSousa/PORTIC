<template>
  <div class="areas_information__icons__card flex flex-ai-c flex-fd-c">
    <img :src="icon" alt="icon" />
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
  }
};
</script>
