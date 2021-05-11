<template>
  <div class="footer">
    <section class="footer__grid grid">
      <div class="footer__grid__timezones">
        <h1 class="footer__grid__timezones__title title">
          {{
            $t("footer.timezoneArea.title", {
              weekDay: getWeekDay,
              day: getDay,
              month: getMonth
            })
          }}
        </h1>
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
            <p>WASHINGTON</p>
          </div>
          <div class="footer__grid__timezones__times">
            <h2>
              {{ australianTime }}
              <sup>AM</sup>
            </h2>
            <p>MELBOURNE</p>
          </div>
          <div class="footer__grid__timezones__times">
            <h2>
              {{ japaneseTime }}
              <sup>AM</sup>
            </h2>
            <p>TOKYO</p>
          </div>
        </div>
      </div>
      <div class="footer__grid__directions">
        <h1 class="footer__grid__directions__title title">
          {{ $t("footer.directions.title") }}
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
        <h1 class="footer__grid__links__title title">
          {{ $t("footer.links.title") }}
        </h1>
        <div class="footer__grid__links__info grid">
          <router-link :to="{ name: 'Contacts' }">
            {{ $t("navbar.items[0]") }}
          </router-link>
          <router-link :to="{ name: 'Unities' }">
            {{ $t("navbar.items[1]") }}
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            {{ $t("navbar.items[2]") }}
          </router-link>
          <router-link :to="{ name: 'Courses' }">
            {{ $t("navbar.items[3]") }}
          </router-link>
          <router-link :to="{ name: 'ProjectsCatalog' }">
            {{ $t("navbar.items[4]") }}
          </router-link>
          <router-link :to="{ name: 'Media' }">
            {{ $t("navbar.items[5]") }}
          </router-link>
          <router-link :to="{ name: 'Positions' }">
            {{ $t("navbar.items[6]") }}
          </router-link>
          <router-link :to="{ name: 'SiteMap' }">
            {{ $t("navbar.items[7]") }}
          </router-link>
        </div>
      </div>
      <div class="footer__grid__socials">
        <h1 class="footer__grid__socials__title title">
          {{ $t("footer.socials.title") }}
        </h1>
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
      weekDay: "",
      day: "",
      month: "",
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
  computed: {
    getWeekDay() {
      let today = this.getDateTime();

      let weekDay = "";

      switch (today.getDay()) {
        case 0:
          this.$i18n.locale == "pt"
            ? (weekDay = "Domingo")
            : (weekDay = "Sunday");
          break;
        case 1:
          this.$i18n.locale == "pt"
            ? (weekDay = "Segunda")
            : (weekDay = "Monday");
          break;
        case 2:
          this.$i18n.locale == "pt"
            ? (weekDay = "Terça")
            : (weekDay = "Tuesday");
          break;
        case 3:
          this.$i18n.locale == "pt"
            ? (weekDay = "Quarta")
            : (weekDay = "Wednesday");
          break;
        case 4:
          this.$i18n.locale == "pt"
            ? (weekDay = "Quinta")
            : (weekDay = "Thursday");
          break;
        case 5:
          this.$i18n.locale == "pt"
            ? (weekDay = "Sexta")
            : (weekDay = "Friday");
          break;
        case 6:
          this.$i18n.locale == "pt"
            ? (weekDay = "Sábado")
            : (weekDay = "Saturday");
          break;
      }

      return weekDay;
    },
    getMonth() {
      let today = this.getDateTime();

      let month = "";

      switch (today.getMonth()) {
        case 0:
          this.$i18n.locale == "pt" ? (month = "janeiro") : (month = "January");
          break;
        case 1:
          this.$i18n.locale == "pt"
            ? (month = "fevereiro")
            : (month = "February");
          break;
        case 2:
          this.$i18n.locale == "pt" ? (month = "março") : (month = "March");
          break;
        case 3:
          this.$i18n.locale == "pt" ? (month = "abril") : (month = "April");
          break;
        case 4:
          this.$i18n.locale == "pt" ? (month = "maio") : (month = "May");
          break;
        case 5:
          this.$i18n.locale == "pt" ? (month = "junho") : (month = "June");
          break;
        case 6:
          this.$i18n.locale == "pt" ? (month = "julho") : (month = "July");
          break;
        case 7:
          this.$i18n.locale == "pt" ? (month = "agosto") : (month = "August");
          break;
        case 8:
          this.$i18n.locale == "pt"
            ? (month = "setembro")
            : (month = "September");
          break;
        case 9:
          this.$i18n.locale == "pt" ? (month = "outubro") : (month = "October");
          break;
        case 10:
          this.$i18n.locale == "pt"
            ? (month = "novembro")
            : (month = "November");
          break;
        case 11:
          this.$i18n.locale == "pt"
            ? (month = "dezembro")
            : (month = "December");
          break;
      }

      return month;
    },
    getDay() {
      let today = this.getDateTime();

      let day = today.getDate();

      if (this.$i18n.locale == "en") {
        switch (today.getDate()) {
          case 1:
            day = `${today.getDate()}st`;
            break;
          case 2:
            day = `${today.getDate()}nd`;
            break;
          case 3:
            day = `${today.getDate()}rd`;
            break;
          case 21:
            day = `${today.getDate()}st`;
            break;
          case 22:
            day = `${today.getDate()}nd`;
            break;
          case 23:
            day = `${today.getDate()}rd`;
            break;
          case 31:
            day = `${today.getDate()}st`;
            break;
          default:
            day = `${today.getDate()}th`;
        }
      }

      return day;
    }
  },
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
      // this.today = `${dayName}, ${weekDayNumber} de ${weekDayName}.`;
    },
    scrollTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style></style>
