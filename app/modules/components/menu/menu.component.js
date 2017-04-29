(function (w) {

    'use strict';

    angular
            .module("service.components.menu")
            .component("menu", {
                templateUrl: "modules/components/menu/menu.component.html",
                controller: menuController
            });

    function menuController() {
        var vm = this;
        vm.params = {
            name: "Menú",
            data: [
                'HOME',
                'ABOUT',
                'SERVICES',
                'OUR PROJECTS',
                'GALLERY',
                'BLOG',
                'CONTACTS'
            ]
        };
    }

})(window);
