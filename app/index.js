import angular from "angular";

export default angular.module('z2hApp', [])
    .controller('FirstCtrl', function FirstCtrl() {
        let first = this;

        first.data = "First";
    })
    .controller('SecondCtrl', function SecondCtrl() {
        let second = this;

        second.data = "Second";
    });
