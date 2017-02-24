import angular from "angular";

angular.module("heroApp", [])
    .config(function ($logProvider) {
        $logProvider.debugEnabled(false);
    })
    .run(function ($rootScope, $log) {
        $rootScope.$log = $log;
    })
    .controller("foo", function ($scope, $log) {
        $scope.myFunc = function (ev) {
            $log.info(ev)
        };
    });