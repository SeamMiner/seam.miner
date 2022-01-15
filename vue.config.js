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
      name: "seam.miner",
      short_name: "seam.miner",
      start_url: ".",
      display: "standalone",
      theme_color: "#000000",
      shortcuts: [
        {
          name: "Telegram",
          short_name: "tg",
          description: "Feel free to contact me!",
          url: "/tg",
        },
        {
          name: "Email",
          short_name: "mail",
          description: "Feel free to contact me!",
          url: "/mail",
        },
        {
          name: "GitHub",
          short_name: "gh",
          description: "Feel free to contact me!",
          url: "/gh",
        },
        {
          name: "Upwork",
          short_name: "upw",
          description: "Feel free to contact me!",
          url: "/upwork",
        },
      ],
    },

    themeColor: "#808000",
    msTileColor: "#808000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black-translucent",
  },
};
