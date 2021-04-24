<template>
  <section class="landing grid">
    <div class="overlay"></div>

    <div class="landing__image"></div>

    <div class="landing__titles">
      <h1 class=" ">
        <span>Bem-vindo ao</span>
        <div>
          <span>{{ extra }}</span
          >{{ keyword }}
        </div>
      </h1>
      <hr class=" " />
      <h4 class=" ">
        <div class="hide-for-desktop">
          Porto Research,
        </div>
        <div class="hide-for-desktop">
          Technology
        </div>
        <div class="hide-for-desktop">
          & Innovation Center.
        </div>
        <div class="hide-for-mobile">
          Porto Research, Technology
        </div>
        <div class="hide-for-mobile">
          & Innovation Center.
        </div>
      </h4>
    </div>

    <div class="landing__highlights">
      <div class="hide-for-desktop">
        <h1 class="landing__highlights__title">Destaques de hoje</h1>

        <div class="landing__highlights__grid grid">
          <router-link :to="{ name: 'Areas' }">
            Marketing
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Porto Global Hub
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Nasa
          </router-link>
        </div>
      </div>

      <div class="hide-for-mobile landing__highlights__desktop">
        <h1 class="landing__highlights__title">Destaques de hoje</h1>

        <div class="landing__highlights__desktop__grid grid">
          <router-link :to="{ name: 'Areas' }">
            Marketing
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Porto Global Hub
          </router-link>
          <router-link :to="{ name: 'Areas' }">
            Nasa
          </router-link>
        </div>
      </div>
    </div>

    <!-- <img src="../../assets/image_large.png" alt="" id="logo" />
    
    <button class="hide-for-desktop hide-for-mobile">Know more about us</button> -->
    <div class="landing__down flex flex-jc-c flex-ai-c hide-for-mobile">
      <div class="landing__down__arrow">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <p>An open door towards the future</p>
    </div>
    <!-- <div class="landing__carousel hide-for-desktop">
      <div class="carousel">
        <div class="slide-track">
          <div class="slide">
            <h4>
              An open door towards the future
            </h4>
          </div>
          <div class="slide">
            <h4>
              An open door towards the future
            </h4>
          </div>
          <div class="slide">
            <h4>
              An open door towards the future
            </h4>
          </div>
          <div class="slide">
            <h4>
              An open door towards the future
            </h4>
          </div>
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "Intro",
  props: ["extra", "keyword"]
};
</script>

<style></style>
