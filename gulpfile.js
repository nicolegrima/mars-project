var gulp = require('gulp');
// will go to node modules folder - find gulp, pulls in code

var browserSync = require('browser-sync').create();
// auto Sync the browswer when changes are made

var plumber = require('gulp-plumber');
// prevent pipe breaking caused by errors from gulp plugins

var notify = require('gulp-notify');
// to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module.
// gulp-notify passes on the vinyl files even on error. So if you are using gulp-plumber the run will not break if the notifier returns an error.
//If you want to notify on errors gulp-plumber can be used to not break the run and force you to have to restart gulp.

var rename = require("gulp-rename");
// to rename files easily.

var jscs = require('gulp-jscs');
// check JavaScript code style with jscs + report

var babel = require('gulp-babel');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'), //this will take care of vendor prefixes
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
    return gulp.src('main.jsx') // What files do we want gulp to consume? The source
        .pipe(jscs()) // run jscs
        .pipe(jscs.reporter()) // reports errors - put ahead of Uglify always. Helped when put ahead of plumber
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(rename('main.min.js')) // Put after uglify
				.pipe(browserify({
					insertGlobals: true,
					debug: true
				}))
				.pipe(gulp.dest('./build')); // Where do we put the result? The destination
});
// use the ./ for this to work

gulp.task('watch', ['browser-sync'],['compile-react'], function(){

    browserSync.init({
      server: {
          baseDir:'./'
      }
});

gulp.watch(['main.jsx'], ['compile-react']);
gulp.watch(['./build/script.js'], ['index.html']).on('change', browserSync.reload);
gulp.watch(['./sass/style.scss'], ['sass']);
});
// in command line - type gulp watch and the main js file gets uglified, and the browser with index reloads

gulp.task('default', ['browser-sync'],['watch']);
// thanks to above you can just write in watch only and it'll trigger the above watch function lines
