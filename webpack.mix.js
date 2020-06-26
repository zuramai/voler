const mix = require('laravel-mix');
require('laravel-mix-nunjucks')

mix.njk('src/', 'dist/', {
   watch: true,
   // data: {},
   // marked: null,
   // envOptions: null,
   // manageEnv: (nunjucks) => {},
})
mix
   .js("src/assets/js/app.js", "dist/assets/js")
   .js("src/assets/js/main.js", "dist/assets/js")
   .js("src/assets/js/feather-icons.js", "dist/assets/js")
   .sass("src/assets/scss/app.scss", "dist/assets/css")
   .sass("src/assets/scss/bootstrap.scss", "dist/assets/css")
   .setPublicPath("dist");
