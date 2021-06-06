<template>
  <div class="container">
    <div class="backgroundWords" id="backWords">
      <div class="word outlined" style="animation-delay: 0">
        FULL-STACK FULL-STACK
      </div>
      <div class="word" style="animation-delay: 0.5s">
        FULL-STACK FULL-STACK
      </div>
      <div class="word outlined" style="animation-delay: 0.75s">
        FULL-STACK FULL-STACK
      </div>
      <div class="word" style="animation-delay: 1s">FULL-STACK FULL-STACK</div>
    </div>

    <div class="content">
      <h1 class="headline" v-html="t(`${route.name}.about.title`)" />
      <p class="description" v-html="t(`${route.name}.about.description`)" />
      <div class="socials">
        <a
          class="social"
          v-for="(social, index) in socials"
          :key="index"
          :href="social.contact"
          :class="social.name"
        >
          <svg
            v-if="social.name == 'Email'"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          <svg
            v-if="social.name == 'GitHub'"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          <svg
            v-if="social.name == 'Telegram'"
            width="1000px"
            height="1000px"
            viewBox="0 0 1000 1000"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <!-- Generator: Sketch 53.2 (72643) - https://sketchapp.com -->
            <title>Artboard</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="99.2583404%"
                id="linearGradient-1"
              >
                <stop stop-color="#2AABEE" offset="0%"></stop>
                <stop stop-color="#229ED9" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g
              id="Artboard"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <circle
                id="Oval"
                fill="url(#linearGradient-1)"
                cx="500"
                cy="500"
                r="500"
              ></circle>
              <path
                d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                id="Path-3"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </a>
      </div>
      <div class="logo">
        <img
          draggable="false"
          src="../assets/img/Logo.svg"
          alt="Beautiful logo designed by Alex Greene"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "Home",
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const socials = ref([
      {
        name: "Email",
        contact: "mailto:niatit@gmail.com",
      },
      {
        name: "GitHub",
        contact: "https://github.com/SeamMiner",
      },
      {
        name: "Telegram",
        contact: "https://t.me/SeamMiner",
      },
    ]);
    return {
      t,
      route,
      socials,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  & > .backgroundWords {
    display: grid;
    grid: 1fr / repeat(auto-fit, minmax(20rem, 1fr));
    place-items: center;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 0;

    & > .word {
      font-size: 20rem;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-weight: bold;
      animation: word 15s infinite ease-in-out;
      white-space: nowrap;
      color: var(--primary);
    }

    & > .outlined {
      -webkit-text-stroke: 0.02em var(--primary);
      -webkit-text-fill-color: transparent;
    }

    @keyframes word {
      0% {
        transform: translateY(0%);
      }

      50% {
        transform: translateY(-55%);
      }
      100% {
        transform: translateY(0%);
      }
    }

    @media (max-width: 720px) {
      grid: repeat(auto-fit, minmax(10rem, 1fr)) / 1fr;

      & > .word {
        writing-mode: horizontal-tb;
        text-orientation: mixed;
      }

      @keyframes word {
        0% {
          transform: translateX(0%);
        }

        50% {
          transform: translateX(-40%);
        }
        100% {
          transform: translateX(0%);
        }
      }
    }
  }

  & > .content {
    background-color: var(--secondary);
    border: 1px solid var(--border-color);
    z-index: 100;
    max-width: 45rem;
    transition: all 0.5s ease-in-out;
    padding: 4.5rem 2.5rem;
    border-radius: 2rem;
    box-shadow: 0px 4px 250px 93px var(--shadow-color);
    display: grid;
    grid:
      "logo headline" max-content
      "logo description" max-content
      "socials description" max-content / min-content 2fr;
    gap: 2rem 4rem;
    align-items: center;

    @media (max-width: 720px) {
      grid-template-areas:
        "logo headline"
        "description description"
        "socials socials";
    }

    & > .headline {
      grid-area: headline;
    }

    & > .logo {
      grid-area: logo;

      & > img {
        height: 16rem;
        width: 16rem;

        @media (max-width: 720px) {
          height: 8rem;
          width: 8rem;
        }
      }
    }

    & > .description {
      grid-area: description;
    }

    & > .socials {
      grid-area: socials;
      display: grid;
      grid: max-content / repeat(auto-fit, minmax(32px, 1fr));
      gap: 10px;
      place-items: center;

      & > * > * {
        transition: all 0.3s ease-in-out;
        fill: var(--tertiary);
        height: 30px;
        width: 30px;

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
