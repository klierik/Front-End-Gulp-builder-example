//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')(),
	args    = require('yargs').argv;

plugins.gulpif    = require('gulp-if');
//plugins.fs        = require('fs');
//plugins.merge     = require('merge');
//plugins.penthouse = require('penthouse');

var cfg = require('../../gulpconfig.js')();

function swallowError(error) {
	// If you want details of the error in the console
	console.log(error.toString());

	this.emit('end')
}

// Tasks init
gulp.task('watch.styles', 'Watch and build styles.', function () {

	gulp.watch(cfg.source.sass.dir + '**/*.scss', ['styles']);
}, {
	aliases: [cfg.tasks.alias + ":ws"]
});

gulp.task('organise.styles', 'Organise and format styles with CssComb.', function () {

	return gulp
		.src([cfg.source.sass.dir + '**/*.scss', '!' + cfg.source.sass.dir + '**/*variables*'])
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.csscomb(cfg.path.rootDir + 'gulp/.csscomb.json'))
		.pipe(gulp.dest(cfg.source.sass.dir));

}, {
	aliases: [cfg.tasks.alias + ":os"]
});

gulp.task('styles', 'Build all styles.', function () {

	return gulp
		.src(cfg.styles.files)
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.gulpif(args.dev, plugins.sourcemaps.init()))
		.pipe(plugins.gulpif(args.dev, plugins.sass(cfg.plugins.sass.dev), plugins.sass(cfg.plugins.sass.prod)))
		.on('error', swallowError)
		.pipe(plugins.autoprefixer(cfg.plugins.autoprefixer))
		.pipe(plugins.cssBase64(cfg.plugins.cssBase64))
		.pipe(plugins.gulpif(args.dev, plugins.sourcemaps.write(cfg.plugins.sourcemaps)))
		.pipe(gulp.dest(cfg.path.distCssDir));

}, {
	aliases: [cfg.tasks.alias + ':s'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});
