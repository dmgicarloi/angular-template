((r) => {

    'use strict';

    const gulp = r('gulp');
    const browserSync = r('browser-sync');
    const jsonminify = require('gulp-jsonminify');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;

    gulp
            .task("assets", () => {
                gulp
                        .src(`${input}/assets/**/*.{png,jpg,gif}`)
                        .pipe(gulp.dest(`${output}/assets`));
            });

    gulp
            .task("i18n", () => {
                gulp
                        .src(`${input}/**/i18n/*.json`)
                        .pipe(jsonminify())
                        .pipe(gulp.dest(`${output}/`))
                        .pipe(browserSync.reload({stream: true}));

            });

    gulp
            .task("html", () => {
                gulp
                        .src(`${input}/index.html`)
                        .pipe(gulp.dest(`${output}/`));
            });

})(require);