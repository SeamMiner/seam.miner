<template>
  <div class="container">
    <div class="backgroundWords" id="backWords">
      <div class="word outlined" style="animation-delay: 0">FULL-STACK</div>
      <div class="word" style="animation-delay: 0.5s">FULL-STACK</div>
      <div class="word outlined" style="animation-delay: 0.75s">FULL-STACK</div>
      <div class="word" style="animation-delay: 1s">FULL-STACK</div>
    </div>

    <div class="content">
      <h2 class="header" v-html="t(`${route.name}.about.title`)" />
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
            :src="require(`../assets/img/${social.name}.png`)"
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
    grid: 1fr / repeat(auto-fit, minmax(320px, 1fr));
    place-items: center;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    z-index: 0;

    & > .word {
      font-size: 320px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-weight: bold;
      animation: word 15s infinite ease-in-out;
      transform: translateY(100%);
      white-space: nowrap;
      color: var(--primary);
    }

    & > .outlined {
      -webkit-text-stroke: 5px var(--primary);
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
      grid: repeat(auto-fit, minmax(160px, 1fr)) / 1fr;

      & > .word {
        writing-mode: horizontal-tb;
        text-orientation: mixed;
        font-size: 160px;
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
    background: transparent;
    color: transparent;
    z-index: 100;
    width: 50%;
    max-width: 620px;
    transition: all 0.5s ease-in-out;
    position: relative;
    padding: 16px 20px 26px;
    color: var(--primary);

    &:before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: var(--tertiary);
      transform-origin: 0 bottom 0;
      transform: scaleY(0);
      transition: 0.4s ease-out;
      border-radius: 10px;
      z-index: -98;
      transform: scaleY(1);
    }

    & > .socials {
      display: grid;
      grid: max-content / repeat(auto-fit, minmax(160px, 1fr));
      gap: 10px;

      & > .social {
        &.Email {
          background: hsl(0, 0, 100%);
          color: hsl(0, 0, 0%);
        }

        &.GitHub {
          background: hsl(209, 25, 22%);
          color: hsl(0, 0, 100%);
        }

        &.Telegram {
          background: hsl(0, 0, 100%);
          // border: 2px solid hsl(0, 0, 90%);
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

  &:hover > .content,
  &:focus-within > .content {
    // color: var(--primary);

    &:before {
      transform: scaleY(1);
    }

    & > .socials > .social > img {
      opacity: 1;
    }
  }
}
</style>
