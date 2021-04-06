<template>
  <div class="footer">
    <section class="footer__grid grid">
      <div class="footer__grid__timezones">
        <h1 class="footer__grid__timezones__title title">{{ today }}</h1>
        <div class="footer__grid__timezones__worldwide grid">
          <div class="footer__grid__timezones__times">
            <h2>
              {{ londonTime }}
              <sup>PM</sup>
            </h2>
            <p>LON</p>
          </div>
          <div class="footer__grid__timezones__times">
            <h2>
              {{ usaTime }}
              <sup>AM</sup>
            </h2>
            <p>USA</p>
          </div>
          <div class="footer__grid__timezones__times">
            <h2>
              {{ australianTime }}
              <sup>AM</sup>
            </h2>
            <p>AUSTRALIA</p>
          </div>
          <div class="footer__grid__timezones__times">
            <h2>
              {{ japaneseTime }}
              <sup>AM</sup>
            </h2>
            <p>JAPAN</p>
          </div>
        </div>
      </div>
      <div class="footer__grid__directions">
        <h1 class="footer__grid__directions__title title">
          Como chegar ao PORTIC
        </h1>
        <div class="footer__grid__directions__info">
          <p>Rua Arquitecto Lobão Vital, 172</p>
          <p>4200-375 Porto</p>
          <p>Portugal</p>
          <p>
            <a href="tel:+351225571020">(+351) 22 557 1020</a>
          </p>
          <p>
            <a href="mailto:portic@portic.ipp.pt">portic@portic.ipp.pt</a>
          </p>
          <p>
            <a href="mailto:communication@portic.ipp.pt"
              >communication@portic.ipp.pt</a
            >
          </p>
        </div>
      </div>
      <div class="footer__grid__links">
        <h1 class="footer__grid__links__title title">Links rápidos</h1>
        <div class="footer__grid__links__info grid">
          <router-link :to="{ name: 'Contacts' }">
            Sobre nós
          </router-link>
          <router-link :to="{ name: 'Positions' }">
            Recrutamento
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Áreas
          </router-link>
          <router-link :to="{ name: 'Courses' }">
            Cursos
          </router-link>
          <router-link :to="{ name: 'Media' }">
            Mídia
          </router-link>
          <router-link :to="{ name: 'ProjectsCatalog' }">
            Projetos
          </router-link>
          <router-link :to="{ name: 'Unities' }">
            Unidades
          </router-link>
        </div>
      </div>
      <div class="footer__grid__socials">
        <h1 class="footer__grid__socials__title title">Redes sociais</h1>
        <div class="footer__grid__socials__media grid">
          <div class="first__cells">
            <a
              href="https://twitter.com/politecnico"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-twitter"></i>
              <p>Twitter</p>
            </a>
            <a
              href="https://www.instagram.com/politecnicodoporto/"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-instagram"></i>
              <p>Instagram</p>
            </a>
            <a
              href="https://www.flickr.com/people/politecnicodoporto/"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-flickr"></i>
              <p>Flickr</p>
            </a>
          </div>
          <div class="second__cells">
            <a
              href="https://www.youtube.com/channel/UCa0njrkoyEd8kwjIVPE5pNg"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-youtube"></i>
              <p>YouTube</p>
            </a>
            <a
              href="https://www.linkedin.com/company/portic-pporto/mycompany/"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-linkedin"></i>
              <p>LinkedIn</p>
            </a>
            <a
              href="https://www.facebook.com/porticpporto"
              target="_blank"
              class="grid"
            >
              <i class="fab fa-facebook-square"></i>
              <p>Facebook</p>
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="scroll_up">
      <div class="flex flex-ai-c flex-jc-fe" @click="scrollTop">
        <p>Voltar acima</p>
        <i class="fas fa-chevron-up"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      today: "",
      japaneseTime: "",
      australianTime: "",
      usaTime: "",
      londonTime: "",
      weekDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
  },
  mounted() {
    this.getTodaysDay();

    this.updateTimes = setInterval(() => {
      this.setJapaneseTime(),
        this.setAustralianTime(),
        this.setUsaTime(),
        this.setLondonTime();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.updateTimes);
  },
  computed: {},
  methods: {
    getDateTime() {
      let dateTime = new Date();
      return dateTime;
    },
    convertTime(time, timezone) {
      return new Date(
        (typeof time === "string"
          ? new Date(time)
          : time
        ).toLocaleString("en-US", { timeZone: timezone })
      );
    },
    setHoursOnTimezone(timezone) {
      return this.convertTime(this.getDateTime(), timezone).getHours() < 10
        ? `0${this.convertTime(this.getDateTime(), timezone).getHours()}`
        : this.convertTime(this.getDateTime(), timezone).getHours();
    },
    setMinutesOnTimezone(timezone) {
      return this.convertTime(this.getDateTime(), timezone).getMinutes() < 10
        ? `0${this.convertTime(this.getDateTime(), timezone).getMinutes()}`
        : this.convertTime(this.getDateTime(), timezone).getMinutes();
    },
    setJapaneseTime() {
      let hours = this.setHoursOnTimezone("Asia/Tokyo");

      let minutes = this.setMinutesOnTimezone("Asia/Tokyo");

      this.japaneseTime = `${hours}:${minutes}`;
    },
    setAustralianTime() {
      let hours = this.setHoursOnTimezone("Australia/Sydney");

      let minutes = this.setMinutesOnTimezone("Australia/Sydney");

      this.australianTime = `${hours}:${minutes}`;
    },
    setUsaTime() {
      let hours = this.setHoursOnTimezone("America/New_York");

      let minutes = this.setMinutesOnTimezone("America/New_York");

      this.usaTime = `${hours}:${minutes}`;
    },
    setLondonTime() {
      let hours = this.setHoursOnTimezone("Europe/London");

      let minutes = this.setMinutesOnTimezone("Europe/London");

      this.londonTime = `${hours}:${minutes}`;
    },
    getTodaysDay() {
      let today = this.getDateTime();

      let dayName = "";
      let weekDayName = "";
      let weekDayNumber = today.getDate();

      switch (today.getDay()) {
        case 0:
          dayName = "Domingo";
          break;
        case 1:
          dayName = "Segunda";
          break;
        case 2:
          dayName = "Terça";
          break;
        case 3:
          dayName = "Quarta";
          break;
        case 4:
          dayName = "Quinta";
          break;
        case 5:
          dayName = "Sexta";
          break;
        case 6:
          dayName = "Sábado";
          break;
      }

      switch (today.getMonth()) {
        case 0:
          weekDayName = "janeiro";
          break;
        case 1:
          weekDayName = "fevereiro";
          break;
        case 2:
          weekDayName = "março";
          break;
        case 3:
          weekDayName = "abril";
          break;
        case 4:
          weekDayName = "maio";
          break;
        case 5:
          weekDayName = "junho";
          break;
        case 6:
          weekDayName = "julho";
          break;
        case 7:
          weekDayName = "agosto";
          break;
        case 8:
          weekDayName = "setembro";
          break;
        case 9:
          weekDayName = "outubro";
          break;
        case 10:
          weekDayName = "novembro";
          break;
        case 11:
          weekDayName = "dezembro";
          break;
      }

      // switch (today.getDate()) {
      //   case 1:
      //     weekDayNumber = `${today.getDate()}st`;
      //     break;
      //   case 2:
      //     weekDayNumber = `${today.getDate()}nd`;
      //     break;
      //   case 3:
      //     weekDayNumber = `${today.getDate()}rd`;
      //     break;
      //   case 21:
      //     weekDayNumber = `${today.getDate()}st`;
      //     break;
      //   case 22:
      //     weekDayNumber = `${today.getDate()}nd`;
      //     break;
      //   case 23:
      //     weekDayNumber = `${today.getDate()}rd`;
      //     break;
      //   case 31:
      //     weekDayNumber = `${today.getDate()}st`;
      //     break;
      //   default:
      //     weekDayNumber = `${today.getDate()}th`;
      // }

      this.today = `${dayName}, ${weekDayNumber} de ${weekDayName}.`;
    },
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style></style>
