import angular from "angular";

export default angular.module('z2hApp', [])
    .controller('FirstCtrl', function () {
        let ctrl = this;

        ctrl.data = {message: "Hello"};
    });
