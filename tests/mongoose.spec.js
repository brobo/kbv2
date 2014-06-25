describe("Mongoose", function() {

  var mongoose = require('mongoose');

  afterEach(function() {
    mongoose.disconnect();
  });

  it("should connect to MongoDB", function(next) {
    var config = require('../config')();
    mongoose.connect(config.db.server + ':' + config.db.port + '/' + config.db.name, function(err, db) {
      expect(err).toBe(undefined);
      next();
    });
  });
});
