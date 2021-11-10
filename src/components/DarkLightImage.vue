<template>
  <img
    v-show="theme === 'light'"
    :src="require(`@/assets/img/${path}/${path}_light.${ext}`)"
    draggable="false"
    :alt="alt"
  />
  <img
    v-show="theme === 'dark'"
    :src="require(`@/assets/img/${path}/${path}_dark.${ext}`)"
    draggable="false"
    :alt="alt"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "DarkLightImage",

  props: {
    path: {
      type: String, // i.e. 'logo-beta'
      required: true,
    },
    ext: {
      type: String, // i.e. 'svg'
      require: true,
    },
    alt: {
      type: String, // i.e. 'Logo'
      default: "",
    },
  },

  setup() {
    const store = useStore();
    const theme = computed(() => store.state.theme.activeTheme);
    return { theme };
  },
});
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
