angular.module('beltsService', [])
  .factory('BeltsService', function($http) {
    return {
      get: function() {
        var res = $http.get('/api/belts');
        return res;
      }
    }
  });
