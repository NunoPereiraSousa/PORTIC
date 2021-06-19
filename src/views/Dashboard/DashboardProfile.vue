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
          <img
            src="https://www.hypeness.com.br/1/2020/01/Kobe_Bryant_04.jpg"
            alt="Picture"
          />

          <h3>Nuno Sousa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
            vitae esse temporibus obcaecati, minus odio. Vel, exercitationem et
            aperiam numquam beatae mollitia. At quae inventore porro illo ex
            eaque!
          </p>

          <div class="socials flex">
            <a href="" class="socials__circle">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="socials__circle">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>

        <div class="admin__details">
          <p>
            <span>Email: </span> <br />
            limaJorge20014@gmail.com
          </p>
          <p><span>Número de telemóvel: </span> <br />"939908427"</p>
          <p><span>Nível: </span> <br />Super Admin</p>
          <p><span>Estado da conta: </span> <br />Normal</p>
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

          <label for="nameTxt">Nome e Sobrenome</label> <br />
          <input type="text" id="nameTxt" placeholder="Nuno Sousa" />

          <br />
          <label for="descTxt">Sobre mim</label>
          <textarea id="descTxt" cols="30" rows="4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fugit
            vitae esse temporibus obcaecati, minus odio. Vel, exercitationem et
            aperiam numquam beatae mollitia. At quae inventore porro illo ex
            eaque!
          </textarea>

          <input type="text" placeholder="LinkedIn" />
          <input type="text" placeholder="Facebook" />
        </div>

        <div class="admin__details">
          <label for="emailTxt">Email</label> <br />
          <input
            type="email"
            id="emailTxt"
            placeholder="something@gmail.com"
          /><br />

          <label for="telTxt">Email</label> <br />
          <input type="number" id="telTxt" placeholder="911222555" /><br />

          <label for="levelTxt">Nível</label> <br />
          <input type="number" id="levelTxt" placeholder="Super Admin" />
        </div>

        <button class="edit_profile active" @click="isHidden = !isHidden">
          Guardar Perfil
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
// import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      tabs: ["Editar Perfil", "Guardar Perfil"],
      currentTab: 0,
      isHidden: false
    };
  }
};
</script>

<style></style>
