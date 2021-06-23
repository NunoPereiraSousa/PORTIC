<template>
  <header class="top_header flex flex-ai-c flex-jc-sb">
    <div class="top_header__welcome">
      <h1>Bem-vindo, Nuno Sousa.</h1>
      <h3>{{ getTime() }}, {{ day }} de {{ getMonth() }}, {{ year }}</h3>
    </div>
    <div class="top_header__actions flex flex-ai-c">
      <button
        v-if="!$route.name == 'DashboardAboutUs'"
        class="top_header__actions__remove flex flex-ai-c"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.848"
          height="21.967"
          style="width: 20px"
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

        Removidos
      </button>

      <button
        class="top_header__actions__add flex flex-ai-c"
        v-if="$route.name == 'DashboardAboutUs'"
      >
        <svg
          id="info"
          xmlns="http://www.w3.org/2000/svg"
          width="20.103"
          height="20.103"
          style="width: 20px"
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
        Guardar
      </button>

      <div v-if="$route.name == 'DashboardAreas'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="areasPage"
        >
          <svg
            id="shape"
            xmlns="http://www.w3.org/2000/svg"
            width="19.095"
            height="19.099"
            style="width: 20px"
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

          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardCourses'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="coursesPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.233"
            height="20.103"
            style="width: 20px"
            viewBox="0 0 25.233 20.103"
          >
            <path
              id="graduation-hat"
              d="M23.649,64.474v-6.75l.281-.081c1.077-.324,1.3-.871,1.3-1.273s-.226-.951-1.3-1.276l-9.218-2.765a7.588,7.588,0,0,0-2.095-.264,7.589,7.589,0,0,0-2.1.264L1.3,55.094c-1.077.324-1.3.871-1.3,1.273s.226.95,1.3,1.273l3.447,1.034V64.4c0,.692.45,1.667,2.6,2.381a17.323,17.323,0,0,0,5.271.73,17.323,17.323,0,0,0,5.271-.73c2.143-.714,2.6-1.689,2.6-2.381V58.674l1.688-.507v6.307a2.327,2.327,0,0,0-1.584,2.2v3.167a2.323,2.323,0,0,0,4.646,0V66.676a2.327,2.327,0,0,0-1.584-2.2Zm-12.7-10.729a6.188,6.188,0,0,1,1.671-.2,6.188,6.188,0,0,1,1.671.2l8.737,2.622-3.5,1.05h-.006l-5.234,1.569a6.189,6.189,0,0,1-1.671.2,6.189,6.189,0,0,1-1.668-.2L5.712,57.419H5.707l-3.5-1.052ZM19.006,64.4c0,.1-.268.541-1.581.978a15.831,15.831,0,0,1-4.8.658,15.831,15.831,0,0,1-4.8-.658c-1.313-.438-1.581-.883-1.581-.978v-5.28l4.292,1.288a7.587,7.587,0,0,0,2.095.264,7.588,7.588,0,0,0,2.095-.264l4.292-1.288Zm4.751,5.445a.844.844,0,1,1-1.688,0V66.676a.844.844,0,0,1,1.688,0Z"
              transform="translate(0 -52.063)"
              fill="#fff"
            />
          </svg>
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardProjects'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="projectsPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.729"
            height="20.103"
            style="width: 20px"
            viewBox="0 0 22.729 20.103"
          >
            <path
              id="suitcase"
              d="M21.124,17.9H18.592v-2.45a1.148,1.148,0,0,0-1.147-1.147H5.283a1.148,1.148,0,0,0-1.147,1.147V17.9H1.6A1.607,1.607,0,0,0,0,19.511v13.3a1.607,1.607,0,0,0,1.6,1.6H21.124a1.607,1.607,0,0,0,1.6-1.6v-13.3a1.607,1.607,0,0,0-1.6-1.606ZM5.513,15.684h11.7V17.9H5.513ZM1.6,19.281H21.124a.232.232,0,0,1,.229.229v4.128H14.4v-.617a1.148,1.148,0,0,0-1.147-1.147H9.478a1.148,1.148,0,0,0-1.147,1.147v.617H1.376V19.51a.232.232,0,0,1,.229-.229Zm11.412,3.966v2.224H9.707V23.249h3.314Zm8.107,9.789H1.6a.232.232,0,0,1-.229-.229V25.012H8.331V25.7a1.148,1.148,0,0,0,1.147,1.147h3.772A1.148,1.148,0,0,0,14.4,25.7v-.687h6.956v7.794a.232.232,0,0,1-.229.229Z"
              transform="translate(0 -14.308)"
              fill="#fff"
            />
          </svg>
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardUnities'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="unitiesPage"
        >
          <svg
            id="building"
            xmlns="http://www.w3.org/2000/svg"
            width="19.297"
            height="20.477"
            style="width: 20px"
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
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardCareers'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="careersPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20.835"
            height="20.853"
            style="width: 20px"
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
                <g
                  id="Group_12"
                  data-name="Group 12"
                  transform="translate(0 0)"
                >
                  <path
                    id="Path_8"
                    data-name="Path 8"
                    d="M202.675,426.819a.393.393,0,1,0-.188.763h.006a.393.393,0,1,0,.183-.764Z"
                    transform="translate(-202.172 -426.803)"
                    fill="#fff"
                  />
                </g>
              </g>
              <g
                id="Group_17"
                data-name="Group 17"
                transform="translate(9.671)"
              >
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
                <g
                  id="Group_20"
                  data-name="Group 20"
                  transform="translate(0 0)"
                >
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
                <g
                  id="Group_12-2"
                  data-name="Group 12"
                  transform="translate(0 0)"
                >
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
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardMedia'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="mediasPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25.43"
            height="20.353"
            style="width: 20px"
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
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardUsers'">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="usersPage"
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
          Adicionar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardAddPage'">
        <button class="top_header__actions__add flex flex-ai-c">
          Confirmar
        </button>
      </div>

      <div v-else-if="$route.name == 'DashboardTN'" class="flex flex-ai-c">
        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="addNewsPage"
        >
          <svg
            viewBox="-78 -18 560 560.00187"
            style="width: 20px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m260.722656 3.878906-.128906-.125c-2.355469-2.429687-5.605469-3.7890622-8.996094-3.74999975-.417968-.01953125-.839844.01953125-1.25.12890575h-191.953125c-34.503906.007813-62.46875 27.976563-62.484375 62.484376v399.898437c.015625 34.503906 27.980469 62.472656 62.484375 62.484375h278.308594c34.503906-.011719 62.472656-27.980469 62.484375-62.484375v-315.175781c-.023438-3.308594-1.320312-6.484375-3.625-8.867188zm3.371094 38.742188 92.726562 92.476562h-55.234374c-20.679688-.0625-37.433594-16.8125-37.492188-37.488281zm72.734375 457.261718h-278.433594c-20.679687-.058593-37.425781-16.8125-37.492187-37.492187v-399.902344c.066406-20.675781 16.8125-37.429687 37.492187-37.488281h180.707031v72.609375c.011719 34.5 27.980469 62.46875 62.484376 62.484375h72.609374v302.296875c.039063 20.671875-16.695312 37.464844-37.367187 37.492187zm0 0"
            />
            <path
              d="m76.015625 241.195312h135.09375c6.898437 0 12.5-5.59375 12.5-12.496093 0-6.902344-5.601563-12.496094-12.5-12.496094h-135.09375c-6.902344 0-12.496094 5.59375-12.496094 12.496094 0 6.902343 5.59375 12.496093 12.496094 12.496093zm0 0"
            />
            <path
              d="m319.207031 310.679688h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496093 0 6.898438 5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.597656 12.5-12.496094 0-6.902343-5.601562-12.496093-12.5-12.496093zm0 0"
            />
            <path
              d="m319.207031 405.28125h-243.191406c-6.902344 0-12.496094 5.59375-12.496094 12.496094s5.59375 12.496094 12.496094 12.496094h243.191406c6.898438 0 12.5-5.59375 12.5-12.496094s-5.601562-12.496094-12.5-12.496094zm0 0"
            />
          </svg>
          Adicionar Notícias
        </button>

        <button
          class="top_header__actions__add flex flex-ai-c"
          @click="addTestimonialsPage"
        >
          <svg
            id="review"
            xmlns="http://www.w3.org/2000/svg"
            style="width: 20px"
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
          Adicionar Testemunhos
        </button>
      </div>

      <div
        class="top_header__actions__image"
        :style="imageStyle"
        @click="openProfile"
      ></div>
    </div>
  </header>
