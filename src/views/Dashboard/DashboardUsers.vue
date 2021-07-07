<template>
  <div class="admin_users flex">
    <DashboardHeader />

    <div class="admin_users__panel">
      <div class="admin_users__panel__overlay" @click="closePopup"></div>
      <div class="admin_users__panel__overlay2" @click="closeStatusPopup"></div>
      <div class="admin_users__panel__overlay3" @click="closeEntityPopup"></div>

      <DashboardTopHeader />
      <DashboardUserStatePopup
        :username="getUsername"
        :levels="getUserLevels"
      />
      <DashboardEditUserEntity
        :username="getUsername"
        :initials="getEntityInitials"
      />
      <!--<DashboardUsersBlockPopup :userName="userName" /> -->

      <div class="dashboard_tools flex flex-ai-c flex-jc-sb">
        <div class="flex flex-ai-c">
          <input
            v-model="userTxt"
            type="text"
            placeholder="Pesquisar utilizador..."
          />

          <div class="flex flex-ai-c">
            <button
              v-for="(tab, index) in tabs"
              :key="tab"
              @click="currentTab = index"
              :class="{ active: currentTab === index }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.848"
                height="11.924"
                style="width: 20px"
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
              {{
                tab === "Utilizadores pendentes"
                  ? `Utilizadores pendentes: ${getNPendentUsers}`
                  : tab
              }}
            </button>
          </div>
        </div>
      </div>

      <div class="admin_users__panel__grid grid" v-show="currentTab === 0">
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
          :userRole="user.post"
          :entity="user.user_entity"
        />
      </div>

      <div class="admin_users__panel__grid grid" v-show="currentTab === 1">
        <DashboardUsersPendentCard
          v-for="(user, index) in searchFilter2"
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
          :userRole="user.post"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import DashboardUsersCard from "@/components/Dashboard/DashboardUsersCard.vue";
import DashboardUsersPendentCard from "@/components/Dashboard/DashboardUsersPendentCard.vue";
import DashboardUserStatePopup from "@/components/Dashboard/Popup/DashboardUserStatePopup.vue";
import DashboardEditUserEntity from "@/components/Dashboard/Popup/DashboardEditUserEntity.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    DashboardUsersCard,
    DashboardUsersPendentCard,
    DashboardUserStatePopup,
    DashboardEditUserEntity
  },
  data: () => {
    return {
      tabs: ["Utilizadores", "Utilizadores pendentes"],
      currentTab: 0,
      institution: "PORTIC",
      userTxt: "",
      token: ""
    };
  },
  async mounted() {
    try {
      await this.$store.dispatch("setUsers");
      await this.$store.dispatch("setAdminUserLevels");
      await this.$store.dispatch("setEntityInitials");

      console.log(this.getEntityInitials);
      console.log(this.getUsers);
    } catch (error) {
      return error;
    }
  },
  computed: {
    ...mapGetters([
      "getAdminSelectedUserId",
      "getAdminUserById",
      "getUsers",
      "getNPendentUsers",
      "getUserLevels",
      "getEntityInitials"
    ]),
    setUsersArr() {
      return this.getUsers;
    },
    getUsername() {
      let id = this.getAdminSelectedUserId;

      let user = this.getAdminUserById(id);
      console.log(user);

      let name;

      if (user) {
        name = user.full_name;
      }

      console.log(name);

      return name;
    },
    searchFilter() {
      return this.setUsersArr.filter(user => {
        let search = true;

        if (this.userTxt != "")
          search = user.username
            .toLowerCase()
            .includes(this.userTxt.toLowerCase());

        return search;
      });
    },
    searchFilter2() {
      return this.setUsersArr
        .filter(user => user.user_status === "Pendent Creation")
        .filter(user => {
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
    },
    closeStatusPopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay2");
      let popup = document.querySelector(".change_status");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    closeEntityPopup() {
      let overlay = document.querySelector(".admin_users__panel__overlay3");
      let popup = document.querySelector(".edit_entity_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    }
  }
};
</script>
