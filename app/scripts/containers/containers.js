'use strict';

/**
 * @ngdoc function
 * @name registryUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the registryUiApp
 */
angular.module('registryUiApp')
  .controller('ContainersController', function ($scope,$interval,ConfiguracionService,$http) {

    $scope.init = function(){
      $scope.ready = false;
      ConfiguracionService.all().then(function(response){
      var configuracion = response.data;
      console.log(configuracion);
      $scope.nodos = configuracion;
      _.forEach($scope.nodos,function(nodo){
        nodo.ready = false;
        $scope.getContainers(nodo.id).then(function(response){
          nodo.containers = response.data;
          nodo.ready = true;
        });
      });
      });
    }

    $interval($scope.init,60000);

    $scope.getContainers = function(nodo){
      $scope.ready = false;
      return $http.get("/api/rest/nodos/"+nodo+"/containers")
        .then(function(response){
        $scope.ready = true;
        return response;
      });
    }


        $scope.isOnline = function(container) {
          return container.provisionStatus === 'success' && container.status === 1;
        };

        $scope.isWorking = function(container) {
          return container.status === 0 && container.provisionStatus !== 'failed'
          && container.provisionStatus !== 'stopped'
          && container.provisionStatus !== 'success';
        }

        $scope.getContainerNotitication = function(container){
          if($scope.isOnline(container)) return 'pficon-ok';
          if($scope.isWorking(container)) return 'pficon pficon-warning-triangle-o';
          else return 'pficon-error-circle-o'
        };
  });
