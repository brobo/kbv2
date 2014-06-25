var Belt = require('../../models/belt');

module.exports = function(app) {

  app.get('/api/belts', function(req, res) {
    Belt.find(function(err, ranks) {
      if (err)
        res.send(err);

      res.json(ranks);
    });
  });

}
