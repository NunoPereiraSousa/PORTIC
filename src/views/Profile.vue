<template>
  <div class="profile">
    <div class="profile__banner"></div>

    <div class="profile__content">
      <img class="profile__img" :src="user.picture" alt="Nuno" />

      <h2 class="profile__name">{{ user.full_name }}</h2>

      <p class="profile__desc">
        {{ getCurrLang === "en" ? user.description_eng : user.description_pt }}
      </p>

      <div class="profile__socials__wrapper">
        <a class="profile__socials" :href="user.linkedIn_url"
          ><i class="fab fa-linkedin"></i> LinkedIn</a
        >
        <p class="profile__role">{{ user.post }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => {
    return {
      user: {}
    };
  },
  created() {
    let id = JSON.parse(localStorage.getItem("vuex"));
    console.log(id.usersModule.selectedUserId);
    this.user = this.getAdminUserById(id.usersModule.selectedUserId);

    console.log(this.user);
  },
  computed: {
    ...mapGetters(["getAdminSelectedUserId", "getAdminUserById"]),
    getCurrLang() {
      return this.$i18n.locale == "en" ? "en" : "pt";
    }
  }
};
</script>
