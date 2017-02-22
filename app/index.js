import angular from "angular";

export default angular.module('heroApp', [])
    .controller("AppCtrl", function () {
        let $ctrl = this;
        $ctrl.flavor = "blackberry";
    })
    .directive("drink", function () {
        return {
            scope: {
                aa: "@"
            },
            template: '<div>{{aa}}</div>'
        };
    });