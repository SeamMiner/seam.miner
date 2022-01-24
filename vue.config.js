module.exports = {
  pluginOptions: {
    i18n: {
      locale: "en-EN",
      fallbackLocale: "en-EN",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
  pwa: {
    manifestOptions: {
      name: "PLaton Lapp",
      short_name: "Worst Front-end developper",
      start_url: ".",
      display: "standalone",
      theme_color: "#c7c789",
    },

    themeColor: "#c7c789",
    msTileColor: "#c7c789",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
