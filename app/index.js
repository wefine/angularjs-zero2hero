import angular from "angular";

angular.module("heroApp", [])
    .factory("game", function () {
        return {
            title: "StarCraft"
        };
    })
    .controller("AppCtrl", function ($scope, $injector) {
        $injector.invoke(function (game) {
            $scope.title = game.title;
            alert(game.title);
        });
    });
