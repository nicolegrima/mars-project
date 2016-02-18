var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require("gulp-rename");
var jscs = require('gulp-jscs');
var babel = require('gulp-babel');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-cssnano');

gulp.task('sass', function() {
   gulp.src('./sass/style.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']}))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build'));
});

gulp.task('compile-react', function(){
    return gulp.src('main.jsx')
        .pipe(jscs()) // run jscs
        .pipe(jscs.reporter())
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(rename('main.min.js'))
				.pipe(browserify({
					insertGlobals: true,
					debug: true
				}))
				.pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', function(){

    browserSync.init({
      server: {
          baseDir:'./'
      }
});

gulp.watch('main.jsx', ['compile-react']);
gulp.watch(['./build/script.js', 'index.html', './build/css/*.min.css']).on('change', browserSync.reload);
gulp.watch('./sass/style.scss', ['sass']);
});

gulp.task('default', ['browser-sync']);
