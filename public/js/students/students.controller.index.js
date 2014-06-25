angular.module('studentsIndexController', ['ui.bootstrap', 'ajoslin.promise-tracker', 'alertService', 'confirmService', 'studentsModalController'])

  .controller('StudentsIndexController', function($scope, $controller, $modal, StudentsService, AlertService) {
    $controller('StudentsController', {$scope:$scope});
    $scope.students = [];

    StudentsService.get().success(function(data) {
      console.log(data);
      $scope.students = data;
    });

    $scope.openCreate = function() {
      StudentsService.openEdit({}, StudentsService.create, $modal)
        .then(function(students) {
          $scope.students = students;
          AlertService.add("success", "Successfully saved student.");
        }, function(reason) {
          if (reason && reason.error)
            AlertsService.add("danger", "An error has occured: " + reason.error);
        });
    };
  });
