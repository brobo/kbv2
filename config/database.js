var mongoose = require('mongoose');

mongoose.connect(config.db.server + ':' + config.db.port + '/' + config.db.name);
