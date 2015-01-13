(function(){
  'use strict';

  angular.module('starter')
  .factory('Quiz', ['$http', 'origin', function($http, origin){

    function query(lessonId){
      //console.log('hit add factory');
      return $http.get(origin + '/findquizzes/' + lessonId);
    }

    function show(quizId){
      console.log('hit add factory - QUIZ  >>>>>', quizId);
      return $http.get(origin + '/quizzes/' + quizId);
    }

    function vote(myvote){
      //console.log('hit add factory', myvote);
      return $http.post(origin + '/vote', myvote);
    }

    return {query:query, show:show, vote:vote};
  }]);
})();
