
angular.module('registryUiApp')
 .directive('rhMenu', function () {
   return {
     restrict:'E',
      transclude:true,
      replace:true,
      template:'<ul class="nav navbar-nav" ng-transclude></ul>',
      scope:{}
   }
});




angular.module('registryUiApp')
 .directive('rhMenuItem', function ($location) {
   return {
      restrict:'E',
      replace:true,
      transclude:true,
      template:'<li ng-class="{active:isActive()}"><a ng-href="{{link}}" ng-transclude></a></li>',
      scope:{'link':'@'},
      link:function($scope){
        $scope.isActive = function(){
          return "#"+$location.url() === $scope.link;
        }
      }
   }
});
