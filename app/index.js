import "./styles.scss";
import "./footer.css";
import angular from "angular";

export default angular.module('heroApp', [])
    .run(function($templateCache) {
        $templateCache.put("zippy.html", '<div><h3 data-ng-click="toggleContent()">{{title}}</h3><div data-ng-show="isContentVisible" data-ng-transclude></div></div>');
    })
    .controller('MyCtrl', ['$scope', function ($scope) {
        $scope.model = {};
        $scope.model.content = "default";
    }])
    .directive("zippy", function () {
        return {
            restrict: "E",
            transclude: true,
            scope: {
                title: "@"
            },
            templateUrl: 'zippy.html',
            link: function (scope) {
                scope.isContentVisible = false;

                scope.toggleContent = function () {
                    scope.isContentVisible = !scope.isContentVisible;
                };
            }
        };
    });