'use strict';

angular.module('pechakuchaAppApp')
    .controller('MainCtrl', function ($scope, AjaxFactory, RandomService) {

        $scope.startPecha = function () {
            if($scope.piilo=false){
                $scope.piilo=true;
            }
            $scope.remaining = 20;
            var usedNumbers = [];

            function getphoto() {
                var vastaus = AjaxFactory.getContent();
                vastaus.then(function (posts) {
                    var postings = posts.data.response.posts;
                    // var totalpostcount = posts.data.response.total_posts - 1;
                    var random;
                    random = RandomService.randomIntFromInterval(0, 49);
                    console.log(random);
                    if (usedNumbers.indexOf(random) !== -1) {
                        getphoto();
                    } else {
                        usedNumbers.push(random);
                        $scope.photourl = postings[random].photos[0].original_size.url; // jscs:ignore requireCamelCaseOrUpperCaseIdentifiers
                        $scope.remaining = $scope.remaining - 1;
                    }
                });
            }

            function setIntervalX(callback, delay, repetitions) {
                var x = 0;
                var intervalID = window.setInterval(function () {

                    callback();

                    if (++x === repetitions) {
                        $scope.piilo = !$scope.piilo;
                        window.clearInterval(intervalID);
                    }

                }, delay);
            }

            getphoto();
            setIntervalX(getphoto, 20000, 20);
        };

    });