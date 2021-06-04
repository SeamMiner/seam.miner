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

    const { locale } = useI18n();
    const userLang: string = navigator.language;
    locale.value = userLang;

    const shortCut = (e: KeyboardEvent) => {
      if ("Ll".includes(e.key)) {
        locale.value = locale.value == "en-EN" ? "ru-RU" : "en-EN";
      }
      if ("Tt".includes(e.key)) {
        document.body.classList.toggle("dark");
      }
    };

    onMounted(() => {
      document.addEventListener("keydown", shortCut);
    });

    onUnmounted(() => {
      document.removeEventListener("keydown", shortCut);
    });

    console.log(
      "Hi, what are u doing here? Ok, anyway u can change language and theme by pressing l and t keys on your keyboard respectivly;)"
    );
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
  --primary: hsl(0, 0%, 15%);
  --secondary: hsl(0, 0%, 100%);
  --tertiary: hsl(220, 10%, 95%);

  &.dark {
    --primary: hsl(0, 0%, 100%);
    --secondary: hsl(0, 0%, 15%);
    --tertiary: hsl(0, 0%, 20%);
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

p {
  margin: 1em 0 2em 0;
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
