var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../config');

gulp.task('watch', [
    'sprite:watch',
    'sass:watch',
    'copy:watch',
    'html:watch',
    'font:watch',
    'js:watch',
    'jade:watch'
]);


gulp.task('delete', function (cb) {
    rimraf('./'+config.dest.root, cb);
});
gulp.task('default', ['server', 'watch'], function() {});
gulp.task('app', ['html','font','sprite','copy','js','sass'], function() {});