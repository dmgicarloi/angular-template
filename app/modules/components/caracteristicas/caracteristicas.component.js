(function () {

    'use strict';

    angular
            .module("service.components.caracteristicas")
            .component("caracteristicas", {
                templateUrl: "modules/components/caracteristicas/caracteristicas.component.html",
                controller: caracteristicasController
            });

    function caracteristicasController() {
        var vm = this;
        vm.params = {
            name: "Características"
        };
    }

})();
