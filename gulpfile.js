const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass-compile', function () {
  return gulp.src('./scss/**/*sass')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      cascade: false
  }))
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css')
    )})
gulp.task('watch', function () {
  gulp.watch('./scss/**/*.sass', gulp.series('sass-compile'));
});