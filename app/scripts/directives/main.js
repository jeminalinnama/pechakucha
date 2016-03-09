'use strict';

angular.module('pechakuchaAppApp')
    .directive('main', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        };
    });