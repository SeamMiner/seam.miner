<template>
  <template v-if="isExternal">
    <router-link :to="link" :disabled="!link" class="link">
      <slot></slot>
    </router-link>
  </template>
  <template v-else>
    <a :href="link" :disabled="!link" target="_blank" class="link">
      <slot></slot>
    </a>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    link: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const isExternal = computed(() => {
      const domain = (url: string) =>
        url.replace("http://", "").replace("https://", "").split("/")[0];
      return !domain(props.link);
    });

    return {
      isExternal,
    };
  },
});
</script>

<style lang="scss" scoped>
.link {
  line-height: 1.4;
  color: var(--text);
  letter-spacing: -0.025em;
  text-decoration: none;
  font-weight: normal;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-bottom: 1px solid var(--border);

  &:hover,
  &:focus {
    border-color: var(--selector);
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
  }
}
</style>
