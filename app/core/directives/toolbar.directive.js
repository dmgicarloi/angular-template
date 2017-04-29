(function () {

    'use strict';

    angular
            .module("core")
            .directive("toolbarSize", toolbarSize);

    function toolbarSize() {
        return {
            "restrict": "A",
            link: function (scope, ele, attr) {
                var size = attr.toolbarSize;
                ele.css({
                    height: size
                });
            }
        };
    }

})();


