<template>
  <section>
    <div class="title">
      <div class="topic">
        <b>Platon Lapp</b>
      </div>

      <h1>
        <span class="wrapper">
          <span v-html="t('Home.about.title')"></span>
          <div class="sticker developer" @click="stickerHandler">
            <img
              :src="require('@/assets/img/stickers/developer.svg')"
              alt="Huh, I guess u've bad internet connection"
            />
          </div>
          <div class="sticker light" @click="stickerHandler">
            <img
              :src="require('@/assets/img/stickers/light.svg')"
              alt="Huh, I guess u've bad internet connection"
            />
          </div>
          <div class="sticker world" @click="stickerHandler">
            <img
              :src="require('@/assets/img/stickers/world.svg')"
              alt="Huh, I guess u've bad internet connection"
            />
          </div>
          <div class="sticker SPb" @click="stickerHandler">
            <img
              :src="require('@/assets/img/stickers/SPb.svg')"
              alt="Huh, I guess u've bad internet connection"
            />
          </div>
        </span>
      </h1>
    </div>
    <div class="about">
      <a class="goDownButton" href="#projects">
        <svg
          width="302"
          height="302"
          viewBox="0 0 302 302"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M201.668 189.187V110.711C201.668 105.083 206.219 100.521 211.834 100.521C217.448 100.521 222 105.083 222 110.711V210.114C222 216.679 216.691 222 210.143 222L114.448 222C108.705 222 104.05 217.334 104.05 211.578C104.05 205.821 108.705 201.155 114.448 201.155H183.485L83.0419 98.1798C78.986 94.0216 78.986 87.3776 83.0419 83.2194C87.2289 78.9268 94.1191 78.9268 98.3061 83.2194L201.668 189.187Z"
            fill="currentColor"
          />
        </svg>
      </a>
      <p class="description" v-html="t('Home.about.description')"></p>

      <div class="skills">
        <div
          class="skill"
          v-for="skill in store.state.personal.skills"
          :key="skill"
        >
          {{ skill }}
        </div>
      </div>
      <p class="links">
        <Link
          v-for="(link, name) in store.state.personal.links"
          :key="name"
          :link="link"
          >{{ name }}</Link
        >
      </p>
    </div>
    <div id="projects">
      <template v-for="project in store.state.personal.projects" :key="project">
        <Competition :project="project" />
      </template>
    </div>

    <div class="university">
      <h2 v-html="t('Home.about.university')"></h2>
      <span>2019&nbsp;&mdash; 2023</span>
    </div>
    <div class="sticker world" @click="stickerHandler">
      <img
        :src="require('@/assets/img/stickers/world.svg')"
        alt="Huh, I guess u've bad internet connection"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

