// this code has been updated to not
// use $scope! It now uses the "controller as"
// syntax instead.
import angular from "angular";

export default angular.module('heroApp', [])
    .controller("SuperHeroCtrl", function ($element) {
        // controller declared on module so it can use "controller as"
        let superman = this;

        superman.abilities = [];

        superman.addStrength = function () {
            superman.abilities.push("strength");
        };

        superman.addSpeed = function () {
            superman.abilities.push("speed");
        };

        superman.addFlight = function () {
            superman.abilities.push("flight");
        };

        $element.addClass("button");
        $element.bind("click", function () {
            console.log(superman.abilities);
        });
    })
    .directive("superHero", function () {
        return {
            restrict: "E",
            scope: {},

            controller: "SuperHeroCtrl as superhero"
        };
    })
    .directive("strength", function () {
        return {
            require: "superHero",
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addStrength();
            }
        };
    })
    .directive("speed", function () {
        return {
            require: "superHero",
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addSpeed();
            }
        };
    })
    .directive("flight", function () {
        return {
            require: "superHero",
            link: function (scope, element, attrs, superheroCtrl) {
                superheroCtrl.addFlight();
            }
        };
    });