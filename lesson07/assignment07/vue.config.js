module.exports = {
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/_app.scss";`,
            additionalData: `@import "@/assets/_grid.font.mixins.scss";`,
        },
      }
    }
  }