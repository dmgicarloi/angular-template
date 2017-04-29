(function () {

    'use strict';

    angular
            .module("core")
            .directive("hover", hover);

    function hover() {
        return {
            "restrict": "A",
            link: function (scope, ele, attr) {
                var colors = attr.hover.split(" ");
                var focus = colors[0];
                var onFocus = colors[1];
                ele.mouseenter(function () {
                    $(this).css({
                        color: focus,
                        transition: ".2s ease-out color"
                    });
                });
                ele.mouseleave(function () {
                    $(this).css({
                        color: onFocus
                    });
                });
            }
        };
    }

})();


