(function () {

    'use strict';

    angular
            .module("service")
            .config(config);

    config.$inject = ['$translateProvider', 'localStorageServiceProvider', '$mdThemingProvider'];
    function config($translateProvider, localStorageServiceProvider, $mdThemingProvider) {

        //Custom colors
        var colors = {
            '0': '#fff',
            '50': '#43ca83',
            '100': '#0e3655'
        };

        //Extend colors from color
        var color = $mdThemingProvider.extendPalette('teal', colors);

        //Define palette
        $mdThemingProvider.definePalette('colors', color);

        //Custom primary palette 
        $mdThemingProvider.theme('default')
                .primaryPalette('colors');

        //i18n
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/i18n/{lang}.json'
        });
        //Default language (Español = es)
        $translateProvider.preferredLanguage('es');

        //Sanitize strange characters
        $translateProvider.useSanitizeValueStrategy('sanitize');

        //To use localstorage
        localStorageServiceProvider.setPrefix('localStoragePrefix');

    }

})();