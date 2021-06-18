<template>
  <div>
    <section class="projects_catalog">
      <div class="flex flex-jc-c flex-ai-c flex-fd-c">
        <h1 class="projects_catalog__title">{{ $t("projects.title") }}</h1>
        <p class="projects_catalog__quote">
          {{ $t("projects.desc") }}
        </p>
      </div>
      <div class="projects_catalog__filters grid">
        <div>
          <label for="projectTxt">{{ $t("projects.labels.search") }}</label
          ><br />
          <input
            type="text"
            id="projectTxt"
            :placeholder="$t('projects.input.placeholder')"
            v-model="projectTxt"
          />
        </div>
        <div>
          <label for="sortBtn">{{ $t("projects.labels.order") }}</label
          ><br />
          <button
            id="sortBtn"
            class="projects_catalog__filters__sorting"
            @click="order = !order"
          >
            {{ $t("projects.input.filter") }}
          </button>
        </div>
        <div>
          <label for="status">{{ $t("projects.labels.status") }}</label
          ><br />
          <select v-model="status" id="status">
            <option value="">{{ $t("projects.input.status") }}</option>
            <option value="completed">Not Started</option>
            <option value="underDev">Under development</option>
            <option value="finished">Finished</option>
          </select>
        </div>
        <!-- <div>
          <label for="startDateTxt">{{
            $t("projects.labels.initialDate")
          }}</label
          ><br />
          <input
            id="startDateTxt"
            type="date"
            v-model="datesFilter.startingDate"
            class="input_date"
            placeholder="Data de início"
          />
        </div>
        <div>
          <label for="endDateTxt">{{ $t("projects.labels.endDate") }}</label
          ><br />
          <input
            id="endDateTxt"
            type="date"
            class="input_date"
            v-model="datesFilter.endingDate"
            placeholder="Data de término"
          />
        </div> -->
      </div>
      <div class="projects__grid grid" style="width: 100%">
        <div v-if="projects.length < 1">
          Não foi encontrado nenhum projetos!
        </div>
        <ProjectCard
          v-for="project in filterProjects"
          :key="project.id_project"
          :id="project.id_project"
          :initials="project.initials"
          :title="project.title"
          :description="project.desc_html_structure"
          :status="setStatus(project.start_date, project.end_date)"
          @mouseover.native="onHover"
          @mouseleave.native="notHover"
        />
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
import Footer from "@/components/Footer.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    ProjectCard,
    Footer
  },
  data: () => {
    return {
      selectedItem: null,
      order: false,
      order2: false,
      projectTxt: "",
      status: "",
      datesFilter: {
        startingDate: "",
        endingDate: ""
      }
    };
  },
  async mounted() {
    this.$store.commit("SET_SELECTED_PROJECTS_LANG", {
      lang: this.$i18n.locale == "en" ? "en" : "pt"
    });

    try {
      await this.$store.dispatch("setEntityId");
      await this.$store.dispatch("setProjects");

      console.log(this.getProjects);
    } catch (error) {
      console.log(`App: ${error}`);
      return error;
    }
  },
  computed: {
    ...mapGetters(["getProjects"]),
    projects() {
      return this.getProjects;
    },
    filterProjects() {
      return this.filterAlphabetically(
        this.filterProjectsByName(this.filterProjectsByCategory(this.projects))
      );
    }
  },
  methods: {
    filterProjectsByCategory(projects) {
      return projects.filter(
        project =>
          !this.setStatus(project.start_date, project.end_date).indexOf(
            this.status
          )
      );
    },
    filterProjectsByName(projects) {
      return projects.filter(
        project =>
          !project.initials.toLowerCase().indexOf(this.projectTxt.toLowerCase())
      );
    },
    filterAlphabetically(projects) {
      if (!this.order) {
        return projects;
      } else {
        return [...projects].sort(this.compareName);
      }
    },
    setStatus(start_date, end_date) {
      if (start_date < end_date) {
        return "finished";
      } else if (start_date > end_date) {
        return "completed";
      } else {
        return "underDev";
      }
    },
    compareDates(startingDate, endingDate) {
      const date1 = new Date(startingDate);
      const date2 = new Date(endingDate);

      let finalDate1 = this.getFullStartingDate(date1);
      let finalDate2 = this.getFullStartingDate(date2);

      if (finalDate1 > finalDate2) {
        console.log(`${startingDate} is greater than ${endingDate}`);
      } else if (finalDate1 < finalDate2) {
        console.log(`${endingDate} is greater than ${startingDate}`);
      } else {
        console.log(`Both dates are equal`);
      }
    },
    // filterProjectsByDateRange(projects) {
    //   if (
    //     this.datesFilter.startingDate != "" &&
    //     this.datesFilter.endingDate != ""
    //   ) {
    //     return projects.filter(project => {
    //       if (
    //         project.start_date < this.datesFilter.startingDate ||
    //         project.end_date > this.datesFilter.endingDate
    //       ) {
    //         return project;
    //       }
    //     });
    //   }
    // },
    getFullStartingDate(startingDate) {
      let year = startingDate.getFullYear();
      let month =
        startingDate.getMonth() < 10
          ? `0${startingDate.getMonth()}`
          : startingDate.getMonth();
      let day =
        startingDate.getDay() < 10
          ? `0${startingDate.getDay()}`
          : startingDate.getDay();

      return `${year}-${month}-${day}`;
    },
    getFullEndingDate(endingDate) {
      let year = endingDate.getFullYear();
      let month =
        endingDate.getMonth() < 10
          ? `0${endingDate.getMonth()}`
          : endingDate.getMonth();
      let day =
        endingDate.getDay() < 10
          ? `0${endingDate.getDay()}`
          : endingDate.getDay();

      return `${year}-${month}-${day}`;
    },
    getCurrentDate() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() < 10 ? `0${now.getMonth()}` : now.getMonth();
      let day = now.getDay() < 10 ? `0${now.getDay()}` : now.getDay();

      return `${year}-${month}-${day}`;
    },
    showFilters() {
      document
        .querySelector(".projects_catalog__filters__categories")
        .classList.toggle("opened");
    },
    onHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.toggle("hovered");
    },
    notHover(element) {
      this.selectedItem = element.target;

      this.selectedItem.classList.remove("hovered");
    },
    compareBudget(a, b) {
      if (a.overallBudget > b.overallBudget) return -1;
      if (a.overallBudget < b.overallBudget) return 1;
      else return 0;
    },
    compareName(a, b) {
      if (a.initials < b.initials) return -1;
      if (a.initials > b.initials) return 1;
      else return 0;
    },
    setSelectedProject(name, id) {
      this.$store.commit("SET_SELECTED_PROJECT_ID", {
        id: id
      });

      this.$router.push({
        name: "Project",
        params: { name: name }
      });
    }
  }
};
</script>

// if (!this.order && this.projectTxt != null) { // return ( // arr, //
this.projects.filter(project => { // let filterSearch = true; // if
(this.projectTxt != "") { // filterSearch = project.initials // .toLowerCase()
// .includes(this.projectTxt.toLowerCase()); // } // return filterSearch; // })
// ); // } else { // return [...arr].sort(this.compareName); // } // if
(!this.order2 && this.projectTxt != null) { // return ( // arr, //
this.projects.filter(project => { // let filterSearch = true; // if
(this.projectTxt != "") { // filterSearch = project.initials // .toLowerCase()
// .includes(this.projectTxt.toLowerCase()); // } // return filterSearch; // })
// ); // } else { // return [...arr].sort(this.compareName); // } // if
(!this.order && this.projectTxt != null) { // return ( // arr, //
this.projects.filter(project => { // let filterSearch = true; // if
(this.projectTxt != "") { // filterSearch = project.initials // .toLowerCase()
// .includes(this.projectTxt.toLowerCase()); // } // return filterSearch; // })
// ); // } else { // return [...arr].sort(this.compareBudget); // }
