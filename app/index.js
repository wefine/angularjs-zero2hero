import angular from "angular";

export default angular.module('heroApp', [])
    .controller("AppCtrl", function () {
        let vm = this;
        vm.loadMoreTweets = function () {
            alert("Loading tweets!");
        };

        vm.deleteTweets = function () {
            alert("deleting tweets");
        };
    })
    .directive("enter", function () {
        return function (scope, element, attrs) {
            element.bind("mouseenter", function () {
                scope.$apply(attrs.enter);
            });
        };
    });