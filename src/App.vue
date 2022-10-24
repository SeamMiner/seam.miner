<template>
  <router-view />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  Ref,
  ref,
} from "vue";
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { locale, t, availableLocales } = useI18n();
    const store = useStore();
    const userLang = navigator.language;

    store.dispatch("theme/init");
    locale.value = userLang;

    const shortCut = (e: KeyboardEvent) => {
      if ("1".includes(e.key)) {
        locale.value =
          locale.value == availableLocales[0]
            ? availableLocales[1]
            : availableLocales[0];
      }
      if ("3".includes(e.key)) {
        store.dispatch("theme/toggle");
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", shortCut);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", shortCut);
    });

    const style =
      "font-weight: bold; font-size: 40px; color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";

    console.log(t("welcomeMessage"));
    console.log("%c@greeneboy", style);
    console.log(t("greensDesign"));

    return {
      store,
    };
  },
});
</script>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

*,
:before,
:after {
  box-sizing: inherit;
}

* {
  font-family: "Inter", system-ui, sans-serif;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}

#app {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: var(--text);
  padding: 1.25rem 1rem;
  background-color: var(--primary-bg);
  overflow: hidden;
  min-height: calc(100vh - 2.5rem);
  position: relative;
  transition: all 0.15s ease-in-out;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1.4;
  margin: 1em 0;
}

h1 {
  font-size: 4.5rem;
}

h2 {
  font-size: 3.5rem;
}

p {
  color: var(--text);
  line-height: 1.4;
  margin: 1em 0;
  font-size: 1.75rem;
}

a {
  font-size: 1.5rem;
}

strong {
  color: var(--selector);
}

.container {
  height: 100%;
  padding: 1.25rem 1rem;
  background: var(--secondary-bg);
  border-radius: 1rem;
  position: relative;

  & > .telegram {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    text-decoration: none;
    position: fixed;
    right: 2rem;
    padding: 0.5rem;
    border-radius: 1rem;
    color: #1d1d1d;
    font-weight: 600;
    background: #ffffff;
    transition: all 0.15s ease-in-out;
    z-index: 100;

    &:focus {
      box-shadow: 0 0 0 4px var(--selector);
    }

    & > svg {
      height: 1.5rem;
      width: 1.5rem;

      @media (max-width: 768px) {
        height: 1rem;
        width: 1rem;
      }
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
}

footer {
  display: flex;
  gap: 1rem 10rem;
  flex-wrap: wrap;
  align-items: center;

  --text: #ffffff;
  --border: #00000033;

  h1 {
    font-size: 8rem;
    font-weight: 600;
    color: var(--text);
    letter-spacing: -0.04em;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }

  .links {
    display: flex;
    gap: 2.5rem;
    flex-wrap: wrap;
  }
}
</style>
