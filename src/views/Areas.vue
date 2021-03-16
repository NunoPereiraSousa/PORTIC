<template>
  <div class="areas">
    <div class="scene"></div>
  </div>
</template>

<script>
import { background } from "../../js/background";
export default {
  mounted() {
    background();
  }
};
</script>
