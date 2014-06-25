angular.module('studentsModalController', ['alertService', 'studentsService', 'ui.bootstrap'])
  .controller('StudentsModalController', function($scope, $modalInstance, $http, promiseTracker, StudentsService, BeltsService, AlertService, student, response) {

    $scope.ATA_NUMBER_REGEX = /^([0-9]{4}-?[0-9]{5})?$/;
    $scope.tracker = promiseTracker();
    $scope.student = student

    BeltsService.get().success(function(data) {
      $scope.belts = data;
      console.log(data);
    });

    $scope.open = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = !$scope.opened;
    };

    $scope.closeCreate = function() {
      $modalInstance.dismiss();
    };

    $scope.submitForm = function(form, student) {
      $scope.submitted = true;
      console.log(student);
      if (form.$valid) {
        var defered = $scope.tracker.createPromise();
        response(student)
          .success(function(data) {
            $scope.formData = {};
            $modalInstance.close(data);
          })
          .error(function(data) {
            console.log('Error: ' + data);
            $modalInstance.dismiss({error:data});
          }).finally(function() {
            defered.resolve();
          });
      }
    };
  });
