(function (w) {

    'use strict';

    angular
            .module("service.menu")
            .controller("menuController", menuController);

    menuController.$inject = ['$mdSidenav'];
    function menuController($mdSidenav) {
        var vm = this;
        vm.params = {
            name: "Menu"
        };
        vm.toggleLeft = function (componentId) {
            $mdSidenav(componentId).toggle();
        };
    }

})(window);


