<template>
  <div>
    <section class="projects_catalog">
      <div class="flex flex-jc-c flex-ai-c flex-fd-c">
        <h1 class="projects_catalog__title">{{ $t("entities.title") }}</h1>
        <p class="projects_catalog__quote">
          {{ $t("entities.desc") }}
        </p>
        <div class="projects_catalog__filters grid">
          <div>
            <label for="projectTxt">{{ $t("entities.labels.search") }}</label
            ><br />
            <input
              type="text"
              id="projectTxt"
              :placeholder="$t('entities.input.placeholder')"
              v-model="entityTxt"
            />
          </div>
          <div>
            <label for="sortBtn">{{ $t("entities.labels.order") }}</label
            ><br />
            <button
              id="sortBtn"
              class="projects_catalog__filters__sorting flex flex-ai-c flex-jc-sa"
              @click="order = !order"
            >
              <div>{{ $t("entities.input.filter") }}</div>
              <div>
                {{ order === true ? "A-Z" : "Z-A" }}
              </div>
            </button>
          </div>
        </div>
      </div>
      <div class="projects__grid grid" style="width: 100%">
        <div v-if="getSecondaryEntities.length < 1">
          Não foi encontrado nenhum projetos!
        </div>
        <EntityCard
          v-for="entity in filterEntities"
          :key="entity.id_entity"
          :id="entity.id_entity"
          :initials="entity.initials"
          :title="entity.designation"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import EntityCard from "@/components/EntityCard.vue";

export default {
  components: {
    EntityCard
  },
  data: () => {
    return {
      order: true,
      entityTxt: ""
    };
  },
  async created() {
    try {
      await this.$store.dispatch("setSecEntities");

      console.log(this.getSecondaryEntities);
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters(["getSecondaryEntities"]),
    filterEntities() {
      return this.getSecondaryEntities.filter(
        entity =>
          !entity.initials.toLowerCase().indexOf(this.entityTxt.toLowerCase())
      );
    }
  },
  methods: {
    onHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.toggle("hovered");
    },
    notHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.remove("hovered");
    }
  }
};
</script>
