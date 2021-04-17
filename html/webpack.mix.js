let mix = require('laravel-mix');

const tailwind = require('tailwindcss');
// mix.js('src/app.js', 'dist/')
//    .sass('src/app.scss', 'dist/')
//    .options({ 
//        processCssUrls: false,
//        postCss: [tailwindjit()]
//     });


mix.js('src/app.js', 'dist/');
mix.sass('src/app.scss', 'dist/')
   .options({
      processCssUrls: false,
      postCss: [tailwind],
   })
   .browserSync({
      files: './**/*',
      server: './',
      proxy: false
  });
// mix.setPublicPath('dist');
// mix.setResourceRoot('./');