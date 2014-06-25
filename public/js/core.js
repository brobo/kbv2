var kbv2 = angular.module('kbv2', [
  'kbv2.students',
  'beltsService',
  'alertService',
  'confirmService',
  'ui.bootstrap',
  'sortableTable',
  'ngRoute',
  'ui.router']);

kbv2.config(function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/students');

  $stateProvider
    .state('students', {
      url: '/students',
      template: '<div ui-view=""></div>',
      abstract: true
    })
    .state('students.all', {
      url: '',
      templateUrl: '/views/students/all.html',
      controller: 'StudentsIndexController'
    })
    .state('students.view', {
      url: '/view/:studentId',
      templateUrl: '/views/students/view.html',
      controller: 'StudentsViewController'
    });

    $locationProvider.html5Mode(true);
});
