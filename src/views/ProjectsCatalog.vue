<template>
  <div>
    <section class="projects_catalog">
      <div class="flex flex-jc-c flex-ai-c flex-fd-c">
        <h3>PORTIC <span>&#9654;</span> Projects</h3>
        <h1 class="projects_catalog__title">Projects</h1>
        <p class="projects_catalog__quote">
          These are the projects that our team was part of.
        </p>
      </div>
      <div class="projects_catalog__filters grid">
        <input
          type="text"
          id="projectTxt"
          placeholder="Search project"
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
            Finance sorting
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
            Finance sorting
          </button>
        </div>
        <!-- <div class="hide-for-mobile">
          <button
            class="projects_catalog__filters__sorting"
            @click="order2 = !order2"
          >
            Name sorting
          </button>
        </div> -->
        <!-- <div class="hide-for-mobile" style="justify-self: start;">
          <button
            class="projects_catalog__filters__institutions"
            @click="showFilters"
          >
            Institutions
          </button>
        </div> -->
      </div>
      <!-- <div class="projects_catalog__filters__categories">
        <div class="grid">
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
      </div> -->
      <div class="projects__grid grid" style="width: 100%">
        <ProjectCard
          v-for="project in orderBudget"
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
      projectTxt: ""
    };
  },
  created() {
    this.projects = this.getProjects;

    console.log(this.projects);
  },
  computed: {
    ...mapGetters(["getProjects"]),
    orderBudget() {
      const arr = this.getProjects;

      if (!this.order && this.projectTxt != null) {
        return (
          arr,
          this.projects.filter(project => {
            let filterSearch = true;

            if (this.projectTxt != "") {
              filterSearch = project.initials
                .toLowerCase()
                .includes(this.projectTxt.toLowerCase());
            }

            return filterSearch;
          })
        );
      } else {
        return [...arr].sort(this.compareBudget);
      }

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
