<template>
  <div>
    <div class="sub_page_intro grid hide-for-desktop">
      <div class="sub_page_intro__paragraphs">
        <p>Porto / Research /</p>
        <p>Technology / Innovation / Centre</p>
      </div>
      <div class="sub_page_intro__title">
        <h1>{{ categoryTitle }}</h1>
      </div>
      <div class="sub_page_intro__stats">
        <div class="sub_page_intro__stats__card">
          <h3>{{ title1 }}</h3>
          <p>{{ text1 }}</p>
        </div>
        <div class="sub_page_intro__stats__card">
          <h3>{{ title2 }}</h3>
          <p>{{ text2 }}</p>
        </div>
      </div>
      <div class="sub_page_intro__text">
        <p>
          {{ content }}
        </p>
      </div>
      <hr />
      <div class="sub_page_intro__extra_info flex flex-ai-c flex-jc-sb">
        <p>
          {{ categoryDescription }}
        </p>
        <a
          :href="`mailto:${$store.getters.getEntityEmail}`"
          class="flex flex-ai-c"
        >
          <span>{{ $t("contactBtn") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.41"
            height="14.82"
            viewBox="0 0 22.41 14.82"
          >
            <g id="Group_96" data-name="Group 96" transform="translate(1 1.41)">
              <line
                id="Line_84"
                data-name="Line 84"
                x2="14"
                transform="translate(2 6)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
              />
              <line
                id="Line_85"
                data-name="Line 85"
                x2="6"
                y2="6"
                transform="translate(12)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
              />
              <line
                id="Line_86"
                data-name="Line 86"
                x1="6"
                y2="6"
                transform="translate(12 6)"
                fill="none"
                stroke="#fff"
                stroke-linecap="round"
                stroke-width="2"
              />
            </g>
          </svg>
        </a>
      </div>
    </div>

    <div class="sub_page_intro grid hide-for-mobile">
      <div>
        <div class="sub_page_intro__paragraphs">
          <p>Porto / Research /</p>
          <p>Technology / Innovation / Centre</p>
        </div>
        <div class="sub_page_intro__title">
          <h1>{{ categoryTitle }}</h1>
        </div>
      </div>
      <div class="sub_page_intro__stats grid">
        <div class="sub_page_intro__stats__card">
          <h3>{{ title1 }}</h3>
          <p>{{ text1 }}</p>
        </div>
        <div class="sub_page_intro__stats__card">
          <h3>{{ title2 }}</h3>
          <p>{{ text2 }}</p>
        </div>

        <div class="sub_page_intro__text">
          <p>
            {{ content }}
          </p>
        </div>
      </div>

      <div class="sub_page_intro__info">
        <hr />
        <div class="sub_page_intro__extra_info grid">
          <p>
            {{ categoryDescription }}
          </p>
          <a
            :href="`mailto:${$store.getters.getEntityEmail}`"
            class="flex flex-ai-c"
          >
            <span>{{ $t("contactBtn") }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.41"
              height="14.82"
              viewBox="0 0 22.41 14.82"
            >
              <g
                id="Group_96"
                data-name="Group 96"
                transform="translate(1 1.41)"
              >
                <line
                  id="Line_84"
                  data-name="Line 84"
                  x2="14"
                  transform="translate(2 6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <line
                  id="Line_85"
                  data-name="Line 85"
                  x2="6"
                  y2="6"
                  transform="translate(12)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                />
                <line
                  id="Line_86"
                  data-name="Line 86"
                  x1="6"
                  y2="6"
                  transform="translate(12 6)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubPageIntro",
  props: {
    categoryTitle: {
      type: String,
      required: true
    },
    title1: {
      type: String,
      required: true
    },
    text1: {
      type: String,
      required: true
    },
    title2: {
      type: String,
      required: true
    },
    text2: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    categoryDescription: {
      type: String,
      required: true
    }
  }
};
</script>
