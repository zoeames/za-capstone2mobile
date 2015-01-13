(function(){
  'use strict';
  angular.module('starter')

  .controller('QuizDetailCtrl', function($scope, $state, Quiz){
    $scope.courseId = $state.params.courseId;
    $scope.lessonId = $state.params.lessonId;


    Quiz.show($state.params.quizId).then(function(response){
      console.log('THIS IS THE QUIZ', response.data);
      $scope.quiz = response.data;
    });

    $scope.vote = function(vote){
      $scope.myvote = {'vote' : vote, 'quizId': $state.params.quizId};
      console.log($scope.myvote);
      Quiz.vote($scope.myvote).then(function(response){
        $state.go('tab.lesson-detail', {courseId:$state.params.courseId, lessonId:$state.params.lessonId});
      }, function(){
        console.log('error');
      });
    };


  });
})();