</template>

<script>
import methods from "../../views/Dashboard/DashboardHome";
export default {
  name: "DashboardTopHeader",
  data: () => {
    return {
      day: "",
      year: "",
      loggedUser: {},
      users: []
    };
  },
  created() {
    this.day = methods.methods.getDay();
    this.year = methods.methods.getYear();

    this.loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    this.users = JSON.parse(localStorage.getItem("users"));
  },
  mounted() {
    this.updateTime = setInterval(() => {
      this.getTime();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.updateTime);
  },
  computed: {
    imageStyle() {
      return `background-image: url('https://www.hypeness.com.br/1/2020/01/Kobe_Bryant_04.jpg')`;
    }
  },
  methods: {
    async openProfile() {
      try {
        await this.$store.dispatch("setUser");

        console.log(1);
      } catch (error) {
        console.log(error);
        return error;
      }

      this.$router.push({
        name: "DashboardProfile",
        params: { fullName: this.$store.getters.getLoggedUser.username }
      });
    },
    getMonth() {
      let month = "";

      switch (new Date().getMonth()) {
        case 0:
          month = "janeiro";
          break;
        case 1:
          month = "fevereiro";
          break;
        case 2:
          month = "março";
          break;
        case 3:
          month = "abril";
          break;
        case 4:
          month = "maio";
          break;
        case 5:
          month = "junho";
          break;
        case 6:
          month = "julho";
          break;
        case 7:
          month = "agosto";
          break;
        case 8:
          month = "setembro";
          break;
        case 9:
          month = "outubro";
          break;
        case 10:
          month = "novembro";
          break;
        case 11:
          month = "dezembro";
          break;
      }

      return month;
    },
    getTime() {
      let now = new Date();

      let hours = now.getHours();

      if (hours == 0) hours = `${hours}0`;
      else if (hours < 10) hours = `0${hours}`;

      let minutes = now.getMinutes();

      if (minutes == 0) minutes = `${minutes}0`;
      else if (minutes < 10) minutes = `0${minutes}`;

      return `${hours}:${minutes}`;
    },
    areasPage() {
      this.$router.push({
        name: "DashboardAddAreas"
      });
    },
    coursesPage() {
      this.$router.push({
        name: "DashboardAddCourses"
      });
    },
    projectsPage() {
      this.$router.push({
        name: "DashboardAddProjects"
      });
    },
    unitiesPage() {
      this.$router.push({
        name: "DashboardAddUnities"
      });
    },
    careersPage() {
      this.$router.push({
        name: "DashboardAddCareers"
      });
    },
    mediasPage() {
      this.$router.push({
        name: "DashboardAddMedia"
      });
    },
    usersPage() {
      this.$router.push({
        name: "DashboardAddUsers"
      });
    },
    addNewsPage() {
      this.$router.push({
        name: "DashboardAddNews"
      });
    }
  }
};
</script>
