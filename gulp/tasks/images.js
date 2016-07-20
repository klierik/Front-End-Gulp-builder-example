//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')(),
	args    = require('yargs').argv;

plugins.gulpif      = require('gulp-if');
plugins.sprity      = require('sprity');
plugins.runSequence = require('run-sequence');

var cfg = require('../../gulpconfig.js')();

function swallowError(error) {
	// If you want details of the error in the console
	console.log(error.toString());

	this.emit('end')
}

gulp.task('images', 'Optimize images and build Sprite.', function(done){
	plugins.runSequence('images.optimize', 'images.sprite', 'images.optimize.sprite', function () {
		done();
	});
}, {
	aliases: [cfg.tasks.alias + ':i'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});

gulp.task('images.optimize', '- optimize images.', function () {

	return gulp
		.src(cfg.path.imagesDir + '**/*')
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.imagemin(cfg.plugins.imagemin))
		.pipe(gulp.dest(cfg.path.imagesDir));

}, {
	aliases: [cfg.tasks.alias + ':io']
});

gulp.task('images.sprite', '- build sprite.', function () {

	return plugins.sprity.src(cfg.plugins.sprity)
				  .pipe(plugins.gulpif(args.debug == true, plugins.debug()))
				  .on('error', swallowError)
				  .pipe(plugins.gulpif('*.png', gulp.dest(cfg.path.imagesDir), gulp.dest(cfg.path.stylesDir)));

}, {
	aliases: [cfg.tasks.alias + ':is']
});


gulp.task('images.optimize.sprite', '- optimize images.', function () {

	return gulp
		.src(cfg.path.imagesDir + cfg.plugins.sprity.name + '.png')
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.imagemin(cfg.plugins.imagemin))
		.pipe(gulp.dest(cfg.path.imagesDir));

}, {
	aliases: [cfg.tasks.alias + ':ios']
});
