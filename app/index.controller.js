(function (w) {

    'use strict';

    angular
            .module("service")
            .controller("indexController", indexController);

    indexController.$inject = ['$translate', '$mdSidenav'];
    function indexController($translate, $mdSidenav) {
        var global = this;
        global.params = {
            language: $translate.preferredLanguage(),
            name: "Index Controller"
        };
        w.addEventListener("resize", function (e) {
            if (e.target.innerWidth > 600) {
                $mdSidenav('left').close();
            }
        });
    }

})(window);


