<template>
  <div class="broadcast__card flex flex-fd-c flex-jc-sb flex-ai-c">
    <p>{{ day }}</p>

    <img :src="icon" alt="icon" />

    <p>{{ temp }}°</p>
  </div>
</template>

<script>
export default {
  name: "DashboardWeather",
  props: {
    day: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    temp: {
      type: Number,
      required: true
    }
  }
};
</script>
