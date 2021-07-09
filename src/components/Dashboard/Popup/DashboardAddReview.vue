<template>
  <div class="admin_delete_popup add_review">
    <h2>
      Adicionar uma review
    </h2>

    <div class="review_form grid">
      <div>
        <label for="nameTxt">Nome</label>
        <input
          type="text"
          id="nameTxt"
          placeholder="Nome da pessoa"
          v-model="add.person_name"
        />
      </div>
      <div>
        <label for="companyTxt">Empresa</label>
        <input
          type="text"
          id="companyTxt"
          placeholder="Nome da empresa"
          v-model="add.institution_name"
        />
      </div>
      <div>
        <label for="ptTxt">Texto em português</label>
        <textarea
          id="ptTxt"
          cols="30"
          rows="6"
          placeholder="Texto em português"
          maxlength="246"
          v-model="add.testimonial_text_pt"
        ></textarea>
      </div>
      <div>
        <label for="engTxt">Texto em inglês</label>
        <textarea
          cols="30"
          rows="6"
          id="engTxt"
          placeholder="Texto em inglês"
          maxlength="246"
          v-model="add.testimonial_text_eng"
        ></textarea>
      </div>
      <div>
        <label class="custom-file-upload">
          <input type="file" @change="uploadImg" />
          Upload da imagem
        </label>

        {{ imgName }}
      </div>
    </div>

    <div class="flex flex-ai-c flex-jc-sb">
      <button class="admin_delete_popup__confirm" @click="addReview">
        Confimar
      </button>
      <button class="admin_delete_popup__cancel" @click="closePopup">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardAddReview",
  data: () => {
    return {
      add: {
        person_name: "",
        institution_name: "",
        testimonial_text_pt: "",
        testimonial_text_eng: "",
        img: ""
      },
      imgName: ""
    };
  },
  methods: {
    async addReview() {
      this.$store.commit("SET_ADD_REVIEW_FORM", {
        person_name: this.add.person_name,
        institution_name: this.add.institution_name,
        testimonial_text_pt: this.add.testimonial_text_pt,
        testimonial_text_eng: this.add.testimonial_text_eng,
        image: this.add.img
      });

      try {
        await this.$store.dispatch("setAdminAddReview");
        await this.$store.dispatch("setAdminReviews");

        if (this.$store.getters.getAdminAddTestimonialsStatus === 201)
          this.notificationSuccess();
      } catch (error) {
        this.notificationError();
        return error;
      }

      this.resetForm();
      this.closePopup();
    },
    uploadImg(e) {
      const img = e.target.files[0];
      this.add.img = img;

      this.imgName = img.name;
    },
    closePopup() {
      let overlay = document.querySelector(".admin_tn__panel__overlay");
      let popup = document.querySelector(".add_review");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");
    },
    notificationSuccess() {
      this.$toast.success("Testemunho inserido com sucesso!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    notificationError() {
      this.$toast.error("Oops... erro!", {
        position: "top-right",
        timeout: 3000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },
    resetForm() {
      this.add.person_name = "";
      this.add.institution_name = "";
      this.add.testimonial_text_pt = "";
      this.add.testimonial_text_eng = "";
      this.add.img = "";
      this.imgName = "";
    }
  }
};
</script>
