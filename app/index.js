import angular from "angular";

export default angular.module('heroApp', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/map/:country/:state/:city',
                {
                    templateUrl: "app.html",
                    controller: "AppCtrl"
                })
    })
    .controller("AppCtrl", function ($scope, $routeParams) {

        $scope.model = {
            message: "Address: " +
            $routeParams.country + ", " +
            $routeParams.state + ", " +
            $routeParams.city + ", "
        }
    });