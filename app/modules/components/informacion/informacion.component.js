(function () {

    'use strict';

    angular
            .module("service.components.informacion", [])
            .component("informacion", {
                templateUrl: "modules/components/informacion/informacion.component.html",
                controller: informacionController
            });

    function informacionController() {
        var vm = this;
        vm.params = {
            name: "Información"
        };
    }

})();
