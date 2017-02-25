import "foundation";
import angular from "angular";

angular.module("heroApp", [])
    .controller("AppCtrl", function() {
        this.things = ["one", "two", "three"];
    });