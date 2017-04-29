((r) => {

    'use strict';

    const gulp = r('gulp');
    const jade = r('gulp-jade');
    const plumber = require('gulp-plumber');
    const browserSync = r('browser-sync');
    const inject = r('gulp-inject');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;

    gulp.task('jadeAHtml', () => {
        gulp
                .src(`${input}/**/*.jade`)
                .pipe(plumber())
                .pipe(jade({
                    pretty: true
                }))
                .pipe(gulp.dest(`${output}`))
                .pipe(browserSync.reload({stream: true}));
    });

})(require);