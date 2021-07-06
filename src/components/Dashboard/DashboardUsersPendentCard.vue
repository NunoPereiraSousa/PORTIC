<template>
  <div class="admin_users__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <div
        class="admin_users__panel__grid__card__img"
        :style="imageStyle"
      ></div>
      <h2>
        {{ userName }}
      </h2>
      <!-- <h3>
        {{ userType }}
      </h3> -->
      <h3>
        {{ userRole == null ? "Por definir" : userRole }}
      </h3>
    </div>
    <div class="flex flex-ai-c">
      <!-- <button
        class="admin_users__panel__grid__card__block"
        @click="showBlockPopup(id)"
      >
        Bloquear
      </button> -->
      <button class="admin_users__panel__grid__card__edit" @click="accept(id)">
        Aceitar
      </button>
      <button
        class="admin_users__panel__grid__card__remove"
        @click="decline(id)"
      >
        Recusar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardUsersCard",
  props: {
    userName: {
      type: String,
      required: true
    },
    userImg: {
      type: String,
      required: true
    },
    userType: {
      type: String,
      required: false
    },
    userRole: {
      type: String,
      required: false
    },
    counter: {
      type: Number,
      required: true
    },
    id: {
      type: String,
      required: false
    }
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.userImg}')`;
    }
  },
  methods: {
    async accept(id) {
      this.$store.commit("SET_NEW_USER_STATUS", {
        id: id,
        newStatus: "Normal"
      });

      console.log(id);

      try {
        await this.$store.dispatch("setAdminEditUserStatus");
        await this.$store.dispatch("setUsers");
      } catch (error) {
        return error;
      }
    },
    async decline(id) {
      this.$store.commit("SET_NEW_USER_STATUS", {
        id: id,
        newStatus: "Archived"
      });

      try {
        await this.$store.dispatch("setAdminEditUserStatus");
        await this.$store.dispatch("setUsers");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
