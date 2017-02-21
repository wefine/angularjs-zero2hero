import angular from "angular";

export default angular.module('heroApp', [])
    .directive("enter", function () {
        return function (scope, element) {
            element.bind("mouseenter", function () {
                console.log("I'm inside of you!");
            });
        };
    })
    .directive("leave", function () {
        return function (scope, element) {
            element.bind("mouseleave", function () {
                console.log("I'm leaving on a jet plane!");
            });
        };
    });