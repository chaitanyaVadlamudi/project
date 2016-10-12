var jshint = require('gulp-jshint');
var gulp   = require('gulp');
var concat = require('gulp-concat');



var uglify = require('gulp-uglify');
var pump = require('pump');

var srcFiles =['./app/*/*.js','./app/*.js'];
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});
 
gulp.task('errors', function() {
  return gulp.src(srcFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat', function() {
  return gulp.src(srcFiles)
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./lib/'));
});