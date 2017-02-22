import angular from "angular";

export default angular.module('heroApp', [])
    .controller("AppCtrl", function () {
        var appctrl = this;
        appctrl.callHome = function (message) {
            alert(message);
        };
    })
    .directive("phone", function () {
        return {
            scope: {
                dial: "&"
            },
            template: '<input type="text" ng-model="value">' +
            '<div class="button" ng-click="dial({message:value})">Call home!</div>'
        };
    });