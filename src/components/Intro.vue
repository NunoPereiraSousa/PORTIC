<template>
  <section class="landing">
    <h1>
      <span>
        <div class="overflow">
          <div class="intro_div">Welcome to</div>
        </div>
      </span>
      <div>
        <span>
          <div class="overflow">
            <div class="intro_div">{{ extra }}</div>
          </div></span
        >
        <div class="overflow">
          <div class="intro_div">
            {{ keyword }}
          </div>
        </div>
      </div>
    </h1>
    <hr class="intro_line" />
    <h4>
      <div class="hide-for-desktop overflow">
        <div class="intro_div2">
          Porto Research,
        </div>
      </div>
      <div class="hide-for-desktop overflow">
        <div class="intro_div2">
          Technology
        </div>
      </div>
      <div class="hide-for-desktop overflow">
        <div class="intro_div2">
          & Innovation Center.
        </div>
      </div>
      <div class="hide-for-mobile overflow">
        <div class="intro_div3">
          Porto Research, Technology
        </div>
      </div>
      <div class="hide-for-mobile overflow">
        <div class="intro_div3">
          & Innovation Center.
        </div>
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
              <div class="overflow">
                <div class="carousel_line">
                  An open door towards the future
                </div>
              </div>
            </h4>
          </div>
          <div class="slide">
            <h4>
              <div class="overflow">
                <div class="carousel_line">
                  An open door towards the future
                </div>
              </div>
            </h4>
          </div>
          <div class="slide">
            <h4>
              <div class="overflow">
                <div class="carousel_line">
                  An open door towards the future
                </div>
              </div>
            </h4>
          </div>
          <div class="slide">
            <h4>
              <div class="overflow">
                <div class="carousel_line">
                  An open door towards the future
                </div>
              </div>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { animate } from "../../js/GSAP/intro";
export default {
  name: "Intro",
  props: ["extra", "keyword"],
  mounted() {
    animate();
  }
};
</script>

<style></style>
