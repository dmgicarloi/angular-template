(function () {

    'use strict';

    angular
            .module("service.components.menu", [])
            .config(config);

    config.$inject = ['$translatePartialLoaderProvider'];
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('modules/components/menu');
    }

})();


