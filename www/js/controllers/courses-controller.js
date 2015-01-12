(function(){
  'use strict';
  angular.module('starter')

  .controller('CoursesCtrl', function($scope, $state, Course){
    Course.query().then(function(response){
      console.log('client findCourses >>>> ', response.data);
      $scope.courses = response.data.mycourses;
      //debugger;
    });
  });

})();
