// Still have to figure out how to make this work so I can use scss globally

module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import 'css/normalize';`,
                additionalData: `@import 'css/settings.variables';`,
                additionalData: `@import 'css/settings.responsive';`,
                additionalData: `@import 'css/grid.font.mixins';`,
                additionalData: `@import 'css/components.content';`,
            }
        }
    }
  }