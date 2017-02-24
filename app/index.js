import angular from "angular";

export default angular.module('heroApp', ["ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "app.html",
                controller: "AppCtrl",
                resolve: {
                    app: function ($q, $timeout) {
                        let defer = $q.defer();

                        $timeout(function () {
                            defer.resolve();
                        }, 10000);

                        return defer.promise;
                    }
                }
            })
    })
    .controller("AppCtrl", function ($scope, $q) {
        $scope.model = {
            message: "This is my app!!!"
        }
    });