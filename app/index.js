import angular from "angular";

export default angular.module('heroApp', [])
    .controller("AppCtrl", function() {
        let ctrl = this;

        ctrl.sayHi = function() {
            alert("hi");
        };
    });