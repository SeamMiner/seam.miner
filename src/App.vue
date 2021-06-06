<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  setup() {
    if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
      }
    }

    const { locale, t } = useI18n();
    const userLang: string = navigator.language;
    locale.value = userLang;

    const shortCut = (e: KeyboardEvent) => {
      if ("1".includes(e.key)) {
        locale.value = locale.value == "en-EN" ? "ru-RU" : "en-EN";
      }
      if ("3".includes(e.key)) {
        document.body.classList.toggle("dark");
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", shortCut);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", shortCut);
    });

    console.log(t("welcomeMessage"));
    console.log(t("greensDesign"));
    
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

  @media (max-width: 720px) {
    font-size: 8px;
  }
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;

  --primary: hsla(60, 43%, 43%, 1);
  --secondary: hsla(0, 0%, 100%, 1);
  --border-color: hsla(240, 2%, 90%, 1);
  --tertiary: hsla(0, 0%, 40%, 1);
  --shadow-color: hsla(0, 0%, 0%, 0.05);
  --headline-color: hsla(0, 0%, 0%, 1);

  &.dark {
    --primary: hsla(60, 54%, 74%, 1);
    --secondary: hsl(0, 0%, 15%);
    --border-color: hsl(10, 2%, 10%);
    --tertiary: hsl(0, 0%, 80%);
    --shadow-color: hsla(0, 0%, 100%, 0.05);
    --headline-color: hsla(0, 0%, 90%, 1);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--headline-color);
  line-height: 1.2;
  margin: 0;
}

h1 {
  font-size: 3rem;
}

p {
  color: var(--tertiary);
  line-height: 1.4;
  margin: 0;
  font-size: 16px;
}

strong {
  color: var(--primary);
}

.container {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  background-color: var(--secondary);
  padding: 0 1rem;
}
</style>
