import angular from "angular";

export default angular.module('heroApp', [])
    .directive("dumbPassword", function () {
        let validElement = angular.element("<div id='errorId'>{{model.input}}</div>");

        let link = function (scope) {
            scope.$watch("model.input", function (value) {
                if (value == "password") {
                    validElement.addClass("alert-danger alert");
                } else {
                    validElement.removeClass("alert-danger alert");
                }
            });
        };
        return {
            restrict: "E",
            replace: true,
            template: '<div>' +
            '<input type="text" ng-model="model.input">' +
            '<div>',
            compile: function (tElem) {
                tElem.append(validElement);

                return link;
            }
        };
    });