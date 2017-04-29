(function () {

    'use strict';

    angular
            .module("service")
            .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
                .state('service', {
                    url: "",
                    views: {
                        "layout@": {
                            templateUrl: "core/layout/content.html"
                        },
                        "toolbar@service": {
                            templateUrl: "modules/main/toolbar/toolbar.html",
                            controller: "toolbarController as vm"
                        },
                        "menu@service": {
                            templateUrl: "modules/main/menu/menu.html",
                            controller: "menuController as vm"
                        },
                        "menumobile@service": {
                            templateUrl: "modules/main/menumobile/menumobile.html",
                            controller: "menuMbileController as vm"
                        },
                        "content@service": {
                            templateUrl: "modules/main/home/home.html",
                            controller: "homeController as vm"
                        }
                    }
                });
    }

})();
