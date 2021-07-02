<template>
  <div class="admin_about flex">
    <DashboardHeader />

    <div class="admin_about__panel">
      <DashboardTopHeader />

      <div class="admin_about__panel__grid">
        <div class="admin_actions_panel__form">
          <div class="admin_actions_panel__form__grid grid">
            <div>
              <h3 class="dashboard_subheader">
                Redes sociais
              </h3>
              <div class="flex flex-ai-c">
                <div v-for="social in socials" :key="social.id">
                  <label for="facebook">Link {{ social.name }}</label>
                  <br />
                  <input
                    type="url"
                    :placeholder="social.link"
                    v-model="edit.link"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="dashboard_subheader">
                Contactos
              </h3>

              <div class="flex flex-ai-c">
                <div v-for="contact in contacts" :key="contact.id">
                  <label :for="contact.name">{{ contact.name }}</label>
                  <br />
                  <input
                    type="number"
                    :id="contact.name"
                    :placeholder="contact.info"
                    v-model="edit.contactLink"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="admin_actions_panel__form__grid grid">
            <div>
              <h3 class="dashboard_subheader">
                Descrição
              </h3>
              <div class="area_edit_editor">
                <quill-editor
                  v-model="content"
                  :options="editorOption"
                  ref="quillEditor"
                >
                </quill-editor>
              </div>
            </div>

            <div>
              <h3 class="dashboard_subheader">
                Coordenadas Google Maps
              </h3>

              <div class="flex flex-ai-c">
                <div>
                  <label :for="coordinates[0].name">{{
                    coordinates[0].name
                  }}</label>
                  <br />
                  <input
                    type="number"
                    :id="coordinates[0].name"
                    v-model="edit.latitude"
                  />
                </div>
                <div>
                  <label :for="coordinates[1].name">{{
                    coordinates[1].name
                  }}</label>
                  <br />
                  <input
                    type="number"
                    :id="coordinates[1].name"
                    v-model="edit.longitude"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="dashboard_subheader">
                Highlights
              </h3>

              <div class="flex flex-ai-c">
                <div>
                  <label>Highlight 1</label>
                  <br />
                  <input
                    type="text"
                    :id="highlights[0]"
                    v-model="edit.highlight1"
                  />
                </div>
                <div>
                  <label>Highlight 2</label>
                  <br />
                  <input
                    type="text"
                    :id="highlights[1]"
                    v-model="edit.highlight2"
                  />
                </div>
                <div>
                  <label>Highlight 3</label>
                  <br />
                  <input
                    type="text"
                    :id="highlights[2]"
                    v-model="edit.highlight3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader
  },
  data: () => {
    return {
      content: "",
      socials: "",
      contacts: "",
      coordinates: "",
      highlights: "",
      edit: {
        link: "",
        contactLink: "",
        latitude: "",
        longitude: "",
        highlight1: "",
        highlight2: ""
      },
      editorOption: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: 1 }, { header: 2 }],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }],
            [{ indent: "-1" }, { indent: "+1" }],
            [{ direction: "rtl" }],
            [{ size: ["small", false, "large", "huge"] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: ["Porto Sans Stencil"] }],
            [
              {
                color: ["#080808", "#ffffff", "#c94d24", "#666666", "#999999"]
              },
              {
                background: [
                  "#080808",
                  "#ffffff",
                  "#c94d24",
                  "#666666",
                  "#999999"
                ]
              }
            ],
            [{ align: [] }],
            ["clean"],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },
  computed: {
    ...mapGetters([
      "getSocials",
      "getDescription",
      "getContacts",
      "getCoordinates",
      "getEntityHighlights"
    ])
  },
  created() {
    console.clear();

    this.socials = this.getSocials;
    this.contacts = this.getContacts;
    this.content = this.getDescription;
    this.coordinates = this.getCoordinates;
    this.highlights = this.getEntityHighlights;
    this.edit.highlight1 = this.highlights[0];
    this.edit.highlight2 = this.highlights[1];
    this.edit.highlight3 = this.highlights[2];

    console.log(this.highlights);

    this.getSocials.forEach(social => {
      this.edit.link = social.link;
    });

    this.getContacts.forEach(contact => {
      this.edit.contactLink = contact.info;
    });

    this.edit.latitude = this.coordinates[0].lat;
    this.edit.longitude = this.coordinates[1].lon;
  }
};
</script>
