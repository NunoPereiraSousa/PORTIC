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

      <div class="admin_pages__intro grid">
        <div>
          <div class="sub_page_intro__paragraphs">
            <p>Porto / Research /</p>
            <p>Technology / Innovation / Centre</p>
          </div>
          <div class="sub_page_intro__title">
            <h1>
              <input type="text" placeholder="Título" v-model="item.navMenu" />
            </h1>
          </div>
        </div>
        <div class="sub_page_intro__text">
          <p>
            <textarea
              cols="30"
              rows="10"
              placeholder="Descrição da página"
              v-model="item.navMenu"
            ></textarea>
          </p>
        </div>
      </div>

      <div class="section">
        <h1 class="sub__header__title">
          <input
            type="text"
            placeholder="Título da secção em português"
            v-model="item.navMenu"
          />
          <input
            type="text"
            placeholder="Título da secção em inglês"
            v-model="item.navMenu"
          />
        </h1>

        <div class="section__grid grid">
          <div
            class="section__grid__card"
            v-for="index in cards"
            :key="index"
            :id="`card_${index}`"
            v-on:click="show = !show"
          >
            <div class="flex flex-ai-c flex-jc-sb">
              <h2 class="section__grid__card__title">
                <input
                  type="text"
                  placeholder="Título do cartão"
                  v-model="item.cardTitle"
                />
              </h2>

              <div>
                <button class="add_card" @click="addHtmlCardRow(index)">
                  +1 Cartão
                </button>
                <button class="remove_card" @click="removeHtmlCardRow(index)">
                  -1 Cartão
                </button>
              </div>
              <button
                class="section__grid__card__button"
                :id="index"
                @click="expand(index)"
              >
                <div class="section__grid__card__button__lines"></div>
                <div class="section__grid__card__button__lines"></div>
              </button>
            </div>
            <div class="section__grid__card__toggle collapse">
              <div class="section__grid__card__content">
                <p class="section__grid__card__content__paragraph">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Descrição do cartão"
                    v-model="item.cardDesc"
                  ></textarea>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardTopHeader from "@/components/Dashboard/DashboardTopHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    DashboardHeader,
    DashboardTopHeader,
    Footer
  },
  data: () => {
    return {
      item: {
        navMenu: "",
        cardTitle: "",
        cardDesc: ""
      },
      image: "https://www.ipp.pt/investigacao/PORTIC/PORTIC/image",
      show: false,
      cards: [1]
    };
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.image}')`;
    }
  },
  methods: {
    addHtmlCardRow(index) {
      this.cards.push(index + 1);

      console.table(this.cards);
    },
    removeHtmlCardRow(index) {
      console.log(index);
      if (this.cards.length > 1) {
        this.cards = this.cards.filter(row => row !== index);
      }
    },
    expand(index) {
      this.selectedItem = index;

      let lines = document.querySelectorAll(
        `#card_${index} .section__grid__card__button__lines`
      );

      lines.forEach(line => {
        line.classList.toggle("minus");
      });

      let card = document.querySelector(`#card_${index}`);

      let card__toggle = document.querySelector(
        `#card_${index} .section__grid__card__toggle`
      );

      card.classList.toggle("open");

      if (card.classList.contains("open")) {
        card__toggle.style.display = "block";

        console.log(card__toggle);

        let height = card__toggle.clientHeight;

        console.log(height);

        setTimeout(() => {
          card__toggle.style.height = `${height + 32}px`;
          card__toggle.style.paddingTop = `32px`;
          card__toggle.style.display = "";
        }, 1);

        card__toggle.classList = "section__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.classList = "section__grid__card__toggle open";
        }, 300);
      } else {
        card__toggle.classList = "section__grid__card__toggle collapsing";

        setTimeout(() => {
          card__toggle.style.height = "0px";
          card__toggle.style.paddingTop = `0px`;
        }, 1);

        setTimeout(() => {
          card__toggle.classList = "section__grid__card__toggle collapse";
          card__toggle.style.height = "";
          card__toggle.style.paddingTop = "";
        }, 300);
      }
    }
  }
};
</script>
