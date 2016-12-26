'use strict';

var gulp     = require('gulp'),
    sass     = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css')
    minify   = require('gulp-minify');


gulp.task('sass', function() {
  return gulp.src('./styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('styles/css/styles.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('styles/css'));
});



gulp.task('default', function() {
  gulp.watch('./styles/sass/**/*.scss', ['sass']);
});
