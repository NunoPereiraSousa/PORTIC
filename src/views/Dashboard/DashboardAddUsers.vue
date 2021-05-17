<template>
  <div class="admin_actions flex">
    <DashboardHeader />

    <div class="admin_actions_panel">
      <div class="admin_actions_panel__header flex flex-jc-sb flex-ai-c">
        <div
          class="admin_actions_panel__header__languages flex flex-jc-sb flex-ai-c"
        >
          <button class="pt selected">Português</button>
        </div>
        <div>
          <h3>
            Adicionar utilizador
          </h3>
        </div>
        <div>
          <button class="edit_confirm_button">
            Confirmar
          </button>
          <router-link
            :to="{ name: 'DashboardUsers' }"
            class="edit_cancel_button"
          >
            Cancelar
          </router-link>
        </div>
      </div>

      <div class="admin_actions_panel__user_form">
        <h3 class="dashboard_subheader">
          Informações do utilizador
        </h3>
        <div class="flex flex-ai-c">
          <input type="text" placeholder="Nome do colaborador" />
          <select v-model="userType">
            <option selected>Tipo do colaborador</option>
            <option value="admin">Administrador</option>
            <option value="normal">Utilizador Normal</option>
          </select>
          <select v-model="userRole">
            <option selected>Função do colaborador</option>
            <option value="developer">Administrador</option>
            <option value="communication">Utilizador Normal</option>
          </select>
        </div>
        <h3 class="dashboard_subheader">
          Fotografia do colaborador
        </h3>
        <label class="custom-file-upload">
          <input type="file" />
          Fotografia
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";

export default {
  components: {
    DashboardHeader
  },
  data: () => {
    return {
      userType: "Tipo do colaborador",
      userRole: "Função do colaborador"
    };
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_actions_panel"
    ).style.paddingLeft = `${navbar_width}px`;
  }
};
</script>
