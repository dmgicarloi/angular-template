(function () {

    'use strict';

    angular
            .module("core")
            .directive("redSocialBackground", redSocialBackground);

    function redSocialBackground() {
        return {
            "restrict": "A",
            link: function (scope, ele, attr) {
                var background = attr.redSocialBackground;
                ele.mouseenter(function () {
                    $(this).css({
                        background: background,
                        transition: ".3s ease-out background"
                    });
                });
                ele.mouseleave(function () {
                    $(this).css({
                        background: "transparent"
                    });
                });
            }
        };
    }

})();


