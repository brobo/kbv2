angular.module('alertService', [])
  .factory('AlertService', ['$rootScope', function($rootScope) {
    $rootScope.alerts = [];
    var alertService = {
      add: function(type, message) {
        return $rootScope.alerts.splice(0,0, {
            type: type,
            msg: message,
            close: function() {
              return alertService.closeAlert(this);
            }
        });
      },
      closeAlert: function(alert) {
        var index = $rootScope.alerts.indexOf(alert);
        return $rootScope.alerts.splice(index, 1);
      },
      closeAlertIndex: function(index) {
        return $rootScope.alerts.splice(index, 1);
      },
      clear: function() {
        $rootScope.alerts = [];
      }
    };
    return alertService;
  }]);
