<template>
  <div>
    <section class="projects_catalog">
      <div class="flex flex-jc-c flex-ai-c flex-fd-c">
        <h3 class="flex flex-ai-c">
          {{ $t("projects.title") }}
          <div id="triangle"></div>
          PORTIC
        </h3>
        <h1 class="projects_catalog__title">{{ $t("projects.title") }}</h1>
        <p class="projects_catalog__quote">
          {{ $t("projects.desc") }}
        </p>
      </div>
      <div class="projects_catalog__filters grid">
        <input
          type="text"
          id="projectTxt"
          :placeholder="$t('projects.input.placeholder')"
          v-model="projectTxt"
        />
        <div
          class="flex flex-jc-sa flex-ai-c hide-for-desktop"
          style="width: 100%"
        >
          <button
            class="projects_catalog__filters__sorting"
            @click="order = !order"
          >
            {{ $t("projects.input.filter") }}
          </button>
          <!-- <button
            class="projects_catalog__filters__sorting"
            @click="order2 = !order2"
          >
            Name sorting
          </button> -->
        </div>
        <div class="hide-for-mobile">
          <button
            class="projects_catalog__filters__sorting"
            @click="order = !order"
          >
            {{ $t("projects.input.filter") }}
          </button>
        </div>
        <div class="hide-for-mobile">
          <select v-model="status">
            <option value="">Project status</option>
            <option value="Stop">Not Started</option>
            <option value="underDev">Under development</option>
            <option value="Finished">Finished</option>
          </select>
        </div>
        <div class="hide-for-mobile">
          <input
            type="date"
            v-model="startingDate"
            class="input_date"
            placeholder="Data de início"
          />
        </div>
        <div class="hide-for-mobile">
          <input
            type="date"
            class="input_date"
            v-model="endingDate"
            placeholder="Data de término"
          />
        </div>
      </div>
      <div class="projects__grid grid" style="width: 100%">
        <div v-if="filterProjects.length < 1">
          Não foi encontrado nenhum projetos!
        </div>
        <ProjectCard
          v-for="project in filterProjects"
          :key="project.id"
          :counter="project.id"
          :initials="project.initials"
          :title="project.title"
          :projectInitials="project.initials"
          :overallBudget="project.overallBudget"
          @mouseover.native="onHover"
          @mouseleave.native="notHover"
          @click.native="setSelectedProject(project.initials)"
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
      projects: null,
      order: false,
      order2: false,
      projectTxt: "",
      status: "",
      startingDate: "",
      endingDate: ""
    };
  },
  created() {
    this.projects = this.getProjects;
  },
  computed: {
    ...mapGetters(["getProjects"]),
    filterProjects() {
      // const arr = this.getProjects;

      this.compareDates(this.startingDate, this.endingDate);

      return this.filterAlphabetically(
        this.filterProjectsByName(this.filterProjectsByCategory(this.projects))
      );

      // if (!this.order && this.projectTxt != null) {
      //   return (
      //     arr,
      //     this.projects.filter(project => {
      //       let filterSearch = true;

      //       if (this.projectTxt != "") {
      //         filterSearch = project.initials
      //           .toLowerCase()
      //           .includes(this.projectTxt.toLowerCase());
      //       }

      //       return filterSearch;
      //     })
      //   );
      // } else {
      //   return [...arr].sort(this.compareName);
      // }

      // if (!this.order2 && this.projectTxt != null) {
      //   return (
      //     arr,
      //     this.projects.filter(project => {
      //       let filterSearch = true;

      //       if (this.projectTxt != "") {
      //         filterSearch = project.initials
      //           .toLowerCase()
      //           .includes(this.projectTxt.toLowerCase());
      //       }

      //       return filterSearch;
      //     })
      //   );
      // } else {
      //   return [...arr].sort(this.compareName);
      // }

      // if (!this.order && this.projectTxt != null) {
      //   return (
      //     arr,
      //     this.projects.filter(project => {
      //       let filterSearch = true;

      //       if (this.projectTxt != "") {
      //         filterSearch = project.initials
      //           .toLowerCase()
      //           .includes(this.projectTxt.toLowerCase());
      //       }

      //       return filterSearch;
      //     })
      //   );
      // } else {
      //   return [...arr].sort(this.compareBudget);
      // }
    }
  },
  methods: {
    filterProjectsByCategory(projects) {
      return projects.filter(project => !project.status.indexOf(this.status));
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
    // filterProjectsByDateRange(projects){
    //   return projects.filter(
    //     project => {
    //       if (this.endingDate == "") {
    //         return this.getCurrentDate();
    //       }
    //       if (project.startingDate < this.getCurrentDate()) {

    //       }
    //     }
    //   )
    // },
    compareDates(startingDate, endingDate) {
      const date1 = new Date(startingDate);
      const date2 = new Date(endingDate);

      if (date1 > date2) {
        console.log(`${startingDate} is greater than ${endingDate}`);
      } else if (date1 < date2) {
        console.log(`${endingDate} is greater than ${startingDate}`);
      } else {
        console.log(`Both dates are equal`);
      }
    },
    getCurrentDate() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() < 10 ? `0${now.getMonth()}` : now.getMonth();
      let day = now.getDay() < 10 ? `0${now.getDay()}` : now.getDay();

      return `${year}-${month}-${day}`;
    },

    // filterProductsByRange: function(projects) {
    //   return projects.filter(project =>
    //     project.price > 0 && project.price < this.range ? project : ""
    //   );
    // },
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
    setSelectedProject(name) {
      this.$store.commit("SET_SELECTED_PROJECT", {
        initials: name
      });
      this.$router.push({
        name: "Project",
        params: { name: name }
      });
    }
  }
};
</script>
