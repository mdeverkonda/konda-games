module.exports = {
  cache: {
    cacheId: "konda-games",
    runtimeCaching: [
      {
        handler: "fastest",
        urlPattern: "/$"
      }
    ],
    staticFileGlobs: ["dist/**/*"]
  },
  manifest: {
    background: "#FFFFFF",
    title: "konda-games",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
