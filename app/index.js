import angular from "angular";

angular.module("heroApp", ["ngAnimate"])
    .factory("contacts", function () {
        return [
            {"firstName": "Angelica", "lastName": "Britt", "phone": "513-0955"},
            {"firstName": "Amery", "lastName": "Compton", "phone": "1-417-395-4214"},
            {"firstName": "Wendy", "lastName": "Morrow", "phone": "294-8234"},
            {"firstName": "Mercedes", "lastName": "Merrill", "phone": "1-206-670-0109"},
            {"firstName": "Porter", "lastName": "Anderson", "phone": "817-4745"},
            {"firstName": "Leah", "lastName": "Melendez", "phone": "406-3746"},
            {"firstName": "Olga", "lastName": "Mcgowan", "phone": "1-567-304-7633"},
        ];
    })
    .controller("AppCtrl", function (contacts) {
        let ctrl = this;

        ctrl.contacts = contacts;
        ctrl.selectedContact = null;
        ctrl.contactCopy = null;

        ctrl.selectContact = function (contact) {
            ctrl.selectedContact = contact;
            ctrl.contactCopy = angular.copy(contact);
        };

        ctrl.saveContact = function () {
            if (ctrl.selectedContact != null) {
                ctrl.selectedContact.firstName = ctrl.contactCopy.firstName;
            }
        };
    });