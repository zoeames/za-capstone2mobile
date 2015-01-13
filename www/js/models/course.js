(function(){
  'use strict';

  angular.module('starter')
  .factory('Course', ['$http', 'origin', function($http, origin){

    function query(){
      console.log('hit add factory');
      return $http.get(origin + '/findcourses');
    }

    function show(courseId){
      return $http.get(origin + '/courses/' + courseId);
    }

    return {query:query, show:show};
  }]);
})();
