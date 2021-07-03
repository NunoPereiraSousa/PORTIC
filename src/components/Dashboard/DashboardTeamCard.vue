<template>
  <div class="project__team__grid__card flex flex-fd-c flex-ai-c">
    <img
      :src="
        image == null
          ? 'https://usercontent.one/wp/adtpest.com/wp-content/uploads/2018/08/default-avatar.jpg'
          : image
      "
      :alt="name"
    />

    <h2>{{ name }}</h2>

    <div class="buttons flex flex-fd-c flex-ai-c">
      <div class="flex">
        <div>
          <input
            type="radio"
            id="global"
            name="global"
            value="0"
            v-model="edit.permition"
            style="margin: 1rem 0;"
            @change="editTeamMember(id)"
          />
          <label for="global">Não pode editar</label>
        </div>
        <div style="margin-left: 1rem;">
          <input
            type="radio"
            id="project"
            name="project"
            value="1"
            v-model="edit.permition"
            style="margin: 1rem 0;"
            @change="editTeamMember(id)"
          />
          <label for="project">Pode editar</label>
        </div>
      </div>
      <button class="remove_button" @click="removeTeamMember(id)">
        Remover
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardTeamCard",
  props: {
    id: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    },
    name: {
      type: String,
      required: true
    }
    // number: {
    //   type: String,
    //   required: true
    // }
  },
  data: () => {
    return {
      edit: {
        permition: ""
      }
    };
  },
  methods: {
    async editTeamMember(id) {
      this.$store.commit("SET_EDIT_PROJECT_TEAM_FORM", {
        user_id: id,
        can_edit: this.edit.permition
      });

      console.log(this.edit.permition);

      try {
        await this.$store.dispatch("setAdminEditProjectTeam");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    async removeTeamMember(id) {
      console.log(id);

      this.$store.commit("SET_SELECTED_TEAM_MEMBER_ID", {
        id: id
      });

      try {
        await this.$store.dispatch("setAdminDeleteProjectTeam");
        await this.$store.dispatch("setAdminProjects");
      } catch (error) {
        return error;
      }
    }
  }
};
</script>
