'use strict';

/**
 * @ngdoc overview
 * @name registryUiApp
 * @description
 * # registryUiApp
 *
 * Main module of the application.
 */
angular
  .module('registryUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'ngCookies',
    'angular-underscore'
  ])
  .config(function ($routeProvider,RestangularProvider) {
    $routeProvider
      .when('/containers', {
        templateUrl: 'scripts/containers/containers.html',
        controller: 'ContainersController'
      })
      .when('/configuracion', {
        templateUrl: 'scripts/configuracion/configuracion.html',
        controller: 'ConfiguracionController'
      })
      .otherwise({
        redirectTo: '/containers'
      });





  }).run(function(Restangular,ConfiguracionService){
  
  });
