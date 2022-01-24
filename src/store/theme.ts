import { ActionTree, MutationTree } from "vuex";

enum themes {
  light = "light",
  dark = "dark",
}

enum themeVariables {
  primaryBg = "primary-bg",
  secondaryBg = "secondary-bg",
  text = "text",
  selector = "selector",
  selectorText = "selector-text",
  border = "border",
}

type ThemeColorInfo = {
  name: themeVariables;
  value: Map<themes, string>;
};

type ThemeModuleState = {
  activeTheme: themes;
  colors: ThemeColorInfo[];
};

const themeModuleState: ThemeModuleState = {
  activeTheme: themes.light, //TODO: add colors to supereelipses and images

  colors: [
    {
      name: themeVariables.primaryBg,
      value: new Map([
        [themes.light, "#C7C789"],
        [themes.dark, "#C7C789"],
      ]),
    },
    {
      name: themeVariables.secondaryBg,
      value: new Map([
        [themes.light, "#ffffff"],
        [themes.dark, "#111111"],
      ]),
    },
    {
      name: themeVariables.text,
      value: new Map([
        [themes.light, "#000000"],
        [themes.dark, "#FFFFFF"],
      ]),
    },
    {
      name: themeVariables.selector,
      value: new Map([
        [themes.light, "#ACAC6E"],
        [themes.dark, "#ACAC6E"],
      ]),
    },
    {
      name: themeVariables.selectorText,
      value: new Map([
        [themes.light, "#FFFFFF"],
        [themes.dark, "#FFFFFF"],
      ]),
    },
    {
      name: themeVariables.border,
      value: new Map([
        [themes.light, "#EBEBEB"],
        [themes.dark, "#1F1F1F"],
      ]),
    },
  ],
};

const themeModuleMutations = <MutationTree<ThemeModuleState>>{
  change(state, props: { newTheme: themes }) {
    state.activeTheme = props.newTheme;
    localStorage.setItem("seamminer:selectedTheme", props.newTheme);
  },
};

const themeModuleActions = <ActionTree<ThemeModuleState, null>>{
  init(context) {
    const theme = localStorage.getItem("seamminer:selectedTheme") || "";
    if (Object.values<string>(themes).includes(theme)) {
      context.dispatch("setTheme", theme);
    } else if (
      window.matchMedia("(prefers-color-scheme)").media !== "not all"
    ) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        context.dispatch("setTheme", themes.dark);
      } else {
        context.dispatch("setTheme", themes.light);
      }
    } else {
      context.dispatch("setTheme", themes.light);
    }
  },

  setTheme(context, newTheme) {
    context.commit("change", { newTheme: newTheme });
    context.dispatch("updateProperties");
  },

  toggle(context) {
    const newTheme =
      context.state.activeTheme === themes.light ? themes.dark : themes.light;

    context.commit("change", { newTheme });
    context.dispatch("updateProperties");
  },

  updateProperties(context) {
    const theme = context.state.activeTheme;
    const colors = context.state.colors;
    const root = document.documentElement.style;

    for (let token = 0; token < colors.length; token += 1) {
      root.setProperty(
        `--${colors[token].name}`,
        `${colors[token].value.get(theme)}`
      );
    }
  },
};

const themeModule = {
  namespaced: true,

  state: themeModuleState,
  mutations: themeModuleMutations,
  actions: themeModuleActions,
};

export { themeVariables, themeModule };
