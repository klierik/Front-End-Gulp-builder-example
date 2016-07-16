//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')(),
	args    = require('yargs').argv;

plugins.gulpif = require('gulp-if');
plugins.sprity = require('sprity');

var cfg = require('../../gulpconfig.js')();

function swallowError(error) {
	// If you want details of the error in the console
	console.log(error.toString());

	this.emit('end')
}

gulp.task('images', 'Optimize images and build Sprite.', ['images.optimize', 'images.sprite'], null, {
	aliases: [cfg.tasks.alias + ':i'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});

gulp.task('images.optimize', '- optimize images.', function () {

	return gulp
		.src(cfg.path.imagesDir + '**/*')
		.pipe(plugins.imagemin(cfg.plugins.imagemin))
		.pipe(gulp.dest(cfg.path.imagesDir));

}, {
	aliases: [cfg.tasks.alias + ':io']
});

gulp.task('images.sprite', '- build sprite.', ['images.optimize'], function () {

	return plugins.sprity.src(cfg.plugins.sprity)
				  .on('error', swallowError)
				  .pipe(plugins.gulpif('*.png', gulp.dest(cfg.path.imagesDir), gulp.dest(cfg.path.stylesDir)));

}, {
	aliases: [cfg.tasks.alias + ':is']
});
