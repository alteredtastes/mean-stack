(function () {
  'use strict'

  angular
    .module('neap-protractor-sass-gulp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'partials/main.html',
          controllerAs: 'main',
          controller: 'MainController',
        })
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
})();