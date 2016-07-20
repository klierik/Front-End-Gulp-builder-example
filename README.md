# Front-End-Gulp-builder-example
Just another one Gulp builder for Front-end development [bootstrap/sass/csscomb/sprite,imagemin]

# Install
Run ```$npm i``` and install NPM modules

# Run Builder
Run ```$gulp help``` to see what the Builder can do.

Or run ```$gulp``` and build default task:

```
$ gulp --dev
[16:35:47] Using gulpfile ~/http/dev/Front-End-Gulp-builder-example/Front-End-Gulp-builder-example/gulpfile.js
[16:35:47] Starting 'default'...
[16:35:47] Starting 'images'...
[16:35:47] Starting 'images.optimize'...
[16:35:47] gulp-imagemin: ✔ sprite/square-facebook.png (saved 621 B - 45.1%)
[16:35:47] gulp-imagemin: ✔ sprite/linked.png (saved 1.14 kB - 30.6%)
[16:35:47] gulp-imagemin: ✔ sprite/twitter.png (saved 1.78 kB - 44.6%)
[16:35:47] gulp-imagemin: ✔ sprite/pinterest.png (saved 3.08 kB - 48.1%)
[16:35:47] gulp-imagemin: ✔ sprite/skype.png (saved 1.69 kB - 28.3%)
[16:35:47] gulp-imagemin: ✔ sprite/social-youtube-circle.png (saved 1.34 kB - 30.1%)
[16:35:47] gulp-imagemin: ✔ sprite/social-instagram-new-square2.png (saved 2.19 kB - 21.3%)
[16:35:48] gulp-imagemin: ✔ sprite.png (saved 20.9 kB - 41.3%)
[16:35:48] gulp-imagemin: Minified 8 images (saved 32.74 kB - 37.7%)
[16:35:48] Finished 'images.optimize' after 959 ms
[16:35:48] Starting 'images.sprite'...
[16:35:48] Finished 'images.sprite' after 183 ms
[16:35:48] Starting 'images.optimize.sprite'...
[16:35:49] gulp-imagemin: ✔ sprite.png (saved 20.9 kB - 41.3%)
[16:35:49] gulp-imagemin: Minified 1 image (saved 20.9 kB - 41.3%)
[16:35:49] Finished 'images.optimize.sprite' after 598 ms
[16:35:49] Finished 'images' after 1.74 s
[16:35:49] Starting 'organise.styles'...
[16:35:49] Finished 'organise.styles' after 197 ms
[16:35:49] Starting 'styles'...
[16:35:50] Finished 'styles' after 1.24 s
[16:35:50] Finished 'default' after 3.18 s
```

Enjoy.
