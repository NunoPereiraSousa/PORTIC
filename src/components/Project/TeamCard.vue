<template>
  <div
    class="project__team__grid__card flex flex-fd-c flex-ai-c"
    @click="openProfile(id)"
  >
    <img :src="image" alt="Team member image" />

    <h2>{{ name }}</h2>
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamCard",
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    number: {
      type: String,
      required: true
    }
  },
  methods: {
    openProfile(id) {
      this.$store.commit("SET_SELECTED_USER_ID", {
        id: id
      });

      this.$router.push({
        name: "Profile",
        params: { id: id }
      });
    }
  }
};
</script>
