<template>
  <div class="admin_users flex">
    <DashboardHeader />

    <div class="admin_users__panel">
      <div class="admin_users__panel__overlay" @click="closePopup"></div>
      <DashboardTopHeader />
      <!-- <DashboardUsersPopup :userName="userName" />
      <DashboardUsersBlockPopup :userName="userName" /> -->

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="userTxt"
            type="text"
            placeholder="Pesquisar utilizador..."
          />
        </div>

        <div class="flex flex-ai-c">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.848"
              height="11.924"
              viewBox="0 0 15.848 11.924"
            >
              <g id="tick" transform="translate(0.5 -67.422)">
                <g
                  id="Group_44"
                  data-name="Group 44"
                  transform="translate(0 67.997)"
                >
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M14.556,68.214a.739.739,0,0,0-1.045,0l-8.85,8.85-3.4-3.4A.739.739,0,0,0,.216,74.706L4.14,78.63a.739.739,0,0,0,1.045,0l9.372-9.372A.739.739,0,0,0,14.556,68.214Z"
                    transform="translate(0 -67.997)"
                    fill="#28aa2d"
                    stroke="#28aa2d"
                    stroke-width="1"
                  />
                </g>
              </g>
            </svg>

            {{ institution == "" ? "PORTIC" : institution }}
          </p>
          <select v-model="institution">
            <option value="">Instituition</option>
            <option value="PORTIC" selected>PORTIC</option>
            <option value="ESMAD">ESMAD</option>
            <option value="ISEP">ISEP</option>
            <option value="FEUP">FEUP</option>
          </select>
        </div>
      </div>

      <div class="admin_users__panel__grid grid">
        <DashboardUsersCard
          v-for="(user, index) in searchFilter"
          :key="user.id_user"
          :id="user.id_user"
          :counter="index + 1"
          :userName="user.full_name"
          :userImg="
            user.picture == null
              ? 'https://usercontent.one/wp/adtpest.com/wp-content/uploads/2018/08/default-avatar.jpg'
              : user.picture
          "
          :userType="user.user_level"
          :userRole="user.user_status"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardUsersCard from "@/components/Dashboard/DashboardUsersCard.vue";
// import DashboardUsersPopup from "@/components/Dashboard/Popup/DashboardUsersPopup.vue";
// import DashboardUsersBlockPopup from "@/components/Dashboard/Popup/DashboardUsersBlockPopup.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardUsersCard
    // DashboardUsersPopup,
    // DashboardUsersBlockPopup
  },
  data: () => {
    return {
      institution: "PORTIC",
      userTxt: "",
      token: ""
    };
  },
  created() {},
  async mounted() {
    try {
      await this.$store.dispatch("setUsers");

      console.log(this.$store.getters.getUsers);
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters(["getSelectedUserByID", "getUsers"]),
    setUsersArr() {
      return this.getUsers;
    },
    // userName() {
    //   let id = this.getSelectedUserByID;

    //   let user = this.getUserByID(id);

    //   let name;

    //   if (user) {
    //     name = user.userName;
    //   }

    //   return name;
    // },
    searchFilter() {
      return this.setUsersArr.filter(user => {
        let search = true;

        if (this.userTxt != "")
          search = user.username
            .toLowerCase()
            .includes(this.userTxt.toLowerCase());

        return search;
      });
    }
  },
  methods: {
    closePopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
