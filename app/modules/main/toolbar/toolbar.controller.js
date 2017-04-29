(function () {

    'use strict';

    angular
            .module("service.toolbar")
            .controller("toolbarController", toolbarController);

    function toolbarController() {
        var vm = this;
        vm.params = {
            name: "Toolbar"
        };
    }

})();


