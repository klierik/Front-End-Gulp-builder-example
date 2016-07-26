//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')(),
	args    = require('yargs').argv;

plugins.gulpif = require('gulp-if');
plugins.es     = require('event-stream');

var cfg = require('../../gulpconfig.js')();

var scriptsFiles = [
	{ filename: cfg.scripts.bootstrap.filename, files: cfg.scripts.bootstrap.files }
];

function swallowError(error) {
	// If you want details of the error in the console
	console.log(error.toString());

	this.emit('end')
}

// Tasks init

gulp.task('scripts', 'Build all scripts.', function () {

	return plugins.es.merge(scriptsFiles.map(function (obj) {
		return gulp
			.src(obj.files)
			.pipe(plugins.gulpif(args.debug == true, plugins.debug()))
			.pipe(plugins.concat(obj.filename))
			.pipe(plugins.gulpif(!args.dev, plugins.uglify(cfg.plugins.uglify)))
			.pipe(gulp.dest(cfg.path.distJsDir));
	}));

}, {
	aliases: [cfg.tasks.alias + ':js'],
	options: {
		"dev":   "- run in development mode",
		"debug": "- output debug"
	}
});

gulp.task('watch.scripts', 'Watch and build scripts.', function () {

	gulp.watch(cfg.path.jsDir + '**/*.js', ['scripts']);
}, {
	aliases: [cfg.tasks.alias + ":wjs"]
});
