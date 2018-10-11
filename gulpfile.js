var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header  = require('gulp-header'),
    rename = require('gulp-rename'),
    cssnano = require('gulp-cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    package = require('./package.json'),
    cssDir = '../makan-master/vue/assets/css',
    jsDir = '../makan-master/vue/assets/js';

var banner = [
  '/*!\n' +
  ' * <%= package.name %>\n' +
  ' * <%= package.title %>\n' +
  ' * <%= package.url %>\n' +
  ' * @author <%= package.author %>\n' +
  ' * @version <%= package.version %>\n' +
  ' * Copyright ' + new Date().getFullYear() + '. <%= package.license %> licensed.\n' +
  ' */',
  '\n'
].join('');

gulp.task('css', function () {
  gulp.src('src/scss/styles.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(autoprefixer('last 4 version'))
      .pipe(gulp.dest(cssDir))
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min' }))
      .pipe(header(banner, { package : package }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(cssDir))
});

gulp.task('js',function(){
  gulp.src('src/js/scripts.js')
      .pipe(sourcemaps.init())
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('default'))
      .pipe(header(banner, { package : package }))
      .pipe(gulp.dest(jsDir))
      .pipe(uglify())
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe(header(banner, { package : package }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(jsDir))
});

gulp.task('default', ['css'], function () {
  gulp.watch("src/scss/**/*.scss", ['css']);
});

gulp.task('cssjs', ['css', 'js'], function () {
  gulp.watch("src/scss/**/*.scss", ['css']);
  gulp.watch("src/js/*.js", ['js']);
});