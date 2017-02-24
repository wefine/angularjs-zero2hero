var app = angular.module("heroApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                templateUrl: "app.html",
                controller: "AppCtrl",
                resolve: {
                    prepData: appCtrl.prepData,
                    loadData: appCtrl.loadData
                }
            })
});

var appCtrl = app.controller("AppCtrl", function ($scope, $route) {
    console.log($route);
    $scope.model = {
        message: "I'm a great app!"
    }
});

appCtrl.loadData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        console.log('load');
        defer.resolve("loadData");
    }, 2000);
    return defer.promise;
};

appCtrl.prepData = function ($q, $timeout) {
    var defer = $q.defer();
    $timeout(function () {
        console.log('prep');
        defer.resolve("prepData");
    }, 2000);
    return defer.promise;
};