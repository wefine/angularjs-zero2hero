import "./styles.scss";
import "./footer.css";
import angular from "angular";

export default angular.module('heroApp', [])
    .controller("MyCtrl", ['$scope', '$http', function ($scope, $http) {
        $scope.name = 'wang';
    }])
    .directive("myDirective", function ($http, $parse) {
        return {
            // If scope was defined in directive, the $scope is equal to native scope.
            scope : {
              name : '@'
            },
            template: '<div>{{name}} from directive</div>',
            link: function ($scope, scope, attrs) {
                console.log($scope);
                console.log($scope.name);
            }
        }
    });