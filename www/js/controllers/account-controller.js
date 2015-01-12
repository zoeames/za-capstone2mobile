(function(){
  'use strict';
  angular.module('starter')
  .controller('AccountCtrl', function($rootScope, $scope, $state, User){
    $scope.user = {};
    $scope.login = function(user){
      User.login(user).then(function(response){
        $rootScope.rootuser = response.data;
        console.log('login successful');
        $state.go('tab.dash');
        $scope.user = {};
      }, function(){
        console.log('bad user');
        $scope.user = {};
      });
    };

  });
})();
