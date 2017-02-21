import angular from "angular";

export default angular.module('heroApp', [])
    .directive("superman", function() {
        return {
            restrict: "E",
            template: "<div>Here I am to save the day</div>"
        };
    });