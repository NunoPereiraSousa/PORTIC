<template>
  <div class="admin_users__panel__grid__card flex flex-ai-c flex-jc-sb">
    <div class="flex flex-ai-c">
      <div
        class="admin_users__panel__grid__card__img"
        :style="imageStyle"
      ></div>
      <h2>
        {{ userName }}
        <div>{{ userType }}</div>
        <div>{{ entity }}</div>
      </h2>
      <!-- <h3>
        {{ userRole == null ? "Por definir" : userRole }}
      </h3> -->
    </div>
    <div class="flex flex-ai-c">
      <button
        style="margin-right: 2rem;"
        class="admin_users__panel__grid__card__remove"
        @click="openEntityPopup(id)"
      >
        Entidade
      </button>
      <button
        style="margin-right: 2rem;"
        class="admin_users__panel__grid__card__remove"
        @click="openStatusPopup(id)"
      >
        Nível
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
      required: false
    },
    userRole: {
      type: String,
      required: false
    },
    entity: {
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
    // showBlockPopup(userId) {
    //   console.log(userId);
    // },
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
    },
    openStatusPopup(id) {
      this.$store.commit("SET_SELECTED_USER_ID", {
        id: id
      });

      let overlay = document.querySelector(".admin_users__panel__overlay2");

      let popup = document.querySelector(".change_status");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    openEntityPopup(id) {
      this.$store.commit("SET_SELECTED_USER_ID", {
        id: id
      });

      let overlay = document.querySelector(".admin_users__panel__overlay3");

      let popup = document.querySelector(".edit_entity_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
