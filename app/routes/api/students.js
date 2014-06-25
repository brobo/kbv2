var Student = require('../../models/student');

module.exports = function(app) {

  function respondWithStudents(res) {
    Student.find(function(err, students) {
      if (err)
        res.send(err);

      res.json(students);
    });
  }

  app.get('/api/students/:student_id', function(req, res) {
    Student.findById(req.params.student_id, function(err, student) {
      if (err)
        res.send(err);

      res.json(student);
    });
  });

  app.get('/api/students', function(req, res) {
    respondWithStudents(res);
  });

  app.post('/api/students/:student_id', function(req, res) {
    console.log("Updating the student");
    Student.findById(req.params.student_id, function(err, student) {

      if (err)
        console.log(err);

      var data = req.body;
      if (data.rank && data.rank._id)
        data.rank = data.rank._id;

      for (attr in data) {
        student[attr] = data[attr];
      }

      student.save(function(err) {
        if (err) {
          console.log(err);
          res.json(err);
        } else {
          respondWithStudents(res);
        }
      });
    });
  });

  app.post('/api/students', function(req, res) {
    var student = new Student();

    var data = req.body;
    if (data.rank && data.rank._id)
      data.rank = data.rank._id;

    for (attr in req.body) {
      student[attr] = req.body[attr];
    }
    student.save(function(err) {
      if (err)
        res.send(err);

      respondWithStudents(res);
    });
  });

  app.delete('/api/students/:student_id', function(req, res) {
    Student.remove({
        _id : req.params.student_id
    }, function(err, student) {
      if (err)
        console.log(err);

      respondWithStudents(res);
    });
  });
};