import Link from "@/components/Link.vue";
import Competition from "@/components/Competition.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "Home",
  components: {
    Link,
    Competition,
  },
  setup() {
    const { t } = useI18n();
    const route = useRoute();
    const store = useStore();

    const stickerHandler = (event: Event) => {
      let item = event.currentTarget as HTMLElement;
      item.style.setProperty("--scale", "0");
      setTimeout(() => {
        item.style.setProperty("--scale", "1");
      }, 10000);
    };

    return {
      t,
      route,
      store,
      stickerHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
section {
  position: relative;

  & > * {
    border-bottom: 1px solid var(--border);
  }

  .sticker {
    position: absolute;
    box-sizing: border-box;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: transform 1s cubic-bezier(0, -0.05, 1, -0.05);
    --scale: 1;
  }

  #projects {
    border-bottom: none;

    > div {
      border-bottom: 1px solid var(--border);
    }
  }

  .title {
    .topic {
      font-size: 1.5rem;
      letter-spacing: -0.04em;
    }

    h1 {
      font-weight: 500;
      line-height: 110%;
      text-align: center;
      letter-spacing: -0.04em;

      @media (max-width: 992px) {
        font-size: 3rem;
      }

      span {
        position: relative;
      }

      div {
        border: 6px solid #ffffff;
        box-shadow: 0px 0.995771px 0px rgba(0, 0, 0, 0.1);

        @media (max-width: 768px) {
          display: none;
        }
      }

      .developer {
        height: 6.125rem;
        width: 6.125rem;
        background: #a2a25d;
        transform: rotate(15deg) scale(var(--scale));
        bottom: -3rem;
        left: -2.2rem;

        @media (max-width: 992px) {
          height: 5rem;
          width: 5rem;

          > img {
            height: 1.875rem;
            width: 3.25rem;
          }
        }
      }

      .light {
        height: 5.5rem;
        width: 5.5rem;
        background: #d32679;
        transform: rotate(-15deg) scale(var(--scale));
        left: 5.3125rem;
        top: -3rem;

        @media (max-width: 992px) {
          height: 4.25rem;
          width: 4.25rem;

          > img {
            height: 2.5rem;
            width: 1.75rem;
          }
        }
      }

      .world {
        height: 4.5625rem;
        width: 4.5625rem;
        background: #9f5b63;
        transform: rotate(6.82deg) scale(var(--scale));
        right: 5.875rem;
        top: -2.5rem;

        @media (max-width: 992px) {
          height: 3.5rem;
          width: 3.5rem;

          > img {
            height: 2.125rem;
            width: 2.125rem;
          }
        }
      }

      .SPb {
        height: 5.5rem;
        width: 5.5rem;
        background: #5d5de4;
        transform: scale(var(--scale));
        bottom: 0;
        right: -4.75rem;

        @media (max-width: 992px) {
          height: 4.25rem;
          width: 4.25rem;

          > img {
            height: 2.375rem;
            width: 2.5rem;
          }
        }
      }
    }
  }

  .about {
    display: grid;
    grid:
      "down about links" max-content
      "down skills links" max-content / max-content minmax(200px, 600px) minmax(200px, max-content);
    gap: 3rem 2rem;
    justify-content: space-between;
    padding: 1.75rem 0 3.75rem;

    @media (max-width: 992px) {
      grid:
        "about about" max-content
        "down links" max-content
        "skills skills" max-content / 1fr minmax(200px, max-content);
    }

    .goDownButton {
      grid-area: down;
      height: 100%;
      cursor: pointer;
      display: flex;
      align-items: flex-end;

      > svg {
        border-radius: 50%;
        border: 1px solid var(--border);
        background: var(--secondary-bg);
        color: var(--text);
        @media (max-width: 992px) {
          height: 6.25rem;
          width: 6.25rem;
        }
      }
    }

    > .description {
      grid-area: about;
      max-width: 600px;
      @media (max-width: 992px) {
        justify-self: center;
        font-size: 1.25rem;
      }
    }

    .skills {
      grid-area: skills;
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem 1rem;

      .skill {
        font-size: 1.625rem;
        line-height: 1.4;
        letter-spacing: -0.025em;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border);
        border-radius: 100px;

        @media (max-width: 992px) {
          font-size: 1rem;
        }
      }
    }

    .links {
      grid-area: links;
      display: flex;
      flex-flow: column;
      align-items: flex-start;
      gap: 2.5rem;
    }
  }

  .university {
    padding: 6.5rem 7.25rem;
    border-bottom: none;

    @media (max-width: 768px) {
      padding: 2.5rem 1.25rem;
    }

    > h2 {
      font-weight: 500;
      line-height: 1.4;
      letter-spacing: -0.04em;
      margin: 0 0 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.5rem;
      }
    }

    > span {
      letter-spacing: -0.025em;
    }
  }

  > .world {
    border: 10px solid #ffffff;
    box-shadow: 0px 1.6263px 0px rgba(0, 0, 0, 0.1);

    height: 8.75rem;
    width: 8.75rem;
    background: #b0b084;
    transform: rotate(15deg) scale(var(--scale));
    right: 0;
    bottom: -6rem;

    > img {
      height: 5.625rem;
      width: 5.625rem;
    }

    @media (max-width: 992px) {
      height: 6.25rem;
      width: 6.25rem;
      bottom: -4rem;

      > img {
        height: 4rem;
        width: 4rem;
      }
    }
  }
}
</style>
