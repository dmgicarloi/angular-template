(function () {

    'use strict';

    angular
            .module("service.components.redessociales", [])
            .component("redesSociales", {
                templateUrl: "modules/components/redessociales/redessociales.component.html",
                controller: redesSocialesController
            });

    function redesSocialesController() {
        var vm = this;
        vm.params = {
            name: "Mi primer componente"
        };
    }

})();
