import { createStore } from "vuex";
import { themeModule } from "./theme";
export default createStore({
  modules: {
    theme: themeModule,
  },
});
