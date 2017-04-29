(function () {

    'use strict';

    angular
            .module("service.menumobile")
            .controller("menuMbileController", menuMbileController);

    menuMbileController.$inject = ['$mdSidenav'];
    function menuMbileController($mdSidenav) {
        var vm = this;
        vm.params = {
            name: "Menu Mobile"
        };
        vm.toggleLeft = function (componentId) {
            $mdSidenav(componentId).toggle();
        };
    }

})();


