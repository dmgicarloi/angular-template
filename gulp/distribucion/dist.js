((r) => {

    'use strict';

    const gulp = r('gulp');

    gulp.task('distribuir', ['jadeAHtml', 'scssACss', 'concatUglifyJs', 'assets', 'i18n'], () => {
        console.log("Compilación exitosa!");
    });

})(require);