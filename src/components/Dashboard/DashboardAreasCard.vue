<template>
  <div class="admin_areas__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <h5 v-if="counter < 10">Área 0{{ counter }}</h5>
      <h5 v-else>Área {{ counter }}</h5>
      <h2>
        {{ areaName }}
        <!-- {{ $t(item.title, { areaName: areaName }) }} -->
      </h2>
    </div>
    <div class="flex flex-ai-c">
      <button class="admin_areas__panel__grid__card__edit">
        Editar
      </button>
      <button class="admin_areas__panel__grid__card__remove">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAreasCard",
  props: {
    areaName: {
      type: String,
      required: true
    },
    counter: {
      type: Number,
      required: true
    }
  }
};
</script>
