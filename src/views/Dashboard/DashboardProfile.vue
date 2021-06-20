<template>
  <div class="admin_profile flex">
    <DashboardHeader />

    <div class="admin_profile__panel">
      <!-- <DashboardTopHeader /> -->

      <img
        class="admin_profile__panel__banner"
        src="../../../assets/porticbanner.png"
        alt="PORTIC BANNER"
      />

      <div v-if="!isHidden" class="admin_profile__panel__grid grid">
        <div class="admin__info">
          <img :src="convertImage(getProfileImg)" alt="Profile Img" />

          <div class="flex flex-ai-c flex-jc-sb">
            <h3>{{ getUserInfo.full_name }}</h3>
            <p>{{ getUserInfo.username }}</p>
          </div>

          <p class="desc">
            {{ getUserInfo.description_pt }}
          </p>

          <div class="socials flex">
            <a :href="getUserInfo.linkedIn_url" class="socials__circle">
              <i class="fab fa-linkedin"></i>
            </a>
            <a :href="getUserInfo.facebook_url" class="socials__circle">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>

        <div class="admin__details">
          <p>
            <span>Email: </span> <br />
            {{ getUserInfo.email }}
          </p>
          <p>
            <span>Número de telemóvel: </span> <br />{{
              getUserInfo.phone_numb
            }}
          </p>
          <p><span>Nível: </span> <br />{{ getUserInfo.user_level }}</p>
          <p>
            <span>Estado da conta: </span> <br />{{ getUserInfo.user_status }}
          </p>
        </div>

        <button class="edit_profile active" @click="isHidden = !isHidden">
          Editar Perfil
        </button>
      </div>

      <div v-if="isHidden" class="admin_profile__panel__grid grid">
        <div class="admin__info">
          <img
            src="https://www.hypeness.com.br/1/2020/01/Kobe_Bryant_04.jpg"
            alt="Picture"
          />

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
          <textarea id="descTxt" cols="30" rows="4" v-model="form.desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
            vitae esse temporibus obcaecati, minus odio. Vel, exercitationem et
            aperiam numquam beatae mollitia. At quae inventore porro illo ex
            eaque!
          </textarea>

          <input
            type="text"
            placeholder="LinkedIn"
            v-model="form.linkedInUrl"
          />
          <input
            type="text"
            placeholder="Facebook"
            v-model="form.facebookUrl"
            style="margin-left: 2rem;"
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

          <label for="levelTxt">Nível</label> <br />
          <input type="number" id="levelTxt" placeholder="Super Admin" />
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
        desc: "",
        linkedInUrl: "",
        facebookUrl: "",
        email: "",
        phoneNumber: ""
      },
      image: ""
    };
  },
  created() {
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    console.log(this.getUser.picture);

    this.form = {
      fullName: this.getUserInfo.full_name,
      username: this.getUserInfo.username,
      desc: this.getUserInfo.description_pt,
      linkedInUrl: this.getUserInfo.linkedIn_url,
      facebookUrl: this.getUserInfo.facebook_url,
      email: this.getUserInfo.email,
      phoneNumber: this.getUserInfo.phone_numb
    };
  },
  computed: {
    ...mapGetters([
      "getUserByUsername",
      "getUsers",
      "getLoggedUser",
      "getUser"
    ]),
    getUserInfo() {
      return this.getUser;
    },
    getProfileImg() {
      return this.getUser.picture.data;
    }
  },
  methods: {
    async editProfile() {
      this.isHidden = !this.isHidden;

      this.$store.commit("SET_EDIT_PROFILE_FORM", {
        username: this.form.username,
        description_pt: this.form.desc,
        description_eng: "Englishhhh",
        email: this.form.email,
        phone_numb: this.form.phoneNumber,
        facebook_url: this.form.facebookUrl,
        linkedIn_url: this.form.linkedInUrl,
        fullName: this.form.fullName
      });

      try {
        // edit profile
        await this.$store.dispatch("setEditProfile");

        // get profile data
        await this.$store.dispatch("setUser");
      } catch (error) {
        console.log(`ERROR: ${error}`);
        return error;
      }
    },
    convertImage(img) {
      let arrayBufferView = new Uint8Array(img);
      let blob = new Blob([arrayBufferView], { type: "image/png" });
      let urlCreator = window.URL || window.webkitURL;
      let image = urlCreator.createObjectURL(blob);

      return image;
    }
  }
};
</script>

<style></style>
