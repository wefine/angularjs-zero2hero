import angular from "angular";

export default angular.module('heroApp', [])
    .controller("AppCtrl", function ($scope) {
    })
    .directive("panel", function () {
        return {
            restrict: "E",
            transclude: true,
            template: '<div class="panel" ng-transclude>This is a panel component</div>'
        };
    });