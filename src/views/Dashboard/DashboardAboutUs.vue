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
              <div class="flex flex-ai-c socials_wrapper">
                <div>
                  <label for="facebook">URL Facebook</label>
                  <br />
                  <input
                    id="facebook"
                    type="url"
                    placeholder="Facebook"
                    v-model="edit.fb"
                  />
                </div>
                <div>
                  <label for="linkedin">URL LinkedIn</label>
                  <br />
                  <input
                    id="linkedin"
                    type="url"
                    placeholder="LinkedIn"
                    v-model="edit.ln"
                  />
                </div>
                <div>
                  <label for="instagram">URL Instagram</label>
                  <br />
                  <input
                    id="instagram"
                    type="url"
                    placeholder="Instagram"
                    v-model="edit.ig"
                  />
                </div>
                <div>
                  <label for="twitter">URL Twitter</label>
                  <br />
                  <input
                    id="twitter"
                    type="url"
                    placeholder="Twitter"
                    v-model="edit.tt"
                  />
                </div>
                <div>
                  <label for="youtube">URL YouTube</label>
                  <br />
                  <input
                    id="youtube"
                    type="url"
                    placeholder="YouTube"
                    v-model="edit.yt"
                  />
                </div>
              </div>
            </div>

            <div>
              <h3 class="dashboard_subheader">
                Contactos
              </h3>

              <div class="flex flex-ai-c flex-wr-w">
                <div>
                  <label for="phone">Contacto telefónico</label>
                  <br />
                  <input
                    id="phone"
                    type="number"
                    placeholder="YouTube"
                    v-model="edit.phone_numb"
                  />
                </div>
                <div>
                  <label for="email">Email principal</label>
                  <br />
                  <input
                    id="email"
                    type="email"
                    placeholder="E-mail principal"
                    v-model="edit.email"
                  />
                </div>
                <div>
                  <label for="email2">E-mail secundário</label>
                  <br />
                  <input
                    id="email2"
                    type="email"
                    placeholder="E-mail secundário"
                    v-model="edit.email2"
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
        fb: "",
        ln: "",
        ig: "",
        tt: "",
        yt: "",
        link: "",
        phone_numb: "",
        email: "",
        email2: "",
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
