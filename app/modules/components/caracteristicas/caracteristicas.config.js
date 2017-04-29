(function () {

    'use strict';

    angular
            .module("service.components.caracteristicas", [])
            .config(config);

    config.$inject = ['$translatePartialLoaderProvider'];
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('modules/components/caracteristicas');
    }

})();


