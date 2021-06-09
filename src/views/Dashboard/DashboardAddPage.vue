<template>
  <div class="admin_pages flex">
    <DashboardHeader />

    <div class="admin_pages__panel">
      <DashboardTopHeader />

      <hr />

      <div class="admin_pages__panel__nav flex flex-ai-c flex-jc-sb">
        <img src="../../assets/logo.png" alt="Logo PORTIC" />

        <ul class="flex flex-ai-c">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
          <li>
            <input type="text" placeholder="Novo menu" v-model="item.navMenu" />
          </li>
        </ul>
      </div>

      <div class="admin_pages__panel__image" :style="imageStyle">
        <label class="custom-file-upload">
          <input type="file" />
          Escolher imagem de fundo
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
export default {
  components: {
    DashboardHeader,
    DashboardTopHeader
  },
  data: () => {
    return {
      item: {
        navMenu: ""
      },
      image: "https://www.ipp.pt/investigacao/PORTIC/PORTIC/image"
    };
  },
  mounted() {
    // let navbar_width = document.querySelector(".admin_nav").offsetWidth;
    // document.querySelector(
    //   ".admin_pages__panel"
    // ).style.paddingLeft = `${navbar_width}px`;
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.image}')`;
    }
  }
};
</script>
