const mix = require('laravel-mix');
const sidebarItems = require('./sidebar-items.json');

require('laravel-mix-nunjucks')

mix.njk('src/', 'dist/', {
   watch: true,
   data: {
      web_title: "Voler Admin Dashboard",
      sidebarItems
   },
   // marked: null,
   // envOptions: null,
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
   .sass("src/assets/scss/bootstrap.scss", "dist/assets/css")
   .setPublicPath("dist");
