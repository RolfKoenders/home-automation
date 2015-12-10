
var config = require('./config'),
    Virgilio = require('virgilio'),
    virgilio = new Virgilio(config),
    path = require('path'),
    fs = require('fs');

// Virgilio modules
virgilio.loadModule$(require('virgilio-http'));
virgilio.shareRequire$('path', path);
virgilio.http.use$(virgilio.http.bodyParser());

['utils', 'services'].forEach(function loadModules(dirname) {
    var moduleDirectory = path.join(__dirname, dirname);
    var moduleNames = fs.readdirSync(moduleDirectory);
    moduleNames.forEach(function(moduleName) {
        if (moduleName[0] !== '.') {
            var modulePath = path.join(moduleDirectory, moduleName);
            virgilio.loadModule$(require(modulePath));
        }
    });
});
