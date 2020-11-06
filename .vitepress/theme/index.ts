import DefaultTheme from "vitepress/dist/client/theme-default";
import hello from "../components/hello.vue";
import type { Theme } from "vitepress";

import "./index.css";

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("hello", hello);
  },
};

export default theme;
