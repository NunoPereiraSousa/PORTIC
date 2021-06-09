<template>
  <div class="admin_medias__panel__grid__card">
    <iframe
      :src="videoURL"
      frameborder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div class="admin_medias__panel__grid__card__info">
      <h2>
        {{ title }}
      </h2>

      <div class="buttons flex flex-ai-c flex-jc-sb">
        <button
          class="admin_medias__panel__grid__card__edit flex flex-jc-sb flex-ai-c"
          @click="showEditPopup(id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.386"
            height="12.367"
            viewBox="0 0 17.386 17.367"
          >
            <g id="pencil" transform="translate(0)">
              <path
                id="Path_65"
                data-name="Path 65"
                d="M10.736,82.473,1.17,92.039a.381.381,0,0,0-.1.175L.011,96.47a.376.376,0,0,0,.365.468.374.374,0,0,0,.091-.011l4.256-1.06a.376.376,0,0,0,.175-.1L14.464,86.2Zm0,0"
                transform="translate(0 -79.57)"
                fill="#999"
              />
              <path
                id="Path_66"
                data-name="Path 66"
                d="M339.36,1.845,338.3.78a1.928,1.928,0,0,0-2.663,0l-1.3,1.3,3.728,3.728,1.3-1.3a1.883,1.883,0,0,0,0-2.663Zm0,0"
                transform="translate(-322.526 -0.246)"
                fill="#999"
              />
            </g>
          </svg>

          Editar
        </button>
        <button
          class="admin_medias__panel__grid__card__remove flex flex-jc-sb flex-ai-c"
          @click="showPopup(id)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.386"
            height="14"
            viewBox="0 0 17.848 21.967"
          >
            <g id="trash" transform="translate(-48)">
              <path
                id="Path_71"
                data-name="Path 71"
                d="M64.132,2.746H60.357V2.059A2.062,2.062,0,0,0,58.3,0H55.551a2.062,2.062,0,0,0-2.059,2.059v.686H49.716A1.718,1.718,0,0,0,48,4.462v2.4a.687.687,0,0,0,.686.686h.375l.593,12.455a2.057,2.057,0,0,0,2.057,1.961H62.137a2.057,2.057,0,0,0,2.057-1.961l.593-12.455h.375a.687.687,0,0,0,.686-.686v-2.4A1.718,1.718,0,0,0,64.132,2.746Zm-9.267-.686a.687.687,0,0,1,.686-.686H58.3a.687.687,0,0,1,.686.686v.686H54.865Zm-5.492,2.4a.344.344,0,0,1,.343-.343H64.132a.344.344,0,0,1,.343.343V6.178h-15.1ZM62.822,19.94a.686.686,0,0,1-.686.654H51.712a.686.686,0,0,1-.686-.654l-.59-12.389H63.412Z"
              />
              <path
                id="Path_72"
                data-name="Path 72"
                d="M240.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,240.686,218.3Z"
                transform="translate(-183.762 -199.076)"
              />
              <path
                id="Path_73"
                data-name="Path 73"
                d="M320.686,218.3a.686.686,0,0,0,.686-.686v-8.924a.686.686,0,1,0-1.373,0v8.924A.686.686,0,0,0,320.686,218.3Z"
                transform="translate(-260.33 -199.076)"
              />
              <path
                id="Path_74"
                data-name="Path 74"
                d="M160.686,218.3a.687.687,0,0,0,.686-.686v-8.924a.686.686,0,0,0-1.373,0v8.924A.686.686,0,0,0,160.686,218.3Z"
                transform="translate(-107.195 -199.076)"
              />
            </g>
          </svg>

          Remover
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardMediaCard",
  props: {
    videoURL: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    showEditPopup(mediaId) {
      let overlay = document.querySelector(".admin_media__panel__overlay");
      let popup = document.querySelector(".admin_delete_popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_MEDIA_ID", {
        id: mediaId
      });
    },
    showPopup(mediaId) {
      let overlay = document.querySelector(".admin_media__panel__overlay2");
      let popup = document.querySelector(".admin_medias__popup");

      overlay.classList.toggle("show_overlay");
      popup.classList.toggle("show_popup");

      this.$store.commit("SET_SELECTED_MEDIA_ID", {
        id: mediaId
      });
    }
  }
};
</script>
