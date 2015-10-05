'use strict';

/**
 * @ngdoc function
 * @name registryUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the registryUiApp
 */
angular.module('registryUiApp')
  .service('ConfiguracionService', function ($filter,$http) {

    this.all = function(){
      return $http.get("/api/rest/configuracion");
    }

  });
