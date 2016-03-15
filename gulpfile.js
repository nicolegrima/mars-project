/* VARIABLES */

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var babel = require('gulp-babel'),
    webpack = require('webpack-stream'),
    plumber = require('gulp-plumber');

var notify = require('gulp-notify'),
    rename = require("gulp-rename"),
    jscs = require('gulp-jscs');

var sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-cssnano');

var historyAPIFallback = require('connect-history-api-fallback');

/* TASKS */

    gulp.task('compile-react', function() {
        return gulp.src('./src/main.jsx')
            .pipe(webpack({
                output: {
                  filename: 'main.js'
                },
                debug: true,
                devtool: 'inline-source-map',
                module: {
                  loaders: [{ test: /\.jsx?$/,
                              exclude: /(node_modules)/,
                              loader: 'babel-loader',
                              query: {
                                presets: ['es2015', 'react']
                              }
                            }]
                }
            }))
            .pipe(gulp.dest('./build'));
    });


gulp.task('sass', function() {
   gulp.src('./src/sass/style.scss')
      .pipe(sass())
      .pipe(autoprefixer({
         browsers: ['last 2 versions']}))
      .pipe(gulp.dest('./build'))
      .pipe(minifyCSS())
      .pipe(rename('style.min.css'))
      .pipe(gulp.dest('./build'));
});

gulp.task('copy-html', function(){
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', function(){

    browserSync.init({
      server: {
      baseDir: './build',
      middleware: [historyAPIFallback()]
    }
});

gulp.watch('./src/main.jsx', ['compile-react']);
gulp.watch(['./build/main.js', './build/index.html', './build/style.min.css']).on('change', browserSync.reload);
gulp.watch('./src/sass/style.scss', ['sass']);
gulp.watch('./src/index.html', ['copy-html']);
});

gulp.task('default', ['copy-html','sass', 'compile-react','browser-sync']);
