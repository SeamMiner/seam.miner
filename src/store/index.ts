import { createStore } from "vuex";
import { personalModule } from "./personal";
import { themeModule } from "./theme";
export default createStore({
  modules: {
    theme: themeModule,
    personal: personalModule,
  },
});
