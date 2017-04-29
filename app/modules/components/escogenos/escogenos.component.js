(function (w) {

    'use strict';

    angular
            .module("service.components.escogenos")
            .component("escogenos", {
                templateUrl: "modules/components/escogenos/escogenos.component.html",
                controller: escogenosController
            });

    function escogenosController() {
        var vm = this;
        vm.params = {
            name: "Escógenos"
        };
    }

})(window);
