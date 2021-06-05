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

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;

  --primary: hsl(0, 0%, 0%);
  --secondary: hsl(0, 0%, 90%);
  --content-background: hsl(0, 0%, 100%);
  --tertiary: hsl(0, 0%, 40%);
  --shadow-color: hsla(0, 0%, 0%, 0.05);

  &.dark {
    --primary: hsl(0, 0%, 100%);
    --secondary: hsl(0, 0%, 15%);
    --content-background: hsl(0, 0%, 10%);
    --tertiary: hsl(0, 0%, 80%);
    --shadow-color: hsla(0, 0%, 100%, 0.05);
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--primary);
  line-height: 1.2;
  margin-top: 0;
}

h1 {
  font-size: 3rem;
}

p {
  margin: 1em 0 2em 0;
  color: var(--tertiary);
  line-height: 1.4;
}

.container {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  background-color: var(--secondary);
}

.button {
  padding: 8px 16px 7px;
  transition: transform 0.2s ease-in-out;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  background: var(--primary);
  color: var(--secondary);

  &:hover {
    transform: translate(-5px, -5px);
  }
}
</style>
