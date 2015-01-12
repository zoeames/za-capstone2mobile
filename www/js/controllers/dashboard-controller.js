(function(){
  'use strict';
  angular.module('starter')
  .controller('DashCtrl', function($rootScope, $scope, $state, User){
    if($rootScope.rootuser.isadmin === 'true'){
      $scope.institutionStatus='Professor';
    }else{
      $scope.institutionStatus='Student';
    }

    $scope.logout = function(){
      User.logout().then(function(){
        $rootScope.rootuser = null;
        $state.go('tab.account');
      });
    };

  });
})();
