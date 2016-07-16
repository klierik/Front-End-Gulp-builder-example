var requireDir = require('require-dir');
requireDir('./gulp/', { recurse: true });

var gulp = require('gulp-help')(require('gulp'));
