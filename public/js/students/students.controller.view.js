angular.module('studentsViewController', [])
  .controller('StudentsViewController', function($stateParams, $scope, StudentsService) {
    StudentsService.find($stateParams.studentId).success(function(data) {
      $scope.student = data;
    });
  });
