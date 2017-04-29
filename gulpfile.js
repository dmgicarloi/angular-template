((r) => {

    'use strict';

    r('require-dir')('./gulp', {recurse: true});

    const gulp = r('gulp');
    const runSequence = r('run-sequence');
    const prompt = r('gulp-prompt');

    gulp.task('default', () => {
        gulp
                .src(".")
                .pipe(prompt.prompt({
                    type: "list",
                    name: "task",
                    message: "Escoge una tarea a ejecutar.",
                    choices: ["Desarollo", "Distribución"]
                }, (r) => {
                    switch (r.task) {
                        case 'Desarollo':
                            runSequence("browser-sync", () => {
                                console.log("Servidor se ha iniciado!");
                            });
                            break;
                        case 'Distribución' :
                            runSequence("distribuir", ['html', 'inject'], () => {
                                console.log("La distribución se ha completado!");
                            });
                            break;
                    }
                }));
    });

})(require);
