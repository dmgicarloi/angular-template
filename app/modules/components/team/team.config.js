(function () {

    'use strict';

    angular
            .module("service.components.team", [])
            .config(config);

    config.$inject = ['$translatePartialLoaderProvider'];
    function config($translatePartialLoaderProvider) {
        $translatePartialLoaderProvider.addPart('modules/components/team');
    }

})();


