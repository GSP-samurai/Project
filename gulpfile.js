var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
 
gulp.task('sass-compile', function () {
  return gulp.src('./scss/**/*sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css')
    )})
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.sass', gulp.series('sass-compile'));
});