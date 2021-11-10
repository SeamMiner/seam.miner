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

    <Surface>
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
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
          >
            <path
              d="M15.43 4.08333e-05C11.4639 0.0185495 7.66654 1.60707 4.86862 4.41811C2.07069 7.22914 0.499957 11.0339 0.5 15C0.5 18.9783 2.08035 22.7936 4.89339 25.6066C7.70643 28.4196 11.5217 30 15.5 30C19.4782 30 23.2935 28.4196 26.1066 25.6066C28.9196 22.7936 30.5 18.9783 30.5 15C30.5 11.0218 28.9196 7.20647 26.1066 4.39343C23.2935 1.58039 19.4782 4.08333e-05 15.5 4.08333e-05C15.4766 -1.36111e-05 15.4533 -1.36111e-05 15.43 4.08333e-05ZM21.6325 9.03003C21.7575 9.02753 22.0337 9.05878 22.2137 9.20503C22.3333 9.3089 22.4096 9.45387 22.4275 9.61128C22.4475 9.72753 22.4725 9.99378 22.4525 10.2013C22.2275 12.5738 21.25 18.3288 20.7525 20.985C20.5425 22.11 20.1287 22.4863 19.7275 22.5225C18.8575 22.6038 18.1962 21.9475 17.3525 21.395C16.0325 20.5288 15.2862 19.99 14.005 19.145C12.5237 18.17 13.4837 17.6325 14.3275 16.7575C14.5487 16.5275 18.3862 13.0363 18.4612 12.72C18.47 12.68 18.4787 12.5325 18.3912 12.455C18.3037 12.3775 18.1737 12.4038 18.08 12.425C17.9475 12.455 15.8387 13.85 11.7537 16.6063C11.1537 17.0188 10.6125 17.2188 10.1262 17.2063C9.59124 17.1963 8.56124 16.905 7.79499 16.6563C6.85499 16.35 6.10874 16.1888 6.17374 15.67C6.20749 15.4 6.57999 15.1238 7.28999 14.8413C11.6625 12.9363 14.5775 11.68 16.0375 11.0738C20.2025 9.34128 21.0687 9.04003 21.6325 9.03003Z"
            />
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
    </Surface>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import Surface from "@/components/Surface.vue";

export default defineComponent({
  name: "Home",
  components: {
    Surface,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const socials = ref([
      {
        name: "Email",
        contact: "mailto:niatit130@gmail.com",
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
      grid: max-content / repeat(auto-fit, 32px);
      gap: 30px;
      justify-content: center;

      & > * > * {
        transition: all 0.3s ease-in-out;
        fill: var(--tertiary);
        height: 30px;
        width: 30px;

        &:hover {
          fill: var(--primary);
        }
      }
    }
  }
}
</style>
