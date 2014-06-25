module.exports = function(app) {
    var directories = {
      'controllers' => 'public/js/controllers/',
      'views' => 'public/views/',
      'services' => 'public/js/services/',
      'libs' => 'public/js/libs/',
      'directives' = 'public/js/directives/'
    };

    foreach (var dir in directories) {
      app.get(dir + ':file', function(req, res)) {
        res.sendfile(directories[dir] + req.params.file);
      }
    }
}
