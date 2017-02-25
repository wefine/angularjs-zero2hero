import "foundation";
import angular from "angular";

angular.module("heroApp", [])
    .directive("country", function () {
        return {
            restrict: "E",
            controller: function () {
                this.makeAnnouncement = function (message) {
                    console.log("Country says: " + message);
                };
            }
        };
    })
    .directive("state", function () {
        return {
            restrict: "E",
            require: "^country",
            controller: function () {
                this.makeLaw = function (law) {
                    console.log("Law: " + law);
                };
            },
            link: function (scope, element, attrs, countryCtrl) {

            }
        };
    })
    .directive("city", function () {
        return {
            restrict: "E",
            require: ["^country", "^state"],
            link: function (scope, element, attrs, ctrls) {
                ctrls[0].makeAnnouncement("from city");
                ctrls[1].makeLaw("Jump higher");
            }
        };
    });