<template>
  <div class="cards">
    <Surface
      class="about"
      id="about"
      :cols="6"
      :rows="4"
      :gradient="{ id: 'About', color1: 'secondary-bg', color2: 'ts' }"
    >
      <h3 v-html="t(`${route.name}.about.title`)"></h3>
      <p v-html="t(`${route.name}.about.description`)"></p>
      <p v-html="t(`${route.name}.about.contacts`)"></p>
    </Surface>
    <Surface
      :href="'https://typing.school/'"
      class="ts"
      id="ts"
      :cols="6"
      :rows="3"
      :gradient="{ color1: 'ts', color2: 'ts' }"
    >
      <div class="headline">
        <DarkLightImage path="ts" ext="png" alt="Typing School" />
      </div>
      <div class="illustration">
        <DarkLightImage path="keyboard" ext="png" alt="Typing School" />
      </div>
    </Surface>
    <Surface
      class="mbp"
      id="mbp"
      href="https://github.com/SeamMiner/mbp"
      :cols="6"
      :rows="3"
      :gradient="{ color1: '#FFFFFF', color2: '#FFFFFF' }"
    >
      <img
        draggable="false"
        src="../assets/img/mbp.png"
        alt="My Blood Pressure Preview"
      />
    </Surface>
    <Surface
      class="skills"
      id="skills"
      :cols="4"
      :rows="2"
      :gradient="{ id: 'Skills', color1: 'secondary-bg', color2: 'ts' }"
    >
      <h3 v-html="t(`${route.name}.skills`)"></h3>
      <tags>
        <span>TypeScript</span>
        <span>Vue 2/3</span>
        <span>Vuex</span>
        <span>Sass</span>
        <span>Django</span>
      </tags>
    </Surface>
    <Surface
      class="hire"
      id="hire"
      :gradient="{ color1: '#00000050', color2: '#00000050', id: 'hireBlock' }"
      :cols="2"
      :rows="2"
      :folder="true"
    >
      <Surface
        class="socials email"
        :cols="1"
        :rows="1"
        :gradient="{ color1: '#FFFFFF', color2: '#FFFFFF' }"
        href="mailto:niatit130@gmail.com"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
          />
        </svg>
      </Surface>
      <Surface
        class="socials upwork"
        :cols="1"
        :rows="1"
        :gradient="{ color1: '#14A800', color2: '#14A800', id: 'upwork' }"
        href="https://www.upwork.com/freelancers/~01a9e70f463182bc82"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path
            d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"
            fill="white"
          />
        </svg>
      </Surface>
      <Surface
        class="socials github"
        :cols="1"
        :rows="1"
        :gradient="{ color1: '#161b22', color2: '#161b22', id: 'github' }"
        href="https://github.com/SeamMiner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            fill="white"
          />
        </svg>
      </Surface>
      <Surface
        class="socials telegram"
        :cols="1"
        :rows="1"
        :gradient="{ color1: '#2AABEE', color2: '#229ED9', id: 'telegram' }"
        href="https://t.me/SeamMiner"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 31">
          <path
            d="M15.43 4.08333e-05C11.4639 0.0185495 7.66654 1.60707 4.86862 4.41811C2.07069 7.22914 0.499957 11.0339 0.5 15C0.5 18.9783 2.08035 22.7936 4.89339 25.6066C7.70643 28.4196 11.5217 30 15.5 30C19.4782 30 23.2935 28.4196 26.1066 25.6066C28.9196 22.7936 30.5 18.9783 30.5 15C30.5 11.0218 28.9196 7.20647 26.1066 4.39343C23.2935 1.58039 19.4782 4.08333e-05 15.5 4.08333e-05C15.4766 -1.36111e-05 15.4533 -1.36111e-05 15.43 4.08333e-05ZM21.6325 9.03003C21.7575 9.02753 22.0337 9.05878 22.2137 9.20503C22.3333 9.3089 22.4096 9.45387 22.4275 9.61128C22.4475 9.72753 22.4725 9.99378 22.4525 10.2013C22.2275 12.5738 21.25 18.3288 20.7525 20.985C20.5425 22.11 20.1287 22.4863 19.7275 22.5225C18.8575 22.6038 18.1962 21.9475 17.3525 21.395C16.0325 20.5288 15.2862 19.99 14.005 19.145C12.5237 18.17 13.4837 17.6325 14.3275 16.7575C14.5487 16.5275 18.3862 13.0363 18.4612 12.72C18.47 12.68 18.4787 12.5325 18.3912 12.455C18.3037 12.3775 18.1737 12.4038 18.08 12.425C17.9475 12.455 15.8387 13.85 11.7537 16.6063C11.1537 17.0188 10.6125 17.2188 10.1262 17.2063C9.59124 17.1963 8.56124 16.905 7.79499 16.6563C6.85499 16.35 6.10874 16.1888 6.17374 15.67C6.20749 15.4 6.57999 15.1238 7.28999 14.8413C11.6625 12.9363 14.5775 11.68 16.0375 11.0738C20.2025 9.34128 21.0687 9.04003 21.6325 9.03003Z"
            fill="white"
          />
        </svg>
      </Surface>
    </Surface>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { createSquircleCorners } from "@/superellipse";

