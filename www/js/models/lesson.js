(function(){
  'use strict';

  angular.module('starter')
  .factory('Lesson', ['$http', 'origin', function($http, origin){

    function query(courseId){
      console.log('hit add factory');
      return $http.get(origin +'/findlessons/' + courseId);
    }

    function show(lessonId){
      return $http.get(origin + '/lessons/' + lessonId);
    }

    return {query:query, show:show};
  }]);
})();
