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

gulp.task('Images', 'Optimize images and build Sprite.', function(done){
	plugins.runSequence('Images:Optimize', 'Images:Sprite', 'Images:Optimize:Sprite', function () {
		done();
	});
}, {
	aliases: ['i'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});

gulp.task('Images:Optimize', '- optimize Images:', function () {

	return gulp
		.src(cfg.path.imagesDir + '**/*')
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.imagemin(cfg.plugins.imagemin))
		.pipe(gulp.dest(cfg.path.imagesDir));

}, {
	aliases: ['io']
});

gulp.task('Images:Sprite', '- build sprite.', function () {

	return plugins.sprity.src(cfg.plugins.sprity)
				  .pipe(plugins.gulpif(args.debug == true, plugins.debug()))
				  .on('error', swallowError)
				  .pipe(plugins.gulpif('*.png', gulp.dest(cfg.path.imagesDir), gulp.dest(cfg.path.stylesDir)));

}, {
	aliases: ['is']
});


gulp.task('Images:Optimize:Sprite', '- optimize Images:', function () {

	return gulp
		.src(cfg.path.imagesDir + cfg.plugins.sprity.name + '.png')
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.imagemin(cfg.plugins.imagemin))
		.pipe(gulp.dest(cfg.path.imagesDir));

}, {
	aliases: ['ios']
});
