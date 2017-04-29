(function () {

    'use strict';

    angular
            .module("service.menu", [
                'service.components.menu'
            ])
            .config(config);

    config.$inject = ['$translatePartialLoaderProvider'];
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('modules/main/menu');
    }

})();