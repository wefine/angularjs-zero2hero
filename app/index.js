import angular from "angular";

export default angular.module('z2hApp', [])
    .factory('Data', function () {
        return {
            message: "Message"
        };
    })
    .filter('reverse', function (Data) {
        return function(text) {
            return text.split("").reverse().join("") + Data.message;
        };
    })
    .controller('FirstCtrl', function (Data) {
        let vm = this;
        vm.data = Data;
    })
    .controller('SecondCtrl', function (Data) {
        let vm = this;
        vm.data = Data;
    });
