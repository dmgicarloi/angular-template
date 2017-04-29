(function () {

    'use strict';

    angular
            .module("service.home")
            .controller("homeController", homeController);

    function homeController() {
        var vm = this;
        vm.params = {
            name: "Home"
        };
    }

})();


