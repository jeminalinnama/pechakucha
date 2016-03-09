'use strict';

angular
  .module('pechakuchaAppApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/pechakucha', {
        templateUrl: 'views/pechakucha.html',
        controller: 'PechakuchaCtrl',
        controllerAs: 'pechakucha'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