import Surface from "@/components/Surface.vue";
import DarkLightImage from "@/components/DarkLightImage.vue";

export default defineComponent({
  name: "Home",
  components: {
    Surface,
    DarkLightImage,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();

    return {
      t,
      route,
      createSquircleCorners,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  & > .backgroundWords {
    display: grid;
    place-items: center;
    // height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 0;

    & > svg > path {
      stroke: var(
        --selector
      ); //TODO: fix path color (replace from olive to gray)
    }
  }

  & > .cards {
    display: grid;
    grid-template-rows: repeat(auto-fit, 60px); //TODO: fix row height
    grid-gap: 16px;
    grid-auto-flow: dense;
    grid-auto-columns: minmax(30px, 60px);
    grid-auto-rows: 60px;
    z-index: 1;

    @media (min-width: 992px) {
      grid-template-columns: repeat(12, minmax(30px, 60px));
    }

    @media (max-width: 640px) {
      & > .gitHub {
        grid-column: span 6;
      }
    }

    & > .ts {
      padding-bottom: 0;
      display: grid;
      place-items: end center;
      row-gap: 1rem;

      & > .headline {
        height: 1.5rem;
        display: flex;
        position: relative;

        &:after {
          $size: 3rem;
          content: " ";
          position: absolute;
          right: -$size * 0.75;
          bottom: -$size * 0.75;
          width: $size;
          height: $size;
          background-image: url("../assets/img/vulcan.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      }

      & > .illustration {
        height: 7rem;
        font-size: 0;
        overflow: hidden;

        &:after {
          content: " ";
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 100%;
          height: 7rem;
          background-image: linear-gradient(
            to top,
            var(--ts) 5%,
            transparent 100%
          );
          border-bottom-left-radius: 2rem;
          border-bottom-right-radius: 2rem;
        }
      }
    }

    & > .skills {
      & > h3 {
        margin-top: 0;
      }

      & > tags {
        display: flex;
        flex-wrap: wrap;

        & > span {
          font-size: 0.8rem;
          border: 1px solid;
          border-radius: 0.5em;
          padding-top: 0.2em;
          padding-bottom: 0.2em;
          padding-left: 0.5em;
          padding-right: 0.5em;
          margin-right: 8px;
          margin-bottom: 8px;
        }
      }

      @media (max-width: 512px) {
        grid-column: span 6;
      }
    }

    & > .mbp {
      display: grid;
      place-items: center;

      & > img {
        width: 100%;
      }
    }

    & > .hire {
      height: 112px;
      width: 112px;
      padding: 12px;

      & .socials {
        padding: 6px;
      }

      & > .upwork {
        padding: 12px;
      }
    }
  }
}
</style>
