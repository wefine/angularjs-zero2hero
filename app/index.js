import "./style.css"
import angular from "angular";

angular.module("heroApp", ["ngAnimate"])
    .controller("AppCtrl", function() {
        this.toggle = true;
    });