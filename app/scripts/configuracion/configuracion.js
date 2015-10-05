'use strict';

/**
 * @ngdoc function
 * @name registryUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the registryUiApp
 */
angular.module('registryUiApp')
  .controller('ConfiguracionController', function ($scope,$http,ConfiguracionService) {


    $scope.init = function(){
      $scope.ready = false;
      $scope.refresh();
    }

    $scope.refresh = function(){
      ConfiguracionService.all().then(function(response){
        var data = response.data;
        console.log(data);
        $scope.configuraciones = data;
        $scope.ready=true;
      });

    }

  });
