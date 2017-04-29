(function () {

    'use strict';

    angular
            .module("service.components.banner")
            .component("banner", {
                templateUrl: "modules/components/banner/banner.component.html",
                controller: bannerController,
                transclude: true,
                bindings: {
                    'src': '@',
                    'parallax': '=',
                    'position': '@'
                }
            });

    function bannerController() {
        var vm = this;
        vm.params = {
            name: "Banner"
        };
    }

})();
