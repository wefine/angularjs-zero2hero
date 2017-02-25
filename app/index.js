import angular from "angular";

angular.module("heroApp", ["ngAnimate"])
    .controller("AppCtrl", function () {
        this.isHidden = false;
        this.fadeIt = function () {
            this.isHidden = !this.isHidden;
        };
    })
    .directive("hideMe", function ($animate) {
        return function (scope, element, attrs) {
            scope.$watch(attrs.hideMe, function (newVal) {
                if (newVal) {
                    $animate.addClass(element, "fade");
                } else {
                    $animate.removeClass(element, "fade");
                }
            });
        };
    })
    .animation(".fade", function () {
        return {
            addClass: function (element, className) {
                TweenMax.to(element, 1, {opacity: 0});
            },
            removeClass: function (element, className) {
                TweenMax.to(element, 1, {opacity: 1});
            }
        };
    });