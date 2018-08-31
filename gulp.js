
var gulp = require('gulp')
var war = require('gulp-war')
var zip = require('gulp-zip')
var clean = require('gulp-clean')
var runSequence = require('run-sequence')

const distWar='./distwar';
const warFileName='angular';
// This will run in this order:
// * build-clean
// * build-scripts and build-styles in parallel
// * build-html
// * Finally call the callback function
gulp.task('build:war', function (callback) {
  runSequence(
    'war:clean-dist',
    'war:build-war',
    callback);
});

gulp.task('war:clean-dist', function () {
  return gulp.src(distWar, { read: false })
    .pipe(clean());
});

gulp.task('war:build-war', function () {
  gulp.src(["dist/app-postulantes/**"])
    .pipe(war({
      welcome: 'index.html',
      displayName: warFileName
    }))
    .pipe(zip(warFileName+'.war'))
    .pipe(gulp.dest(distWar));
});
