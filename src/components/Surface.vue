<template>
  <a
    class="wrapper"
    :class="[`col-${cols}`, `row-${rows}`, { folder: folder }]"
    :href="href"
    :style="`background-image:  url(&quot;data:image/svg+xml;base64, ${window.btoa(
      superEllipse
    )}&quot;)`"
  >
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, PropType } from "vue";
import { createSquircleCorners, Gradient } from "@/superellipse";
// import { themeVariables } from "@/store/theme";
import { useStore } from "vuex";

export default defineComponent({
  name: "Surface",
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    href: String,
    cols: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 1,
    },
    gradient: Object as PropType<Gradient>,
    folder: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // const modalOpen = ref(false);
    // watch(modalOpen, () => {
    //   let body = document.getElementsByTagName("body")[0];
    //   body.style.overflow = modalOpen.value ? "hidden" : "visible";
    // });
    const store = useStore();
    const theme = computed(() => store.state.theme.activeTheme);
    const colors = store.state.theme.colors;
    const gradient = ref<Gradient>({
      id: props.gradient!.id,
      color1: props.gradient!.color1,
      color2: props.gradient!.color2,
      offset1: props.gradient?.offset1,
      offset2: props.gradient?.offset2,
      cx: props.gradient?.cx,
      cy: props.gradient?.cy,
      r: props.gradient?.r,
      gradientTransform: props.gradient?.gradientTransform,
    });

    const changeColors = () => {
      for (let token = 0; token < colors.length; token += 1) {
        if (props.gradient?.color1 === colors[token].name) {
          gradient.value.color1 = colors[token].value.get(theme.value);
        }
        if (props.gradient?.color2 === colors[token].name) {
          gradient.value.color2 = colors[token].value.get(theme.value);
        }
      }
    };

    changeColors();

    const createSuperEllipse = (gr: Gradient) =>
      createSquircleCorners(
        5,
        {
          width: props.cols * 90 - 30,
          height: props.rows * 90 - 30,
          radius: Math.min(
            Math.min(props.cols * 90 - 30, props.rows * 90 - 30) / 2,
            68
          ),
        },
        100,
        gr
      );

    const superEllipse = ref(createSuperEllipse(gradient.value));
    watch(theme, () => {
      changeColors();
      superEllipse.value = createSuperEllipse(gradient.value);
    });

    return {
      superEllipse,
      createSquircleCorners,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 1.5em;
  z-index: 50;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 30px;
  // display: flex;

  transition: all 0.15s ease-in-out;
  cursor: pointer;
  position: relative;
}

a {
  text-decoration: none;
  transition: box-shadow 0.1s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px #87abf9cc;
    z-index: 51;
  }
}

.folder {
  display: grid;
  grid-template: repeat(2, 50px) / repeat(2, 50px);
  place-content: center;
  grid-gap: 8px;
}
</style>
