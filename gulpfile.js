const { task } = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});