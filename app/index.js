import angular from "angular";

export default angular.module('heroApp', [])
    .directive("superman", function () {
        return {
            restrict: "A",
            link: function () {
                console.log("I'm working stronger");
            }
        };
    })
    .directive("flash", function () {
        return {
            restrict: "A",
            link: function () {
                console.log("I'm working faster");
            }
        };
    });