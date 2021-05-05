<template>
  <header class="top_header flex flex-ai-c flex-jc-sb">
    <div class="top_header__welcome">
      <h1>Bem-vindo, Nuno Sousa.</h1>
      <h3>{{ getTime() }}, {{ day }} de {{ getMonth() }}, {{ year }}</h3>
    </div>
    <div class="top_header__actions flex flex-ai-c">
      <button class="top_header__actions__remove flex flex-ai-c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.848"
          height="21.967"
          viewBox="0 0 17.848 21.967"
        >
          <g id="trash" transform="translate(-48)">
            <path
              id="Path_71"
              data-name="Path 71"
              d="M64.132,2.746H60.357V2.059A2.062,2.062,0,0,0,58.3,0H55.551a2.062,2.062,0,0,0-2.059,2.059v.686H49.716A1.718,1.718,0,0,0,48,4.462v2.4a.687.687,0,0,0,.686.686h.375l.593,12.455a2.057,2.057,0,0,0,2.057,1.961H62.137a2.057,2.057,0,0,0,2.057-1.961l.593-12.455h.375a.687.687,0,0,0,.686-.686v-2.4A1.718,1.718,0,0,0,64.132,2.746Zm-9.267-.686a.687.687,0,0,1,.686-.686H58.3a.687.687,0,0,1,.686.686v.686H54.865Zm-5.492,2.4a.344.344,0,0,1,.343-.343H64.132a.344.344,0,0,1,.343.343V6.178h-15.1ZM62.822,19.94a.686.686,0,0,1-.686.654H51.712a.686.686,0,0,1-.686-.654l-.59-12.389H63.412Z"
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M240.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,240.686,218.3Z"
              transform="translate(-183.762 -199.076)"
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M320.686,218.3a.686.686,0,0,0,.686-.686v-8.924a.686.686,0,1,0-1.373,0v8.924A.686.686,0,0,0,320.686,218.3Z"
              transform="translate(-260.33 -199.076)"
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M160.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,160.686,218.3Z"
              transform="translate(-107.195 -199.076)"
            />
          </g>
        </svg>

        Removidos
      </button>

      <button class="top_header__actions__add flex flex-ai-c">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.848"
          height="21.967"
          viewBox="0 0 17.848 21.967"
        >
          <g id="trash" transform="translate(-48)">
            <path
              id="Path_71"
              data-name="Path 71"
              d="M64.132,2.746H60.357V2.059A2.062,2.062,0,0,0,58.3,0H55.551a2.062,2.062,0,0,0-2.059,2.059v.686H49.716A1.718,1.718,0,0,0,48,4.462v2.4a.687.687,0,0,0,.686.686h.375l.593,12.455a2.057,2.057,0,0,0,2.057,1.961H62.137a2.057,2.057,0,0,0,2.057-1.961l.593-12.455h.375a.687.687,0,0,0,.686-.686v-2.4A1.718,1.718,0,0,0,64.132,2.746Zm-9.267-.686a.687.687,0,0,1,.686-.686H58.3a.687.687,0,0,1,.686.686v.686H54.865Zm-5.492,2.4a.344.344,0,0,1,.343-.343H64.132a.344.344,0,0,1,.343.343V6.178h-15.1ZM62.822,19.94a.686.686,0,0,1-.686.654H51.712a.686.686,0,0,1-.686-.654l-.59-12.389H63.412Z"
            />
            <path
              id="Path_72"
              data-name="Path 72"
              d="M240.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,240.686,218.3Z"
              transform="translate(-183.762 -199.076)"
            />
            <path
              id="Path_73"
              data-name="Path 73"
              d="M320.686,218.3a.686.686,0,0,0,.686-.686v-8.924a.686.686,0,1,0-1.373,0v8.924A.686.686,0,0,0,320.686,218.3Z"
              transform="translate(-260.33 -199.076)"
            />
            <path
              id="Path_74"
              data-name="Path 74"
              d="M160.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,160.686,218.3Z"
              transform="translate(-107.195 -199.076)"
            />
          </g>
        </svg>

        Adicionar
      </button>

      <div class="top_header__actions__image" :style="imageStyle"></div>
    </div>
  </header>
</template>

<script>
import methods from "../../views/Dashboard/DashboardHome";
export default {
  name: "DashboardTopHeader",
  data: () => {
    return {
      day: "",
      year: ""
    };
  },
  created() {
    this.day = methods.methods.getDay();
    this.year = methods.methods.getYear();
  },
  mounted() {
    this.updateTime = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.updateTime);
  },
  computed: {
    imageStyle() {
      return `background-image: url('https://www.hypeness.com.br/1/2020/01/Kobe_Bryant_04.jpg')`;
    }
  },
  methods: {
    getMonth() {
      let month = "";

      switch (new Date().getMonth()) {
        case 0:
          month = "janeiro";
          break;
        case 1:
          month = "fevereiro";
          break;
        case 2:
          month = "março";
          break;
        case 3:
          month = "abril";
          break;
        case 4:
          month = "maio";
          break;
        case 5:
          month = "junho";
          break;
        case 6:
          month = "julho";
          break;
        case 7:
          month = "agosto";
          break;
        case 8:
          month = "setembro";
          break;
        case 9:
          month = "outubro";
          break;
        case 10:
          month = "novembro";
          break;
        case 11:
          month = "dezembro";
          break;
      }

      return month;
    },
    getTime() {
      let now = new Date();

      return `${now.getHours()}:${now.getMinutes()}`;
    }
  }
};
</script>
