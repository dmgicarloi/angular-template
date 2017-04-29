((r) => {

    'use strict';


    const gulp = r('gulp');
    const sass = r('gulp-sass');
    const plumber = r('gulp-plumber');
    const browserSync = r('browser-sync');
    var concatCss = require('gulp-concat-css');
    var cssmin = require('gulp-cssmin');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;

    gulp.task('scssACss', () => {
        gulp
                .src([`${input}/core/**/*.scss`, `${input}/modules/**/*.scss`])
                .pipe(plumber())
                .pipe(sass())
                .pipe(concatCss('styles.css'))
                .pipe(cssmin())
                .pipe(gulp.dest(`${output}/styles`))
                .pipe(browserSync.reload({stream: true}));
    });

})(require);