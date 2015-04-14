
var config = require('./config'),
    Virgilio = require('virgilio'),
    virgilio = new Virgilio(config);

// Virgilio modules
virgilio.loadModule$(require('virgilio-http'));
virgilio.http.use$(virgilio.http.bodyParser());

// Services
virgilio.loadModule$(require('./services/doorbell'));
