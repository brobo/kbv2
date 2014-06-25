angular.module('kbv2.students.controller', ['studentsIndexController', 'studentsViewController', 'studentsModalController'])
  .controller('StudentsController', function($scope, $modal, StudentsService, AlertService, ConfirmService) {
    $scope.formData = {};

    //TODO move to root controller
    $scope.closeAlert = AlertService.closeAlert;

    $scope.deleteStudent = function(id) {
      var deleteCurry = function() {
        var service = StudentsService.delete(id);
        service.success(function(students) {
          $scope.students = students;
        });
        return service
      }
      ConfirmService.confirm({head:"Delete student", body:"Are you sure you want to delete this student?"}, deleteCurry)
        .result.then(function(data) {
          AlertService.add("success", "Successfully deleted student.");
        }, function(reason) {
          if (reason && reason.error)
            AlertService.add("danger", "An error occured while deleting the student: " + error);
        });
    };

    $scope.openUpdate = function(student) {
      StudentsService.openEdit(student, StudentsService.update, $modal)
        .then(function(students) {
          $scope.students = students;
          AlertService.add("success", "Successfully updated student.");
        }, function(reason) {
          if (reason && reason.error)
            AlertService.add("danger", "An error has occured: " + reason.error);
        });
    };
  });
