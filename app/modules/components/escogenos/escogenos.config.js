(function () {

    'use strict';

    angular
            .module("service.components.escogenos", [])
            .config(config);

    config.$inject = ['$translatePartialLoaderProvider'];
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('modules/components/escogenos');
    }

})();


