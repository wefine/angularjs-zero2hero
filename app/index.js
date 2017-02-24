import "./styles.scss";
import "./footer.css";
import angular from "angular";

export default angular.module('heroApp', [])
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