(function(){
  'use strict';
  angular.module('starter')
  .controller('DashCtrl', function($rootScope, $scope, $state, User){
    $scope.logout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        $state.go('tab.account');
      });
    };

  });
})();
