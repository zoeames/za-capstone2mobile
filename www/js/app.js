'use strict';
angular.module('starter', ['ionic', 'starter.services'])

.run(function($ionicPlatform){
  $ionicPlatform.ready(function(){
    if(window.cordova && window.cordova.plugins.Keyboard){
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar){
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider){
  $httpProvider.defaults.withCredentials = true;
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.courses', {
      url: '/courses',
      views: {
        'tab-courses': {
          templateUrl: 'templates/tab-courses.html',
          controller: 'CoursesCtrl'
        }
      }
    })

    .state('tab.course-detail', {
      url: '/courses/:courseId',
      views: {
        'tab-courses': {
          templateUrl: 'templates/course-detail.html',
          controller: 'CourseDetailCtrl'
        }
      }
    })

    .state('tab.lesson-detail', {
      url: '/courses/:courseId/lessons/:lessonId',
      views: {
        'tab-courses': {
          templateUrl: 'templates/lesson-detail.html',
          controller: 'LessonDetailCtrl'
        }
      }
    })
    .state('tab.quiz-detail', {
      url: '/courses/:courseId/lessons/:lessonId/quizzes/:quizId',
      views: {
        'tab-courses': {
          templateUrl: 'templates/quiz-detail.html',
          controller: 'QuizDetailCtrl'
        }
      }
    })

    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
