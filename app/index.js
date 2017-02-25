import 'foundation'
import angular from "angular";

angular.module("heroApp", [])
    .controller("RoomCtrl", function () {
        this.openDoor = function () {
            alert("creak");
        };

        this.buttonTitle = "I'm a button";
    });