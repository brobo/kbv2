var ConfirmController = function($scope, $modalInstance, promiseTracker, data, after) {
  $scope.tracker = promiseTracker();

  for (var attr in data) {
    $scope[attr] = data[attr];
  }

  $scope.close = function() {
    modalInstance.dismiss();
  }

  $scope.confirmed = function() {
    var defered = $scope.tracker.createPromise();
    after().then(function() {
      defered.resolve();
      $modalInstance.close();
    }, function() {
      defered.resolve();
      $modalInstance.dismiss();
    });
  };
};

angular.module('confirmService', ['ui.bootstrap', 'ajoslin.promise-tracker'])
  .factory('ConfirmService', ['$rootScope', '$modal', function($rootScope, $modal, promiseTracker) {
    var defaults = {
      head: "Please confirm",
      body: "Are you sure?",
      yes: "OK",
      no: "Cancel"
    };
    return {
      confirm: function(data, after) {
        for (attr in defaults) {
          data[attr] = data[attr] || defaults[attr];
        }

        return modalInstance = $modal.open({
            templateUrl: '/views/core/confirm.html',
            controller: ConfirmController,
            resolve: {
              data: function() {
                return data;
              },
              after: function() {
                return after;
              }
            }
        });
      }
    }
  }]);
