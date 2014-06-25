angular.module('studentsService', [])
  .factory('StudentsService', function($http) {
    return {
      get: function() {
        var res = $http.get('/api/students');
        return res;
      },
      find: function(id) {
        var res = $http.get('/api/students/' + id);
        return res;
      },
      create: function(studentData) {
        return $http.post('/api/students', studentData);
      },
      update: function(studentData) {
        return $http.post('/api/students/' + studentData._id, studentData);
      },
      delete: function(id) {
        return $http.delete('/api/students/' + id);
      },

      openEdit: function(student, response, $modal) {
        return $modal.open({
            templateUrl: '/views/students/modal.html',
            controller: 'StudentsModalController',
            size: 'lg',
            resolve: {
              student: function() {
                return student;
              },
              response: function() {
                return response;
              }
            }
        }).result;
      }
    }
  });
