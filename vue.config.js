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
      theme_color: "#000000",
    },

    themeColor: "#808000",
    msTileColor: "#808000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
