import angular from "angular";

angular.module("heroApp", ["ui.router"])
    .run(function ($rootScope) {
        $rootScope.random = Math.random();
    });

angular.bootstrap(document.getElementById("container"), ["heroApp"])
angular.bootstrap(document.getElementById("container2"), ["heroApp"]);