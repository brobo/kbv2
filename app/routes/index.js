module.exports = function(app) {

    require('./api/students.js')(app);
    require('./api/belts.js')(app);

    app.get('/', function(req, res) {
      res.sendfile('./public/views/students/index.html');
    });

    app.get('/*', function(req, res) {
      res.sendfile('./public/views/students/index.html');
    });
}
