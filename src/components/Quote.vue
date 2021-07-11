<template>
  <section class="quote grid">
    <h1 class="quote__title">
      {{ $t("homepage.introOne") }} <span>{{ initials }}</span>
      {{ $t("homepage.introTwo") }}
    </h1>

    <div class="quote__img"></div>
    <!-- <p class="quote__paragraph">
      <span>O PORTIC -Porto Research, Technology & Innovation Center </span>visa
      agregar vários centros e grupos de investigação das escolas do P.PORTO num
      único espaço físico, configurando uma superestrutura dedicada à
      investigação, transferência de tecnologia, inovação e empreendedorismo.
      Alojará ainda a Porto Global Hub que integra a Porto Design Factory, a
      Porto Business Innovation e a Startup Porto e que tem como visão ajudar a
      criação de projetos locais sustentáveis para uma vida melhor.
    </p> -->
  </section>
</template>

<script>
export default {
  name: "quote",
  props: {
    initials: {
      type: String,
      required: false
    }
  }
};
</script>
