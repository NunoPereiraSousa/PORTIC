<template>
  <div>
    <div class="news_page grid">
      <div>
        <h1 class="news_page__title">
          {{ news.title }}
        </h1>
        <div class="news_page__img" :style="imageStyle"></div>
        <div class="news_page__details flex flex-ai-c flex-jc-sb">
          <div class="news_page__share">
            <a
              href="https://www.instagram.com/politecnicodoporto/"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/porticpporto" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/portic-pporto/mycompany/"
              target="_blank"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p class="news_page__author">
            {{ news.author }}, <span>{{ news.date }}</span>
          </p>
        </div>
      </div>
      <p class="news_page__content">
        {{ news.content }}
      </p>
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
      news: {
        id: "2",
        title: "Programa Portugal Tourism Minds fecha a sua 1ª edição",
        content:
          "O programa de aceleração Portugal Tourism Minds, promovido pela Startup Porto em parceria com o Turismo de Portugal, AHRESP, Turismo Porto e Norte de Portugal e Escola Superior de Hotelaria e Turismo do Porto, chegou ao fim da sua 1ª edição no passado dia 29 de Outubro com a apresentação dos empreendedores no evento Demo Day Virtual. Face à situação pandémica que assola o mundo inteiro, o evento teve lugar através de uma plataforma digital, contudo de nada desmoralizou a participação no Demo Day Virtual. Este contou com mais de 50 participantes de diversos setores do turismo, desde representantes do turismo de freguesias e concelhos do país, agentes de viagens, professores, investidores público e privados e empreendedores em busca de uma melhor resposta para a difícil situação que o turismo enfrenta. O Demo Day Virtual contou com uma apresentação Pitch das seguintes equipas participante no programa Portugal Tourism Minds: BestRide App, Personal2travel, Move4you, MakeitDouble e Saffe Payments. Para além dos pitch dos empreendedores, houve lugar a uma pequena apresentação por parte do Turismo de Portugal e da Portugal Ventures. No âmbito do programa Portugal Tourism Minds, a Startup Porto atribuiu um prémio MVP, para a melhor ideia, no valor de 2000€ à equipa BestRide App. A atribuição do prémio ficou a cargo de um júri constituído por elementos da Porto Global Hub, Turismo de Portugal e Portugal Ventures. O programa Portugal Tourism Minds foi criada para responder a desafios relacionados com o desenvolvimento sustentável do ecossistema de turismo em Portugal. Durante 4 meses os empreendedores contaram com apoio de especialistas das mais diversas áreas, de forma a sustentar um crescimento saudável da sua ideia/startup.",
        image:
          "https://www.portoglobalhub.ipp.pt/reconhecidos-especialistas-discutem-o-impacto-da-industria-4-0-no-mercado-de-trabalho/image_preview",
        date: "05 de março",
        author: "Jorge Resende"
      }
    };
  },
  computed: {
    imageStyle() {
      return `background-image: url('${this.news.image}')`;
    }
  }
};
</script>
