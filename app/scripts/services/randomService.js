'use strict';

angular.module('pechakuchaAppApp')
    .factory('RandomService', function () {
        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        var randomvariabels = {
            'randomIntFromInterval': randomIntFromInterval
        };
        return randomvariabels;
    });