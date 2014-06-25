describe('Student', function() {

  describe('model', function() {

    var Student = require('../app/models/student');

    it('should return the model', function(next) {
      expect(Student).not.toBe(null);
      next();
    });

    it('should be able to create a new student', function(next) {
      var student = new Student();
      expect(student).not.toBe(null);
      next();
    });

    it('should fill default values', function(next) {
      var student = new Student();
      expect(student.dob).not.toBe(null);
      expect(student.ranks).not.toBe(null);
      next();
    });
  });

  describe('api', function() {
    it('should fetch students', function(err, response, body) {
      next();
    });
  });

});
