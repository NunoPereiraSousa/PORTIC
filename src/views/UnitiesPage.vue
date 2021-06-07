<template>
  <div>
    <div class="unities_page">
      <div>
        <h1 class="unities_page__title">
          Porto Design Factory
        </h1>
      </div>
      <h4 class="unities_page__content">
        <div class="unities_page__img" :style="imageStyle"></div>
        A Porto Design Factory é um laboratório de ideias com base no trabalho
        interdisciplinar, na investigação aplicada e na colaboração industrial.
        Aqui, os alunos das mais diferentes áreas cooperam no desenvolvimento de
        projetos inovadores com a ambição de promover uma mentalidade
        empreendedora através de um modelo de educação baseado na aprendizagem
        orientada para a resolução de problemas. Nos nossos programas
        educativos, equipas internacionais interdisciplinares (misturando
        estudantes de engenharia, design, comunicação, ciências empresariais,
        educação, etc do P.PORTO e estudantes de um vasto conjunto de
        universidades internacionais parceiras) trabalham em conjunto para
        responder a desafios de inovação propostos por parceiros empresariais
        nacionais e internacionais, desde startups e PME a grandes
        multinacionais. Através dos projetos, os estudantes passam por um
        processo intenso e iterativo de needfinding, idealização e prototipagem
        rápida, para criar e desenvolver novas ideias de produto ou serviço e
        provas de conceito. Ponto de encontro das oito Escolas, a Porto Design
        Factory (PDF) integra a Design Factory Global Network (DFGN), composta
        por 20 instituições de quatro continentes. Esta rede possibilita o
        intercâmbio de alunos e docentes entre os diferentes núcleos, além da
        troca e partilha de conhecimentos e a colaboração em projetos. A DFGN
        está instalada em todos os continentes, de Helsínquia a Xangai, de
        Melbourne a Santiago do Chile, passando pela Holanda, Genebra ou Nova
        Iorque. Ao encorajar um ecossistema inovador centrado no diálogo
        interdisciplinar e no trabalho em equipa acreditamos dar as ferramentas
        necessárias para criar a capacidade de resposta e ajustamento ao tecido
        socioeconómico da região, designadamente junto das indústrias de maior
        significado.
      </h4>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer
  },
  data: () => {
    return {
      image:
        "https://res.cloudinary.com/dijkykn1j/image/upload/v1623071683/porto_design_factory_th7osu.jpg"
    };
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.image}')`;
    }
  }
};
</script>
