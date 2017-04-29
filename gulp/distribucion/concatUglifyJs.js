((r) => {

    'use strict';

    const gulp = r('gulp');
    const concat = require('gulp-concat');
    const uglify = r('gulp-uglify');
    const plumber = require('gulp-plumber');
    const browserSync = r('browser-sync');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;

    gulp.task('concatUglifyJs', function () {
        gulp.src([`${input}/**/library/*.js`, `${input}/**/core.module.js`, `${input}/modules/components/**/*.config.js`, `${input}/modules/**/*.component.js`, `${input}/**/index.module.js`, `${input}/**/index.routes.js`, `${input}/**/index.config.js`, `${input}/index.controller.js`, `${input}/modules/**/*.js`, `${input}/core/**/*.js`])
                .pipe(plumber())
                .pipe(concat('js.js'))
                .pipe(uglify())
                .pipe(gulp.dest(`${output}/js`))
                .pipe(browserSync.reload({stream: true}));
    });

})(require);