<template>
  <nav class="admin_nav flex flex-fd-c flex-jc-sb">
    <!-- <DashboardHeaderLink
      v-for="link in $store.getters.getHeaderLinks"
      :key="link.id"
      :svg="link.icon"
      :name="link.name"
    /> -->
    <router-link
      :to="{ name: '' }"
      class="flex flex-ai-c admin_nav__link router-link-active"
    >
      <svg
        id="dashboard"
        xmlns="http://www.w3.org/2000/svg"
        width="20.476"
        height="20.478"
        viewBox="0 0 20.476 20.478"
      >
        <path
          id="Path_32"
          data-name="Path 32"
          d="M7.892,6.826h-6.4A1.492,1.492,0,0,1,0,5.332V1.492A1.492,1.492,0,0,1,1.492,0h6.4A1.492,1.492,0,0,1,9.384,1.492V5.332A1.492,1.492,0,0,1,7.892,6.826ZM1.492,1.28a.214.214,0,0,0-.213.213V5.332a.214.214,0,0,0,.213.214h6.4a.214.214,0,0,0,.214-.214V1.492a.214.214,0,0,0-.214-.213Zm0,0"
          transform="translate(0 0)"
          fill="#fff"
        />
        <path
          id="Path_33"
          data-name="Path 33"
          d="M7.892,225.278h-6.4A1.492,1.492,0,0,1,0,223.786v-8.96a1.492,1.492,0,0,1,1.492-1.492h6.4a1.492,1.492,0,0,1,1.492,1.492v8.959a1.492,1.492,0,0,1-1.492,1.493Zm-6.4-10.665a.214.214,0,0,0-.213.214v8.959a.214.214,0,0,0,.213.213h6.4a.214.214,0,0,0,.214-.213v-8.96a.214.214,0,0,0-.214-.214Zm0,0"
          transform="translate(0 -204.8)"
          fill="#fff"
        />
        <path
          id="Path_34"
          data-name="Path 34"
          d="M285.225,348.158h-6.4a1.492,1.492,0,0,1-1.492-1.492v-3.839a1.492,1.492,0,0,1,1.492-1.492h6.4a1.492,1.492,0,0,1,1.492,1.492v3.839A1.492,1.492,0,0,1,285.225,348.158Zm-6.4-5.546a.214.214,0,0,0-.214.214v3.839a.214.214,0,0,0,.214.213h6.4a.214.214,0,0,0,.213-.213v-3.839a.214.214,0,0,0-.213-.214Zm0,0"
          transform="translate(-266.241 -327.681)"
          fill="#fff"
        />
        <path
          id="Path_35"
          data-name="Path 35"
          d="M285.225,11.945h-6.4a1.492,1.492,0,0,1-1.492-1.492V1.492A1.492,1.492,0,0,1,278.826,0h6.4a1.492,1.492,0,0,1,1.492,1.492v8.96a1.492,1.492,0,0,1-1.492,1.493Zm-6.4-10.665a.214.214,0,0,0-.214.213v8.959a.214.214,0,0,0,.214.214h6.4a.214.214,0,0,0,.213-.214V1.492a.214.214,0,0,0-.213-.213Zm0,0"
          transform="translate(-266.241 0)"
          fill="#fff"
        />
      </svg>

      DASHBOARD
    </router-link>
    <router-link
      :to="{ name: 'DashboardAreas' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        id="shape"
        xmlns="http://www.w3.org/2000/svg"
        width="19.095"
        height="19.099"
        viewBox="0 0 19.095 19.099"
      >
        <g id="Group_30" data-name="Group 30" transform="translate(0 0)">
          <g id="Group_29" data-name="Group 29">
            <path
              id="Path_23"
              data-name="Path 23"
              d="M19.155,4.776A2.387,2.387,0,0,0,14.59,3.81L12.552,3.47l-.2,1.177,2.048.342a2.387,2.387,0,0,0,1.473,2l-.581,4.384a2.382,2.382,0,0,0-2.1,2.359v.009L6.309,15.55a2.375,2.375,0,0,0-1.765-1.193L3.326,4.6a2.393,2.393,0,0,0,1.3-1.249l1.844.308.2-1.177-1.853-.31A2.381,2.381,0,1,0,2.141,4.743l1.22,9.75A2.387,2.387,0,1,0,6.625,16.71V16.7L13.5,14.887a2.381,2.381,0,1,0,2.969-3.368l.581-4.384A2.382,2.382,0,0,0,19.155,4.776ZM2.448,3.583A1.193,1.193,0,1,1,3.641,2.39,1.193,1.193,0,0,1,2.448,3.583ZM4.238,17.9A1.193,1.193,0,1,1,5.431,16.71,1.193,1.193,0,0,1,4.238,17.9Zm12.531-4.177a1.193,1.193,0,1,1-1.193-1.193A1.193,1.193,0,0,1,16.769,13.727Zm-1.193-8.95A1.193,1.193,0,1,1,16.769,5.97,1.193,1.193,0,0,1,15.575,4.776Z"
              transform="translate(-0.06 0)"
              fill="#fff"
            />
            <rect
              id="Rectangle_3"
              data-name="Rectangle 3"
              width="1.552"
              height="1.552"
              transform="matrix(0.986, 0.165, -0.165, 0.986, 9.966, 3.005)"
              fill="#fff"
            />
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="1.552"
              height="1.552"
              transform="translate(7.663 3.489) rotate(9.486)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>

      Áreas
    </router-link>
    <router-link :to="{ name: '' }" class="flex flex-ai-c admin_nav__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19.884"
        height="20.103"
        viewBox="0 0 19.884 20.103"
      >
        <g id="pie-chart" transform="translate(-0.001)">
          <g
            id="Group_33"
            data-name="Group 33"
            transform="translate(6.337 3.42)"
          >
            <path
              id="Path_29"
              data-name="Path 29"
              d="M166.852,103.788a8.273,8.273,0,0,1-4.95-1.627l-.474-.349,4.834-6.553V87.106h.589a8.344,8.344,0,0,1,0,16.682Zm-3.763-2.244a7.163,7.163,0,1,0,4.351-13.236v7.338Z"
              transform="translate(-161.429 -87.106)"
              fill="#fff"
            />
          </g>
          <g
            id="Group_34"
            data-name="Group 34"
            transform="translate(0.001 4.659)"
          >
            <path
              id="Path_30"
              data-name="Path 30"
              d="M3.865,131.646l-.474-.35a8.344,8.344,0,0,1-1.369-12.159l.384-.446L9.139,124.5ZM2.547,120.369a7.163,7.163,0,0,0,1.085,9.611l3.912-5.3Z"
              transform="translate(-0.001 -118.691)"
              fill="#fff"
            />
          </g>
          <g id="Group_35" data-name="Group 35" transform="translate(3.163)">
            <path
              id="Path_31"
              data-name="Path 31"
              d="M86.813,8.237,80.579,2.858l.384-.446A6.943,6.943,0,0,1,86.226,0h.589ZM82.261,2.756l3.374,2.91V1.208a5.765,5.765,0,0,0-3.373,1.547Z"
              transform="translate(-80.579 0)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>

      Componentes
    </router-link>
    <router-link
      :to="{ name: 'DashboardCourses' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.233"
        height="20.103"
        viewBox="0 0 25.233 20.103"
      >
        <path
          id="graduation-hat"
          d="M23.649,64.474v-6.75l.281-.081c1.077-.324,1.3-.871,1.3-1.273s-.226-.951-1.3-1.276l-9.218-2.765a7.588,7.588,0,0,0-2.095-.264,7.589,7.589,0,0,0-2.1.264L1.3,55.094c-1.077.324-1.3.871-1.3,1.273s.226.95,1.3,1.273l3.447,1.034V64.4c0,.692.45,1.667,2.6,2.381a17.323,17.323,0,0,0,5.271.73,17.323,17.323,0,0,0,5.271-.73c2.143-.714,2.6-1.689,2.6-2.381V58.674l1.688-.507v6.307a2.327,2.327,0,0,0-1.584,2.2v3.167a2.323,2.323,0,0,0,4.646,0V66.676a2.327,2.327,0,0,0-1.584-2.2Zm-12.7-10.729a6.188,6.188,0,0,1,1.671-.2,6.188,6.188,0,0,1,1.671.2l8.737,2.622-3.5,1.05h-.006l-5.234,1.569a6.189,6.189,0,0,1-1.671.2,6.189,6.189,0,0,1-1.668-.2L5.712,57.419H5.707l-3.5-1.052ZM19.006,64.4c0,.1-.268.541-1.581.978a15.831,15.831,0,0,1-4.8.658,15.831,15.831,0,0,1-4.8-.658c-1.313-.438-1.581-.883-1.581-.978v-5.28l4.292,1.288a7.587,7.587,0,0,0,2.095.264,7.588,7.588,0,0,0,2.095-.264l4.292-1.288Zm4.751,5.445a.844.844,0,1,1-1.688,0V66.676a.844.844,0,0,1,1.688,0Z"
          transform="translate(0 -52.063)"
          fill="#fff"
        />
      </svg>

      Cursos
    </router-link>
    <router-link :to="{ name: '' }" class="flex flex-ai-c admin_nav__link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.43"
        height="20.353"
        viewBox="0 0 25.43 20.353"
      >
        <g id="image-gallery" transform="translate(0.125 0.125)">
          <g id="Group_26" data-name="Group 26" transform="translate(0 0)">
            <path
              id="Path_15"
              data-name="Path 15"
              d="M26.615,22.1H6.513A2.515,2.515,0,0,1,4,19.593V4.513A2.515,2.515,0,0,1,6.513,2h20.1a2.515,2.515,0,0,1,2.513,2.513v15.08A2.515,2.515,0,0,1,26.615,22.1ZM6.513,3.256A1.258,1.258,0,0,0,5.256,4.513v15.08a1.258,1.258,0,0,0,1.256,1.253h20.1a1.258,1.258,0,0,0,1.256-1.253V4.513a1.258,1.258,0,0,0-1.256-1.256Z"
              transform="translate(-4 -2)"
              fill="#fff"
              stroke="#fff"
              stroke-width="0.25"
            />
          </g>
          <g
            id="Group_27"
            data-name="Group 27"
            transform="translate(3.769 3.769)"
          >
            <path
              id="Path_16"
              data-name="Path 16"
              d="M9.513,10.026a2.513,2.513,0,1,1,2.513-2.513A2.513,2.513,0,0,1,9.513,10.026Zm0-3.769a1.256,1.256,0,1,0,1.256,1.256A1.256,1.256,0,0,0,9.513,6.256Z"
              transform="translate(-7 -5)"
              fill="#fff"
              stroke="#fff"
              stroke-width="0.25"
            />
          </g>
          <g
            id="Group_28"
            data-name="Group 28"
            transform="translate(0.087 6.973)"
          >
            <path
              id="Path_17"
              data-name="Path 17"
              d="M4.7,19.336a.627.627,0,0,1-.444-1.072l5.934-5.934a1.931,1.931,0,0,1,2.666,0L14.62,14.1l4.887-5.864a1.887,1.887,0,0,1,1.437-.682h.014a1.884,1.884,0,0,1,1.431.658l6.575,7.666a.628.628,0,0,1-.953.818L21.436,9.026a.622.622,0,0,0-.477-.219.667.667,0,0,0-.482.227l-5.331,6.4a.622.622,0,0,1-.455.225.605.605,0,0,1-.473-.183l-2.252-2.252a.645.645,0,0,0-.889,0L5.142,19.152a.622.622,0,0,1-.444.183Z"
              transform="translate(-4.069 -7.55)"
              fill="#fff"
              stroke="#fff"
              stroke-width="0.25"
            />
          </g>
        </g>
      </svg>

      Galeria
    </router-link>
    <router-link
      :to="{ name: 'DashboardProjects' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22.729"
        height="20.103"
        viewBox="0 0 22.729 20.103"
      >
        <path
          id="suitcase"
          d="M21.124,17.9H18.592v-2.45a1.148,1.148,0,0,0-1.147-1.147H5.283a1.148,1.148,0,0,0-1.147,1.147V17.9H1.6A1.607,1.607,0,0,0,0,19.511v13.3a1.607,1.607,0,0,0,1.6,1.6H21.124a1.607,1.607,0,0,0,1.6-1.6v-13.3a1.607,1.607,0,0,0-1.6-1.606ZM5.513,15.684h11.7V17.9H5.513ZM1.6,19.281H21.124a.232.232,0,0,1,.229.229v4.128H14.4v-.617a1.148,1.148,0,0,0-1.147-1.147H9.478a1.148,1.148,0,0,0-1.147,1.147v.617H1.376V19.51a.232.232,0,0,1,.229-.229Zm11.412,3.966v2.224H9.707V23.249h3.314Zm8.107,9.789H1.6a.232.232,0,0,1-.229-.229V25.012H8.331V25.7a1.148,1.148,0,0,0,1.147,1.147h3.772A1.148,1.148,0,0,0,14.4,25.7v-.687h6.956v7.794a.232.232,0,0,1-.229.229Z"
          transform="translate(0 -14.308)"
          fill="#fff"
        />
      </svg>

      Projetos
    </router-link>
    <router-link
      :to="{ name: 'DashboardCareers' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.835"
        height="20.853"
        viewBox="0 0 20.835 20.853"
      >
        <g id="selection" transform="translate(0.353 0.375)">
          <g
            id="Group_3"
            data-name="Group 3"
            transform="translate(0.789 0.786)"
          >
            <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
              <path
                id="Path_3"
                data-name="Path 3"
                d="M35.831,22.716a9.274,9.274,0,1,0,2.716,6.556,9.274,9.274,0,0,0-2.716-6.556ZM29.275,37.762a8.488,8.488,0,1,1,8.486-8.487,8.488,8.488,0,0,1-8.486,8.487Z"
                transform="translate(-19.999 -20)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
          <g
            id="Group_7"
            data-name="Group 7"
            transform="translate(12.216 3.378)"
          >
            <g id="Group_6" data-name="Group 6" transform="translate(0 0)">
              <path
                id="Path_5"
                data-name="Path 5"
                d="M290.2,65.174h-.014a.393.393,0,0,0-.184.764h.01a.393.393,0,0,0,.188-.763Z"
                transform="translate(-289.719 -65.167)"
                fill="#fff"
              />
            </g>
          </g>
          <g
            id="Group_13"
            data-name="Group 13"
            transform="translate(7.124 15.958)"
          >
            <g id="Group_12" data-name="Group 12" transform="translate(0 0)">
              <path
                id="Path_8"
                data-name="Path 8"
                d="M202.675,426.819a.393.393,0,1,0-.188.763h.006a.393.393,0,1,0,.183-.764Z"
                transform="translate(-202.172 -426.803)"
                fill="#fff"
              />
            </g>
          </g>
          <g id="Group_17" data-name="Group 17" transform="translate(9.671)">
            <g id="Group_16" data-name="Group 16">
              <path
                id="Path_10"
                data-name="Path 10"
                d="M246.393,0A.393.393,0,0,0,246,.393V3.34a.393.393,0,0,0,.786,0V.393A.393.393,0,0,0,246.393,0Z"
                transform="translate(-246)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
          <g
            id="Group_19"
            data-name="Group 19"
            transform="translate(9.671 16.387)"
          >
            <g id="Group_18" data-name="Group 18">
              <path
                id="Path_11"
                data-name="Path 11"
                d="M246.393,417a.393.393,0,0,0-.393.393v2.947a.393.393,0,0,0,.786,0v-2.947A.393.393,0,0,0,246.393,417Z"
                transform="translate(-246 -417)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
          <g
            id="Group_21"
            data-name="Group 21"
            transform="translate(16.373 9.667)"
          >
            <g id="Group_20" data-name="Group 20" transform="translate(0 0)">
              <path
                id="Path_12"
                data-name="Path 12"
                d="M420.336,246h-2.947a.393.393,0,1,0,0,.786h2.947a.393.393,0,0,0,0-.786Z"
                transform="translate(-416.978 -245.999)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
          <g
            id="Group_23"
            data-name="Group 23"
            transform="translate(0.022 9.667)"
          >
            <g id="Group_22" data-name="Group 22">
              <path
                id="Path_13"
                data-name="Path 13"
                d="M3.345,246H.4a.393.393,0,0,0,0,.786H3.345a.393.393,0,0,0,0-.786Z"
                transform="translate(-0.022 -246)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
          <g
            id="Group_24"
            data-name="Group 24"
            transform="translate(8.48 8.48)"
          >
            <g id="Group_12-2" data-name="Group 12" transform="translate(0 0)">
              <path
                id="Path_8-2"
                data-name="Path 8"
                d="M204.147,426.855a1.578,1.578,0,1,0-.755,3.064l.022.006a1.578,1.578,0,1,0,.733-3.069Z"
                transform="translate(-202.191 -426.809)"
                fill="#fff"
                stroke="#fff"
                stroke-width="0.75"
              />
            </g>
          </g>
        </g>
      </svg>

      Recrutamento
    </router-link>
    <router-link :to="{ name: '' }" class="flex flex-ai-c admin_nav__link">
      <svg
        id="info"
        xmlns="http://www.w3.org/2000/svg"
        width="20.103"
        height="20.103"
        viewBox="0 0 20.103 20.103"
      >
        <g id="Group_32" data-name="Group 32">
          <g id="Group_31" data-name="Group 31">
            <path
              id="Path_25"
              data-name="Path 25"
              d="M150.9,130.008a.906.906,0,0,0-.9.9v6.034a.905.905,0,1,0,1.81,0v-6.034A.906.906,0,0,0,150.9,130.008Z"
              transform="translate(-140.854 -122.314)"
              fill="#fff"
            />
            <path
              id="Path_26"
              data-name="Path 26"
              d="M151.112,70.011a1.11,1.11,0,1,0,.786.325,1.11,1.11,0,0,0-.786-.325Z"
              transform="translate(-141.06 -66.101)"
              fill="#fff"
            />
            <g
              id="Ellipse_1"
              data-name="Ellipse 1"
              fill="none"
              stroke="#fff"
              stroke-width="1.75"
            >
              <circle cx="10.051" cy="10.051" r="10.051" stroke="none" />
              <circle cx="10.051" cy="10.051" r="9.176" fill="none" />
            </g>
          </g>
        </g>
      </svg>

      Sobre nós
    </router-link>
    <router-link :to="{ name: '' }" class="flex flex-ai-c admin_nav__link">
      <svg
        id="review"
        xmlns="http://www.w3.org/2000/svg"
        width="21.753"
        height="20.103"
        viewBox="0 0 21.753 20.103"
      >
        <path
          id="Path_27"
          data-name="Path 27"
          d="M20.368,8.7h-3.35V2.279A1.781,1.781,0,0,0,15.237.5H1.779A1.781,1.781,0,0,0,0,2.279v9.814a1.781,1.781,0,0,0,1.779,1.779H3.086l.95,3.8a.654.654,0,0,0,1.137.257l3.344-4.053h1.75V16.44a1.383,1.383,0,0,0,1.383,1.384h4.4l2.1,2.542a.654.654,0,0,0,1.137-.257l.572-2.288h.515a1.384,1.384,0,0,0,1.383-1.383V10.081A1.383,1.383,0,0,0,20.37,8.7ZM8.209,12.567a.654.654,0,0,0-.5.237L4.985,16.1l-.759-3.036a.654.654,0,0,0-.633-.49H1.779a.474.474,0,0,1-.474-.474V2.279a.474.474,0,0,1,.474-.474H15.237a.474.474,0,0,1,.474.474v9.814a.474.474,0,0,1-.474.474Zm12.237,3.872a.077.077,0,0,1-.077.077H19.344a.654.654,0,0,0-.633.49l-.382,1.525-1.471-1.782a.654.654,0,0,0-.5-.237H11.648a.077.077,0,0,1-.077-.077V13.872h3.665a1.781,1.781,0,0,0,1.779-1.779V10h3.35a.077.077,0,0,1,.077.077Zm0,0"
          transform="translate(0 -0.5)"
          fill="#fff"
        />
        <path
          id="Path_28"
          data-name="Path 28"
          d="M111.531,70.872a.654.654,0,0,1-.3-.075l-1.783-.937-1.784.937a.654.654,0,0,1-.95-.686l.341-1.986-1.443-1.406a.654.654,0,0,1,.362-1.113l1.994-.29.892-1.807a.654.654,0,0,1,1.17,0l.892,1.807,1.994.29a.654.654,0,0,1,.362,1.113l-1.443,1.406.341,1.986a.654.654,0,0,1-.643.763ZM107.469,66.7l.742.723a.654.654,0,0,1,.188.578l-.175,1.021.917-.482a.654.654,0,0,1,.607,0l.917.482-.175-1.021a.654.654,0,0,1,.188-.578l.742-.723-1.025-.149a.654.654,0,0,1-.49-.357l-.458-.929-.458.929a.654.654,0,0,1-.49.357Zm0,0"
          transform="translate(-100.935 -60.484)"
          fill="#fff"
        />
      </svg>

      Testemunhos/ Notícias
    </router-link>
    <router-link
      :to="{ name: 'DashboardUnities' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        id="building"
        xmlns="http://www.w3.org/2000/svg"
        width="19.297"
        height="20.477"
        viewBox="0 0 19.297 20.477"
      >
        <path
          id="Path_18"
          data-name="Path 18"
          d="M33.413,19.278h-1.58V.6a.6.6,0,0,0-.6-.6H17.5a.6.6,0,0,0-.6.6V19.278H15.316a.6.6,0,0,0,0,1.2h18.1a.6.6,0,1,0,0-1.2Zm-11.1,0V15.185h4.093v4.093Zm5.29,0v-4.69a.6.6,0,0,0-.6-.6H21.719a.6.6,0,0,0-.6.6v4.69H18.1V1.2H30.634V19.278Z"
          transform="translate(-14.716)"
          fill="#fff"
        />
        <path
          id="Path_19"
          data-name="Path 19"
          d="M138.78,66.309h-2.94a.6.6,0,0,0-.6.6v2.94a.6.6,0,0,0,.6.6h2.94a.6.6,0,0,0,.6-.6v-2.94A.6.6,0,0,0,138.78,66.309Zm-.6,2.94h-1.74V67.508h1.74Z"
          transform="translate(-130.42 -63.657)"
          fill="#fff"
        />
        <path
          id="Path_20"
          data-name="Path 20"
          d="M276.792,66.309h-2.94a.6.6,0,0,0-.6.6v2.94a.6.6,0,0,0,.6.6h2.94a.6.6,0,0,0,.6-.6v-2.94A.6.6,0,0,0,276.792,66.309Zm-.6,2.94h-1.74V67.508h1.74Z"
          transform="translate(-262.912 -63.657)"
          fill="#fff"
        />
        <path
          id="Path_21"
          data-name="Path 21"
          d="M138.78,205.954h-2.94a.6.6,0,0,0-.6.6v2.94a.6.6,0,0,0,.6.6h2.94a.6.6,0,0,0,.6-.6v-2.94a.6.6,0,0,0-.6-.6Zm-.6,2.94h-1.74v-1.741h1.74Z"
          transform="translate(-130.42 -197.717)"
          fill="#fff"
        />
        <path
          id="Path_22"
          data-name="Path 22"
          d="M276.792,205.954h-2.94a.6.6,0,0,0-.6.6v2.94a.6.6,0,0,0,.6.6h2.94a.6.6,0,0,0,.6-.6v-2.94a.6.6,0,0,0-.6-.6Zm-.6,2.94h-1.74v-1.741h1.74Z"
          transform="translate(-262.912 -197.717)"
          fill="#fff"
        />
      </svg>

      Unidades
    </router-link>
    <router-link
      :to="{ name: 'DashboardUsers' }"
      class="flex flex-ai-c admin_nav__link"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.103"
        height="20.103"
        viewBox="0 0 20.103 20.103"
      >
        <path
          id="user"
          d="M17.157,2.944a10.051,10.051,0,1,0,0,14.214,10.051,10.051,0,0,0,0-14.214ZM5.038,17.368a5.09,5.09,0,0,1,10.024,0,8.853,8.853,0,0,1-10.024,0ZM6.854,8.789a3.2,3.2,0,1,1,3.2,3.2,3.2,3.2,0,0,1-3.2-3.2Zm9.228,7.762a6.277,6.277,0,0,0-3.648-4.1,4.377,4.377,0,1,0-4.766,0,6.276,6.276,0,0,0-3.648,4.1,8.873,8.873,0,1,1,12.065,0Zm0,0"
          transform="translate(0.001 0)"
          fill="#fff"
        />
      </svg>

      Utilizadores
    </router-link>
  </nav>
</template>

<script>
// import DashboardHeaderLink from "@/components/Dashboard/DashboardHeaderLink.vue";

export default {
  name: "DashboardHeader",
  components: {
    // DashboardHeaderLink
  }
};
</script>
