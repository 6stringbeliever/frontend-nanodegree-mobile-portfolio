var gulp = require('gulp');

// Require plugins
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var minifyHTML = require('gulp-minify-html');
var minifyInline = require('gulp-minify-inline');

// Lint JavaScript
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Minify HTML and inline scripts and CSS
gulp.task('minifyhtml', function() {
  return gulp.src('dev/**/*.html')
             .pipe(minifyHTML())
             .pipe(minifyInline())
             .pipe(gulp.dest('dist'));
});

// Minify CSS
gulp.task('minifycss', function() {
  return gulp.src('dev/**/*.css')
             .pipe(uglifycss())
             .pipe(gulp.dest('dist'));
});

// Minify JavaScript
gulp.task('minifyjs', function() {
  return gulp.src('dev/**/*.js')
             .pipe(uglify())
             .pipe(gulp.dest('dist'));
});

// Move images with PNG or JPG extension
gulp.task('moveimages', function() {
  return gulp.src('dev/**/*.+(png|jpg)')
             .pipe(gulp.dest('dist'));
});

// Do everything by default
gulp.task('default', ['lint', 'minifyhtml', 'minifycss', 'minifyjs', 'moveimages']);