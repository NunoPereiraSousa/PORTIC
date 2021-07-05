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
      <h3>
        {{ userType }}
      </h3>
      <h3>
        {{ userRole }}
      </h3>
    </div>
    <div class="flex flex-ai-c">
      <button
        class="admin_users__panel__grid__card__block"
        @click="showBlockPopup(id)"
      >
        Bloquear
      </button>
      <button
        class="admin_users__panel__grid__card__edit"
        @click="openPage(id, userName)"
      >
        Editar
      </button>
      <button
        class="admin_users__panel__grid__card__remove"
        @click="showPopup(id)"
      >
        Remover
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
      required: true
    },
    userRole: {
      type: String,
      required: true
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
    showBlockPopup(userId) {
      console.log(userId);
    },
    openPage(userId, userName) {
      console.log(userId);
      console.log(userName);
      this.$store.commit("SET_SELECTED_USER_ID", {
        id: userId
      });

      this.$router.push({
        name: "DashboardEditUser",
        params: { name: userName }
      });
    },
    showPopup(userId) {
      console.log(userId);
      //   let overlay = document.querySelector(".admin_users__panel__overlay");
      //   let popup = document.querySelector(".admin_delete_popup");
      //   overlay.classList.toggle("show_overlay");
      //   popup.classList.toggle("show_popup");

      //   // COURSE ID LOGIC
      //   this.$store.commit("SET_SELECTED_user_ID", {
      //     id: userId
      //   });
    }
  }
};
</script>
