((r) => {

    'use strict';

    const gulp = r('gulp');
    const browserSync = r('browser-sync');
    const config = r('../config/config');
    const input = config.inputPath;
    const output = config.outputPath;
    const routes = config.routes;

    gulp.task('browser-sync', () => {
        browserSync.init({
            server: {
                baseDir: output,
                routes: routes
            },
            ui: {
                port: 8080
            },
            port: 80
        });
    });

    gulp.watch([`${input}/**/*.scss`], ['scssACss']);
    gulp.watch([`${input}/**/*.jade`], ['jadeAHtml']);
    gulp.watch([`${input}/index.html`], ['html', 'inject2']);
    gulp.watch([`${input}/**/library/*.js`, `${input}/**/core.module.js`, `${input}/**/index.module.js`, `${input}/**/index.routes.js`, `${input}/**/index.config.js`, `${input}/index.controller.js`, `${input}/modules/**/*.js`, `${input}/core/**/*.js`], ['concatUglifyJs'], ['concatUglifyJs']);
    gulp.watch([`${input}/**/i18n/*.json`], ['i18n']);

})(require);

