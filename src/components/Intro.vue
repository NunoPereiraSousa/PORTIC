<template>
  <section class="landing">
    <h1>
      <span>Welcome to</span>
      <div>
        <span>{{ extra }}</span
        >{{ keyword }}
      </div>
    </h1>
    <hr />
    <h4>
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
    <button class="hide-for-desktop hide-for-mobile">Know more about us</button>
    <div class="landing__down flex flex-jc-c flex-ai-c hide-for-mobile">
      <div class="landing__down__arrow">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <p>An open door towards the future</p>
    </div>
    <div class="landing__carousel hide-for-desktop">
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Intro",
  props: ["extra", "keyword"]
};
</script>

<style></style>
