<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.renderChart(
      {
        labels: [
          "Áreas",
          "Cursos",
          "Media",
          "Projetos",
          "Testemunhos",
          "Unidades"
        ],
        datasets: [
          {
            label: "Total",
            backgroundColor: "#C94D24",
            data: this.data
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                min: 0,
                max: 30,
                reverse: false,
                beginAtZero: true
              }
            }
          ]
        }
      }
    );
  }
};
</script>
