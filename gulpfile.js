var gulp = require('gulp'),
    browserSync = require('browser-sync').create();

var babel = require('gulp-babel'),
    webpack = require('webpack-stream'),
    plumber = require('gulp-plumber');

var notify = require('gulp-notify'),
    rename = require("gulp-rename"),
    jscs = require('gulp-jscs');

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


gulp.task('compile-react', function() {
    return gulp.src('./**/*.jsx')
        .pipe(webpack({
            entry: {
              main: './main.jsx'
            },
            output: {
              publicPath: '',
              filename: 'main.js'
            },
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

gulp.task('browser-sync', function(){

    browserSync.init({
      server: {
          baseDir:'./'
      }
});

gulp.watch('main.jsx', ['compile-react']);
gulp.watch(['./build/main.js', 'index.html', './build/css/*.min.css']).on('change', browserSync.reload);
gulp.watch('./sass/style.scss', ['sass']);
});

gulp.task('default', ['browser-sync']);
