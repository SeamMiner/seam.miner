<template>
  <div class="container">
    <div class="backgroundWords" id="backWords">
      <div class="word outlined" style="animation-delay: 0">FULL-STACK</div>
      <div class="word" style="animation-delay: 0.5s">FULL-STACK</div>
      <div class="word outlined" style="animation-delay: 0.75s">FULL-STACK</div>
      <div class="word" style="animation-delay: 1s">FULL-STACK</div>
    </div>

    <div class="content">
      <h1 class="header" v-html="t(`${route.name}.about.title`)" />
      <p class="aboutMe" v-html="t(`${route.name}.about.description`)" />
      <div class="socials">
        <a
          class="social button"
          v-for="(social, index) in socials"
          :key="index"
          :href="social.contact"
          :class="social.name"
        >
          <img
            height="28"
            width="28"
            :src="require(`../assets/img/${social.name}.svg`)"
            :alt="social.name"
          />
          <span class="description">{{ social.name }}</span>
        </a>
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
      -webkit-text-stroke: .02em var(--primary);
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
        font-size: 10rem;
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
    background-color: var(--content-background);
    z-index: 100;
    width: 50%;
    max-width: 40rem;
    transition: all 0.5s ease-in-out;
    position: relative;
    padding: 3.3rem 2.5rem;
    border-radius: 2rem;
    box-shadow: 0px 4px 250px 93px var(--shadow-color);

    & > .socials {
      display: grid;
      grid: max-content / repeat(auto-fit, minmax(160px, 1fr));
      gap: 10px;

      & > .social {
        &.Email {
          background: hsl(0, 0, 100%);
          color: hsl(0, 0, 0%);
          border: 1px solid hsl(240, 2%, 90%);
        }

        &.GitHub {
          background: hsl(209, 25, 22%);
          color: hsl(0, 0, 100%);
        }

        &.Telegram {
          background: hsl(0, 0, 100%);
          border: 1px solid hsl(240, 2%, 90%);
          color: hsl(200, 80, 53%);
        }

        & > img {
          transition: opacity 0.5s ease-in-out;
          margin-right: 10px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
