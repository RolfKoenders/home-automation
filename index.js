
var config = require('./config'),
    Virgilio = require('virgilio'),
    virgilio = new Virgilio(config);

// Virgilio modules
virgilio.loadModule$(require('virgilio-http'));
virgilio.http.use$(virgilio.http.bodyParser());

// Utils
virgilio.loadModule$(require('./utils/push'));

// Services
virgilio.loadModule$(require('./services/doorbell'));
