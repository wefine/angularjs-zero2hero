import angular from "angular";

export default angular.module('heroApp', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "app.html",
                controller: "AppCtrl"
            })
    })
    .controller("AppCtrl", function ($scope, $q) {
        let defer = $q.defer();

        defer.promise
            .then(function (weapon) {
                alert("You can have my " + weapon);

                return "bow";
            })
            .then(function (weapon) {
                alert("And my " + weapon);

                return "axe";
            })
            .then(function (weapon) {
                alert("And my " + weapon);
            });

        defer.resolve("sword");

        $scope.model = {
            message: "This is my app!!!"
        }
    });