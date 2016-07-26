//
// Gulp & plugins init
var gulp    = require('gulp-help')(require('gulp')),
	plugins = require('gulp-load-plugins')();

plugins.runSequence = require('run-sequence');

var cfg = require('../gulpconfig.js')();

// Init Default gulp task
gulp.task('default', 'Run all builds', function (done) {
	plugins.runSequence('images', 'styles', 'scripts', function () {
		// console.log('Run something else');
		done();
	});
});
