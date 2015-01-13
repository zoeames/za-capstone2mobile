(function(){
  'use strict';
  angular.module('starter')

  .controller('CourseDetailCtrl', function($scope, $state, Course, Lesson){
    Course.show($state.params.courseId).then(function(response){
      console.log(response.data);
      $scope.course = response.data;
    });

    Lesson.query($state.params.courseId).then(function(response){
      console.log('client findLessons >>>> ', response.data);
      $scope.lessons = response.data.lessons;
      //debugger;
    });
  });
})();
