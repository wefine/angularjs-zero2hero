import angular from "angular";

angular.module("heroApp", ["ngAnimate"])
    .controller("AppCtrl", function () {
        this.toggle = true;
    })
    .animation(".toggle", function () {
        return {
            leave: function (element, done) {
                element.text("Nooooo!!!");
                TweenMax.to(element, 1, {opacity: 0.1})
            },
            enter: function (element, done) {
                element.text("Yay, I'm alive!")
                TweenMax.from(element, 1, {opacity: 0})
            }
        }
    });