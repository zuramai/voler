const mix = require('laravel-mix');
const sidebarItems = require('./sidebar-items.json');

require('laravel-mix-purgecss');
require('laravel-mix-nunjucks')

mix.njk('src/*', 'dist/', {
   data: {
      web_title: "Voler Admin Dashboard",
      sidebarItems
   },
   block: 'content',
   // marked: null,
   envOptions: {
      noCache: true
   }, 
   manageEnv: (nunjucks) => {
      nunjucks.addFilter('containString', function(str, containStr) {
         if(str == undefined) return false;
         return str.indexOf(containStr) >= 0
      })
   },
})
mix
   .js("src/assets/js/app.js", "dist/assets/js")
   .js("src/assets/js/main.js", "dist/assets/js")
   .js("src/assets/js/feather-icons.js", "dist/assets/js")
   .sass("src/assets/scss/app.scss", "dist/assets/css")
   // .purgeCss({
   //    content: [
   //       "src/**/*.html",
   //    ],
   //    safelist: [
   //       /^dropdown-/,
   //       /^modal/,
   //       /^feather/,
   //       'i',
   //       'svg',
   //    ],
   //     enabled: true,
   // })
   .options({
      processCssUrls: false
   })
   .sass("src/assets/scss/bootstrap.scss", "dist/assets/css")
   .setPublicPath("dist");
// Browsersync
mix.browserSync({
   files: ["src/scss/*.scss", "src/**/*.html", "src/assets/js/**/*.js"],
   server: "dist",
   port: 3003,
})