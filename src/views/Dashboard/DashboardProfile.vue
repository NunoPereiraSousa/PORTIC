<template>
  <div class="admin_profile flex">
    <DashboardHeader />

    <div class="admin_profile__panel">
      <!-- <DashboardTopHeader /> -->

      <div class="admin_profile__panel__banner"></div>

      <!-- <img
        class="admin_profile__panel__banner"
        src="../../../assets/porticbanner.png"
        alt="PORTIC BANNER"
                    :src="convertImage(getProfileImg)"

      /> -->

      <div v-if="!isHidden" class="admin_profile__panel__grid grid">
        <div class="admin__info">
          <img :src="getProfileImg" id="profilePic" alt="Profile Img" />

          <div class="flex flex-ai-c flex-jc-sb">
            <h3>{{ getUserInfo.full_name }}</h3>
            <p>{{ getUserInfo.username }}</p>
          </div>

          <p class="desc">
            {{ getUserInfo.description_pt }}
          </p>

          <div class="socials flex">
            <a
              :href="getUserInfo.linkedIn_url"
              class="socials__circle"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div class="admin__details">
          <p><span>Cargo: </span> <br />{{ getUserInfo.post }}</p>
          <p v-if="getUserInfo.email">
            <span>Email: </span> <br />
            {{ getUserInfo.email }}
          </p>
          <p v-if="getUserInfo.phone_numb">
            <span>Número de telemóvel: </span> <br />{{
              getUserInfo.phone_numb
            }}
          </p>
        </div>

        <button class="edit_profile active" @click="isHidden = !isHidden">
          Editar Perfil
        </button>
      </div>

      <div v-if="isHidden" class="admin_profile__panel__grid grid">
        <div class="admin__info">
          <label class="custom-file-upload">
            <input type="file" @change="uploadImage" />
            <img id="image" :src="getProfileImg" alt="Profile Img" />
          </label>

          <div class="flex flex-ai-c flex-jc-sb">
            <div>
              <label for="nameTxt">Nome e Sobrenome</label> <br />
              <input
                type="text"
                id="nameTxt"
                placeholder="Nuno Sousa"
                v-model="form.fullName"
              />
            </div>
            <div>
              <label for="usernameTxt">Nome de utilizador</label> <br />
              <input
                type="text"
                id="usernameTxt"
                placeholder="Jorge Reis"
                v-model="form.username"
              />
            </div>
          </div>

          <br />
          <label for="descTxt">Sobre mim</label>
          <textarea id="descTxt" cols="30" rows="4" v-model="form.descPt">
          </textarea>

          <br />
          <label for="descTxt">About me</label>
          <textarea id="descTxt" cols="30" rows="4" v-model="form.descEn">
          </textarea>

          <input
            type="text"
            placeholder="LinkedIn"
            style="width: 60%"
            v-model="form.linkedInUrl"
          />
        </div>

        <div class="admin__details">
          <label for="emailTxt">Email</label> <br />
          <input
            type="email"
            id="emailTxt"
            placeholder="something@gmail.com"
            v-model="form.email"
          /><br />

          <label for="telTxt">Email</label> <br />
          <input
            type="number"
            id="telTxt"
            placeholder="911222555"
            v-model="form.phoneNumber"
          /><br />

          <label for="roleTxt">Cargo</label> <br />
          <input type="text" id="roleTxt" v-model="form.role" />
        </div>

        <button class="edit_profile active" @click="editProfile">
          Guardar Perfil
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import { mapGetters } from "vuex";
// import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      tabs: ["Editar Perfil", "Guardar Perfil"],
      currentTab: 0,
      isHidden: false,
      loggedUser: {},
      user: {},
      form: {
        fullName: "",
        username: "",
        descPt: "",
        descEn: "",
        linkedInUrl: "",
        email: "",
        phoneNumber: "",
        role: "",
        image: ""
      }
    };
  },
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    this.form = {
      fullName: this.getUserInfo.full_name,
      username: this.getUserInfo.username,
      descPt:
        this.getUserInfo.description_pt == ""
          ? "Por definir..."
          : this.getUserInfo.description_pt,
      descEn:
        this.getUserInfo.description_eng == ""
          ? "Not written yet..."
          : this.getUserInfo.description_eng,
      linkedInUrl:
        this.getUserInfo.linkedIn_url == ""
          ? "https://www.linkedin.com/"
          : this.getUserInfo.linkedIn_url,
      email: this.getUserInfo.email,
      phoneNumber: this.getUserInfo.phone_numb,
      role:
        this.getUserInfo.post == "" ? "Por definir..." : this.getUserInfo.post,
      image: this.getUserInfo.picture
    };
  },
  computed: {
    ...mapGetters([
      "getUserByUsername",
      "getUsers",
      "getLoggedUser",
      "getUser",
      "getLoggedUser",
      "getUserStatus"
    ]),
    getUserInfo() {
      console.log(this.getUser);
      return this.getUser;
    },
    getProfileImg() {
      console.log(this.getUser);
      return this.getUser.picture == undefined
        ? "https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png"
        : this.getUser.picture;
    }
  },
  methods: {
    async editProfile() {
      this.isHidden = !this.isHidden;

      this.$store.commit("SET_EDIT_PROFILE_FORM", {
        username: this.form.username,
        description_pt:
          this.form.descPt == "" ? "Por definir..." : this.form.descPt,
        description_eng:
          this.form.descEn == "" ? "Por definir..." : this.form.descEn,
        email: this.form.email,
        phone_numb: this.form.phoneNumber,
        linkedIn_url:
          this.form.linkedInUrl == null
            ? "https://www.linkedin.com/"
            : this.form.linkedInUrl,
        fullName: this.form.fullName,
        post: this.form.role == "" ? "Por definir..." : this.form.role,
        image: this.form.image
      });

      console.log(this.form.role, this.form.image);

      // this.$store.commit("SET_USER_IMG", {
      //   image: this.image
      // });

      try {
        // edit profile
        await this.$store.dispatch("setEditProfile");
        // edit profile image
        await this.$store.dispatch("setUserImg");

        // get profile data
        await this.$store.dispatch("setUser");
      } catch (error) {
        console.log(`ERROR: ${error}`);
        return error;
      }
    },
    uploadImage(e) {
      const image = e.target.files[0];
      this.form.image = image;
      document.querySelector("#image").src = URL.createObjectURL(image);
    }
  }
};
</script>

<style></style>
