import angular from "angular";

export default angular.module('z2hApp', [])
    .service('greeting', function Greeting() {
        let greeting = this;
        greeting.message = 'Default';
    })
    .controller('FirstCtrl', function FirstCtrl(greeting) {
        let first = this;

        first.greeting = greeting;
    })
    .controller('SecondCtrl', function SecondCtrl(greeting) {
        let second = this;

        second.greeting = greeting;
    });
