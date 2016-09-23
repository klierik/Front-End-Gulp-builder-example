//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')(),
	args    = require('yargs').argv;

plugins.gulpif = require('gulp-if');

var cfg = require('../../gulpconfig.js')();

function swallowError(error) {
	// If you want details of the error in the console
	console.log(error.toString());

	this.emit('end')
}

// Tasks init
gulp.task('Watch:Styles', 'Watch and build styles.', function () {

	gulp.watch(cfg.path.stylesDir + '**/*.scss', ['Styles']);
}, {
	aliases: ["ws"]
});

gulp.task('Organise:Styles', 'Organise and format styles with CssComb.', function () {

	return gulp
		.src([cfg.path.stylesDir + '**/*.scss', '!' + cfg.path.stylesDir + '**/*variables*'])
		.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
		.pipe(plugins.csscomb(cfg.path.rootDir + 'gulp/.csscomb.json'))
		.pipe(gulp.dest(cfg.path.stylesDir));

}, {
	aliases: ["os"]
});

gulp.task('Styles', 'Build all styles.', ['Organise:Styles'], function () {

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
	aliases: ['s'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});
