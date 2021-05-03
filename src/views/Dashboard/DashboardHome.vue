<template>
  <div class="admin_home flex ">
    <DashboardHeader />
    <div class="flex flex-ai-c admin_home__panel">
      <div class="admin_home__panel__grid grid">
        <div class="admin_home__panel__card">
          <div class="flex flex-ai-c flex-jc-sb">
            <h2>Bem-vindo Nuno.</h2>
            <a href="tel:+">
              <i class="fas fa-phone-alt"></i>
            </a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quos vero ullam! Alias est perspiciatis rerum, eveniet velit
            asperiores facilis dignissimos quis. Incidunt a ipsa consequuntur
            consectetur dolorum, impedit accusamus?
          </p>

          <h4>Terça-feira, dia 13 de abril de 2021.</h4>
          <img src="../../../assets/remote_team.png" id="svg" alt="Image" />
        </div>
        <div class="admin_home__panel__card weather grid">
          <div class="flex flex-jc-c">
            <div class="flex flex-fd-c temperature">
              <h1>{{ temperature }}°</h1>
              <h3>Celcius</h3>
            </div>
            <hr />
            <div class="flex flex-fd-c flex-jc-sb day">
              <p>{{ getWeekDay() }}</p>
              <h3>{{ getCurrentDate() }}</h3>
            </div>
          </div>
          <div class="grid broadcast">
            <DashboardWeather
              v-for="(weather, i) in weatherBroadcast.slice(0, 5)"
              :key="i"
              :temp="weather.temp"
              :day="weather.day"
              :icon="weather.icon"
            />
          </div>
        </div>
        <div class="admin_home__panel__card">
          <h2>Bem-vindo Nuno.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quos vero ullam! Alias est perspiciatis rerum, eveniet velit
            asperiores facilis dignissimos quis. Incidunt a ipsa consequuntur
            consectetur dolorum, impedit accusamus?
          </p>
        </div>
        <div class="admin_home__panel__card">
          <!-- <h2>Bem-vindo Nuno.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            quos vero ullam! Alias est perspiciatis rerum, eveniet velit
            asperiores facilis dignissimos quis. Incidunt a ipsa consequuntur
            consectetur dolorum, impedit accusamus?
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardWeather from "@/components/Dashboard/DashboardWeather.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardWeather
  },
  data: () => {
    return {
      weather: "",
      temperature: "",
      weatherBroadcast: []
    };
  },
  mounted() {
    let navbar_width = document.querySelector(".admin_nav").offsetWidth;

    document.querySelector(
      ".admin_home__panel"
    ).style.paddingLeft = `${navbar_width}px`;
  },
  async created() {
    try {
      await this.$store.dispatch("setWeather");
    } catch (error) {
      return error;
    }

    this.weather = this.getWeather;

    console.log(this.weather);

    let broadcast = this.weather.daily;

    for (const daily of broadcast) {
      this.weatherBroadcast.push({
        day: "Hoje",
        icon: this.getWeatherIcon(daily.weather[0].icon),
        temp: daily.temp.max
      });
    }

    console.log(this.weatherBroadcast);

    this.temperature = Math.round(this.getWeather.current.temp);
  },
  computed: {
    ...mapGetters(["getWeather"])
  },
  methods: {
    getWeatherBroadcast() {},
    getWeatherIcon(icon) {
      return `http://openweathermap.org/img/w/${icon}.png`;
    },
    getCurrentDate() {
      let today = new Date();
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      let yyyy = today.getFullYear();

      return `${dd}/${mm}/${yyyy}`;
    },
    getWeekDay() {
      let today = new Date();

      let weekDay = "";

      switch (today.getDay()) {
        case 0:
          weekDay = "Domingo";
          break;
        case 1:
          weekDay = "Segunda-feira";
          break;
        case 2:
          weekDay = "Terça-feira";
          break;
        case 3:
          weekDay = "Quarta-feira";
          break;
        case 4:
          weekDay = "Quinta-feira";
          break;
        case 5:
          weekDay = "Sexta-feira";
          break;
        case 6:
          weekDay = "Sábado";
          break;
      }

      return weekDay;
    }
  }
};
</script>
