((r) => {

    'use strict';

    const gulp = r('gulp');
    const inject = r('gulp-inject');
    const browserSync = r('browser-sync');
    const exit = r('gulp-exit');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;

    gulp.task("inject", () => {
        setTimeout(() => {
            gulp.src(`${output}/**/index.html`)
                    .pipe(inject(gulp.src([`${output}/js/js.js`, `${output}/styles/styles.css`], {read: false}), {relative: true}))
                    .pipe(gulp.dest(`${output}/`))
                    .pipe(browserSync.reload({stream: true}))
                    .pipe(exit());
        }, 1000);
    });

    gulp.task("inject2", () => {
        setTimeout(() => {
            gulp.src(`${output}/**/index.html`)
                    .pipe(inject(gulp.src([`${output}/js/js.js`, `${output}/styles/styles.css`], {read: false}), {relative: true}))
                    .pipe(gulp.dest(`${output}/`))
                    .pipe(browserSync.reload({stream: true}));
        }, 1000);
    });

})(require);