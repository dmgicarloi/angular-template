(function (w) {

    'use strict';

    angular
            .module("service.components.team")
            .component("team", {
                templateUrl: "modules/components/team/team.component.html",
                controller: teamController
            });

    function teamController() {
        var vm = this;
        vm.params = {
            name: "Team"
        };
    }

})(window);
