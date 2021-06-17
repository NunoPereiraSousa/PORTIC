<template>
  <div class="admin_home flex">
    <DashboardHeader />
    <div class="flex admin_home__panel">
      <div class="admin_home__panel__grid grid">
        <div class="admin_home__panel__card intro">
          <div class="flex flex-ai-c flex-jc-sb">
            <h2>Bem-vindo {{ loggedUser.username }}.</h2>
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

          <h4>
            {{ getWeekDay() }}, dia {{ getDay() }} de abril de {{ getYear() }}.
          </h4>
          <img src="../../../assets/remote_team.png" id="svg" alt="Image" />
        </div>
        <div class="admin_home__panel__card weather grid">
          <div class="flex flex-jc-c">
            <div class="flex flex-fd-c flex-jc-c temperature">
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
              :day="weather.days[i]"
              :icon="weather.icon"
            />
          </div>
        </div>
        <div class="admin_home__panel__card barChart">
          <BarChart
            :data="[
              areasLength,
              coursesLength,
              $store.getters.getMediasLength,
              $store.getters.getNProjectsLength,
              $store.getters.getAreasLength,
              $store.getters.getUnitiesLength
            ]"
          />
        </div>
        <div class="admin_home__panel__card barChart">
          <PieChart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardHeader from "@/components/Dashboard/DashboardHeader.vue";
import DashboardWeather from "@/components/Dashboard/DashboardWeather.vue";
import BarChart from "@/components/Dashboard/BarChart.vue";
import PieChart from "@/components/Dashboard/PieChart.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    DashboardHeader,
    DashboardWeather,
    BarChart,
    PieChart
  },
  data: () => {
    return {
      weather: "",
      temperature: "",
      weatherBroadcast: [],
      days: [],
      loggedUser: {}
    };
  },
  created() {
    // get loggedUser from localStorage
    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

    console.log(this.loggedUser);
  },
  async mounted() {
    // this.height();

    try {
      await this.$store.dispatch("setWeather");
    } catch (error) {
      return error;
    }

    this.weather = this.getWeather;

    let broadcastArr = this.weather.daily;

    this.convertWeekDaysArr().forEach(d => {
      this.days.push(d);
    });

    for (const daily of broadcastArr) {
      this.weatherBroadcast.push({
        icon: this.getWeatherIcon(daily.weather[0].icon),
        temp: Math.round(daily.temp.max),
        days: this.days
      });
    }

    this.temperature = Math.round(this.getWeather.current.temp);
  },
  computed: {
    ...mapGetters(["getWeather", "getCourses", "getNAreas"]),
    areasLength() {
      return this.getNAreas.length;
    },
    coursesLength() {
      console.log(this.getCourses.length);
      return this.getCourses.length;
    }
  },
  methods: {
    height() {
      let wrapper = document.querySelector(".admin_home__panel__grid");
      let wrapperHeight = wrapper.offsetHeight;

      let nav = document.querySelector(".admin_nav ");

      nav.style.height = `${wrapperHeight}px`;
    },
    getFiveWeekDay() {
      let now = new Date();

      let currDayNum = now.getDay();

      let futureNum = currDayNum + 5;

      let weekDay = [];

      for (let i = 0; i < 5; i++) {
        let number = now.getDay() + i;

        if (number < futureNum) {
          weekDay.push(number);
        }
      }

      return weekDay;
    },
    convertWeekDaysArr() {
      let arr = [];

      for (let day of this.getFiveWeekDay()) {
        switch (day) {
          case 0:
            arr.push("Dom");
            break;
          case 1:
            arr.push("Seg");
            break;
          case 2:
            arr.push("Ter");
            break;
          case 3:
            arr.push("Qua");
            break;
          case 4:
            arr.push("Qui");
            break;
          case 5:
            arr.push("Sex");
            break;
          case 6:
            arr.push("Sáb");
            break;
          case 7:
            arr.push("Dom");
            break;
          case 8:
            arr.push("Seg");
            break;
          case 9:
            arr.push("Sáb");
            break;
          case 10:
            arr.push("Ter");
            break;
          case 11:
            arr.push("Qua");
            break;
        }
      }
      arr[0] = "Hoje";

      return arr;
    },
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
    },
    getDay() {
      return new Date().getDate();
    },
    getYear() {
      return new Date().getFullYear();
    }
  }
};
</script>
