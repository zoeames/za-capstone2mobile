(function(){
  'use strict';
  angular.module('starter')

  .controller('LessonDetailCtrl', function($scope, $state, Quiz, Lesson){
    $scope.courseId = $state.params.courseId;
    $scope.lessonId = $state.params.lessonId;
    console.log('state.params.courseId', $scope.courseId);

    Lesson.show($state.params.lessonId).then(function(response){
      console.log(response.data);
      $scope.lesson = response.data;
    });

    Quiz.query($state.params.lessonId).then(function(response){
      console.log('client findQuizzes >>>> ', response.data);
      $scope.quizzes = response.data.quizzes;
    });
  });
})();
