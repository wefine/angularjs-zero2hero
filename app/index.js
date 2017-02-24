import angular from "angular";

export default angular.module('heroApp', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: "app.html",
                controller: "AppCtrl"
            }
        )
    })
    .controller("AppCtrl", function ($scope) {
        $scope.model = {
            message: "This is ngRoute!!!"
        }
    });