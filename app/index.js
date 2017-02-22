import angular from "angular";

export default angular.module('heroApp', [])
    .controller("ChoreCtrl", function () {
        let vm = this;
        vm.logChore = function (chore) {
            alert(chore + " is done!");
        };
    })
    .directive("kid", function () {
        return {
            restrict: "E",
            scope: {
                done: "&"
            },
            template: '<input type="text" ng-model="value">' +
            ' {{value}}' +
            ' <div class="button" ng-click="done({chore:value})">I\'m done!</div>'
        };
    });